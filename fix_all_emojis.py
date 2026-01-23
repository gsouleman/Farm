import sys
import re

# Read the file
with open('c:/Farm/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace ALL emoji characters in button labels with text
# This will catch any remaining emojis in coordinate editor, modals, etc.
patterns = [
    # Delete buttons with trash emoji
    (r'(onclick="[^"]*delete[^"]*"[^>]+>)[^<]*🗑[^<]*(</button>)', r'\1Delete\2'),
    (r'(onclick="[^"]*delete[^"]*"[^>]+>)[^<]*\ud83d\uddd1[^<]*(</button>)', r'\1Delete\2'),
    # Edit buttons with pencil emoji  
    (r'(onclick="[^"]*edit[^"]*"[^>]+>)[^<]*✏[^<]*(</button>)', r'\1Edit\2'),
    (r'(onclick="[^"]*edit[^"]*"[^>]+>)[^<]*\u270f[^<]*(</button>)', r'\1Edit\2'),
    # Save buttons with disk emoji
    (r'(onclick="[^"]*[Ss]ave[^"]*"[^>]+>)[^<]*💾[^<]*(</button>)', r'\1Save Changes\2'),
    (r'(onclick="[^"]*[Ss]ave[^"]*"[^>]+>)[^<]*\ud83d\udcbe[^<]*(</button>)', r'\1Save Changes\2'),
    # Clear/Delete with wastebasket  
    (r'(>)[^<]*🗑[^<]*( Delete</button>)', r'\1\2'),
    # Import with folder
    (r'(>)[^<]*📁[^<]*( Import)', r'\1\2'),
    # Close/X buttons
    (r'(class="btn-close"[^>]*>)[^<]*✕[^<]*(</button>)', r'\1×\2'),
]

for pattern, replacement in patterns:
    content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)

# Write back
with open('c:/Farm/app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed all emoji characters from buttons!")
