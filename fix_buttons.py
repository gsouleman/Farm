import sys
import re

# Read the file
with open('c:/Farm/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the corrupted emoji characters with text
# The emojis appear as '✏️' and '🗑️' but are corrupted in the file
content = re.sub(r'(onclick="app\.editSection[^>]+>)[^<]+(</button>)', r'\1Edit\2', content)
content = re.sub(r'(onclick="app\.deleteSection[^>]+>)[^<]+(</button>)', r'\1Delete\2', content)

# Write back
with open('c:/Farm/app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed button labels!")
