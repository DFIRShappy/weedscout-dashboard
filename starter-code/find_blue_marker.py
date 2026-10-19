"""WeedScout: find the largest blue paper marker in a photograph.
Session 10. This is color detection, NOT trained weed recognition.
Usage: python find_blue_marker.py sample_target.png
"""
import sys
from pathlib import Path
import cv2

if len(sys.argv) != 2:
    sys.exit("Usage: python find_blue_marker.py <image_filename>")
image_path = Path(sys.argv[1])
image = cv2.imread(str(image_path))
if image is None:
    sys.exit(f"Could not open image: {image_path}. Check its name and folder.")
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, (90, 70, 40), (135, 255, 255))
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, (cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))))
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
large = [c for c in contours if cv2.contourArea(c) >= 150]
if not large:
    sys.exit("No blue marker detected. Check lighting and image filename.")
contour = max(large, key=cv2.contourArea)
moments = cv2.moments(contour)
if not moments["m00"]:
    sys.exit("Marker has no measurable area.")
cx = int(moments["m10"] / moments["m00"])
cy = int(moments["m01"] / moments["m00"])
x, y, w, h = cv2.boundingRect(contour)
cv2.rectangle(image, (x, y), (x + w, y + h), (40, 250, 250), 2)
cv2.drawMarker(image, (cx, cy), (0, 0, 255),
               cv2.MARKER_CROSS, 28, 2)
output = Path("marker_result.png")
if not cv2.imwrite(str(output), image):
    raise RuntimeError("Could not write marker_result.png")
print(f"Marker center: X={cx}, Y={cy} pixels")
print(f"Result saved: {output.resolve()}")
print("This finds blue paper by color, NOT a real weed.")
