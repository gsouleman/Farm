// ===================================
// ===================================
// Multi-Language Support
// ===================================
const translations = {
    en: {
        // Navigation
        nav: {
            dashboard: "Dashboard",
            farmInfo: "Farm Info",
            financial: "Financial",
            crops: "Crops",
            reports: "Reports"
        },
        // Farm Info
        farmInfo: {
            title: "Farm Overview",
            locationSpecs: "Location & Specifications",
            location: "Location",
            province: "Province",
            city: "City",
            totalArea: "Total Area",
            farmMap: "Farm Map",
            satelliteView: "Satellite View",
            graphicalView: "Graphical View",
            editCoordinates: "Edit Coordinates",
            upload: "Upload",
            cropAllocation: "Crop Allocation",
            loadingMap: "Loading Map..."
        },
        // Coordinate Editor
        coordEditor: {
            title: "Edit Farm Boundary Coordinates",
            instruction: "Enter coordinates for the farm plot boundaries. At least 3 points are required to form a polygon.",
            addNewPoint: "Add New Point",
            latitude: "Latitude",
            longitude: "Longitude",
            latRange: "(-90 to 90)",
            lngRange: "(-180 to 180)",
            addPoint: "Add Point",
            bulkImport: "Bulk Import Coordinates",
            bulkInstructions: "Paste multiple coordinates (one per line). Supported formats:",
            formatExample1: "lat,lng",
            formatExample2: "lat lng",
            formatExample3: "lat, lng",
            exampleTitle: "Example:",
            placeholder: "Paste coordinates here (one per line)\nExample:\n5.916982,11.043742\n5.916911,11.043793\n5.916782,11.043831",
            importCoords: "Import Coordinates",
            clear: "Clear",
            clearAll: "Clear All",
            currentPoints: "Current Boundary Points",
            tableHeader: {
                index: "#",
                latitude: "LATITUDE",
                longitude: "LONGITUDE",
                actions: "ACTIONS"
            },
            delete: "Delete",
            noCoordinates: "No coordinates defined",
            validationReady: "Ready to save",
            validationMin: "At least 3 points required",
            cancel: "Cancel",
            saveChanges: "Save Changes",
            // Messages
            errorEmpty: "Please paste coordinates in the textarea",
            errorInvalidFormat: "Invalid format",
            errorInvalidNumbers: "Invalid numbers",
            errorLatRange: "Latitude must be between -90 and 90",
            errorLngRange: "Longitude must be between -180 and 180",
            successImport: "Imported",
            coordinate: "coordinate",
            coordinates: "coordinates",
            skipped: "Skipped",
            invalidLine: "invalid line",
            invalidLines: "invalid lines",
            andMore: "and",
            more: "more",
            noValidCoords: "No valid coordinates found. Please check your format.",
            confirmDelete: "Delete coordinate point",
            confirmClearAll: "Are you sure you want to delete all",
            cannotUndo: "This action cannot be undone until you close the modal without saving.",
            noCoordsToClear: "No coordinates to clear.",
            savedSuccess: "Coordinates saved successfully!",
            boundaryPoints: "Boundary points:",
            newCenter: "New center:",
            errorLatLng: "Please enter valid numeric values for both latitude and longitude",
            errorMinPoints: "At least 3 coordinate points are required to form a polygon."
        },
        // Dashboard
        dashboard: {
            title: "Farm Overview Dashboard",
            totalRevenue: "Total Revenue",
            totalExpenses: "Total Expenses",
            netCashFlow: "Net Cash Flow",
            trend: "Trend",
            positive: "Positive",
            negative: "Negative",
            recentTransactions: "Recent Transactions",
            date: "Date",
            description: "Description",
            category: "Category",
            amount: "Amount",
            noTransactions: "No transactions recorded yet",
            viewAll: "View All"
        },
        // Financial
        financial: {
            title: "Financial Management",
            addTransaction: "Add New Transaction",
            transactionType: "Transaction Type",
            income: "Income",
            expense: "Expense",
            description: "Description",
            category: "Category",
            amount: "Amount",
            date: "Date",
            selectType: "Select type first...",
            selectCategory: "Select category...",
            descriptionPlaceholder: "Enter transaction description",
            amountPlaceholder: "Enter amount",
            addButton: "Add Transaction",
            transactionHistory: "Transaction History",
            type: "Type",
            actions: "Actions",
            edit: "Edit",
            delete: "Delete",
            noTransactions: "No transactions recorded",
            deleteConfirm: "Are you sure you want to delete this transaction?",
            // Categories
            cropSales: "Crop Sales",
            livestockSales: "Livestock Sales",
            government: "Government Subsidies",
            other: "Other Income",
            seeds: "Seeds & Fertilizers",
            labor: "Labor",
            equipment: "Equipment",
            utilities: "Utilities",
            otherExpense: "Other Expenses"
        },
        // Crops
        crops: {
            title: "Crop Management",
            addCrop: "Add New Crop",
            cropName: "Crop Name",
            variety: "Variety",
            plantedDate: "Planted Date",
            expectedHarvest: "Expected Harvest",
            status: "Status",
            area: "Area (hectares)",
            namePlaceholder: "e.g., Maize",
            varietyPlaceholder: "e.g., Hybrid variety",
            areaPlaceholder: "Enter area",
            addButton: "Add Crop",
            activeCrops: "Active Crops",
            harvest: "Harvest",
            actions: "Actions",
            noCrops: "No crops planted yet",
            deleteConfirm: "Are you sure you want to delete this crop?",
            // Status
            growing: "Growing",
            flowering: "Flowering",
            readyToHarvest: "Ready to Harvest",
            harvested: "Harvested"
        },
        // Reports
        reports: {
            title: "Reports & Analytics",
            generateReport: "Generate Report",
            reportType: "Report Type",
            dateRange: "Date Range",
            from: "From",
            to: "To",
            generate: "Generate Report",
            // Report types
            financial: "Financial Summary",
            crops: "Crop Performance",
            inventory: "Inventory Report",
            custom: "Custom Report"
        },
        // Common
        common: {
            loading: "Loading...",
            save: "Save",
            cancel: "Cancel",
            delete: "Delete",
            edit: "Edit",
            add: "Add",
            close: "Close",
            yes: "Yes",
            no: "No",
            confirm: "Confirm",
            success: "Success",
            error: "Error",
            warning: "Warning"
        }
    },
    fr: {
        // Navigation
        nav: {
            dashboard: "Tableau de bord",
            farmInfo: "Info Ferme",
            financial: "Financier",
            crops: "Cultures",
            reports: "Rapports"
        },
        // Farm Info
        farmInfo: {
            title: "Aperçu de la ferme",
            locationSpecs: "Emplacement et spécifications",
            location: "Emplacement",
            province: "Province",
            city: "Ville",
            totalArea: "Surface totale",
            farmMap: "Carte de la ferme",
            satelliteView: "Vue satellite",
            graphicalView: "Vue graphique",
            editCoordinates: "Modifier coordonnées",
            upload: "Télécharger",
            cropAllocation: "Allocation des cultures",
            loadingMap: "Chargement de la carte...",
            farmName: "Nom de la ferme",
            perimeter: "Périmètre",
            centerCoordinates: "Coordonnées du centre",
            landAllocation: "Allocation des terres",
            zone: "ZONE",
            areaHa: "SURFACE (HA)",
            percentage: "POURCENTAGE",
            fruitTrees: "Arbres fruitiers",
            cashCrops: "Cultures de rente",
            farmHouse: "Maison de ferme",
            residential: "Résidentiel",
            meters: "mètres",
            hectares: "hectares"
        },
        // Coordinate Editor
        coordEditor: {
            title: "Modifier les coordonnées des limites de la ferme",
            instruction: "Entrez les coordonnées des limites du champ. Au moins 3 points sont nécessaires pour former un polygone.",
            addNewPoint: "Ajouter un nouveau point",
            latitude: "Latitude",
            longitude: "Longitude",
            latRange: "(-90 à 90)",
            lngRange: "(-180 à 180)",
            addPoint: "Ajouter point",
            bulkImport: "Importation en masse",
            bulkInstructions: "Collez plusieurs coordonnées (une par ligne). Formats supportés:",
            formatExample1: "lat,lng",
            formatExample2: "lat lng",
            formatExample3: "lat, lng",
            exampleTitle: "Exemple:",
            placeholder: "Collez les coordonnées ici (une par ligne)\nExemple:\n5.916982,11.043742\n5.916911,11.043793\n5.916782,11.043831",
            importCoords: "Importer coordonnées",
            clear: "Effacer",
            clearAll: "Tout effacer",
            currentPoints: "Points de limite actuels",
            tableHeader: {
                index: "#",
                latitude: "LATITUDE",
                longitude: "LONGITUDE",
                actions: "ACTIONS"
            },
            delete: "Supprimer",
            noCoordinates: "Aucune coordonnée définie",
            validationReady: "Prêt à sauvegarder",
            validationMin: "Au moins 3 points requis",
            cancel: "Annuler",
            saveChanges: "Enregistrer",
            // Messages
            errorEmpty: "Veuillez coller les coordonnées dans la zone de texte",
            errorInvalidFormat: "Format invalide",
            errorInvalidNumbers: "Nombres invalides",
            errorLatRange: "La latitude doit être entre -90 et 90",
            errorLngRange: "La longitude doit être entre -180 et 180",
            successImport: "Importé",
            coordinate: "coordonnée",
            coordinates: "coordonnées",
            skipped: "Ignoré",
            invalidLine: "ligne invalide",
            invalidLines: "lignes invalides",
            andMore: "et",
            more: "de plus",
            noValidCoords: "Aucune coordonnée valide trouvée. Veuillez vérifier votre format.",
            confirmDelete: "Supprimer le point de coordonnée",
            confirmClearAll: "Êtes-vous sûr de vouloir supprimer tous les",
            cannotUndo: "Cette action ne peut pas être annulée jusqu'à ce que vous fermiez la fenêtre sans enregistrer.",
            noCoordsToClear: "Aucune coordonnée à effacer.",
            savedSuccess: "Coordonnées enregistrées avec succès!",
            boundaryPoints: "Points de limite:",
            newCenter: "Nouveau centre:",
            errorLatLng: "Veuillez entrer des valeurs numériques valides pour la latitude et la longitude",
            errorMinPoints: "Au moins 3 points de coordonnées sont nécessaires pour former un polygone."
        },
        // Dashboard
        dashboard: {
            title: "Tableau de bord de la ferme",
            totalArea: "Surface totale",
            totalRevenue: "Revenu total",
            totalExpenses: "Dépenses totales",
            netCashFlow: "Flux de trésorerie net",
            trend: "Tendance",
            positive: "Positif",
            negative: "Négatif",
            neutral: "Neutre",
            recentTransactions: "Transactions récentes",
            addTransaction: "Ajouter transaction",
            date: "Date",
            type: "Type",
            description: "Description",
            category: "Catégorie",
            amount: "Montant",
            noTransactions: "Aucune transaction enregistrée",
            viewAll: "Voir tout",
            cashFlowTrend: "Tendance du flux de trésorerie",
            landUtilization: "Utilisation des terres",
            perimeter: "périmètre"
        },
        // Financial
        financial: {
            title: "Gestion financière",
            addTransaction: "Ajouter transaction",
            transactionType: "Type de transaction",
            income: "Revenu",
            expense: "Dépense",
            description: "Description",
            category: "Catégorie",
            amount: "Montant",
            date: "Date",
            selectType: "Sélectionner le type...",
            selectCategory: "Sélectionner la catégorie...",
            descriptionPlaceholder: "Brève description",
            amountPlaceholder: "Entrez le montant",
            briefDescription: "Brève description",
            addButton: "Ajouter transaction",
            transactionHistory: "Historique des transactions",
            allTransactions: "Toutes les transactions",
            type: "Type",
            actions: "Actions",
            edit: "Modifier",
            delete: "Supprimer",
            export: "Exporter",
            noTransactions: "Aucune transaction enregistrée",
            deleteConfirm: "Êtes-vous sûr de vouloir supprimer cette transaction?",
            expenseBreakdown: "Répartition des dépenses",
            incomeSources: "Sources de revenus",
            monthlySummary: "Résumé mensuel",
            currentMonth: "Mois actuel",
            monthlyIncome: "Revenu:",
            monthlyExpenses: "Dépenses:",
            monthlyNet: "Net:",
            // Categories
            cropSales: "Ventes de cultures",
            livestockSales: "Ventes de bétail",
            government: "Subventions gouvernementales",
            other: "Autres revenus",
            seeds: "Semences et engrais",
            labor: "Main-d'œuvre",
            equipment: "Équipement",
            utilities: "Services publics",
            otherExpense: "Autres dépenses",
            // Expense categories
            seedsSeedlings: "Semences et plants",
            fertilizers: "Engrais",
            pesticides: "Pesticides",
            irrigation: "Irrigation",
            maintenance: "Entretien",
            transportation: "Transport",
            // Income categories
            avocadoSales: "Ventes d'avocats",
            lemonSales: "Ventes de citrons",
            cassavaSales: "Ventes de manioc",
            gingerSales: "Ventes de gingembre",
            pepperSales: "Ventes de poivre",
            otherSales: "Autres ventes"
        },
        // Crops
        crops: {
            title: "Gestion des cultures",
            addCrop: "Ajouter culture",
            addFruitTree: "Ajouter arbre fruitier",
            addCashCrop: "Ajouter culture de rente",
            cropName: "Nom de la culture",
            variety: "Variété",
            plantedDate: "Date de plantation",
            expectedHarvest: "Récolte prévue",
            harvestDate: "Date de récolte",
            status: "Statut",
            area: "Surface (hectares)",
            count: "Nombre",
            yield: "Rendement (kg)",
            namePlaceholder: "ex: Maïs",
            varietyPlaceholder: "ex: Variété hybride",
            areaPlaceholder: "Entrez la surface",
            addButton: "Ajouter culture",
            activeCrops: "Cultures actives",
            fruitTrees: "Arbres fruitiers",
            cashCrops: "Cultures de rente",
            harvest: "Récolter",
            actions: "Actions",
            noCrops: "Aucune culture plantée",
            noFruitTrees: "Aucun arbre fruitier enregistré",
            noCashCrops: "Aucune culture de rente enregistrée",
            deleteConfirm: "Êtes-vous sûr de vouloir supprimer cette culture?",
            selectType: "Sélectionner le type...",
            // Status
            planted: "Planté",
            growing: "En croissance",
            flowering: "En floraison",
            fruiting: "En fructification",
            ready: "Prêt à récolter",
            readyToHarvest: "Prêt à récolter",
            harvested: "Récolté"
        },
        // Reports
        reports: {
            title: "Rapports d'investisseurs",
            generateReport: "Générer un rapport",
            generateProfessionalReports: "Générer des rapports professionnels",
            reportType: "Type de rapport",
            dateRange: "Période",
            from: "De",
            to: "À",
            generate: "Générer",
            financialReport: "Rapport financier",
            operationsReport: "Rapport d'opérations",
            investorPresentation: "Présentation investisseurs",
            reportPreview: "Aperçu du rapport",
            print: "Imprimer",
            // Report types
            financial: "Résumé financier",
            crops: "Performance des cultures",
            inventory: "Rapport d'inventaire",
            custom: "Rapport personnalisé"
        },
        // Common
        common: {
            loading: "Chargement...",
            save: "Enregistrer",
            cancel: "Annuler",
            delete: "Supprimer",
            edit: "Modifier",
            add: "Ajouter",
            close: "Fermer",
            yes: "Oui",
            no: "Non",
            confirm: "Confirmer",
            success: "Succès",
            error: "Erreur",
            warning: "Attention",
            createFarm: "Créer la ferme"
        },
        // Modals
        modals: {
            addTransaction: "Ajouter une transaction",
            addCrop: "Ajouter une culture",
            createNewFarm: "Créer une nouvelle ferme",
            configureFarmSection: "Configurer la section de ferme",
            addCustomCategory: "Ajouter une catégorie personnalisée",
            // Transaction Modal
            transactionDate: "Date",
            transactionType: "Type",
            transactionCategory: "Catégorie",
            transactionDescription: "Description",
            transactionAmount: "Montant (XAF)",
            // Crop Modal
            cropType: "Type",
            cropCount: "Nombre",
            cropArea: "Surface (hectares)",
            cropPlantedDate: "Date de plantation",
            cropStatus: "Statut",
            // Farm Modal
            farmName: "Nom de la ferme",
            farmLocation: "Emplacement",
            farmBoundaries: "Coordonnées des limites (Optionnel)",
            farmBoundariesPlaceholder: "Collez les coordonnées au format: lat,lng (une par ligne)\nExemple:\n5.916982,11.043742\n5.916911,11.043793\n5.916782,11.043831",
            farmBoundariesHelp: "Si fourni, la surface sera calculée automatiquement. Sinon, entrez manuellement ci-dessous.",
            calculateArea: "Calculer la surface à partir des limites",
            calculatedArea: "Surface calculée",
            farmArea: "Surface totale (hectares)",
            farmPerimeter: "Périmètre (mètres) - Optionnel",
            centerLatitude: "Latitude du centre",
            centerLongitude: "Longitude du centre",
            // Section Modal
            sectionName: "Nom de la section",
            sectionType: "Type de section",
            sectionCrop: "Type de culture (si applicable)",
            sectionArea: "Surface (hectares)",
            sectionAreaHelp: "Entrez la surface en hectares",
            sectionColor: "Couleur de la section",
            sectionNotes: "Notes",
            sectionNotesPlaceholder: "Notes supplémentaires sur cette section",
            saveSection: "Enregistrer la section",
            // Section Types
            fruitTreesType: "Arbres fruitiers",
            cashCropsType: "Cultures de rente",
            infrastructure: "Infrastructure",
            fallowLand: "Terre en jachère",
            otherType: "Autre",
            // Category Modal
            categoryName: "Nom de la catégorie",
            categoryNamePlaceholder: "Entrez le nom de la catégorie",
            addCategory: "Ajouter catégorie"
        },
        // Sections/Crop Allocation
        sections: {
            cropAllocationSections: "Sections d'allocation des cultures",
            noSections: "Aucune section définie. Cliquez sur \"Allocation des cultures\" pour commencer.",
            color: "COULEUR",
            sectionName: "NOM DE LA SECTION",
            type: "TYPE",
            crop: "CULTURE",
            area: "SURFACE (ha)",
            percentOfFarm: "% DE LA FERME",
            actions: "ACTIONS",
            deleteSection: "Supprimer cette section?",
            sectionDeleted: "Section supprimée avec succès"
        },
        // Farm Selector
        farmSelector: {
            selectFarm: "Sélectionner une ferme ▼",
            createNew: "➕ Créer une nouvelle ferme"
        }
    }
};

