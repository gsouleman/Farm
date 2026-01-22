// Comprehensive French Translation Additions for Farm Management System
// Add these translations to the existing French (fr) translation object

const frenchTranslationAdditions = {
    // Dashboard additions
    dashboard: {
        totalArea: "Surface totale",
        neutral: "Neutre",
        addTransaction: "Ajouter transaction",
        type: "Type",
        cashFlowTrend: "Tendance du flux de trésorerie",
        landUtilization: "Utilisation des terres",
        perimeter: "périmètre"
    },

    // Farm Info additions
    farmInfo: {
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

    // Financial additions
    financial: {
        briefDescription: "Brève description",
        allTransactions: "Toutes les transactions",
        export: "Exporter",
        expenseBreakdown: "Répartition des dépenses",
        incomeSources: "Sources de revenus",
        monthlySummary: "Résumé mensuel",
        currentMonth: "Mois actuel",
        monthlyIncome: "Revenu:",
        monthlyExpenses: "Dépenses:",
        monthlyNet: "Net:",
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

    // Crops additions
    crops: {
        addFruitTree: "Ajouter arbre fruitier",
        addCashCrop: "Ajouter culture de rente",
        harvestDate: "Date de récolte",
        count: "Nombre",
        yield: "Rendement (kg)",
        fruitTrees: "Arbres fruitiers",
        cashCrops: "Cultures de rente",
        noFruitTrees: "Aucun arbre fruitier enregistré",
        noCashCrops: "Aucune culture de rente enregistrée",
        selectType: "Sélectionner le type...",
        // Status additions
        planted: "Planté",
        fruiting: "En fructification",
        ready: "Prêt à récolter"
    },

    // Reports additions
    reports: {
        title: "Rapports d'investisseurs",
        generateProfessionalReports: "Générer des rapports professionnels",
        financialReport: "Rapport financier",
        operationsReport: "Rapport d'opérations",
        investorPresentation: "Présentation investisseurs",
        reportPreview: "Aperçu du rapport",
        print: "Imprimer"
    },

    // Modals (NEW)
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

    // Sections/Crop Allocation (NEW)
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

    // Farm Selector (NEW)
    farmSelector: {
        selectFarm: "Sélectionner une ferme ▼",
        createNew: "➕ Créer une nouvelle ferme"
    },

    // Common additions
    common: {
        createFarm: "Créer la ferme"
    }
};

// Instructions for merging:
// 1. Copy each section from frenchTranslationAdditions
// 2. Merge into the existing translations.fr object in app.js
// 3. For sections that already exist (dashboard, farmInfo, etc.), add the new properties
// 4. For new sections (modals, sections, farmSelector), add them as new objects
