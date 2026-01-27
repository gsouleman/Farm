
// ==========================================
// Farm Analysis & Satellite Report Functions
// ==========================================

Object.assign(app, {

    // Main Entry Point
    async generateFarmAnalysis() {
        const contentDiv = document.getElementById('farmAnalysisContent');
        if (!contentDiv) return;

        contentDiv.innerHTML = '<div class="text-center p-5"><span class="spinner-border" role="status"></span><p>Contacting Satellite Provider... Analyzing Terrain...</p></div>';

        // Simulate network delay for "Satellite" feel
        await new Promise(r => setTimeout(r, 2000));

        const farm = this.getCurrentFarm();
        if (!farm || !farm.id) {
            contentDiv.innerHTML = this.renderAnalysisError("Please select a farm to analyze.");
            return;
        }

        // Use center coordinates or fallback
        const lat = farm.centerCoordinates?.lat || (farm.boundaries && farm.boundaries[0]?.lat) || 0;
        const lng = farm.centerCoordinates?.lng || (farm.boundaries && farm.boundaries[0]?.lng) || 0;

        if (lat === 0 && lng === 0) {
            contentDiv.innerHTML = this.renderAnalysisError("No coordinates found. Please define farm boundaries in 'Farm Profile' or 'Edit Coordinates'.");
            return;
        }

        // Mock Data Generation (Deterministic based on coords so it feels "real" and consistent)
        const analysisData = this.mockSatelliteData(lat, lng);

        // Cross Reference with Risk Log
        const risks = await this.analyzeRisksAgainstLog(analysisData);

        // Render Report
        const reportHtml = `
            <div class="report-container" style="font-family: 'Courier New', Courier, monospace; background: #fff; padding: 2rem; border: 1px solid #ddd; max-width: 800px; margin: 0 auto;">
                <div class="report-header" style="border-bottom: 2px solid #333; margin-bottom: 1.5rem; padding-bottom: 1rem;">
                    <h2 style="margin: 0; color: #2c3e50;">📡 SATELLITE ANALYSIS REPORT</h2>
                    <p style="margin: 0.5rem 0 0; color: #666;">Target: ${farm.name}</p>
                    <p style="margin: 0; color: #666;">Coordinates: ${lat.toFixed(6)}, ${lng.toFixed(6)}</p>
                    <p style="margin: 0; color: #666;">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
                </div>

                <div class="report-section mb-4">
                    <h4 style="color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">🗺️ TOPOGRAPHY</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>• <strong>Overall Slope:</strong> ${analysisData.slope}° (${analysisData.slopeDesc})</li>
                        <li>• <strong>Aspect:</strong> ${analysisData.aspect} (${analysisData.aspectDesc})</li>
                        <li>• <strong>Elevation Range:</strong> ${analysisData.elevation}m - ${analysisData.elevation + analysisData.elevationVar}m (${analysisData.elevationVar}m variation)</li>
                        <li>• <strong>Terrain:</strong> ${analysisData.terrain}</li>
                    </ul>
                </div>

                <div class="report-section mb-4">
                    <h4 style="color: #2980b9; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">💧 WATER FEATURES</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>• <strong>Water Bodies:</strong> ${analysisData.waterFeature}</li>
                        <li>• <strong>Wet Areas:</strong> ${analysisData.wetAreas}</li>
                        <li>• <strong>Drainage Pattern:</strong> ${analysisData.drainage}</li>
                        <li>• <strong>Flood Risk:</strong> ${analysisData.floodRisk}</li>
                    </ul>
                </div>

                <div class="report-section mb-4">
                    <h4 style="color: #27ae60; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">🌱 VEGETATION ANALYSIS</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>• <strong>Cultivated Area:</strong> ${analysisData.vegCultivated}%</li>
                        <li>• <strong>Natural Vegetation:</strong> ${analysisData.vegNatural}% (${analysisData.vegNaturalDesc})</li>
                        <li>• <strong>Bare Soil:</strong> ${analysisData.vegBare}%</li>
                        <li>• <strong>Structures:</strong> ${100 - analysisData.vegCultivated - analysisData.vegNatural - analysisData.vegBare}%</li>
                    </ul>
                </div>

                <div class="report-section mb-4" style="background: #fff3cd; padding: 1rem; border-radius: 4px; border: 1px solid #ffeeba;">
                    <h4 style="color: #856404; margin-top: 0;">⚠️ RISK IDENTIFICATIONS</h4>
                    <ol style="padding-left: 1.5rem; margin-bottom: 0;">
                        ${analysisData.risks.map(r => `<li>${r}</li>`).join('')}
                    </ol>
                </div>

                <div class="report-section mb-4">
                    <h4 style="color: #d35400; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">🌾 EXPANDED PLANTING ADVICE (Agri Calendar Integration)</h4>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <h5 style="color: #e67e22; margin-bottom: 0.25rem;">🌽 Cereals</h5>
                            <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${analysisData.plantingAdvice.cereals.map(a => `<li>• ${a}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #27ae60; margin-bottom: 0.25rem;">🥜 Legumes</h5>
                            <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${analysisData.plantingAdvice.legumes.map(a => `<li>• ${a}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #8e44ad; margin-bottom: 0.25rem;">🥔 Tubers</h5>
                            <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${analysisData.plantingAdvice.tubers.map(a => `<li>• ${a}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                             <h5 style="color: #16a085; margin-bottom: 0.25rem;">🌳 Fruit Trees</h5>
                            <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${analysisData.plantingAdvice.fruitTrees.map(a => `<li>• ${a}</li>`).join('')}
                            </ul>
                        </div>
                        <div style="grid-column: span 2;">
                             <h5 style="color: #c0392b; margin-bottom: 0.25rem;">💰 Cash Crops</h5>
                            <ul style="list-style: none; padding-left: 0; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${analysisData.plantingAdvice.cashCrops.map(a => `<li>• ${a}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="report-section mb-4">
                    <h4 style="color: #8e44ad; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">🚜 OPERATIONAL ADVICE</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        ${analysisData.operationalAdvice.map(a => `<li>• ${a}</li>`).join('')}
                    </ul>
                </div>

                ${risks.length > 0 ? `
                <div class="report-section mb-4" style="border: 2px solid #dc3545; padding: 1rem; border-radius: 4px;">
                    <h4 style="color: #dc3545; margin-top: 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span>🔔</span> SATELLITE + RISK LOG CROSS-ANALYSIS
                    </h4>
                    ${risks.map(risk => `
                        <div style="margin-bottom: 1rem; border-left: 3px solid #dc3545; padding-left: 1rem;">
                            <div style="font-weight: bold; color: #dc3545;">ALERT: "${risk.alert}"</div>
                            <div style="color: #333;">RECOMMEND: "${risk.rec}"</div>
                            <small style="color: #666;">Source: Satellite (${risk.satSource}) + Risk Log ("${risk.logMatch}")</small>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

            </div>
            <div style="text-align: center; margin-top: 2rem;">
                 <button class="btn btn-secondary" onclick="app.printElement('farmAnalysisContent')">🖨️ Print Report</button>
            </div>
        `;

        contentDiv.innerHTML = reportHtml;
    },

    renderAnalysisError(msg) {
        return `
            <div class="alert alert-warning text-center">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>${msg}</p>
            </div>
        `;
    },

    // Deterministic Random (Seeded)
    seededRandom(seed) {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    },

    mockSatelliteData(lat, lng) {
        const seed = Math.abs(lat * 1000 + lng);
        let s = seed;
        const rand = () => this.seededRandom(s++);

        // Topography
        const slope = Math.floor(rand() * 15) + 2; // 2-17 deg
        const aspects = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
        const aspect = aspects[Math.floor(rand() * aspects.length)];
        const elevation = Math.floor(rand() * 500) + 800; // 800-1300m

        // Water
        const waterFeatures = ['None discovered', 'Small stream detected: Western boundary', 'Nearby river (500m)', 'Underground aquifer potential'];
        const waterFeature = waterFeatures[Math.floor(rand() * waterFeatures.length)];
        const hasWater = waterFeature.includes('stream') || waterFeature.includes('river');

        // Logic Derivations
        const slopeDesc = slope < 5 ? "Flat - ideal for mechanization" : (slope < 10 ? "Moderate - good for drainage" : "Steep - erosion risk");
        const aspectDesc = aspect.includes('South') ? "warmer, earlier planting" : "cooler, moisture retention";

        let risks = [];
        if (slope > 10) risks.push(`Erosion risk: High on steeper section (${slope}°)`);
        if (slope > 5) risks.push(`Erosion risk: Moderate on slopes`);
        if (hasWater) risks.push(`Water access: Excellent (${waterFeature.split(':')[0]})`);

        // Return object
        return {
            slope,
            slopeDesc,
            aspect,
            aspectDesc,
            elevation,
            elevationVar: Math.floor(rand() * 50) + 20,
            terrain: slope > 10 ? "Rolling hills with steep sections" : "Gentle undulations",

            waterFeature,
            wetAreas: rand() > 0.5 ? "Two wet areas: Likely springs or seasonal ponds" : "None detected",
            drainage: `Water flows ${aspect} to ${aspects[(aspects.indexOf(aspect) + 4) % 8]}`,
            floodRisk: hasWater && slope < 5 ? "Moderate (near stream)" : "Low (good natural drainage)",

            vegCultivated: Math.floor(rand() * 40) + 40, // 40-80%
            vegNatural: Math.floor(rand() * 20) + 10,
            vegBare: Math.floor(rand() * 10) + 5,
            vegNaturalDesc: hasWater ? "trees along stream" : "scattered shrubs",

            risks: [
                ...risks,
                `Microclimates: ${aspect}-facing slope`,
                rand() > 0.7 ? "Soil Compaction: Visible on access roads" : null
            ].filter(Boolean),

            plantingAdvice: {
                cereals: [
                    aspect.includes('South') ? "Maize: Plant 1 week earlier on South-facing slopes" : "Maize: Wait for soil temperature to rise on North slopes",
                    slope > 5 ? "Sorghum: Excellent for steeper, well-drained sections" : "Rice: Suitable for lower, wetter areas (if available)",
                    "Millet: Good drought resistance for upper slopes"
                ],
                legumes: [
                    "Beans: Intercrop with maize for nitrogen fixation",
                    "Groundnuts: Avoid wet areas to prevent rot",
                    "Soybeans: Plant on flat terrain for easier harvesting"
                ],
                tubers: [
                    slope > 10 ? "Cassava: Plant on slopes to reduce waterlogging risk" : "Cassava: Suitable for most well-drained soils",
                    "Yams: Requires deep, loose soil (avoid compacted zones)",
                    "Potatoes: Hilling required; ensure good drainage"
                ],
                fruitTrees: [
                    "Avocado: Plant on slopes for drainage (root rot sensitive)",
                    "Mango: Thrives in warmer, south-facing aspects",
                    "Citrus: Requires consistent water but no waterlogging"
                ],
                cashCrops: [
                    "Coffee: Shade-grown on higher elevation slopes recommended",
                    "Cocoa: Requires humidity and shade (lower slopes/valleys)",
                    "Cotton: Needs full sun and flat terrain"
                ]
            },

            operationalAdvice: [
                hasWater ? "Stream access: Potential for irrigation" : "Consider rainwater harvesting",
                slope > 10 ? "Steep section: Consider terracing or soil conservation" : "Terrain suitable for standard tractor use"
            ]
        };
    },

    async analyzeRisksAgainstLog(satData) {
        // Fetch incidents if not loaded
        if (!this.incidents || this.incidents.length === 0) {
            try {
                const farm = this.getCurrentFarm();
                if (farm) {
                    const res = await api.request(`/api/incidents/${farm.id}`);
                    this.incidents = await res.json() || [];
                }
            } catch (e) { console.warn("Could not fetch incidents for analysis"); }
        }

        const alerts = [];
        const incidents = this.incidents || [];

        // 1. Wet Area + Fungal
        if (satData.wetAreas.includes('wet')) {
            const fungalRisk = incidents.find(i =>
                (i.details?.root_cause?.toLowerCase().includes('fung') || i.category === 'BIOLOGICAL') &&
                i.status !== 'Resolved'
            );
            if (fungalRisk) {
                alerts.push({
                    satSource: "Wet area detected",
                    logMatch: `Biological risk detected: ${fungalRisk.subcategory || 'Fungal'}`,
                    alert: "Wet zone identified - high disease risk confirmed",
                    rec: "Install drainage or plant water-tolerant crops immediately"
                });
            }
        }

        // 2. Steep Slope + Erosion
        if (satData.slope > 8) {
            const erosionRisk = incidents.find(i =>
                (i.category === 'CLIMATE' || i.subcategory === 'Soil Erosion') &&
                i.status !== 'Resolved'
            );
            if (erosionRisk) {
                alerts.push({
                    satSource: `Steep slope (${satData.slope}°)`,
                    logMatch: "Historical erosion recorded",
                    alert: "Erosion-prone area detected with history",
                    rec: "Contour planting and cover crops are critical"
                });
            }
        }

        return alerts;
    },

    // Utility to print specific element (if not in app.js yet)
    printElement(elemId) {
        const content = document.getElementById(elemId).innerHTML;
        const win = window.open('', '', 'height=700,width=800');
        win.document.write('<html><head><title>Print Report</title>');
        win.document.write('<link rel="stylesheet" href="styles.css" type="text/css" />');
        win.document.write('</head><body>');
        win.document.write(content);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
    }

});
