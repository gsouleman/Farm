Object.assign(app, {
    // Function to update Land Allocation table from crop allocation sections
    renderLandAllocationTable() {
        const tbody = document.getElementById('landAllocationBody');
        if (!tbody) return;

        const sections = this.getCurrentFarm()?.sections || [];

        if (sections.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #999;">No allocations yet</td></tr>';
            return;
        }

        tbody.innerHTML = sections.map(section => {
            const { income, expenses, netCashFlow } = this.calculateMetrics(section.id);
            return `
                <tr>
                    <td><strong>${section.name}</strong></td>
                    <td>${(parseFloat(section.area) || 0).toFixed(2)}</td>
                    <td>${(parseFloat(section.percentage) || 0).toFixed(1)}%</td>
                    <td class="text-success">${this.formatCurrency(income)}</td>
                    <td class="text-danger">${this.formatCurrency(expenses)}</td>
                    <td style="font-weight: bold; color: ${netCashFlow >= 0 ? 'var(--color-primary)' : 'var(--color-accent)'};">
                        ${this.formatCurrency(netCashFlow)}
                    </td>
                </tr>
            `;
        }).join('');
    },

    // Entry point from drawing tool
    createSectionFromDrawing(area, boundaries) {
        // Instead of prompts, open a modal
        this.createSectionModal(area, boundaries);
    },

    // New Modal Logic
    async createSectionModal(area, boundaries) {
        // Remove existing modal if any
        const existingModal = document.querySelector('.modal.active');
        if (existingModal) existingModal.remove();

        const farm = this.getCurrentFarm();
        const nextNum = (farm.sections?.length || 0) + 1;

        // Fetch crop types for the dropdowns
        let cropTypes = [];
        try {
            cropTypes = await api.cropTypes.getAll();
        } catch (e) {
            console.error('Failed to fetch crop types', e);
        }

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.id = 'createSectionModal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="document.getElementById('createSectionModal').remove()"></div>
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h3 class="modal-title">🌱 Add New Section</h3>
                    <button class="btn-close" onclick="document.getElementById('createSectionModal').remove()">✕</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Section Name</label>
                        <input type="text" class="form-control" id="newSectionName" value="Section ${nextNum}" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Section Type</label>
                        <select class="form-select" id="newSectionType" onchange="app.handleSectionTypeChange()">
                            <option value="fruit-trees">Fruit Trees</option>
                            <option value="cash-crops">Cash Crops</option>
                            <option value="infrastructure">Infrastructure</option>
                            <option value="fallow-land">Fallow Land</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <!-- Dynamic Crop Type Field -->
                    <div class="form-group" id="cropTypeContainer">
                        <label class="form-label">Crop Type</label>
                        <div id="cropTypeInputWrapper">
                            <!-- Injected by JS -->
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Area (hectares)</label>
                        <input type="number" class="form-control" value="${area.toFixed(4)}" disabled>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline" onclick="document.getElementById('createSectionModal').remove()">Cancel</button>
                    <button class="btn btn-primary" onclick="app.saveSectionFromModal()">Save Section</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Store temp data for the save function
        this._tempSectionData = { area, boundaries, cropTypes };

        // Initialize the dropdown state
        this.handleSectionTypeChange();
    },

    handleSectionTypeChange() {
        const typeStart = document.getElementById('newSectionType').value;
        const wrapper = document.getElementById('cropTypeInputWrapper');
        const container = document.getElementById('cropTypeContainer');
        const { cropTypes } = this._tempSectionData || { cropTypes: [] };

        if (typeStart === 'fruit-trees' || typeStart === 'cash-crops') {
            container.style.display = 'block';
            const category = typeStart === 'fruit-trees' ? 'fruit' : 'cash';
            const filtered = cropTypes.filter(c => c.category === category);

            if (filtered.length > 0) {
                // Show dropdown
                let html = `<select class="form-select" id="newSectionCropType">`;
                html += `<option value="">-- Select Crop --</option>`;
                filtered.forEach(c => {
                    html += `<option value="${c.name}">${c.name}</option>`;
                });
                html += `</select>`;
                wrapper.innerHTML = html;
            } else {
                // Fallback if no types found in DB
                wrapper.innerHTML = `<input type="text" class="form-control" id="newSectionCropType" placeholder="Enter crop name">`;
            }
        } else {
            // For other types, user can optionally enter details or leave blank
            // Based on requirement: "If Section type is not Fruit trees nor Cash Crops the Crop type field does not change"
            // Interpreted as: keep it as a text field or hide it? 
            // The prompt says: "User as free to enter or not to enter details"

            // Let's show a text input but make it optional
            container.style.display = 'block';
            wrapper.innerHTML = `<input type="text" class="form-control" id="newSectionCropType" placeholder="Optional details">`;
        }
    },

    saveSectionFromModal() {
        const name = document.getElementById('newSectionName').value;
        const type = document.getElementById('newSectionType').value;
        const cropInput = document.getElementById('newSectionCropType');
        const cropType = cropInput ? cropInput.value : '';

        if (!name) {
            alert('Please enter a section name');
            return;
        }

        const { area, boundaries } = this._tempSectionData;
        const farm = this.getCurrentFarm();

        // Generate color based on index
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
        const color = colors[(farm.sections?.length || 0) % colors.length];

        // Calculate center
        const centerLat = boundaries.reduce((sum, c) => sum + c.lat, 0) / boundaries.length;
        const centerLng = boundaries.reduce((sum, c) => sum + c.lng, 0) / boundaries.length;

        const section = {
            id: 'section-' + Date.now(),
            name: name,
            type: type,
            cropType: cropType || null,
            boundaries: boundaries,
            centerCoordinates: { lat: centerLat, lng: centerLng },
            area: area,
            percentage: (area / (this.farmData.area || 1)) * 100,
            color: color,
            notes: `Drawn on ${new Date().toLocaleDateString()}`
        };

        if (!farm.sections) {
            farm.sections = [];
        }
        farm.sections.push(section);

        this.saveData();
        this.renderFarmSectionsTable();
        this.renderGraphicalMap();
        this.renderLandAllocationTable();

        document.getElementById('createSectionModal').remove();
        this.showSuccess(`Section "${name}" created!`);
        this.drawingMode = false;
    },

    async deleteSection(sectionId) {
        if (!confirm('Are you sure you want to delete this allocation?')) return;

        const sections = this.getCurrentFarm().sections;
        const index = sections.findIndex(s => s.id === sectionId);
        if (index === -1) return;

        try {
            sections.splice(index, 1);
            this.renderGraphicalMap();
            this.renderLandAllocationTable();
            if (this.renderFarmSectionsTable) this.renderFarmSectionsTable();

            await api.sections.delete(sectionId);
            this.showSuccess('Allocation deleted');
        } catch (error) {
            console.error('Delete section error:', error);
            this.showError('Failed to delete section');
            // Reload to revert state is a bit heavy, just warning for now
        }
    },

    // --- AUTO ALLOCATION FEATURE ---
    async autoAllocateSections() {
        if (!confirm('This will automatically generate sections for your farm based on topography and best practices. Continue?')) {
            return;
        }

        const farm = this.getCurrentFarm();
        if (!farm || !farm.boundaries || farm.boundaries.length < 3) {
            this.showError('Farm boundaries not defined properly.');
            return;
        }

        const totalArea = farm.area || 10; // Default if missing

        // Define allocation requirements (simulated logic)
        // 1. Farm House: ~0.5% - 2% depending on size
        // 2. Residential: ~5%
        // 3. Poultry: ~2%
        // 4. Fruit Trees: ~40%
        // 5. Cash Crops: ~40%

        // 5. Cash Crops: ~40%

        // Check for Analysis Data to optimize allocation
        let slopeMod = 0;
        let waterMod = false;
        let analysisNote = "Standard Best Practices";

        try {
            const savedAnalysis = await api.analysis.get(farm.id).catch(err => {
                return null;
            });

            if (savedAnalysis && savedAnalysis.data) {
                if (savedAnalysis && savedAnalysis.data) {
                    const data = savedAnalysis.data;

                    if (data.slope > 10) {
                        slopeMod = 0.15; // Shift 15% to trees
                        analysisNote = `Steep Slope (${data.slope}°) - Optimized for Soil Conservation`;
                    }

                    if (data.waterFeature && (data.waterFeature.includes('stream') || data.waterFeature.includes('river'))) {
                        waterMod = true;
                        analysisNote += " + Water Buffer Zone";
                    }
                } else {
                }
            } catch (e) {
                console.error("Analysis fetch error", e);
            }

            this.showNotification(`Allocating sections based on: ${analysisNote}`, 'info');

            let allocations = [
                { name: 'Farm House Area', type: 'infrastructure', percent: 0.02, color: '#A9A9A9' }, // Grey
                { name: 'Residential Area', type: 'infrastructure', percent: 0.05, color: '#778899' }, // SlateGrey
                { name: 'Poultry House', type: 'infrastructure', percent: 0.03, color: '#F0E68C' },   // Khaki
                { name: 'Fruit Trees Zone', type: 'fruit-trees', percent: 0.45 + slopeMod, color: '#90EE90' },  // LightGreen
                { name: 'Cash Crops Zone', type: 'cash-crops', percent: 0.45 - slopeMod, color: '#FFD700' }     // Gold
            ];

            if (waterMod) {
                // Add a buffer zone for water protection
                allocations.unshift({ name: 'Riparian Buffer Zone', type: 'fallow-land', percent: 0.05, color: '#00CED1' });
                // Reduce others slightly to compensate
                allocations.forEach((a, i) => { if (i > 0) a.percent *= 0.95; });
            }

            // Fetch crop types to assign specific crops
            let fruitCrops = [];
            let cashCrops = [];
            try {
                const allTypes = await api.cropTypes.getAll();
                fruitCrops = allTypes.filter(t => t.category === 'fruit');
                cashCrops = allTypes.filter(t => t.category === 'cash');
            } catch (e) {
                console.warn('Could not fetch crop types for auto-allocation', e);
            }

            // Merge with defaults if available (fallback for empty DB)
            if (app.defaultCropTypes) {
                const defaultFruits = (app.defaultCropTypes.fruit || []).map(name => ({ name, category: 'fruit' }));
                const defaultCash = (app.defaultCropTypes.cash || []).map(name => ({ name, category: 'cash' }));

                // Add if not already present
                defaultFruits.forEach(d => {
                    if (!fruitCrops.some(c => c.name.toLowerCase() === d.name.toLowerCase())) fruitCrops.push(d);
                });
                defaultCash.forEach(d => {
                    if (!cashCrops.some(c => c.name.toLowerCase() === d.name.toLowerCase())) cashCrops.push(d);
                });
            }

            // Mock Logic: We cannot do real GIS polygon slicing in client-side JS easily without complex libraries.
            // We will create "Virtual" sections that don't have perfect boundaries but have correct areas.
            // For visualization complexity, we will just assign the EXISTING generic boundaires to the whole farm 
            // OR we can't really draw them without overlapping.

            // SIMPLIFICATION: We will create the sections data-wise. 
            // For the map, we will just use the farm center with slight offsets to show markers/circles if possible,
            // or just add them to the list. 
            // Since the user asked to allocate "within coordinates boundaries", we really need geometry.
            // Assuming Turf.js is loaded (saw it in index.html).

            if (typeof turf === 'undefined') {
                this.showError('GIS library not loaded. Cannot perform auto-allocation.');
                return;
            }

            const farmPolygon = turf.polygon([farm.boundaries.map(pt => [pt.lng, pt.lat]).concat([[farm.boundaries[0].lng, farm.boundaries[0].lat]])]);
            const bbox = turf.bbox(farmPolygon); // [minX, minY, maxX, maxY]

            // Clear existing sections? Maybe not, just append.
            if (!farm.sections) farm.sections = [];

            // Simple Grid / Strip algorithm
            // Dividing the bbox into strips?
            // Let's try to just create varied circles/boxes inside for simplicity of demo.

            // Actually, let's just make "strips" based on latitude.
            // Sort of simplistic but visible.
            const minLat = bbox[1];
            const maxLat = bbox[3];
            const height = maxLat - minLat;

            let currentY = minLat;

            for (const alloc of allocations) {
                // Calculate target area
                const sectionArea = totalArea * alloc.percent;

                // Rough height of strip (ratio of area)
                // This is a gross approximation assuming rectangular farm.
                const stripHeight = height * alloc.percent;

                // Create a strip polygon roughly
                // We will intersect this strip with the farm polygon to get the actual shape
                const stripPoly = turf.polygon([[
                    [bbox[0] - 0.1, currentY],
                    [bbox[2] + 0.1, currentY],
                    [bbox[2] + 0.1, currentY + stripHeight],
                    [bbox[0] - 0.1, currentY + stripHeight],
                    [bbox[0] - 0.1, currentY]
                ]]);


                // ---------------------------------------------------------
                // SMART ALLOCATION: Parse planting advice
                // ---------------------------------------------------------
                let recommendedFruit = null;
                let recommendedCash = null;

                if (savedAnalysis && savedAnalysis.data && savedAnalysis.data.plantingAdvice) {
                    const advice = savedAnalysis.data.plantingAdvice;

                    // Helper to extract first mentioned crop that exists in our DB
                    const findBestCrop = (adviceList, availableCrops) => {
                        if (!adviceList || !availableCrops) return null;

                        for (const tip of adviceList) {
                            try {
                                const match = tip.match(/^([^:]+):/);
                                if (match) {
                                    const cropName = match[1].trim();
                                    const found = availableCrops.find(c => c.name.toLowerCase().includes(cropName.toLowerCase()));
                                    if (found) {
                                        return found.name;
                                    }
                                }
                            } catch (e) { console.error("Error parsing tip:", tip, e); }
                        }
                        return null;
                    };

                    recommendedFruit = findBestCrop(advice.fruitTrees, fruitCrops);
                    recommendedCash = findBestCrop(advice.cashCrops, cashCrops);

                    if (recommendedFruit) analysisNote += ` | Prioritizing ${recommendedFruit}`;
                    if (recommendedCash) analysisNote += ` | Prioritizing ${recommendedCash}`;
                }
                // ---------------------------------------------------------

                try {
                    const intersection = turf.intersect(farmPolygon, stripPoly);
                    if (intersection) {
                        // Convert back to our lat/lng format
                        // Turf uses [lng, lat]
                        const coords = intersection.geometry.coordinates[0].map(p => ({ lat: p[1], lng: p[0] }));

                        // Assign specific crop if available
                        let specificCrop = null;

                        if (alloc.type === 'fruit-trees') {
                            // Priority 1: Recommendation from Analysis
                            // Priority 2: First available in DB
                            specificCrop = recommendedFruit || (fruitCrops.length > 0 ? fruitCrops[0].name : null);
                        }

                        if (alloc.type === 'cash-crops') {
                            specificCrop = recommendedCash || (cashCrops.length > 0 ? cashCrops[0].name : null);
                        }

                        // Calc center
                        const center = turf.centerOfMass(intersection);

                        farm.sections.push({
                            id: 'auto-' + Date.now() + Math.random(),
                            name: alloc.name + (specificCrop ? ` (${specificCrop})` : ''),
                            type: alloc.type,
                            cropType: specificCrop,
                            boundaries: coords.slice(0, -1), // Remove closing duplicate if any
                            centerCoordinates: { lat: center.geometry.coordinates[1], lng: center.geometry.coordinates[0] },
                            area: sectionArea, // Approx
                            percentage: alloc.percent * 100,
                            color: alloc.color,
                            notes: `Auto-allocated based on topography. ${specificCrop ? 'Selected ' + specificCrop + ' based on analysis advice.' : ''}`
                        });
                    }
                } catch (err) {
                    console.error('Error calculating geometry for ' + alloc.name, err);
                }

                currentY += stripHeight;
            }

            this.saveData();
            this.renderFarmSectionsTable();
            this.renderGraphicalMap();
            this.renderLandAllocationTable();
            this.showSuccess('Auto-allocation complete! Sections have been generated based on optimal layout.');
        }
});
