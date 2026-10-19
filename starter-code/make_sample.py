"""WeedScout: create an artificial target image for Sessions 9–10.
Practice image only. Blue paper is NOT a weed or a trained detection model.
Requires: pip install opencv-python numpy
"""
from pathlib import Path
import cv2
import numpy as np

# OpenCV images use BGR (blue, green, red) color order.
image = np.full((480, 640, 3), (60, 130, 65), dtype=np.uint8)
cv2.rectangle(image, (220, 150), (360, 290), (225, 75, 30), -1)
# Ruler: 10 dark ticks and a 100-pixel practice reference.
cv2.line(image, (60, 410), (260, 410), (30, 30, 30), 2)
for x in range(60, 261, 20):
    cv2.line(image, (x, 401), (x, 419), (30, 30, 30), 2)
cv2.putText(image, "Practice marker - not a real weed", (25, 40),
            cv2.FONT_HERSHEY_SIMPLEX, 0.62, (250, 250, 250), 2)
output = Path("sample_target.png")
if not cv2.imwrite(str(output), image):
    raise RuntimeError("Could not write sample_target.png")
print(f"Saved {output.resolve()}")
print("Blue square center for this practice image: x=290, y=220")
