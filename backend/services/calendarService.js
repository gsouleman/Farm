/**
 * AgriCalendar Service
 * Handles planting seasons and risk analysis based on farm characteristics and historical data.
 */

class AgriCalendarService {
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
     * Generate a personalized calendar for a farm
     * @param {Object} farm - Farm object with name and altitude
     * @param {Array} incidents - Historical incidents for the farm
     * @returns {Object} Full calendar summary
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
                const month = new Date(inc.date_detected).getMonth() + 1; // 1-12
                summary.seasonalRisk[month] = (summary.seasonalRisk[month] || 0) + 1;
            }
        });

        // Find highest risk month
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
            recommendation: maxMonth ? `Historical data shows high risk in ${monthNames[maxMonth]}. Consider extra monitoring or insurance for this period.` : "No significant seasonal pattern detected."
        };
    }

    getCerealsLogic(altitude) {
        if (altitude < 1000) {
            return {
                type: "EARLY & LONG",
                season: "March - November",
                optimalIndices: [3, 4, 8, 9],
                optimal: "March 15-30 (Major), August 1-15 (Minor)",
                risks: "Drought in high heat months",
                suitability: "Double cropping possible",
                yieldPotential: "High (warm climate)"
            };
        } else if (altitude <= 1500) {
            return {
                type: "MODERATE",
                season: "April - October",
                optimalIndices: [4, 5],
                optimal: "April 10-25 only",
                risks: "Late season cold; Cold nights affect pollination",
                suitability: "Single, shorter season",
                yieldPotential: "Moderate; choice: Early maturing varieties only"
            };
        } else {
            return {
                type: "SHORT & COOL",
                season: "May - September",
                optimalIndices: [5],
                optimal: "May only",
                risks: "Frost, insufficient heat units",
                suitability: "Single season only",
                yieldPotential: "Lower"
            };
        }
    }

    getTubersLogic(altitude) {
        if (altitude < 1200) {
            return {
                type: "YEAR-ROUND POTENTIAL",
                start: "April rains",
                optimalIndices: [4, 5, 6, 7],
                harvest: "Flexible (9-18 months)",
                risks: "Waterlogging in heavy soils",
                suitability: "Excellent (especially Cassava)"
            };
        } else {
            return {
                type: "LIMITED - COOL SENSITIVE",
                start: "Must plant with rains (Apr-May)",
                optimalIndices: [4, 5],
                harvest: "Extended maturity: +2-3 months",
                risks: "Slow growth, rot in cold; extended maturity (+3 months)",
                suitability: "Moderate; potatoes are excellent here"
            };
        }
    }

    getFruitTreesLogic(altitude) {
        if (altitude < 1000) {
            return {
                type: "OPTIMAL - WARM CLIMATE",
                planting: "Start of rains (Mar-Apr)",
                optimalIndices: [3, 4],
                firstFruit: "2-3 years",
                risks: "Water stress in establishment",
                recommended: "Mango, avocado, citrus",
                avoid: "Temperate fruits (apples, pears)"
            };
        } else if (altitude <= 1400) {
            return {
                type: "GOOD - MODERATE",
                planting: "Apr-May",
                optimalIndices: [4, 5],
                firstFruit: "Slower establishment: +1 year",
                risks: "Frost damage in valleys",
                recommended: "Avocado, plum, peach",
                avoid: "Mango, papaya (won't fruit well)"
            };
        } else {
            return {
                type: "MARGINAL - SELECT SPECIES",
                planting: "April-May",
                optimalIndices: [4, 5],
                firstFruit: "Limited success",
                risks: "Poor fruiting, cold damage",
                recommended: "Avocado, temperate fruits (plum, peach)",
                avoid: "Mango, papaya, citrus"
            };
        }
    }

    getLegumesLogic(altitude) {
        const adjustment = Math.floor((altitude > 0 ? altitude : 0) / 150);
        return {
            type: "DOUBLE CYCLE POSSIBLE",
            major: "Mar-Apr (after cereal)",
            minor: "August (quick cycle)",
            optimalIndices: [3, 4, 8],
            adjustment: `+${adjustment} week(s) due to altitude`,
            specialNotice: "Soybeans need >1000m for good yield"
        };
    }

    generateAlerts(altitude) {
        const alerts = [];
        if (altitude > 1300) {
            alerts.push({
                type: "WARNING",
                message: "High altitude detected: 60% chance of frost before April 10.",
                suggestion: "Delay cereal planting to April 1 or use frost-tolerant varieties."
            });
        }
        if (altitude < 1000) {
            alerts.push({
                type: "NOTICE",
                message: "Lowland area: High heat may cause water stress in July/August.",
                suggestion: "Ensure irrigation plan for minor season nursery."
            });
        }
        return alerts;
    }

    /**
     * Get specific alert for a crop based on altitude and date
     */
    getCropSelectionAlert(cropName, altitude, plantedDate) {
        const normalizedCrop = cropName.toLowerCase();
        let dateAlert = null;

        if (plantedDate) {
            const date = new Date(plantedDate);
            const month = date.getMonth() + 1;

            let categories = [];
            if (normalizedCrop.includes('maize') || normalizedCrop.includes('corn') || normalizedCrop.includes('rice')) categories.push(this.getCerealsLogic(altitude));
            if (normalizedCrop.includes('cassava') || normalizedCrop.includes('yam') || normalizedCrop.includes('potato')) categories.push(this.getTubersLogic(altitude));
            if (normalizedCrop.includes('mango') || normalizedCrop.includes('avocado') || normalizedCrop.includes('citrus')) categories.push(this.getFruitTreesLogic(altitude));
            if (normalizedCrop.includes('bean') || normalizedCrop.includes('soy')) categories.push(this.getLegumesLogic(altitude));

            categories.forEach(cat => {
                if (cat.optimalIndices && !cat.optimalIndices.includes(month)) {
                    dateAlert = {
                        level: 'WARNING',
                        message: `Sub-optimal planting month: ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)}. Historical optimal is ${cat.optimal || cat.start || cat.major}.`
                    };
                }
            });
        }

        if (altitude > 1300) {
            if (normalizedCrop.includes('maize') || normalizedCrop.includes('corn')) {
                return dateAlert || {
                    level: 'WARNING',
                    message: "High altitude - choose early maturing variety (90 days) to avoid cold season end."
                };
            }
            if (normalizedCrop.includes('mango') || normalizedCrop.includes('papaya')) {
                return {
                    level: 'DANGER',
                    message: "Avoid planting this crop here. High altitude cold will prevent fruit sets."
                };
            }
        }

        if (altitude < 1000 && normalizedCrop.includes('apple')) {
            return {
                level: 'DANGER',
                message: "Apples need chill hours not available at this low altitude. Growth likely to be poor."
            };
        }

        return dateAlert;
    }
}

module.exports = new AgriCalendarService();
