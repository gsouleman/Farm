import re

# Read the HTML file
with open(r'C:\Farm\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the pattern to find (the current header section)
old_pattern = r'(<h3 class="card-title">🗺️ Farm Boundary Map</h3>\s+<div style="display: flex; gap: 0\.5rem;">)'

# Define the replacement (with toggle buttons added)
new_content = r'''\1
                <button class="btn btn-secondary btn-sm" onclick="app.toggleMapView('satellite')" id="satelliteViewBtn">
                  🛰️ Satellite View
                </button>
                <button class="btn btn-outline btn-sm" onclick="app.toggleMapView('graphical')" id="graphicalViewBtn">
                  📊 Graphical View
                </button>
                <div style="border-left: 1px solid #ccc; height: 24px;"></div>
                '''

# Perform the replacement
updated_content = re.sub(old_pattern, new_content, content, count=1)

# Write back to the file
with open(r'C:\Farm\index.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("✅ Toggle buttons added successfully!")
