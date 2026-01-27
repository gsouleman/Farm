/**
 * AgriCalendar Service
 * Handles planting seasons, risk analysis, and harvest scheduling based on farm characteristics.
 */

class AgriCalendarService {
    constructor() {
        // Average duration in months from planting to harvest
        this.cropDurations = {
            // Cereals
            'maize': 4,
            'corn': 4,
            'rice': 5,
            'wheat': 5,
            'sorghum': 4,
            'millet': 3,
            // Tubers
            'cassava': 12,
            'yam': 8,
            'potato': 3,
            'sweet potato': 4,
            // Legumes
            'bean': 3,
            'soybean': 4,
            'soy': 4,
            'groundnut': 4,
            'cowpea': 3,
            // Fruit Trees (Establishment/Growth phase vs Maturity)
            'mango': 48,
            'avocado': 36,
            'citrus': 36,
            'papaya': 9,
            'passion fruit': 12
        };
    }

    /**
     * Get altitude classification
     * @param {number} altitude - Altitude in meters
     * @returns {string} 'Lowland' | 'Midland' | 'Highland'
     */
    getZone(altitude) {
        if (altitude < 1000) return 'Lowland';
        if (altitude <= 1500) return 'Midland';
        return 'Highland';
    }

    /**
     * Calculate expected harvest date
     * @param {string} cropName - Name of the crop
     * @param {string} plantedDate - ISO date string
     * @returns {string|null} ISO date string
     */
    calculateHarvestDate(cropName, plantedDate) {
        if (!plantedDate) return null;
        const normalized = cropName.toLowerCase();
        let durationMonths = 0;

        for (const [key, value] of Object.entries(this.cropDurations)) {
            if (normalized.includes(key)) {
                durationMonths = value;
                break;
            }
        }

        if (durationMonths === 0) return null;

        const date = new Date(plantedDate);
        date.setMonth(date.getMonth() + durationMonths);
        return date.toISOString().split('T')[0];
    }

    /**
     * Generate a personalized calendar for a farm
     */
    getCalendar(farm, incidents = []) {
        const altitude = parseFloat(farm.altitude) || 0;
        const zone = this.getZone(altitude);

        return {
            farmName: farm.name,
            altitude: altitude,
            zone: zone,
            categories: {
                cereals: this.getCerealsLogic(altitude),
                tubers: this.getTubersLogic(altitude),
                fruitTrees: this.getFruitTreesLogic(altitude),
                legumes: this.getLegumesLogic(altitude)
            },
            durations: this.cropDurations,
            alerts: this.generateAlerts(altitude),
            incidentImpact: this.analyzeIncidents(incidents)
        };
    }

    analyzeIncidents(incidents) {
        if (!incidents || incidents.length === 0) return null;

        const summary = {
            total: incidents.length,
            byCategory: {},
            seasonalRisk: {}
        };

        incidents.forEach(inc => {
            summary.byCategory[inc.category] = (summary.byCategory[inc.category] || 0) + 1;

            if (inc.date_detected) {
                const month = new Date(inc.date_detected).getMonth() + 1;
                summary.seasonalRisk[month] = (summary.seasonalRisk[month] || 0) + 1;
            }
        });

        let maxMonth = 0;
        let maxCount = 0;
        Object.entries(summary.seasonalRisk).forEach(([month, count]) => {
            if (count > maxCount) {
                maxCount = count;
                maxMonth = month;
            }
        });

        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return {
            summary: summary,
            topRiskMonth: maxMonth ? monthNames[maxMonth] : null,
            recommendation: maxMonth ? `Historical data shows high risk in ${monthNames[maxMonth]}. Consider extra monitoring.` : "No significant seasonal pattern detected."
        };
    }

    getCerealsLogic(altitude) {
        if (altitude < 1000) {
            return {
                type: "EARLY & LONG",
                campaigns: [
                    { name: "First Campaign", window: "Mar 15 - Apr 15", months: [3, 4], risk: "Early rain irregularity" },
                    { name: "Second Campaign", window: "Aug 01 - Aug 20", months: [8], risk: "Late season drought" }
                ],
                suitability: "Double cropping highly recommended",
                yieldPotential: "High"
            };
        } else if (altitude <= 1500) {
            return {
                type: "MODERATE",
                campaigns: [
                    { name: "Primary Campaign", window: "Apr 01 - Apr 30", months: [4], risk: "Late frost/cold" },
                    { name: "Second Campaign", window: "Jul 15 - Jul 30", months: [7], risk: "Limited heat units" }
                ],
                suitability: "Second campaign possible with early-maturing varieties",
                yieldPotential: "Moderate"
            };
        } else {
            return {
                type: "SHORT & COOL",
                campaigns: [
                    { name: "Only Campaign", window: "May 01 - May 20", months: [5], risk: "Severe frost risk" }
                ],
                suitability: "Single campaign only (May start)",
                yieldPotential: "Lower (Cool climate)"
            };
        }
    }

