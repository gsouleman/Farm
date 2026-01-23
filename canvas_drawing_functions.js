// Canvas Drawing Implementation for Crop Allocation
// This code adds interactive polygon drawing on the canvas with automatic area calculation

// Add properties to track drawing state
drawingMode: false,
    currentDrawing: [],
        tempCanvas: null,

            // Initialize canvas drawing
            initializeCanvasDrawing() {
    const canvas = document.getElementById('farmMapCanvas');
    if (!canvas) return;

    // Add click event listener for drawing
    canvas.addEventListener('click', (e) => {
        if (!this.drawingMode) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Add point to current drawing
        this.currentDrawing.push({ x, y });

        // Redraw canvas with current points
        this.renderGraphicalMapWithDrawing();
    });

    // Add double-click to finish drawing
    canvas.addEventListener('dblclick', (e) => {
        if (!this.drawingMode || this.currentDrawing.length < 3) return;

        e.preventDefault();
        this.finishDrawing();
    });

    // Add right-click to cancel drawing
    canvas.addEventListener('contextmenu', (e) => {
        if (!this.drawingMode) return;

        e.preventDefault();
        this.cancelDrawing();
    });
},

// Toggle drawing mode - UPDATED
toggleDrawingMode() {
    this.drawingMode = !this.drawingMode;
    const btn = document.getElementById('drawSectionBtn');

    if (this.drawingMode) {
        btn.textContent = '🛑 Cancel Drawing';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-danger');
        this.currentDrawing = [];

        // Switch to graphical view
        this.toggleMapView('graphical');

        alert('Click points on the map to draw your crop section. Double-click to finish, right-click to cancel.');
    } else {
        btn.textContent = '📐 Crop Allocation';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-primary');
        this.currentDrawing = [];
        this.renderGraphicalMap();
    }
},

// Render map with current drawing
renderGraphicalMapWithDrawing() {
    this.renderGraphicalMap(); // Draw base map

    if (this.currentDrawing.length === 0) return;

    const canvas = document.getElementById('farmMapCanvas');
    const ctx = canvas.getContext('2d');

    // Draw current points and lines
    ctx.strokeStyle = '#ff0000';
    ctx.fillStyle = '#ff000033';
    ctx.lineWidth = 3;

    ctx.beginPath();
    this.currentDrawing.forEach((point, i) => {
        if (i === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }

        // Draw point markers
        ctx.save();
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    });

    // Close the polygon visually if we have enough points
    if (this.currentDrawing.length > 2) {
        ctx.lineTo(this.currentDrawing[0].x, this.currentDrawing[0].y);
        ctx.closePath();
        ctx.fill();
    }

    ctx.stroke();

    // Show area preview
    if (this.currentDrawing.length > 2) {
        const area = this.calculateDrawnArea();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Area: ${area.toFixed(4)} ha`, canvas.width / 2, 60);
    }
},

// Calculate area from canvas coordinates
calculateDrawnArea() {
    if (this.currentDrawing.length < 3) return 0;

    const canvas = document.getElementById('farmMapCanvas');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 60;

    // Get farm boundaries for scaling
    if (!this.farmData.boundaries || this.farmData.boundaries.length === 0) return 0;

    const lats = this.farmData.boundaries.map(b => b.lat);
    const lngs = this.farmData.boundaries.map(b => b.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const mapWidth = width - 2 * padding;
    const mapHeight = height - 2 * padding;

    // Reverse scale functions - convert canvas coords to lat/lng
    const toLatLng = (x, y) => {
        const lng = minLng + ((x - padding) / mapWidth) * (maxLng - minLng);
        const lat = maxLat - ((y - padding) / mapHeight) * (maxLat - minLat);
        return { lat, lng };
    };

    // Convert canvas points to lat/lng
    const coordinates = this.currentDrawing.map(p => toLatLng(p.x, p.y));

    // Calculate area using shoelace formula (in hectares)
    // Using approximation: 1 degree ≈ 111km at equator
    const R = 6371000; // Earth radius in meters
    const avgLat = coordinates.reduce((sum, c) => sum + c.lat, 0) / coordinates.length;
    const latInRadians = avgLat * Math.PI / 180;
    const mPerDegreeLat = 111320; // meters per degree latitude
    const mPerDegreeLng = 111320 * Math.cos(latInRadians); // meters per degree longitude

    let area = 0;
    for (let i = 0; i < coordinates.length; i++) {
        const j = (i + 1) % coordinates.length;
        const xi = coordinates[i].lng * mPerDegreeLng;
        const yi = coordinates[i].lat * mPerDegreeLat;
        const xj = coordinates[j].lng * mPerDegreeLng;
        const yj = coordinates[j].lat * mPerDegreeLat;
        area += (xi * yj - xj * yi);
    }

    area = Math.abs(area) / 2;
    return area / 10000; // Convert square meters to hectares
},

// Finish drawing and open section modal with calculated area
finishDrawing() {
    if (this.currentDrawing.length < 3) {
        alert('Please draw at least 3 points to create a section');
        return;
    }

    const calculatedArea = this.calculateDrawnArea();

    // Store the drawn coordinates
    this.drawnCoordinates = this.pixelsToLatLng(this.currentDrawing);

    // Turn off drawing mode
    this.drawingMode = false;
    const btn = document.getElementById('drawSectionBtn');
    btn.textContent = '📐 Crop Allocation';
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');

    // Open modal with pre-filled area
    this.openSectionModalWithArea(calculatedArea, this.drawnCoordinates);
},

// Convert pixels to lat/lng coordinates
pixelsToLatLng(pixels) {
    const canvas = document.getElementById('farmMapCanvas');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 60;

    if (!this.farmData.boundaries || this.farmData.boundaries.length === 0) return [];

    const lats = this.farmData.boundaries.map(b => b.lat);
    const lngs = this.farmData.boundaries.map(b => b.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const mapWidth = width - 2 * padding;
    const mapHeight = height - 2 * padding;

    return pixels.map(p => {
        const lng = minLng + ((p.x - padding) / mapWidth) * (maxLng - minLng);
        const lat = maxLat - ((p.y - padding) / mapHeight) * (maxLat - minLat);
        return { lat, lng };
    });
},

// Open section modal with area pre-filled
openSectionModalWithArea(area, boundaries) {
    const modal = document.getElementById('sectionModal');
    if (!modal) {
        // Create modal if it doesn't exist
        this.createSectionModal();
    }

    // Clear and pre-fill form
    const form = document.getElementById('sectionForm');
    form.reset();
    document.getElementById('sectionArea').value = area.toFixed(4);
    document.getElementById('sectionArea').readOnly = true; // Make area read-only since it's calculated

    // Store boundaries for when user saves
    this.pendingSectionBoundaries = boundaries;

    modal.classList.add('active');
},

// Cancel drawing
cancelDrawing() {
    this.drawingMode = false;
    this.currentDrawing = [];
    const btn = document.getElementById('drawSectionBtn');
    btn.textContent = '📐 Crop Allocation';
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');
    this.renderGraphicalMap();
},
