Object.assign(app, {
    // Function to update Land Allocation table from crop allocation sections
    renderLandAllocationTable() {
        const tbody = document.getElementById('landAllocationTable');
        if (!tbody) return;

        const sections = this.getCurrentFarm().sections || [];

        if (sections.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; color: #999;">No allocations yet</td></tr>';
            return;
        }

        tbody.innerHTML = sections.map(section => `
            <tr>
                <td><strong>${section.name}</strong></td>
                <td>${(parseFloat(section.area) || 0).toFixed(2)}</td>
                <td>${(parseFloat(section.percentage) || 0).toFixed(1)}%</td>
            </tr>
        `).join('');
    },

    // Add coordinates to section creation
    createSectionFromDrawing(area, boundaries) {
        // Prompt for section details
        const name = prompt('Enter section name:', `Section ${(this.getCurrentFarm().sections?.length || 0) + 1}`);
        if (!name) {
            this.showError('Section creation cancelled');
            this.drawingMode = false;
            return;
        }

        const typeOptions = ['fruit-trees', 'cash-crops', 'infrastructure', 'fallow-land', 'other'];
        const typeChoice = prompt(`Enter section type:\n1. Fruit Trees\n2. Cash Crops\n3. Infrastructure\n4. Fallow Land\n5. Other\n\nEnter number (1-5):`, '1');
        const type = typeOptions[parseInt(typeChoice) - 1] || 'other';

        const cropType = prompt('Enter crop type (optional):', '');

        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
        const color = colors[(this.getCurrentFarm().sections?.length || 0) % colors.length];

        // Calculate center point for reference coordinates
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
            notes: `Drawn on ${new Date().toLocaleDateString()}\nCenter: ${centerLat.toFixed(6)}, ${centerLng.toFixed(6)}`
        };

        // Add to farm data
        if (!this.getCurrentFarm().sections) {
            this.getCurrentFarm().sections = [];
        }
        this.getCurrentFarm().sections.push(section);

        this.saveData();
        this.renderFarmSectionsTable();
        this.renderGraphicalMap();
        this.renderLandAllocationTable(); // Update land allocation table

        this.showSuccess(`Section "${name}" created!\nArea: ${area.toFixed(4)} hectares\nCenter Coordinates: ${centerLat.toFixed(6)}, ${centerLng.toFixed(6)}`);
    },

    async deleteSection(sectionId) {
        if (!confirm('Are you sure you want to delete this allocation?')) return;

        const sections = this.getCurrentFarm().sections;
        const index = sections.findIndex(s => s.id === sectionId);
        if (index === -1) return;

        try {
            // Optimistic update
            sections.splice(index, 1);
            this.renderGraphicalMap();
            this.renderLandAllocationTable();
            if (this.renderFarmSectionsTable) this.renderFarmSectionsTable();

            // API Call
            await api.sections.delete(sectionId);
            this.showSuccess('Allocation deleted');
        } catch (error) {
            console.error('Delete section error:', error);
            this.showError('Failed to delete section');
            // Reload to revert state
            await this.loadFarmData(this.currentFarmId); // Assuming this function exists or similar
        }
    }
});