    getTubersLogic(altitude) {
        if (altitude < 1200) {
            return {
                type: "YEAR-ROUND",
                campaigns: [
                    { name: "Main Campaign", window: "Mar - May", months: [3, 4, 5], risk: "Heavy rains" },
                    { name: "Off-Season", window: "Oct - Nov", months: [10, 11], risk: "Needs irrigation" }
                ],
                suitability: "Excellent for year-round rotation"
            };
        } else {
            return {
                type: "ALTITUDE SENSITIVE",
                campaigns: [
                    { name: "Main Campaign", window: "Apr - May", months: [4, 5], risk: "Cold rot" }
                ],
                suitability: "Potatoes thrive; Cassava limited"
            };
        }
    }

    getFruitTreesLogic(altitude) {
        return {
            type: altitude < 1200 ? "OPTIMAL" : "RESTRICTED",
            campaigns: [
                { name: "Planting Window", window: "Mar - May", months: [3, 4, 5], risk: "Establishment stress" }
            ],
            suitability: altitude < 1200 ? "Warm species (Mango, Papaya) ideal" : "Cool species (Avocado, Plum) only"
        };
    }

    getLegumesLogic(altitude) {
        return {
            type: "FLEXIBLE ROTATION",
            campaigns: [
                { name: "First Campaign", window: "Mar - Apr", months: [3, 4], risk: "Pests" },
                { name: "Second Campaign", window: "Aug - Sep", months: [8, 9], risk: "Mildew" }
            ],
            suitability: "Excellent for soil nitrogen fixing"
        };
    }

    generateAlerts(altitude) {
        const alerts = [];
        if (altitude > 1300) {
            alerts.push({ type: "WARNING", message: "60% frost risk before April 10." });
        }
        if (altitude < 1000) {
            alerts.push({ type: "NOTICE", message: "Potential heat stress in July/Aug." });
        }
        return alerts;
    }

    /**
     * Get Smart Alert for crop selection
     */
    getCropSelectionAlert(cropName, altitude, plantedDate, hasContingency = false) {
        const normalizedCrop = cropName.toLowerCase();
        const date = plantedDate ? new Date(plantedDate) : new Date();
        const month = date.getMonth() + 1;

        // 1. Check Duration and Harvest
        const harvestDate = this.calculateHarvestDate(cropName, plantedDate);
        const duration = this.cropDurations[normalizedCrop] || null;

        // 2. Identify Category Logic
        let catLogic = null;
        if (normalizedCrop.includes('maize') || normalizedCrop.includes('corn') || normalizedCrop.includes('rice')) catLogic = this.getCerealsLogic(altitude);
        else if (normalizedCrop.includes('cassava') || normalizedCrop.includes('yam') || normalizedCrop.includes('potato')) catLogic = this.getTubersLogic(altitude);
        else if (normalizedCrop.includes('mango') || normalizedCrop.includes('avocado') || normalizedCrop.includes('citrus')) catLogic = this.getFruitTreesLogic(altitude);
        else if (normalizedCrop.includes('bean') || normalizedCrop.includes('soy')) catLogic = this.getLegumesLogic(altitude);

        if (!catLogic) {
            return { level: 'GREEN', message: "General planting season.", harvestDate };
        }

        // 3. Campaign Analysis
        const campaigns = catLogic.campaigns || [];
        const isFirst = campaigns[0] && campaigns[0].months.includes(month);
        const isSecond = campaigns[1] && campaigns[1].months.includes(month);

        if (isFirst) {
            return {
                level: 'GREEN',
                message: `Optimal: First Campaign window (${campaigns[0].window}). Low risk.`,
                harvestDate
            };
        }

        if (isSecond) {
            return {
                level: 'YELLOW',
                message: `Possible: Second Campaign window (${campaigns[1].window}). Risk: ${campaigns[1].risk}.`,
                harvestDate
            };
        }

        // 4. Out of Season (Red)
        if (hasContingency) {
            return {
                level: 'YELLOW',
                message: `Out of season, but validated by irrigation/contingency plan. Proceed with care.`,
                harvestDate
            };
        }

        return {
            level: 'RED',
            message: `NOT SEASON: Planting now is high risk (${catLogic.type}). Seasonal window is ${campaigns.map(c => c.window).join(' or ')}.`,
            harvestDate
        };
    }
}

module.exports = new AgriCalendarService();
