"""WeedScout Session 14: simulated cautious-targeting decision.
NEVER connect this demo to a real motor or tool.
"""
MIN_CONFIDENCE = 0.85

# (name, confidence, confirmed_again, near_protected_grass)
examples = [
    ("clear blue target", 0.97, True, False),
    ("uncertain target", 0.62, True, False),
    ("second view disagrees", 0.96, False, False),
    ("protected grass nearby", 0.99, True, True),
    ("just above threshold", 0.87, True, False),
    ("borderline confidence", 0.84, True, False),
]

def decide(confidence, confirmed_again, near_protected_grass):
    """Return a label, never an instruction to operate hardware."""
    reliable = confidence >= MIN_CONFIDENCE and confirmed_again
    safe_area = not near_protected_grass
    return "TARGET" if reliable and safe_area else "SKIP"

for name, confidence, confirmed, grass_nearby in examples:
    answer = decide(confidence, confirmed, grass_nearby)
    print(f"{name:25s} confidence={confidence:.2f} -> {answer}")
print("TARGET is an on-screen simulation only. No tool is attached.")