// Farm Management Application
// JavaScript Application Logic
// ===================================

const app = {
    // Language Management
    currentLanguage: localStorage.getItem('farmLanguage') || 'en',

    // Multi-farm management
    farms: [
        // Maloure Farm - Default farm (always present)
        {
            id: 'maloure-farm',
            name: "Maloure Farm",
            location: "Maloure Village, Njimoun Subdivision, Foumban",
            area: 2.75,
            perimeter: 680.16,
            centerCoordinates: { lat: 5.916982, lng: 11.043742 },
            boundaries: [
                { lat: 5.916982, lng: 11.043742 },
                { lat: 5.916911, lng: 11.043793 },
                { lat: 5.916782, lng: 11.043831 },
                { lat: 5.916697, lng: 11.043867 },
                { lat: 5.916613, lng: 11.043936 },
                { lat: 5.916511, lng: 11.044077 },
                { lat: 5.916022, lng: 11.044109 },
                { lat: 5.915925, lng: 11.044093 },
                { lat: 5.916022, lng: 11.043647 },
                { lat: 5.915925, lng: 11.043647 },
                { lat: 5.915826, lng: 11.043545 },
                { lat: 5.915755, lng: 11.043455 },
                { lat: 5.915686, lng: 11.043546 },
                { lat: 5.916284, lng: 11.043192 },
                { lat: 5.915478, lng: 11.043159 },
                { lat: 5.915403, lng: 11.043051 },
                { lat: 5.915478, lng: 11.042981 },
                { lat: 5.915536, lng: 11.042658 },
                { lat: 5.915728, lng: 11.042593 },
                { lat: 5.915728, lng: 11.043421 },
                { lat: 5.916061, lng: 11.042782 },
                { lat: 5.916124, lng: 11.044298 },
                { lat: 5.916186, lng: 11.044372 },
                { lat: 5.916285, lng: 11.044221 },
                { lat: 5.916379, lng: 11.042475 },
                { lat: 5.916413, lng: 11.042574 },
                { lat: 5.916504, lng: 11.042636 },
                { lat: 5.916574, lng: 11.042693 },
                { lat: 5.916661, lng: 11.042756 },
                { lat: 5.916920, lng: 11.043178 },
                { lat: 5.917008, lng: 11.043039 },
                { lat: 5.917022, lng: 11.043141 },
                { lat: 5.917047, lng: 11.043509 },
                { lat: 5.917047, lng: 11.043622 },
                { lat: 5.917008, lng: 11.043099 },
                { lat: 5.917022, lng: 11.043211 },
                { lat: 5.917047, lng: 11.043316 },
                { lat: 5.917008, lng: 11.043421 },
                { lat: 5.916943, lng: 11.043474 }
            ],
            zones: {
                fruitTrees: { area: 1.0, percentage: 36.4 },
                cashCrops: { area: 1.5, percentage: 54.5 },
                farmHouse: { area: 0.15, percentage: 5.5 },
                residential: { area: 0.1, percentage: 3.6 }
            },
            transactions: [],
            fruitTrees: [],
            cashCrops: [],
            customExpenseCategories: [],
            customIncomeCategories: [],
            sections: []  // Farm sections for crop allocation
        }
    ],

    // Current active farm ID
    currentFarmId: 'maloure-farm',

    // Chart instances
    charts: {},

    // Categories (shared across all farms)
    expenseCategories: [
        'Seeds & Seedlings',
        'Fertilizers',
        'Pesticides',
        'Labor',
        'Equipment',
        'Irrigation',
        'Utilities',
        'Maintenance',
        'Transportation',
        'Other'
    ],

    incomeCategories: [
        'Avocado Sales',
        'Lemon Sales',
        'Cassava Sales',
        'Ginger Sales',
        'Pepper Sales',
        'Other Sales'
    ],

    // Current transaction type (for custom category modal)
    currentTransactionType: null,

    // Helper to get current farm
    getCurrentFarm() {
        return this.farms.find(f => f.id === this.currentFarmId) || this.farms[0];
    },

    // Helper to get farm data (for backward compatibility)
    get farmData() {
        return this.getCurrentFarm();
    },

    // Helper to get transactions (for backward compatibility)
    get transactions() {
        return this.getCurrentFarm().transactions;
    },
    set transactions(val) {
        this.getCurrentFarm().transactions = val;
    },

    // Helper to get fruit trees (for backward compatibility)
    get fruitTrees() {
        return this.getCurrentFarm().fruitTrees;
    },
    set fruitTrees(val) {
        this.getCurrentFarm().fruitTrees = val;
    },

    // Helper to get cash crops (for backward compatibility)
    get cashCrops() {
        return this.getCurrentFarm().cashCrops;
    },
    set cashCrops(val) {
        this.getCurrentFarm().cashCrops = val;
    },

    // Helper to get custom expense categories (for backward compatibility)
    get customExpenseCategories() {
        return this.getCurrentFarm().customExpenseCategories;
    },
    set customExpenseCategories(val) {
        this.getCurrentFarm().customExpenseCategories = val;
    },

    // Helper to get custom income categories (for backward compatibility)
    get customIncomeCategories() {
        return this.getCurrentFarm().customIncomeCategories;
    },
    set customIncomeCategories(val) {
        this.getCurrentFarm().customIncomeCategories = val;
    },

    // Initialize the application
    init() {
        console.log('🌾 Initializing Maloure Farm Management System...');

        // Load data from localStorage
        this.loadData();

        // Set today's date in forms
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('transactionDate').value = today;
        document.getElementById('cropPlantedDate').value = today;

        // Render initial UI
        this.renderDashboard();
        this.renderFarmMap();
        this.renderTransactions();
        this.renderCrops();
        this.updateCurrentMonth();

        // Initialize charts
        this.initializeCharts();

        // Add smooth scroll navigation
        this.setupNavigation();

        // Initialize language selector and update UI text
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
        this.updateAllText();

        console.log('✅ Application initialized successfully!');
    },

    // Load data from localStorage
    loadData() {
        const savedFarms = localStorage.getItem('allFarms');
        const savedCurrentFarmId = localStorage.getItem('currentFarmId');

        if (savedFarms) {
            const loadedFarms = JSON.parse(savedFarms);
            // Ensure Maloure Farm always exists
            const maloureFarm = loadedFarms.find(f => f.id === 'maloure-farm');
            if (!maloureFarm) {
                // Add Maloure Farm back if it was somehow removed
                loadedFarms.unshift(this.farms[0]);
            }
            this.farms = loadedFarms;
        }

        if (savedCurrentFarmId) {
            // Verify the saved farm ID exists
            if (this.farms.find(f => f.id === savedCurrentFarmId)) {
                this.currentFarmId = savedCurrentFarmId;
            }
        }

        // Update UI to show current farm name
        const farmNameEl = document.getElementById('farmNameDisplay');
        if (farmNameEl) farmNameEl.textContent = this.getCurrentFarm().name;

        // Update farm selector if it exists
        this.updateFarmSelector();
    },

    // Save data to localStorage
    saveData() {
        localStorage.setItem('allFarms', JSON.stringify(this.farms));
        localStorage.setItem('currentFarmId', this.currentFarmId);
    },

    // Calculate financial metrics
    calculateMetrics() {
        const income = this.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + parseFloat(t.amount), 0);

        const expenses = this.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + parseFloat(t.amount), 0);

        const netCashFlow = income - expenses;

        return { income, expenses, netCashFlow };
    },

    // Render dashboard
    renderDashboard() {
        const { income, expenses, netCashFlow } = this.calculateMetrics();

        // Update stat cards
        document.getElementById('totalRevenue').textContent = this.formatCurrency(income);
        document.getElementById('totalExpenses').textContent = this.formatCurrency(expenses);
        document.getElementById('netCashFlow').textContent = this.formatCurrency(netCashFlow);

        // Update trends (simplified - calculate based on income/expense ratio)
        const cashFlowTrendEl = document.getElementById('cashFlowTrend');
        if (netCashFlow > 0) {
            cashFlowTrendEl.textContent = '↑ Positive';
            cashFlowTrendEl.className = 'stat-card-trend trend-up';
        } else if (netCashFlow < 0) {
            cashFlowTrendEl.textContent = '↓ Negative';
            cashFlowTrendEl.className = 'stat-card-trend trend-down';
        } else {
            cashFlowTrendEl.textContent = '-- Neutral';
            cashFlowTrendEl.className = 'stat-card-trend';
        }
    },

    // Render farm map using Google Maps
    renderFarmMap() {
        const mapDiv = document.getElementById('farmMap');
        if (!mapDiv) return;

        // Check if Google Maps API is loaded
        if (typeof google === 'undefined' || !google.maps) {
            console.warn('Google Maps API not loaded. Please add your API key.');
            mapDiv.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="font-size: 1.2rem; margin-bottom: 0.5rem; color: #cc0000;">⚠️ Google Maps API Key Required</p>
                        <p style="margin-bottom: 1rem;">To display the satellite map:</p>
                        <ol style="text-align: left; display: inline-block; margin-bottom: 1rem;">
                            <li>Get a free API key from Google Cloud</li>
                            <li>Open index.html and replace YOUR_API_KEY</li>
                            <li>Reload this page</li>
                        </ol>
                        <p style="font-size: 0.9rem; color: #999;">See google_maps_setup.md for detailed instructions</p>
                    </div>
                </div>
            `;
            return;
        }

        // Initialize map centered on farm
        const map = new google.maps.Map(mapDiv, {
            center: this.farmData.centerCoordinates,
            zoom: 17,
            mapTypeId: 'satellite',
            tilt: 0,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            streetViewControl: false,
            fullscreenControl: true
        });

        // Draw farm boundaries if they exist
        if (this.farmData.boundaries && this.farmData.boundaries.length > 0) {
            const polygon = new google.maps.Polygon({
                paths: this.farmData.boundaries,
                strokeColor: '#cc0000',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#cc0000',
                fillOpacity: 0.25
            });
            polygon.setMap(map);

            // Add center marker
            const marker = new google.maps.Marker({
                position: this.farmData.centerCoordinates,
                map: map,
                title: `${this.farmData.name} - Center`,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#ffd700',
                    fillOpacity: 1,
                    strokeColor: '#cc0000',
                    strokeWeight: 2
                }
            });

            // Add info window with farm details
            const infoContent = `
                <div style="padding: 0.5rem; font-family: Inter, sans-serif;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #cc0000;">${this.farmData.name}</h3>
                    <p style="margin: 0.25rem 0;"><strong>Location:</strong> ${this.farmData.location}</p>
                    <p style="margin: 0.25rem 0;"><strong>Area:</strong> ${this.farmData.area} hectares</p>
                    <p style="margin: 0.25rem 0;"><strong>Perimeter:</strong> ${this.farmData.perimeter} meters</p>
                    <p style="margin: 0.25rem 0;"><strong>Coordinates:</strong> ${this.farmData.centerCoordinates.lat.toFixed(6)}, ${this.farmData.centerCoordinates.lng.toFixed(6)}</p>
                    <p style="margin: 0.25rem 0;"><strong>Boundary Points:</strong> ${this.farmData.boundaries.length}</p>
                </div>
            `;

            const infoWindow = new google.maps.InfoWindow({
                content: infoContent
            });

            // Show info window on marker click
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });

            // Fit map to show all boundaries
            const bounds = new google.maps.LatLngBounds();
            this.farmData.boundaries.forEach(coord => {
                bounds.extend(coord);
            });
            map.fitBounds(bounds);
        }

        // Store map instance for later use
        this.map = map;

        // Initialize Drawing Manager if API is loaded
        if (google.maps.drawing) {
            this.drawingManager = new google.maps.drawing.DrawingManager({
                drawingMode: null,
                drawingControl: false,  //We'll use custom button
                polygonOptions: {
                    fillColor: '#4CAF50',
                    fillOpacity: 0.4,
                    strokeWeight: 2,
                    strokeColor: '#4CAF50',
                    clickable: true,
                    editable: true,
                    zIndex: 1
                }
            });

            this.drawingManager.setMap(this.map);

            // Handle polygon complete event
            google.maps.event.addListener(this.drawingManager, 'polygoncomplete', (polygon) => {
                this.onPolygonComplete(polygon);
            });
        }

        // Render existing sections
        this.renderFarmSections();
    },

    // Render transactions
    renderTransactions() {
        // Recent transactions (last 5)
        const recentBody = document.getElementById('recentTransactionsBody');
        const allBody = document.getElementById('allTransactionsBody');

        if (this.transactions.length === 0) {
            recentBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No transactions yet</td></tr>';
            allBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No transactions yet</td></tr>';
            return;
        }

        // Sort by date (newest first)
        const sorted = [...this.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

        // Recent transactions
        const recent = sorted.slice(0, 5);
        recentBody.innerHTML = recent.map(t => `
      <tr>
        <td>${this.formatDate(t.date)}</td>
        <td><span class="badge ${t.type === 'income' ? 'badge-success' : 'badge-warning'}">${t.type}</span></td>
        <td>${t.category}</td>
        <td>${t.description}</td>
        <td><strong>${this.formatCurrency(t.amount)}</strong></td>
      </tr>
    `).join('');

        // All transactions
        allBody.innerHTML = sorted.map((t, index) => `
      <tr>
        <td>${this.formatDate(t.date)}</td>
        <td><span class="badge ${t.type === 'income' ? 'badge-success' : 'badge-warning'}">${t.type}</span></td>
        <td>${t.category}</td>
        <td>${t.description}</td>
        <td><strong>${this.formatCurrency(t.amount)}</strong></td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="app.deleteTransaction(${index})">🗑️</button>
        </td>
      </tr>
    `).join('');
    },

    // Render crops
    renderCrops() {
        // Fruit trees
        const fruitBody = document.getElementById('fruitTreesBody');
        if (this.fruitTrees.length === 0) {
            fruitBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No fruit trees recorded yet</td></tr>';
        } else {
            fruitBody.innerHTML = this.fruitTrees.map((crop, index) => `
        <tr>
          <td><strong>${crop.type}</strong></td>
          <td>${crop.count}</td>
          <td>${this.formatDate(crop.plantedDate)}</td>
          <td><span class="badge badge-${this.getStatusColor(crop.status)}">${crop.status}</span></td>
          <td>${crop.expectedHarvest || 'TBD'}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="app.deleteFruitTree(${index})">🗑️</button>
          </td>
        </tr>
      `).join('');
        }

        // Cash crops
        const cashBody = document.getElementById('cashCropsBody');
        if (this.cashCrops.length === 0) {
            cashBody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No cash crops recorded yet</td></tr>';
        } else {
            cashBody.innerHTML = this.cashCrops.map((crop, index) => `
        <tr>
          <td><strong>${crop.type}</strong></td>
          <td>${crop.area}</td>
          <td>${this.formatDate(crop.plantedDate)}</td>
          <td><span class="badge badge-${this.getStatusColor(crop.status)}">${crop.status}</span></td>
          <td>${crop.harvestDate ? this.formatDate(crop.harvestDate) : 'TBD'}</td>
          <td>${crop.yield || 0} kg</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="app.deleteCashCrop(${index})">🗑️</button>
          </td>
        </tr>
      `).join('');
        }
    },

    // Initialize all charts
    initializeCharts() {
        this.initCashFlowChart();
        this.initLandUtilizationChart();
        this.initExpenseBreakdownChart();
        this.initIncomeSourcesChart();
    },

    // Cash flow trend chart
    initCashFlowChart() {
        const ctx = document.getElementById('cashFlowChart');
        if (!ctx) return;

        // Get monthly data
        const monthlyData = this.getMonthlyData();

        if (this.charts.cashFlow) {
            this.charts.cashFlow.destroy();
        }

        this.charts.cashFlow = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.labels,
                datasets: [
                    {
                        label: 'Income',
                        data: monthlyData.income,
                        borderColor: '#4caf50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Expenses',
                        data: monthlyData.expenses,
                        borderColor: '#ff9800',
                        backgroundColor: 'rgba(255, 152, 0, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => 'XAF ' + value.toLocaleString()
                        }
                    }
                }
            }
        });
    },

    // Land utilization chart
    initLandUtilizationChart() {
        const ctx = document.getElementById('landUtilizationChart');
        if (!ctx) return;

        if (this.charts.landUtilization) {
            this.charts.landUtilization.destroy();
        }

        this.charts.landUtilization = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Fruit Trees', 'Cash Crops', 'Farm House', 'Residential'],
                datasets: [{
                    data: [
                        this.farmData.zones.fruitTrees.area,
                        this.farmData.zones.cashCrops.area,
                        this.farmData.zones.farmHouse.area,
                        this.farmData.zones.residential.area
                    ],
                    backgroundColor: [
                        '#90ee90',
                        '#ffd700',
                        '#8b4513',
                        '#2d5016'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    },

    // Expense breakdown chart
    initExpenseBreakdownChart() {
        const ctx = document.getElementById('expenseBreakdownChart');
        if (!ctx) return;

        const expensesByCategory = {};
        this.transactions
            .filter(t => t.type === 'expense')
            .forEach(t => {
                expensesByCategory[t.category] = (expensesByCategory[t.category] || 0) + parseFloat(t.amount);
            });

        const categories = Object.keys(expensesByCategory);
        const amounts = Object.values(expensesByCategory);

        if (this.charts.expenseBreakdown) {
            this.charts.expenseBreakdown.destroy();
        }

        this.charts.expenseBreakdown = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: categories.length > 0 ? categories : ['No expenses yet'],
                datasets: [{
                    data: amounts.length > 0 ? amounts : [1],
                    backgroundColor: [
                        '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0',
                        '#9966ff', '#ff9f40', '#ff6384', '#c9cbcf',
                        '#4bc0c0', '#ff6384'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    },

    // Income sources chart
    initIncomeSourcesChart() {
        const ctx = document.getElementById('incomeSourcesChart');
        if (!ctx) return;

        const incomeByCategory = {};
        this.transactions
            .filter(t => t.type === 'income')
            .forEach(t => {
                incomeByCategory[t.category] = (incomeByCategory[t.category] || 0) + parseFloat(t.amount);
            });

        const categories = Object.keys(incomeByCategory);
        const amounts = Object.values(incomeByCategory);

        if (this.charts.incomeSources) {
            this.charts.incomeSources.destroy();
        }

        this.charts.incomeSources = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories.length > 0 ? categories : ['No income yet'],
                datasets: [{
                    label: 'Income (XAF)',
                    data: amounts.length > 0 ? amounts : [0],
                    backgroundColor: '#4caf50'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => 'XAF ' + value.toLocaleString()
                        }
                    }
                }
            }
        });
    },

    // Get monthly data for charts
    getMonthlyData() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentYear = new Date().getFullYear();

        const income = new Array(12).fill(0);
        const expenses = new Array(12).fill(0);

        this.transactions.forEach(t => {
            const date = new Date(t.date);
            if (date.getFullYear() === currentYear) {
                const month = date.getMonth();
                const amount = parseFloat(t.amount);
                if (t.type === 'income') {
                    income[month] += amount;
                } else {
                    expenses[month] += amount;
                }
            }
        });

        return { labels: months, income, expenses };
    },

    // Update current month display
    updateCurrentMonth() {
        const now = new Date();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const currentMonth = monthNames[now.getMonth()] + ' ' + now.getFullYear();

        document.getElementById('currentMonth').textContent = currentMonth;

        // Calculate monthly totals
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        let monthlyIncome = 0;
        let monthlyExpenses = 0;

        this.transactions.forEach(t => {
            const date = new Date(t.date);
            if (date >= monthStart && date <= monthEnd) {
                const amount = parseFloat(t.amount);
                if (t.type === 'income') {
                    monthlyIncome += amount;
                } else {
                    monthlyExpenses += amount;
                }
            }
        });

        const monthlyNet = monthlyIncome - monthlyExpenses;

        document.getElementById('monthlyIncome').textContent = this.formatCurrency(monthlyIncome);
        document.getElementById('monthlyExpenses').textContent = this.formatCurrency(monthlyExpenses);
        document.getElementById('monthlyNet').textContent = this.formatCurrency(monthlyNet);
        document.getElementById('monthlyNet').className = monthlyNet >= 0 ? 'text-success' : 'text-danger';
    },

    // Modal management
    openAddTransactionModal() {
        document.getElementById('addTransactionModal').classList.add('active');
        document.getElementById('transactionForm').reset();
        document.getElementById('transactionDate').value = new Date().toISOString().split('T')[0];
    },

    openAddCropModal(type) {
        document.getElementById('addCropModal').classList.add('active');
        document.getElementById('cropForm').reset();
        document.getElementById('cropCategory').value = type;

        const cropTypeSelect = document.getElementById('cropType');
        const countGroup = document.getElementById('cropCountGroup');
        const areaGroup = document.getElementById('cropAreaGroup');

        if (type === 'fruit') {
            document.getElementById('cropModalTitle').textContent = 'Add Fruit Tree';
            cropTypeSelect.innerHTML = `
        <option value="">Select type...</option>
        <option value="Avocado">Avocado</option>
        <option value="Lemon">Lemon</option>
        <option value="Orange">Orange</option>
        <option value="Mango">Mango</option>
        <option value="Other">Other</option>
      `;
            countGroup.style.display = 'block';
            areaGroup.style.display = 'none';
            document.getElementById('cropCount').required = true;
            document.getElementById('cropArea').required = false;
        } else {
            document.getElementById('cropModalTitle').textContent = 'Add Cash Crop';
            cropTypeSelect.innerHTML = `
        <option value="">Select type...</option>
        <option value="Cassava">Cassava</option>
        <option value="Ginger">Ginger</option>
        <option value="Pepper">Pepper</option>
        <option value="Corn">Corn</option>
        <option value="Other">Other</option>
      `;
            countGroup.style.display = 'none';
            areaGroup.style.display = 'block';
            document.getElementById('cropCount').required = false;
            document.getElementById('cropArea').required = true;
        }

        document.getElementById('cropPlantedDate').value = new Date().toISOString().split('T')[0];
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    },

    // ===================================
    // Coordinate Editor Functions
    // ===================================

    // Temporary coordinates storage for editing
    tempCoordinates: [],

    // Open coordinate editor modal
    openCoordinateEditorModal() {
        // Copy current boundaries to temp storage
        this.tempCoordinates = JSON.parse(JSON.stringify(this.farmData.boundaries || []));

        // Open modal
        document.getElementById('coordinateEditorModal').classList.add('active');

        // Render coordinates table
        this.renderCoordinatesTable();

        // Clear input fields
        document.getElementById('newPointLat').value = '';
        document.getElementById('newPointLng').value = '';
        document.getElementById('coordinateError').style.display = 'none';

        // Update validation status
        this.updateCoordinateValidation();
    },

    // Render the coordinates table
    renderCoordinatesTable() {
        const tbody = document.getElementById('coordinatesTableBody');
        const countSpan = document.getElementById('coordinateCount');

        countSpan.textContent = this.tempCoordinates.length;

        if (this.tempCoordinates.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">${this.t('coordEditor.noCoordinates')}</td></tr>`;
            return;
        }

        tbody.innerHTML = this.tempCoordinates.map((coord, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${coord.lat.toFixed(6)}</td>
                <td>${coord.lng.toFixed(6)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="app.deleteCoordinatePoint(${index})">
                        🗑️ ${this.t('coordEditor.delete')}
                    </button>
                </td>
            </tr>
        `).join('');

        this.updateCoordinateValidation();
    },

    // Add a new coordinate point
    addCoordinatePoint() {
        const latInput = document.getElementById('newPointLat');
        const lngInput = document.getElementById('newPointLng');
        const errorDiv = document.getElementById('coordinateError');

        const lat = parseFloat(latInput.value);
        const lng = parseFloat(lngInput.value);

        // Validation
        errorDiv.style.display = 'none';

        if (isNaN(lat) || isNaN(lng)) {
            errorDiv.textContent = '⚠️ Please enter valid numeric values for both latitude and longitude';
            errorDiv.style.display = 'block';
            return;
        }

        if (lat < -90 || lat > 90) {
            errorDiv.textContent = '⚠️ Latitude must be between -90 and 90';
            errorDiv.style.display = 'block';
            return;
        }

        if (lng < -180 || lng > 180) {
            errorDiv.textContent = '⚠️ Longitude must be between -180 and 180';
            errorDiv.style.display = 'block';
            return;
        }

        // Add to temp coordinates
        this.tempCoordinates.push({ lat, lng });

        // Clear inputs
        latInput.value = '';
        lngInput.value = '';

        // Re-render table
        this.renderCoordinatesTable();
    },

    // Import bulk coordinates from textarea
    importBulkCoordinates() {
        const textarea = document.getElementById('bulkCoordinatesInput');
        const statusSpan = document.getElementById('bulkImportStatus');
        const errorDiv = document.getElementById('bulkImportError');

        // Clear previous messages
        statusSpan.style.display = 'none';
        errorDiv.style.display = 'none';

        const input = textarea.value.trim();
        if (!input) {
            errorDiv.textContent = '⚠️ Please paste coordinates in the textarea';
            errorDiv.style.display = 'block';
            return;
        }

        // Split by lines
        const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

        const imported = [];
        const errors = [];

        lines.forEach((line, index) => {
            // Try different separator formats: comma, space, tab
            let lat, lng;

            // Try comma-separated
            if (line.includes(',')) {
                const parts = line.split(',').map(p => p.trim());
                if (parts.length >= 2) {
                    lat = parseFloat(parts[0]);
                    lng = parseFloat(parts[1]);
                }
            }
            // Try space or tab separated
            else if (line.includes(' ') || line.includes('\t')) {
                const parts = line.split(/[\s\t]+/).filter(p => p.length > 0);
                if (parts.length >= 2) {
                    lat = parseFloat(parts[0]);
                    lng = parseFloat(parts[1]);
                }
            }
            // Try as two numbers without separator
            else {
                errors.push(`Line ${index + 1}: Invalid format`);
                return;
            }

            // Validate
            if (isNaN(lat) || isNaN(lng)) {
                errors.push(`Line ${index + 1}: Invalid numbers`);
                return;
            }

            if (lat < -90 || lat > 90) {
                errors.push(`Line ${index + 1}: Latitude must be between -90 and 90`);
                return;
            }

            if (lng < -180 || lng > 180) {
                errors.push(`Line ${index + 1}: Longitude must be between -180 and 180`);
                return;
            }

            imported.push({ lat, lng });
        });

        // Add all valid coordinates
        if (imported.length > 0) {
            this.tempCoordinates.push(...imported);
            this.renderCoordinatesTable();

            // Show success message
            statusSpan.textContent = `✓ Imported ${imported.length} coordinate${imported.length > 1 ? 's' : ''}`;
            statusSpan.style.display = 'inline';

            // Clear textarea
            textarea.value = '';
        }

        // Show errors if any
        if (errors.length > 0) {
            errorDiv.innerHTML = `<strong>Skipped ${errors.length} invalid line${errors.length > 1 ? 's' : ''}:</strong><br>` +
                errors.slice(0, 5).join('<br>') +
                (errors.length > 5 ? `<br>... and ${errors.length - 5} more` : '');
            errorDiv.style.display = 'block';
        }

        // If no coordinates were imported at all
        if (imported.length === 0) {
            errorDiv.textContent = '⚠️ No valid coordinates found. Please check your format.';
            errorDiv.style.display = 'block';
        }
    },

    // Delete a coordinate point
    deleteCoordinatePoint(index) {
        if (confirm(`Delete coordinate point #${index + 1}?`)) {
            this.tempCoordinates.splice(index, 1);
            this.renderCoordinatesTable();
        }
    },

    // Clear all coordinate points
    clearAllCoordinates() {
        if (this.tempCoordinates.length === 0) {
            alert('No coordinates to clear.');
            return;
        }

        const count = this.tempCoordinates.length;
        if (confirm(`Are you sure you want to delete all ${count} coordinate${count > 1 ? 's' : ''}?\n\nThis action cannot be undone until you close the modal without saving.`)) {
            this.tempCoordinates = [];
            this.renderCoordinatesTable();
        }
    },

    // Update validation message and save button state
    updateCoordinateValidation() {
        const validationMsg = document.getElementById('validationMessage');
        const saveBtn = document.getElementById('saveCoordinatesBtn');

        if (this.tempCoordinates.length < 3) {
            validationMsg.innerHTML = '⚠️ At least 3 points required';
            validationMsg.style.color = '#cc0000';
            saveBtn.disabled = true;
            saveBtn.style.opacity = '0.5';
            saveBtn.style.cursor = 'not-allowed';
        } else {
            validationMsg.innerHTML = `✓ Ready to save (${this.tempCoordinates.length} points)`;
            validationMsg.style.color = '#4caf50';
            saveBtn.disabled = false;
            saveBtn.style.opacity = '1';
            saveBtn.style.cursor = 'pointer';
        }
    },

    // Save coordinates and update maps
    saveCoordinates() {
        if (this.tempCoordinates.length < 3) {
            alert('At least 3 coordinate points are required to form a polygon.');
            return;
        }

        // Calculate new center point (average of all coordinates)
        const centerLat = this.tempCoordinates.reduce((sum, coord) => sum + coord.lat, 0) / this.tempCoordinates.length;
        const centerLng = this.tempCoordinates.reduce((sum, coord) => sum + coord.lng, 0) / this.tempCoordinates.length;

        // Update farm data
        this.farmData.boundaries = JSON.parse(JSON.stringify(this.tempCoordinates));
        this.farmData.centerCoordinates = {
            lat: centerLat,
            lng: centerLng
        };

        // Save to localStorage
        this.saveData();

        // Update the map views
        this.updateMapViews();

        // Update Farm Info display
        this.updateFarmInfo();

        // Close modal
        this.closeModal('coordinateEditorModal');

        // Show success message
        alert(`✓ Coordinates saved successfully!\n\nBoundary points: ${this.tempCoordinates.length}\nNew center: ${centerLat.toFixed(6)}, ${centerLng.toFixed(6)}`);
    },

    // Update map views after coordinate changes
    updateMapViews() {
        const currentView = this.currentMapView;

        // Update satellite view (Google Maps)
        if (currentView === 'satellite') {
            // Re-render the entire map
            this.renderFarmMap();
        } else if (currentView === 'graphical') {
            // Re-render graphical canvas
            this.renderGraphicalMap();
        }
    },

    // Update Farm Info tab with new boundary count
    updateFarmInfo() {
        const coordEl = document.getElementById('farmCoordinates');
        if (coordEl) {
            coordEl.textContent = `${this.farmData.centerCoordinates.lat.toFixed(6)}, ${this.farmData.centerCoordinates.lng.toFixed(6)}`;
        }
    },

    // Update category options based on transaction type
    updateCategoryOptions() {
        const type = document.getElementById('transactionType').value;
        const categorySelect = document.getElementById('transactionCategory');

        this.currentTransactionType = type;

        if (type === 'income') {
            const allIncomeCategories = [...this.incomeCategories, ...this.customIncomeCategories];
            categorySelect.innerHTML = '<option value="">Select category...</option>' +
                allIncomeCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('') +
                '<option value="__NEW__">New...</option>';
        } else if (type === 'expense') {
            const allExpenseCategories = [...this.expenseCategories, ...this.customExpenseCategories];
            categorySelect.innerHTML = '<option value="">Select category...</option>' +
                allExpenseCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('') +
                '<option value="__NEW__">New...</option>';
        } else {
            categorySelect.innerHTML = '<option value="">Select type first...</option>';
        }

        // Add event listener for 'New...' option
        categorySelect.onchange = () => {
            if (categorySelect.value === '__NEW__') {
                this.openCustomCategoryModal();
            }
        };
    },

    // Add transaction
    addTransaction(event) {
        event.preventDefault();

        const transaction = {
            date: document.getElementById('transactionDate').value,
            type: document.getElementById('transactionType').value,
            category: document.getElementById('transactionCategory').value,
            description: document.getElementById('transactionDescription').value,
            amount: document.getElementById('transactionAmount').value
        };

        this.transactions.push(transaction);
        this.saveData();
        this.renderDashboard();
        this.renderTransactions();
        this.updateCurrentMonth();
        this.initializeCharts();

        this.closeModal('addTransactionModal');
    },

    // Delete transaction
    deleteTransaction(index) {
        if (confirm('Are you sure you want to delete this transaction?')) {
            // Sort to get the correct index
            const sorted = [...this.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
            const transaction = sorted[index];
            const originalIndex = this.transactions.indexOf(transaction);

            this.transactions.splice(originalIndex, 1);
            this.saveData();
            this.renderDashboard();
            this.renderTransactions();
            this.updateCurrentMonth();
            this.initializeCharts();
        }
    },

    // Add crop
    addCrop(event) {
        event.preventDefault();

        const category = document.getElementById('cropCategory').value;
        const crop = {
            type: document.getElementById('cropType').value,
            plantedDate: document.getElementById('cropPlantedDate').value,
            status: document.getElementById('cropStatus').value
        };

        if (category === 'fruit') {
            crop.count = parseInt(document.getElementById('cropCount').value);
            crop.expectedHarvest = 'TBD';
            this.fruitTrees.push(crop);
        } else {
            crop.area = parseFloat(document.getElementById('cropArea').value);
            crop.harvestDate = null;
            crop.yield = 0;
            this.cashCrops.push(crop);
        }

        this.saveData();
        this.renderCrops();
        this.closeModal('addCropModal');
    },

    // Delete fruit tree
    deleteFruitTree(index) {
        if (confirm('Are you sure you want to delete this fruit tree entry?')) {
            this.fruitTrees.splice(index, 1);
            this.saveData();
            this.renderCrops();
        }
    },

    // Delete cash crop
    deleteCashCrop(index) {
        if (confirm('Are you sure you want to delete this cash crop entry?')) {
            this.cashCrops.splice(index, 1);
            this.saveData();
            this.renderCrops();
        }
    },

    // Export transactions
    exportTransactions() {
        const csv = ['Date,Type,Category,Description,Amount'];
        this.transactions.forEach(t => {
            csv.push(`${t.date},${t.type},${t.category},"${t.description}",${t.amount}`);
        });

        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `maloure-farm-transactions-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    },

    // Generate reports
    generateFinancialReport() {
        const { income, expenses, netCashFlow } = this.calculateMetrics();
        const reportContent = document.getElementById('reportContent');
        const reportPreview = document.getElementById('reportPreview');

        reportContent.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center; color: var(--color-primary);">Financial Report</h1>
        <h3 style="text-align: center; color: var(--color-gray-600); margin-bottom: 2rem;">
          Maloure Farm - ${new Date().toLocaleDateString()}
        </h3>
        
        <div class="grid grid-3" style="margin-bottom: 2rem;">
          <div class="stat-card">
            <div class="stat-card-label">Total Revenue</div>
            <div class="stat-card-value">${this.formatCurrency(income)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">Total Expenses</div>
            <div class="stat-card-value">${this.formatCurrency(expenses)}</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-label">Net Profit</div>
            <div class="stat-card-value" style="color: ${netCashFlow >= 0 ? 'var(--color-success)' : 'var(--color-danger)'}">${this.formatCurrency(netCashFlow)}</div>
          </div>
        </div>
        
        <h3>Financial Summary</h3>
        <p><strong>Farm Area:</strong> ${this.farmData.area} hectares</p>
        <p><strong>Location:</strong> ${this.farmData.location}</p>
        <p><strong>Report Period:</strong> All time</p>
        <p><strong>Total Transactions:</strong> ${this.transactions.length}</p>
        
        <h3 style="margin-top: 2rem;">Profitability Analysis</h3>
        <p><strong>Profit Margin:</strong> ${income > 0 ? ((netCashFlow / income) * 100).toFixed(2) : 0}%</p>
        <p><strong>ROI Potential:</strong> ${netCashFlow >= 0 ? 'Positive' : 'Needs improvement'}</p>
        
        <h3 style="margin-top: 2rem;">Investment Highlights</h3>
        <ul>
          <li>Strategic location in Maloure village with excellent agricultural potential</li>
          <li>Diversified crop portfolio reducing risk</li>
          <li>${this.farmData.area} hectares of productive farmland</li>
          <li>Modern farm management system in place</li>
        </ul>
      </div>
    `;

        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    generateOperationsReport() {
        const reportContent = document.getElementById('reportContent');
        const reportPreview = document.getElementById('reportPreview');

        reportContent.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center; color: var(--color-primary);">Operations Report</h1>
        <h3 style="text-align: center; color: var(--color-gray-600); margin-bottom: 2rem;">
          Maloure Farm - ${new Date().toLocaleDateString()}
        </h3>
        
        <h3>Farm Overview</h3>
        <p><strong>Total Area:</strong> ${this.farmData.area} hectares</p>
        <p><strong>Location:</strong> ${this.farmData.location}</p>
        <p><strong>Coordinates:</strong> ${this.farmData.centerCoordinates.lat}, ${this.farmData.centerCoordinates.lng}</p>
        
        <h3 style="margin-top: 2rem;">Land Utilization</h3>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Area (ha)</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Fruit Trees</td><td>${this.farmData.zones.fruitTrees.area}</td><td>${this.farmData.zones.fruitTrees.percentage}%</td></tr>
              <tr><td>Cash Crops</td><td>${this.farmData.zones.cashCrops.area}</td><td>${this.farmData.zones.cashCrops.percentage}%</td></tr>
              <tr><td>Farm House</td><td>${this.farmData.zones.farmHouse.area}</td><td>${this.farmData.zones.farmHouse.percentage}%</td></tr>
              <tr><td>Residential</td><td>${this.farmData.zones.residential.area}</td><td>${this.farmData.zones.residential.percentage}%</td></tr>
            </tbody>
          </table>
        </div>
        
        <h3 style="margin-top: 2rem;">Crop Inventory</h3>
        <p><strong>Fruit Trees:</strong> ${this.fruitTrees.length} varieties planted</p>
        <p><strong>Cash Crops:</strong> ${this.cashCrops.length} types cultivated</p>
        
        <h3 style="margin-top: 2rem;">Operational Capacity</h3>
        <ul>
          <li>Modern tracking and management systems</li>
          <li>Diversified crop production</li>
          <li>On-site infrastructure (farm house, residential area)</li>
          <li>Sustainable farming practices</li>
        </ul>
      </div>
    `;

        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    generateInvestorPresentation() {
        const { income, expenses, netCashFlow } = this.calculateMetrics();
        const reportContent = document.getElementById('reportContent');
        const reportPreview = document.getElementById('reportPreview');

        reportContent.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <h1 style="text-align: center; color: var(--color-primary); font-size: 2.5rem;">
          Investment Opportunity
        </h1>
        <h2 style="text-align: center; color: var(--color-secondary); margin-bottom: 3rem;">
          Maloure Farm, Njimoun Subdivision
        </h2>
        
        <div class="card-glass" style="padding: 2rem; margin-bottom: 2rem;">
          <h3 style="color: var(--color-primary);">Executive Summary</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">
            Maloure Farm is a ${this.farmData.area}-hectare agricultural enterprise located in the fertile 
            Maloure village of Njimoun subdivision, Foumban. With strategic crop diversification 
            spanning fruit trees and high-value cash crops, the farm presents a compelling 
            investment opportunity in sustainable agriculture.
          </p>
        </div>
        
        <h3 style="color: var(--color-primary);">Key Investment Highlights</h3>
        <div class="grid grid-2" style="margin-bottom: 2rem;">
          <div class="stat-card">
            <div class="stat-card-icon">📍</div>
            <div class="stat-card-label">Prime Location</div>
            <div class="stat-card-value">${this.farmData.area} ha</div>
            <p class="text-muted" style="margin-top: 0.5rem; font-size: 0.9rem;">
              Strategic location in Foumban's agricultural heartland
            </p>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">💰</div>
            <div class="stat-card-label">Financial Performance</div>
            <div class="stat-card-value">${this.formatCurrency(netCashFlow)}</div>
            <p class="text-muted" style="margin-top: 0.5rem; font-size: 0.9rem;">
              Net cash flow to date
            </p>
          </div>
        </div>
        
        <h3 style="color: var(--color-primary);">Crop Portfolio</h3>
        <ul style="font-size: 1.1rem; line-height: 2;">
          <li><strong>Fruit Trees:</strong> Premium avocado and lemon cultivation (${this.farmData.zones.fruitTrees.area} ha)</li>
          <li><strong>Cash Crops:</strong> High-demand cassava, ginger, and pepper (${this.farmData.zones.cashCrops.area} ha)</li>
          <li><strong>Infrastructure:</strong> Modern farm house and residential facilities</li>
        </ul>
        
        <h3 style="color: var(--color-primary); margin-top: 2rem;">Financial Overview</h3>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Total Revenue</td><td><strong>${this.formatCurrency(income)}</strong></td></tr>
              <tr><td>Total Expenses</td><td><strong>${this.formatCurrency(expenses)}</strong></td></tr>
              <tr><td>Net Cash Flow</td><td><strong style="color: ${netCashFlow >= 0 ? 'var(--color-success)' : 'var(--color-danger)'};">${this.formatCurrency(netCashFlow)}</strong></td></tr>
              <tr><td>Profit Margin</td><td><strong>${income > 0 ? ((netCashFlow / income) * 100).toFixed(2) : 0}%</strong></td></tr>
            </tbody>
          </table>
        </div>
        
        <h3 style="color: var(--color-primary); margin-top: 2rem;">Why Invest?</h3>
        <div class="grid grid-2">
          <div>
            <h4>✅ Strategic Advantages</h4>
            <ul>
              <li>Prime agricultural land</li>
              <li>Established infrastructure</li>
              <li>Diversified crop portfolio</li>
              <li>Professional management</li>
            </ul>
          </div>
          <div>
            <h4>📈 Growth Potential</h4>
            <ul>
              <li>Expanding market demand</li>
              <li>Scalable operations</li>
              <li>Sustainable practices</li>
              <li>Export opportunities</li>
            </ul>
          </div>
        </div>
        
        <div class="card-glass" style="padding: 2rem; margin-top: 2rem; text-align: center;">
          <h3 style="color: var(--color-primary);">Contact Information</h3>
          <p style="font-size: 1.1rem;">
            <strong>Maloure Farm</strong><br>
            Maloure Village, Njimoun Subdivision, Foumban<br>
            Coordinates: ${this.farmData.centerCoordinates.lat}, ${this.farmData.centerCoordinates.lng}
          </p>
        </div>
      </div>
    `;

        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    // Setup smooth scroll navigation
    setupNavigation() {
        document.querySelectorAll('.navbar-nav a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Update active link
                    document.querySelectorAll('.navbar-nav a').forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    },

    // Utility functions
    formatCurrency(amount) {
        return parseFloat(amount).toLocaleString('fr-FR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }) + ' XAF';
    },

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },

    getStatusColor(status) {
        const colors = {
            'planted': 'info',
            'growing': 'success',
            'flowering': 'warning',
            'fruiting': 'success',
            'ready': 'warning',
            'harvested': 'success'
        };
        return colors[status] || 'info';
    },

    // Create new farm
    openCreateFarmModal() {
        document.getElementById('createFarmModal').classList.add('active');
        document.getElementById('farmForm').reset();
    },

    createNewFarm(event) {
        event.preventDefault();

        // Get form values
        const boundariesText = document.getElementById('newFarmBoundaries').value.trim();
        let boundaries = [];

        // Parse boundaries if provided
        if (boundariesText) {
            const lines = boundariesText.split('\n').filter(line => line.trim());
            for (const line of lines) {
                const parts = line.trim().split(',');
                if (parts.length === 2) {
                    const lat = parseFloat(parts[0].trim());
                    const lng = parseFloat(parts[1].trim());
                    if (!isNaN(lat) && !isNaN(lng)) {
                        boundaries.push({ lat, lng });
                    }
                }
            }
        }

        const farmName = document.getElementById('newFarmName').value;
        const farmId = farmName.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();

        const newFarm = {
            id: farmId,
            name: farmName,
            location: document.getElementById('newFarmLocation').value,
            area: parseFloat(document.getElementById('newFarmArea').value),
            perimeter: parseFloat(document.getElementById('newFarmPerimeter').value) || 0,
            centerCoordinates: {
                lat: parseFloat(document.getElementById('newFarmLat').value),
                lng: parseFloat(document.getElementById('newFarmLng').value)
            },
            boundaries: boundaries,
            zones: {
                fruitTrees: { area: 0, percentage: 0 },
                cashCrops: { area: 0, percentage: 0 },
                farmHouse: { area: 0, percentage: 0 },
                residential: { area: 0, percentage: 0 }
            },
            transactions: [],
            fruitTrees: [],
            cashCrops: [],
            customExpenseCategories: [],
            customIncomeCategories: []
        };

        // Add new farm to farms array
        this.farms.push(newFarm);

        // Switch to the new farm
        this.currentFarmId = farmId;

        // Save to localStorage
        this.saveData();

        // Update UI
        document.getElementById('farmNameDisplay').textContent = newFarm.name;
        this.renderDashboard();
        this.renderFarmMap();
        this.renderTransactions();
        this.renderCrops();
        this.initializeCharts();
        this.updateFarmSelector();

        this.closeModal('createFarmModal');
        alert(`Farm "${newFarm.name}" created successfully! You are now managing this farm.`);
    },

    // Handle farm dropdown selection (includes create option)
    handleFarmDropdown(value) {
        if (value === 'create-new') {
            // Open create farm modal
            this.openCreateFarmModal();
            // Reset dropdown to current farm
            setTimeout(() => {
                const selector = document.getElementById('farmSelector');
                if (selector) {
                    selector.value = this.currentFarmId;
                }
            }, 100);
        } else if (value && value !== '') {
            // Switch to selected farm
            this.switchFarm(value);
        }
    },

    // Switch between farms
    switchFarm(farmId) {
        const farm = this.farms.find(f => f.id === farmId);
        if (!farm) {
            alert('Farm not found!');
            return;
        }

        this.currentFarmId = farmId;
        this.saveData();

        // Update UI
        document.getElementById('farmNameDisplay').textContent = farm.name;
        this.renderDashboard();
        this.renderFarmMap();
        this.renderTransactions();
        this.renderCrops();
        this.initializeCharts();
        this.updateCurrentMonth();
        this.updateFarmSelector();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // Update farm selector dropdown
    updateFarmSelector() {
        const selector = document.getElementById('farmSelector');
        if (!selector) return;

        // Build options: placeholder, farms, then create option
        const options = ['<option value="">Select Farm ▼</option>'];
        options.push(...this.farms.map(farm =>
            `<option value="${farm.id}" ${farm.id === this.currentFarmId ? 'selected' : ''}>${farm.name}</option>`
        ));
        options.push('<option value="create-new">➕ Create New Farm</option>');

        selector.innerHTML = options.join('');
        selector.value = this.currentFarmId;
    },

    // Custom category management
    openCustomCategoryModal() {
        document.getElementById('customCategoryModal').classList.add('active');
        document.getElementById('customCategoryForm').reset();
    },

    addCustomCategory(event) {
        event.preventDefault();

        const categoryName = document.getElementById('customCategoryName').value.trim();

        if (!categoryName) {
            alert('Please enter a category name');
            return;
        }

        // Add to appropriate category array based on current transaction type
        if (this.currentTransactionType === 'income') {
            if (!this.customIncomeCategories.includes(categoryName)) {
                this.customIncomeCategories.push(categoryName);
            }
        } else if (this.currentTransactionType === 'expense') {
            if (!this.customExpenseCategories.includes(categoryName)) {
                this.customExpenseCategories.push(categoryName);
            }
        }

        // Save custom categories
        this.saveData();

        // Refresh category dropdown
        this.updateCategoryOptions();

        // Set the newly added category as selected
        document.getElementById('transactionCategory').value = categoryName;

        // Close modal
        this.closeModal('customCategoryModal');
    },

    // Calculate area from boundary coordinates using Shoelace formula
    calculateAreaFromBoundaries() {
        const boundariesText = document.getElementById('newFarmBoundaries').value.trim();

        if (!boundariesText) {
            alert('Please enter boundary coordinates first');
            return;
        }

        try {
            // Parse coordinates
            const lines = boundariesText.split('\n').filter(line => line.trim());
            const coordinates = [];

            for (const line of lines) {
                const parts = line.trim().split(',');
                if (parts.length === 2) {
                    const lat = parseFloat(parts[0].trim());
                    const lng = parseFloat(parts[1].trim());
                    if (!isNaN(lat) && !isNaN(lng)) {
                        coordinates.push({ lat, lng });
                    }
                }
            }

            if (coordinates.length < 3) {
                alert('Please provide at least 3 coordinate points');
                return;
            }

            // Calculate area using Shoelace formula (in square meters)
            // Then convert to hectares
            const areaInSquareMeters = this.calculatePolygonArea(coordinates);
            const areaInHectares = areaInSquareMeters / 10000;

            // Update the area field
            document.getElementById('newFarmArea').value = areaInHectares.toFixed(4);

            // Calculate center point
            const center = this.calculateCentroid(coordinates);
            document.getElementById('newFarmLat').value = center.lat.toFixed(6);
            document.getElementById('newFarmLng').value = center.lng.toFixed(6);

            // Show success message
            document.getElementById('calculatedAreaDisplay').textContent =
                `✓ Calculated: ${areaInHectares.toFixed(4)} ha from ${coordinates.length} points`;

        } catch (error) {
            alert('Error parsing coordinates. Please ensure format is: lat,lng (one per line)');
            console.error(error);
        }
    },

    // Calculate polygon area using Shoelace formula
    calculatePolygonArea(coordinates) {
        if (coordinates.length < 3) return 0;

        // Earth's radius in meters
        const R = 6371000;

        // Convert coordinates to Cartesian
        let area = 0;

        for (let i = 0; i < coordinates.length; i++) {
            const j = (i + 1) % coordinates.length;

            const lat1 = coordinates[i].lat * Math.PI / 180;
            const lat2 = coordinates[j].lat * Math.PI / 180;
            const lng1 = coordinates[i].lng * Math.PI / 180;
            const lng2 = coordinates[j].lng * Math.PI / 180;

            area += (lng2 - lng1) * (2 + Math.sin(lat1) + Math.sin(lat2));
        }

        area = Math.abs(area * R * R / 2);
        return area;
    },

    // Calculate centroid of polygon
    calculateCentroid(coordinates) {
        let latSum = 0;
        let lngSum = 0;

        coordinates.forEach(coord => {
            latSum += coord.lat;
            lngSum += coord.lng;
        });

        return {
            lat: latSum / coordinates.length,
            lng: lngSum / coordinates.length
        };
    },

    // Extract coordinates from uploaded file (PDF or Image)
    async extractCoordinatesFromFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        const fileType = file.type;
        let extractedText = '';

        try {
            if (fileType.includes('pdf')) {
                extractedText = await this.extractTextFromPDF(file);
            } else if (fileType.includes('image')) {
                extractedText = await this.extractTextFromImage(file);
            } else {
                alert('Please upload a PDF or image file');
                return;
            }

            // Parse coordinates from extracted text
            const coordinates = this.parseCoordinatesFromText(extractedText);

            if (coordinates.length > 0) {
                // Populate the boundary coordinates field
                const boundariesInput = document.getElementById('newFarmBoundaries');
                if (boundariesInput) {
                    boundariesInput.value = coordinates.map(c => `${c.lat},${c.lng}`).join('\n');
                    alert(`✓ Extracted ${coordinates.length} coordinate points from file!`);
                } else {
                    alert(`Extracted ${coordinates.length} coordinates:\n\n` +
                        coordinates.slice(0, 5).map(c => `${c.lat}, ${c.lng}`).join('\n') +
                        (coordinates.length > 5 ? '\n...' : ''));
                }
            } else {
                alert('No valid coordinates found in the file');
            }
        } catch (error) {
            console.error('Error extracting coordinates:', error);
            alert('Error processing file: ' + error.message);
        }
    },

    // Extract text from PDF using PDF.js
    async extractTextFromPDF(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = async function () {
                try {
                    const typedarray = new Uint8Array(this.result);
                    const pdf = await pdfjsLib.getDocument(typedarray).promise;
                    let fullText = '';

                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items.map(item => item.str).join(' ');
                        fullText += pageText + ' ';
                    }
                    resolve(fullText);
                } catch (error) {
                    reject(error);
                }
            };

            fileReader.onerror = () => reject(new Error('Failed to read PDF file'));
            fileReader.readAsArrayBuffer(file);
        });
    },

    // Extract text from image using Tesseract.js (OCR)
    async extractTextFromImage(file) {
        const { data: { text } } = await Tesseract.recognize(file, 'eng', {
            logger: m => console.log(m)
        });
        return text;
    },

    // Parse coordinates from text using regex
    parseCoordinatesFromText(text) {
        const coordinates = [];

        // Regex patterns for different coordinate formats
        // Matches: "5.916982, 11.043742" or "5.916982,11.043742" or "lat: 5.916982, lng: 11.043742"
        const patterns = [
            /([0-9]+\.[0-9]+)\s*,\s*([0-9]+\.[0-9]+)/g,  // Simple: lat, lng
            /lat[itude]*:\s*([0-9]+\.[0-9]+)\s*,?\s*lng|lon[gitude]*:\s*([0-9]+\.[0-9]+)/gi  // With labels
        ];

        for (const pattern of patterns) {
            let match;
            while ((match = pattern.exec(text)) !== null) {
                const lat = parseFloat(match[1]);
                const lng = parseFloat(match[2]);

                // Basic validation (rough bounds for Cameroon region)
                if (!isNaN(lat) && !isNaN(lng) &&
                    lat >= -90 && lat <= 90 &&
                    lng >= -180 && lng <= 180) {
                    coordinates.push({ lat, lng });
                }
            }

            if (coordinates.length > 0) break;
        }

        // Remove duplicates
        const uniqueCoords = [];
        const seen = new Set();
        for (const coord of coordinates) {
            const key = `${coord.lat.toFixed(6)},${coord.lng.toFixed(6)}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueCoords.push(coord);
            }
        }

        return uniqueCoords;
    },

    // Toggle crop allocation mode - opens modal for manual section input
    toggleDrawingMode() {
        // Open the section modal directly
        const modal = document.getElementById('sectionModal');
        if (modal) {
            // Clear the form
            document.getElementById('sectionForm').reset();
            modal.classList.add('active');
        }

        // Switch to graphical view and show sections table
        this.toggleMapView('graphical');
        const tableContainer = document.getElementById('sectionsTableContainer');
        if (tableContainer) {
            tableContainer.style.display = 'block';
        }
    },

    // Handle polygon complete event
    onPolygonComplete(polygon) {
        this.currentPolygon = polygon;
        const coords = polygon.getPath().getArray().map(p => ({ lat: p.lat(), lng: p.lng() }));
        const areaInSquareMeters = this.calculatePolygonArea(coords);
        const areaInHectares = areaInSquareMeters / 10000;

        // Store calculated area for the modal
        this.currentSectionArea = areaInHectares;

        // Turn off drawing mode
        this.drawingManager.setDrawingMode(null);
        const btn = document.getElementById('drawSectionBtn');
        btn.textContent = '✏️ Draw New Section';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-primary');

        // Show section configuration modal
        document.getElementById('sectionModal').classList.add('active');
        document.getElementById('sectionForm').reset();
    },

    // Save farm section with manual area input
    saveFarmSection(event) {
        event.preventDefault();

        const farm = this.getCurrentFarm();
        const sectionId = document.getElementById('sectionId').value;
        const name = document.getElementById('sectionName').value;
        const type = document.getElementById('sectionType').value;
        const crop = document.getElementById('sectionCrop').value;
        const color = document.getElementById('sectionColor').value;
        const areaInput = document.getElementById('sectionArea');

        // Check if area field exists and has value
        if (!areaInput || !areaInput.value) {
            alert('Please enter the area in hectares.');
            return;
        }

        const area = parseFloat(areaInput.value);

        if (isNaN(area) || area <= 0) {
            alert('Please enter a valid area greater than 0.');
            return;
        }

        // Calculate percentage of total farm area
        const percentage = ((area / farm.area) * 100).toFixed(1);

        // Generate simple boundaries for graphical visualization
        const index = farm.sections ? farm.sections.length : 0;
        const baseOffset = index * 0.0005;
        const boundaries = [
            { lat: 5.916 + baseOffset, lng: 11.043 },
            { lat: 5.917 + baseOffset, lng: 11.043 },
            { lat: 5.917 + baseOffset, lng: 11.044 },
            { lat: 5.916 + baseOffset, lng: 11.044 }
        ];

        if (sectionId) {
            // Update existing section
            const section = farm.sections.find(s => s.id === sectionId);
            if (section) {
                section.name = name;
                section.type = type;
                section.crop = crop;
                section.color = color;
                section.area = area;
                section.percentage = percentage;
            }
        } else {
            // Add new section
            if (!farm.sections) {
                farm.sections = [];
            }
            const newSection = {
                id: 'section_' + Date.now(),
                name: name,
                type: type,
                crop: crop,
                color: color,
                area: area,
                percentage: percentage,
                boundaries: boundaries
            };
            farm.sections.push(newSection);
        }

        this.saveData();
        this.renderFarmSectionsTable();
        this.renderGraphicalMap();
        this.closeModal('sectionModal');

        // Clear form
        document.getElementById('sectionForm').reset();

        alert(`Section "${name}" saved!\nArea: ${area} ha (${percentage}% of farm)`);
    },

    // Render farm sections on map
    renderFarmSections() {
        if (!this.map || !this.getCurrentFarm().sections) return;

        // Clear existing section polygons
        if (this.sectionPolygons) {
            this.sectionPolygons.forEach(sp => sp.polygon.setMap(null));
        }
        this.sectionPolygons = [];

        // Render each section
        this.getCurrentFarm().sections.forEach(section => {
            const polygon = new google.maps.Polygon({
                paths: section.boundaries,
                strokeColor: section.color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: section.color,
                fillOpacity: 0.4,
                editable: false,
                clickable: true,
                zIndex: 2
            });

            polygon.setMap(this.map);

            // Add info window for section
            const infoContent = `
                <div style="padding: 0.5rem; font-family: Inter, sans-serif;">
                    <h4 style="margin: 0 0 0.5rem 0; color: ${section.color};">${section.name}</h4>
                    <p style="margin: 0.25rem 0;"><strong>Type:</strong> ${section.type.replace('-', ' ')}</p>
                    ${section.cropType ? `<p style="margin: 0.25rem 0;"><strong>Crop:</strong> ${section.cropType}</p>` : ''}
                    <p style="margin: 0.25rem 0;"><strong>Area:</strong> ${section.area.toFixed(4)} ha (${section.percentage.toFixed(1)}%)</p>
                    ${section.notes ? `<p style="margin: 0.25rem 0;"><strong>Notes:</strong> ${section.notes}</p>` : ''}
                </div>
            `;

            const infoWindow = new google.maps.InfoWindow({ content: infoContent });

            polygon.addListener('click', () => {
                infoWindow.setPosition(section.boundaries[0]);
                infoWindow.open(this.map);
            });

            this.sectionPolygons.push({
                id: section.id,
                polygon: polygon
            });
        });

        // Update table
        this.renderFarmSectionsTable();
    },

    // Render sections table
    renderFarmSectionsTable() {
        const tbody = document.getElementById('farmSectionsTable');
        if (!tbody) return;

        const sections = this.getCurrentFarm().sections || [];

        if (sections.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No sections defined yet. Click "Draw New Section" to start.</td></tr>';
            return;
        }

        tbody.innerHTML = sections.map(section => `
            <tr>
                <td><div style="width: 30px; height: 30px; background: ${section.color}; border-radius: 4px; border: 1px solid #ccc;"></div></td>
                <td><strong>${section.name}</strong></td>
                <td>${section.type.replace('-', ' ')}</td>
                <td>${section.cropType || '-'}</td>
                <td>${section.area.toFixed(4)}</td>
                <td>${section.percentage.toFixed(1)}%</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="app.deleteSection('${section.id}')" title="Delete section">🗑️</button>
                </td>
            </tr>
        `).join('');
    },

    // Delete section
    deleteSection(sectionId) {
        if (!confirm('Delete this section?')) return;

        const farm = this.getCurrentFarm();
        farm.sections = farm.sections.filter(s => s.id !== sectionId);

        // Remove polygon from map
        const polygonRef = this.sectionPolygons.find(sp => sp.id === sectionId);
        if (polygonRef) {
            polygonRef.polygon.setMap(null);
            this.sectionPolygons = this.sectionPolygons.filter(sp => sp.id !== sectionId);
        }

        this.saveData();
        this.renderFarmSectionsTable();
        alert('Section deleted successfully');
    },

    // Toggle between satellite and graphical map views
    toggleMapView(viewType) {
        const satelliteBtn = document.getElementById('satelliteViewBtn');
        const graphicalBtn = document.getElementById('graphicalViewBtn');
        const mapDiv = document.getElementById('farmMap');
        const canvas = document.getElementById('farmMapCanvas');

        // If Google Maps is not available and user tries satellite, switch to graphical
        if (viewType === 'satellite' && !this.googleMap) {
            alert('Google Maps API is not available. Please add your API key in index.html to use Satellite View.\n\nUsing Graphical View instead.');
            viewType = 'graphical';
        }

        if (viewType === 'satellite') {
            mapDiv.style.display = 'block';
            canvas.style.display = 'none';
            satelliteBtn.classList.remove('btn-outline');
            satelliteBtn.classList.add('btn-secondary');
            graphicalBtn.classList.remove('btn-secondary');
            graphicalBtn.classList.add('btn-outline');
            this.currentMapView = 'satellite';
        } else {
            mapDiv.style.display = 'none';
            canvas.style.display = 'block';
            graphicalBtn.classList.remove('btn-outline');
            graphicalBtn.classList.add('btn-secondary');
            satelliteBtn.classList.remove('btn-secondary');
            satelliteBtn.classList.add('btn-outline');
            this.currentMapView = 'graphical';
            this.renderGraphicalMap();
        }
    },

    // Render graphical representation on canvas
    renderGraphicalMap() {
        const canvas = document.getElementById('farmMapCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw background
        ctx.fillStyle = '#f8faf9';
        ctx.fillRect(0, 0, width, height);

        if (!this.farmData.boundaries || this.farmData.boundaries.length === 0) {
            ctx.fillStyle = '#666';
            ctx.font = '20px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('No farm boundaries defined', width / 2, height / 2);
            return;
        }

        // Calculate bounds
        const lats = this.farmData.boundaries.map(b => b.lat);
        const lngs = this.farmData.boundaries.map(b => b.lng);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLng = Math.min(...lngs);
        const maxLng = Math.max(...lngs);

        // Add padding
        const padding = 60;
        const mapWidth = width - 2 * padding;
        const mapHeight = height - 2 * padding;

        // Scale functions
        const scaleX = (lng) => padding + ((lng - minLng) / (maxLng - minLng)) * mapWidth;
        const scaleY = (lat) => height - padding - ((lat - minLat) / (maxLat - minLat)) * mapHeight;

        // Draw grid
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 10; i++) {
            const x = padding + (i / 10) * mapWidth;
            const y = padding + (i / 10) * mapHeight;
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, height - padding);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }

        // Draw farm boundary
        ctx.beginPath();
        ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;

        this.farmData.boundaries.forEach((coord, i) => {
            const x = scaleX(coord.lng);
            const y = scaleY(coord.lat);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw sections if they exist
        const sections = this.getCurrentFarm().sections || [];
        sections.forEach(section => {
            if (section.boundaries && section.boundaries.length > 0) {
                ctx.beginPath();
                ctx.fillStyle = section.color + '66'; // Add transparency
                ctx.strokeStyle = section.color;
                ctx.lineWidth = 2;

                section.boundaries.forEach((coord, i) => {
                    const x = scaleX(coord.lng);
                    const y = scaleY(coord.lat);
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                });

                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Add section label at center
                if (section.boundaries.length > 2) {
                    const centerLat = section.boundaries.reduce((sum, c) => sum + c.lat, 0) / section.boundaries.length;
                    const centerLng = section.boundaries.reduce((sum, c) => sum + c.lng, 0) / section.boundaries.length;
                    const centerX = scaleX(centerLng);
                    const centerY = scaleY(centerLat);

                    ctx.fillStyle = '#fff';
                    ctx.strokeStyle = section.color;
                    ctx.lineWidth = 1;

                    // Draw label background
                    const labelText = section.name;
                    ctx.font = 'bold 14px Inter, sans-serif';
                    const textWidth = ctx.measureText(labelText).width;
                    ctx.fillRect(centerX - textWidth / 2 - 4, centerY - 10, textWidth + 8, 20);
                    ctx.strokeRect(centerX - textWidth / 2 - 4, centerY - 10, textWidth + 8, 20);

                    // Draw label text
                    ctx.fillStyle = section.color;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(labelText, centerX, centerY);
                }
            }
        });

        // Draw center point
        const centerX = scaleX(this.farmData.centerCoordinates.lng);
        const centerY = scaleY(this.farmData.centerCoordinates.lat);

        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#cc0000';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add title and info
        ctx.fillStyle = '#333';
        ctx.font = 'bold 18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.farmData.name, width / 2, 30);

        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`Area: ${this.farmData.area} ha`, padding, padding - 30);
        ctx.textAlign = 'right';
        ctx.fillText(`Sections: ${sections.length}`, width - padding, padding - 30);

        // Add legend if there are sections
        if (sections.length > 0) {
            const legendX = width - padding - 150;
            let legendY = padding + 20;

            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.strokeStyle = '#ccc';
            ctx.lineWidth = 1;
            ctx.fillRect(legendX, legendY, 140, sections.length * 25 + 20);
            ctx.strokeRect(legendX, legendY, 140, sections.length * 25 + 20);

            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('Sections', legendX + 10, legendY + 15);

            legendY += 25;
            ctx.font = '11px Inter, sans-serif';

            sections.forEach((section, i) => {
                // Color box
                ctx.fillStyle = section.color;
                ctx.fillRect(legendX + 10, legendY + i * 20, 15, 15);
                ctx.strokeStyle = '#666';
                ctx.strokeRect(legendX + 10, legendY + i * 20, 15, 15);

                // Label
                ctx.fillStyle = '#333';
                ctx.fillText(section.name.substring(0, 12), legendX + 30, legendY + i * 20 + 11);
            });
        }
    }
};

// ===================================
// Language Management Functions
// ===================================

// Translation helper function
app.t = function (key) {
    const keys = key.split('.');
    let value = translations[this.currentLanguage];

    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }

    return value;
};

// Set language and update UI
app.setLanguage = function (lang) {
    if (!translations[lang]) {
        console.error(`Language not supported: ${lang}`);
        return;
    }

    this.currentLanguage = lang;
    localStorage.setItem('farmLanguage', lang);
    this.updateAllText();

    // Update language selector
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.value = lang;
    }
};

// Update all text in the interface
app.updateAllText = function () {
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = this.t('nav.dashboard');
    if (navLinks[1]) navLinks[1].textContent = this.t('nav.farmInfo');
    if (navLinks[2]) navLinks[2].textContent = this.t('nav.financial');
    if (navLinks[3]) navLinks[3].textContent = this.t('nav.crops');
    if (navLinks[4]) navLinks[4].textContent = this.t('nav.reports');

    // Update current section based on active tab
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        const href = activeLink.getAttribute('href');
        if (href === '#dashboard') {
            this.updateDashboardText();
        } else if (href === '#farm-info') {
            this.updateFarmInfoText();
        } else if (href === '#financial') {
            this.updateFinancialText();
        } else if (href === '#crops') {
            this.updateCropsText();
        } else if (href === '#reports') {
            this.updateReportsText();
        }
    }

    // Update coordinate editor if modal is open
    const coordModal = document.getElementById('coordinateEditorModal');
    if (coordModal && coordModal.classList.contains('active')) {
        this.updateCoordinateEditorText();
    }
};

// Update Farm Info section text
app.updateFarmInfoText = function () {
    const section = document.getElementById('farm-info');
    if (!section) return;

    // Update section title
    const sectionTitle = section.querySelector('.section-title');
    if (sectionTitle) sectionTitle.textContent = this.t('farmInfo.title');

    // Update card titles
    const locationCard = section.querySelector('.card-header');
    if (locationCard && locationCard.textContent.includes('Location') || locationCard.textContent.includes('Emplacement')) {
        locationCard.innerHTML = `<h3 class="card-title">📍 ${this.t('farmInfo.locationSpecs')}</h3>`;
    }

    // Update map buttons
    const satelliteBtn = document.getElementById('satelliteViewBtn');
    if (satelliteBtn) satelliteBtn.innerHTML = `🛰️ ${this.t('farmInfo.satelliteView')}`;

    const graphicalBtn = document.getElementById('graphicalViewBtn');
    if (graphicalBtn) graphicalBtn.innerHTML = `📊 ${this.t('farmInfo.graphicalView')}`;

    const editCoordsBtn = section.querySelector('button[onclick*="openCoordinateEditorModal"]');
    if (editCoordsBtn) editCoordsBtn.innerHTML = `✏️ ${this.t('farmInfo.editCoordinates')}`;

    const uploadBtn = section.querySelector('button[onclick*="coordinateUploadInput"]');
    if (uploadBtn) uploadBtn.innerHTML = `📤 ${this.t('farmInfo.upload')}`;

    const allocBtn = document.getElementById('drawSectionBtn');
    if (allocBtn) allocBtn.innerHTML = `📐 ${this.t('farmInfo.cropAllocation')}`;
};

// Update Coordinate Editor modal text
app.updateCoordinateEditorText = function () {
    // Modal title
    const modalTitle = document.querySelector('#coordinateEditorModal .modal-title');
    if (modalTitle) modalTitle.textContent = `✏️ ${this.t('coordEditor.title')}`;

    // Instruction text
    const instruction = document.querySelector('#coordinateEditorModal .modal-body > p');
    if (instruction) instruction.textContent = this.t('coordEditor.instruction');

    // Add New Point section
    const addPointHeader = document.querySelector('#coordinateEditorModal .card-header h4');
    if (addPointHeader && addPointHeader.textContent.includes('Add') || addPointHeader.textContent.includes('Ajouter')) {
        addPointHeader.textContent = `➕ ${this.t('coordEditor.addNewPoint')}`;
    }

    // Bulk Import section
    const bulkHeaders = document.querySelectorAll('#coordinateEditorModal .card-header h4');
    if (bulkHeaders[1]) {
        bulkHeaders[1].textContent = `📋 ${this.t('coordEditor.bulkImport')}`;
    }

    // Table header
    const tableHeaders = document.querySelectorAll('#coordinateEditorModal thead th');
    if (tableHeaders[0]) tableHeaders[0].textContent = this.t('coordEditor.tableHeader.index');
    if (tableHeaders[1]) tableHeaders[1].textContent = this.t('coordEditor.tableHeader.latitude');
    if (tableHeaders[2]) tableHeaders[2].textContent = this.t('coordEditor.tableHeader.longitude');
    if (tableHeaders[3]) tableHeaders[3].textContent = this.t('coordEditor.tableHeader.actions');

    // Buttons
    const addPointBtn = document.querySelector('button[onclick="app.addCoordinatePoint()"]');
    if (addPointBtn) addPointBtn.innerHTML = `➕ ${this.t('coordEditor.addPoint')}`;

    const importBtn = document.querySelector('button[onclick="app.importBulkCoordinates()"]');
    if (importBtn) importBtn.innerHTML = `📥 ${this.t('coordEditor.importCoords')}`;

    const clearAllBtn = document.querySelector('button[onclick="app.clearAllCoordinates()"]');
    if (clearAllBtn) clearAllBtn.innerHTML = `🗑️ ${this.t('coordEditor.clearAll')}`;

    const cancelBtn = document.querySelector('#coordinateEditorModal button[onclick*="closeModal"]');
    if (cancelBtn) cancelBtn.textContent = this.t('coordEditor.cancel');

    const saveBtn = document.getElementById('saveCoordinatesBtn');
    if (saveBtn) saveBtn.innerHTML = `💾 ${this.t('coordEditor.saveChanges')}`;

    // Re-render the coordinates table to update delete buttons
    this.renderCoordinatesTable();
};

// Update Dashboard section text
app.updateDashboardText = function () {
    const section = document.getElementById('dashboard');
    if (!section) return;

    // Update section title (uses h1.text-center, NOT .section-title)
    const sectionTitle = section.querySelector('h1');
    if (sectionTitle) sectionTitle.textContent = this.t('dashboard.title');

    // Update stat card labels
    const statLabels = section.querySelectorAll('.stat-card-label');
    if (statLabels[0]) statLabels[0].textContent = this.t('dashboard.totalArea');
    if (statLabels[1]) statLabels[1].textContent = this.t('dashboard.totalRevenue');
    if (statLabels[2]) statLabels[2].textContent = this.t('dashboard.totalExpenses');
    if (statLabels[3]) statLabels[3].textContent = this.t('dashboard.netCashFlow');

    // Update chart titles
    const chartTitles = section.querySelectorAll('.card-title');
    if (chartTitles[0]) chartTitles[0].textContent = this.t('dashboard.cashFlowTrend');
    if (chartTitles[1]) chartTitles[1].textContent = this.t('dashboard.landUtilization');
    if (chartTitles[2]) chartTitles[2].textContent = this.t('dashboard.recentTransactions');

    // Update "Add Transaction" button
    const addTransactionBtn = section.querySelector('button[onclick*=\"openAddTransactionModal\"]');
    if (addTransactionBtn) addTransactionBtn.innerHTML = `➕ ${this.t('dashboard.addTransaction')}`;

    // Update table headers
    const tableHeaders = section.querySelectorAll('#recentTransactionsTable thead th');
    if (tableHeaders[0]) tableHeaders[0].textContent = this.t('dashboard.date');
    if (tableHeaders[1]) tableHeaders[1].textContent = this.t('dashboard.type');
    if (tableHeaders[2]) tableHeaders[2].textContent = this.t('dashboard.category');
    if (tableHeaders[3]) tableHeaders[3].textContent = this.t('dashboard.description');
    if (tableHeaders[4]) tableHeaders[4].textContent = this.t('dashboard.amount');
};

// Update Financial section text
app.updateFinancialText = function () {
    const section = document.getElementById('financial');
    if (!section) return;

    // Update section title
    const sectionTitle = section.querySelector('h2');
    if (sectionTitle) sectionTitle.textContent = this.t('financial.title');

    // Update card titles
    const cardTitles = section.querySelectorAll('.card-title');
    if (cardTitles[0]) cardTitles[0].textContent = this.t('financial.expenseBreakdown');
    if (cardTitles[1]) cardTitles[1].textContent = this.t('financial.incomeSources');
    if (cardTitles[2]) cardTitles[2].textContent = this.t('financial.monthlySummary');
    if (cardTitles[3]) cardTitles[3].textContent = this.t('financial.allTransactions');

    // Update buttons
    const addTransactionBtns = section.querySelectorAll('button[onclick*=\"openAddTransactionModal\"]');
    addTransactionBtns.forEach(btn => {
        btn.innerHTML = `➕ ${this.t('financial.addTransaction')}`;
    });

    const exportBtn = section.querySelector('button[onclick*=\"exportTransactions\"]');
    if (exportBtn) exportBtn.innerHTML = `📥 ${this.t('financial.export')}`;

    // Update table headers
    const tableHeaders = section.querySelectorAll('#allTransactionsTable thead th');
    if (tableHeaders[0]) tableHeaders[0].textContent = this.t('dashboard.date');
    if (tableHeaders[1]) tableHeaders[1].textContent = this.t('dashboard.type');
    if (tableHeaders[2]) tableHeaders[2].textContent = this.t('dashboard.category');
    if (tableHeaders[3]) tableHeaders[3].textContent = this.t('dashboard.description');
    if (tableHeaders[4]) tableHeaders[4].textContent = this.t('dashboard.amount');
    if (tableHeaders[5]) tableHeaders[5].textContent = this.t('financial.actions');
};

// Update Crops section text
app.updateCropsText = function () {
    const section = document.getElementById('crops');
    if (!section) return;

    // Update section title
    const sectionTitle = section.querySelector('h2');
    if (sectionTitle) sectionTitle.textContent = this.t('crops.title');

    // Update card titles
    const cardTitles = section.querySelectorAll('.card-title');
    if (cardTitles[0]) cardTitles[0].textContent = `🍋 ${this.t('crops.fruitTrees')}`;
    if (cardTitles[1]) cardTitles[1].textContent = `🌾 ${this.t('crops.cashCrops')}`;

    // Update "Add" buttons
    const addFruitBtn = section.querySelector('button[onclick*=\"openAddCropModal(\'fruit\')"]');
    if (addFruitBtn) addFruitBtn.innerHTML = `➕ ${this.t('crops.addFruitTree')}`;

    const addCashBtn = section.querySelector('button[onclick*=\"openAddCropModal(\'cash\')"]');
    if (addCashBtn) addCashBtn.innerHTML = `➕ ${this.t('crops.addCashCrop')}`;

    // Update fruit trees table headers
    const fruitHeaders = section.querySelectorAll('#fruitTreesBody').length > 0 ?
        section.querySelectorAll('table')[0].querySelectorAll('thead th') : [];
    if (fruitHeaders[0]) fruitHeaders[0].textContent = this.t('dashboard.type');
    if (fruitHeaders[1]) fruitHeaders[1].textContent = this.t('crops.count');
    if (fruitHeaders[2]) fruitHeaders[2].textContent = this.t('crops.plantedDate');
    if (fruitHeaders[3]) fruitHeaders[3].textContent = this.t('crops.status');
    if (fruitHeaders[4]) fruitHeaders[4].textContent = this.t('crops.expectedHarvest');
    if (fruitHeaders[5]) fruitHeaders[5].textContent = this.t('financial.actions');

    // Update cash crops table headers
    const cashHeaders = section.querySelectorAll('#cashCropsBody').length > 0 ?
        section.querySelectorAll('table')[1].querySelectorAll('thead th') : [];
    if (cashHeaders[0]) cashHeaders[0].textContent = this.t('dashboard.type');
    if (cashHeaders[1]) cashHeaders[1].textContent = this.t('crops.area');
    if (cashHeaders[2]) cashHeaders[2].textContent = this.t('crops.plantedDate');
    if (cashHeaders[3]) cashHeaders[3].textContent = this.t('crops.status');
    if (cashHeaders[4]) cashHeaders[4].textContent = this.t('crops.harvestDate');
    if (cashHeaders[5]) cashHeaders[5].textContent = this.t('crops.yield');
    if (cashHeaders[6]) cashHeaders[6].textContent = this.t('financial.actions');
};

// Update Reports section text
app.updateReportsText = function () {
    const section = document.getElementById('reports');
    if (!section) return;

    // Update section title
    const sectionTitle = section.querySelector('h2');
    if (sectionTitle) sectionTitle.textContent = this.t('reports.title');

    // Update card title
    const cardTitle = section.querySelector('.card-title');
    if (cardTitle) cardTitle.textContent = this.t('reports.generateProfessionalReports');

    // Update report buttons
    const reportBtns = section.querySelectorAll('.btn-primary.btn-lg');
    if (reportBtns[0]) reportBtns[0].innerHTML = `📊 ${this.t('reports.financialReport')}`;
    if (reportBtns[1]) reportBtns[1].innerHTML = `🌾 ${this.t('reports.operationsReport')}`;
    if (reportBtns[2]) reportBtns[2].innerHTML = `💼 ${this.t('reports.investorPresentation')}`;

    // Update report preview section if visible
    const reportPreview = document.getElementById('reportPreview');
    if (reportPreview && reportPreview.style.display !== 'none') {
        const previewTitle = reportPreview.querySelector('.card-title');
        if (previewTitle) previewTitle.textContent = this.t('reports.reportPreview');

        const printBtn = reportPreview.querySelector('button[onclick*=\"print\"]');
        if (printBtn) printBtn.innerHTML = `🖨️ ${this.t('reports.print')}`;
    }
};

// Add tab navigation function (was missing)
app.showTab = function (tabName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(tabName);
    if (section) {
        section.style.display = 'block';
    }

    // Add active class to clicked link
    const activeLink = document.querySelector(`a[href="#${tabName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
