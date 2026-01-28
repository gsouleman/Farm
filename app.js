// ===================================
// GLOBAL CONFIGURATION
// ===================================
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3000'
    : 'https://farm-backend-uq2z.onrender.com';

// ===================================
// Multi-Language Support
// ===================================
const translations = {
    en: {
        // Navigation
        nav: {
            dashboard: "Dashboard",
            operations: "Operations",
            farmInfo: "Farm Profile",
            financial: "Finances",
            crops: "Crops",
            employees: "Employees",
            reports: "Analytics & Reports",
            advanced: "Advanced Features"
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
            viewAll: "View All",
            totalArea: "Total Area",
            cashFlowTrend: "Cash Flow Trend",
            landUtilization: "Land Utilization",
            addTransaction: "Add Transaction",
            type: "Type"
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
            custom: "Custom Report",
            generateProfessionalReports: "Generate Professional Reports",
            financialReport: "Financial Report",
            operationsReport: "Operations Report",
            investorPresentation: "Investor Presentation",
            reportPreview: "Report Preview",
            print: "Print"
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
    }
};

// Farm Management Application
// JavaScript Application Logic
// ===================================

Object.assign(app, {
    // Language Management
    currentLanguage: 'en',

    // Multi-farm management
    farms: [],
    currentFarmId: null,

    // Chart instances
    charts: {},

    // Default fallback types (if DB is empty or offline)
    defaultCropTypes: {
        fruit: ['Avocado', 'Lemon', 'Orange', 'Mango', 'Other'],
        cash: ['Cassava', 'Ginger', 'Pepper', 'Corn', 'Other']
    },

    // To store user's custom types loaded from DB
    userCropTypes: {
        fruit: [],
        cash: []
    },

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
        const defaultFarm = {
            name: 'Default Farm',
            area: 0,
            perimeter: 0,
            boundaries: [],
            sections: [],
            transactions: [],
            fruitTrees: [],
            cashCrops: [],
            customExpenseCategories: [],
            customIncomeCategories: [],
            customIncomeCategories: [],
            centerCoordinates: { lat: 0, lng: 0 },
            id: null
        };

        if (!this.farms || this.farms.length === 0) {

            return defaultFarm;
        }

        // Try to find the specific farm
        const searchId = parseInt(this.currentFarmId);
        const farm = this.farms.find(f => parseInt(f.id) === searchId);

        if (farm) {
            return farm;
        }

        // Fallback to first farm if list not empty

        return this.farms[0];
    },
    get farmData() {
        return this.getCurrentFarm();
    },

    // Helper to get transactions (for backward compatibility)
    get transactions() {
        const farm = this.getCurrentFarm();
        return farm ? (farm.transactions || []) : [];
    },
    set transactions(val) {
        const farm = this.getCurrentFarm();
        if (farm) farm.transactions = val;
    },

    // Helper to get fruit trees (for backward compatibility)
    get fruitTrees() {
        const farm = this.getCurrentFarm();
        return farm ? (farm.fruitTrees || []) : [];
    },
    set fruitTrees(val) {
        const farm = this.getCurrentFarm();
        if (farm) farm.fruitTrees = val;
    },

    // Helper to get cash crops (for backward compatibility)
    get cashCrops() {
        const farm = this.getCurrentFarm();
        return farm ? (farm.cashCrops || []) : [];
    },
    set cashCrops(val) {
        const farm = this.getCurrentFarm();
        if (farm) farm.cashCrops = val;
    },

    // Helper to get custom expense categories (for backward compatibility)
    get customExpenseCategories() {
        const farm = this.getCurrentFarm();
        return farm ? (farm.customExpenseCategories || []) : [];
    },
    set customExpenseCategories(val) {
        const farm = this.getCurrentFarm();
        if (farm) farm.customExpenseCategories = val;
    },

    // Helper to get custom income categories (for backward compatibility)
    get customIncomeCategories() {
        const farm = this.getCurrentFarm();
        return farm ? (farm.customIncomeCategories || []) : [];
    },
    set customIncomeCategories(val) {
        const farm = this.getCurrentFarm();
        if (farm) farm.customIncomeCategories = val;
    },

    // Check for forced password change
    checkPasswordStatus() {
        const user = api.getUser();

        // Setup admin UI if applicable
        if (user && user.role === 'admin') {
            this.setupAdminUI();
        }

        if (user && user.mustChangePassword) {
            this.openChangePasswordModal(true);
        }
    },

    logout() {
        this.showConfirmation('Are you sure you want to logout?', () => {
            api.auth.logout();
        });
    },

    openChangePasswordModal(forced = false) {
        const modal = document.getElementById('changePasswordModal');
        const alert = document.getElementById('passwordChangeAlert');
        const closeBtn = modal.querySelector('.close-modal');

        if (forced) {
            alert.style.display = 'block';
            // Disable closing
            modal.onclick = null; // Prevent overlay click close
            if (closeBtn) closeBtn.style.display = 'none';
        } else {
            alert.style.display = 'none';
        }

        this.openModal('changePasswordModal');
    },

    async submitPasswordChange() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmNewPassword').value;

        if (newPassword !== confirm) {
            this.showError('New passwords do not match');
            return;
        }

        try {
            await api.auth.changePassword(currentPassword, newPassword);
            this.showSuccess('Password updated successfully!');

            // Close modal after delay to allow user to read message
            setTimeout(() => {
                this.closeModal('changePasswordModal');
                api.auth.logout();
            }, 1500);
        } catch (error) {
            this.showError(error.message || 'Failed to change password');
        }
    },

    setupAdminUI() {
        const nav = document.querySelector('.navbar-nav');
        if (!document.getElementById('adminLink')) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#admin" id="adminLink" onclick="app.openUserManagement()">⚙️ Admin</a>`;
            nav.appendChild(li);
        }
    },

    async openUserManagement() {
        this.openModal('userManagementModal');
        await this.loadUsers();
    },

    async loadUsers() {
        try {
            const users = await api.auth.getUsers();
            this.renderUsersTable(users);
        } catch (error) {
            console.error('Failed to load users:', error);
            this.showError('Could not load users list');
        }
    },

    renderUsersTable(users) {
        const tbody = document.getElementById('usersTableBody');
        if (!tbody) return;

        if (users.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #999; padding: 2rem;">No users found</td></tr>';
            return;
        }

        tbody.innerHTML = users.map(user => `
            <tr>
                <td style="font-weight: 500;">${user.fullName || 'N/A'}</td>
                <td>${user.email}</td>
                <td>
                    <span class="user-badge user-badge-${user.role}">${user.role}</span>
                </td>
                <td style="font-size: 0.85rem; color: #666;">
                    ${new Date(user.createdAt).toLocaleDateString()}
                    ${user.mustChangePassword ? '<br><small style="color: #e65100;">(Pending Reset)</small>' : ''}
                </td>
                <td style="text-align: center;">
                    <div style="display: flex; justify-content: center; gap: 0.25rem;">
                        <button class="action-btn action-btn-edit" onclick="app.editUser('${user.id}')" title="Edit User">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn action-btn-delete" onclick="app.deleteUser('${user.id}', '${user.email}')" title="Delete User">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    },

    switchUserTab(tab) {
        // Reset tabs
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');

        if (tab === 'list') {
            document.getElementById('btnUserList').classList.add('active');
            document.getElementById('userListTab').style.display = 'block';
            this.loadUsers();
        } else if (tab === 'create') {
            document.getElementById('btnUserCreate').classList.add('active');
            document.getElementById('createUserTab').style.display = 'block';

            // If we're creating (not editing), reset the form
            if (!document.getElementById('editUserId').value) {
                this.resetUserForm();
            }
        }
    },

    resetUserForm() {
        const form = document.getElementById('createUserForm');
        if (form) form.reset();
        document.getElementById('editUserId').value = '';
        document.getElementById('saveUserBtn').innerHTML = '💾 Create User';
        document.querySelector('#userManagementModal .modal-title').textContent = 'User Management';
        document.getElementById('newUserPassword').required = true;
        document.getElementById('passwordNotice').textContent = 'Required for new users (min 6 chars)';
    },

    async editUser(userId) {
        try {
            // In a real app we might fetch user by ID, but we can find them in the current list if we want to save a request
            // Or just fetch all users again and find. Let's fetch all to be safe and simple.
            const users = await api.auth.getUsers();
            const user = users.find(u => String(u.id) === String(userId));

            if (!user) {
                this.showError('User not found');
                return;
            }

            // Set form to edit mode
            this.switchUserTab('create');
            document.getElementById('editUserId').value = user.id;
            document.getElementById('newUserFullName').value = user.fullName || '';
            document.getElementById('newUserEmail').value = user.email;
            document.getElementById('newUserRole').value = user.role;
            document.getElementById('newUserPassword').required = false;
            document.getElementById('newUserPassword').value = '';
            document.getElementById('passwordNotice').textContent = 'Leave blank to keep current password';
            document.getElementById('saveUserBtn').innerHTML = '💾 Update User';
            document.querySelector('#userManagementModal .modal-title').textContent = 'Edit User';
        } catch (error) {
            this.showError('Could not load user details');
        }
    },

    async saveUser() {
        const id = document.getElementById('editUserId').value;
        const fullName = document.getElementById('newUserFullName').value;
        const email = document.getElementById('newUserEmail').value;
        const password = document.getElementById('newUserPassword').value;
        const role = document.getElementById('newUserRole').value;

        const userData = { fullName, email, role };
        if (password) userData.password = password;

        try {
            if (id) {
                // Update existing
                await api.auth.updateUser(id, userData);
                this.showSuccess('User updated successfully!');
            } else {
                // Create new
                await api.auth.register(email, password, fullName, role);
                this.showSuccess('User created successfully!');
            }

            this.resetUserForm();
            this.switchUserTab('list');
        } catch (error) {
            this.showError(error.message || 'Failed to save user');
        }
    },

    async deleteUser(id, email) {
        this.showConfirmation(`Are you sure you want to delete user <strong>${email}</strong>?<br><br>This action cannot be undone.`, async () => {
            try {
                await api.auth.deleteUser(String(id));
                this.showSuccess('User deleted successfully!');
                await this.loadUsers();
            } catch (error) {
                this.showError(error.message || 'Failed to delete user');
            }
        });
    },
    async init() {
        const currentUser = api.getUser();


        // Load data from API
        await this.loadData();

        // Check password status (must come after loadData or at least check valid user)
        this.checkPasswordStatus();

        // Set today's date in forms
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('transactionDate');
        if (dateInput) dateInput.value = today;

        const cropDateInput = document.getElementById('cropPlantedDate');
        if (cropDateInput) cropDateInput.value = today;

        // Render initial UI
        // Note: loadData already calls renders logic now

        // Initialize charts
        this.initializeCharts();

        // Add smooth scroll navigation
        this.setupNavigation();

        // Initialize canvas drawing for crop allocation
        this.initializeCanvasDrawing();

        // Initialize language selector and update UI text
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
        this.updateAllText();

        console.log('✅ Application initialized successfully!');
    },

    // Load data from localStorage
    // Load data from localStorage
    // Load data from API
    async loadData() {
        if (!api.getToken()) return;

        try {


            // 1. Fetch Farms
            const farms = await api.farms.getAll();

            // 2. Fetch Custom Crop Types (Parallel-ish)
            this.loadCropTypes(); // Don't await, let it populate available lists




            this.farms = farms.map(f => this.sanitizeFarmData(f));

            this.farms.forEach(f => {



                if (f.boundaries && f.boundaries.length > 0) {

                }
            });

            if (this.farms.length > 0) {
                // If only one farm, force select it
                if (this.farms.length === 1) {
                    this.currentFarmId = this.farms[0].id;
                    localStorage.setItem('currentFarmId', this.currentFarmId);

                } else {
                    // Restore current farm from local storage preference or default to first
                    const savedFarmId = localStorage.getItem('currentFarmId');


                    const farmExists = this.farms.find(f => f.id == savedFarmId);

                    this.currentFarmId = farmExists ? farmExists.id : this.farms[0].id;
                }


                await this.loadFarmDetails(this.currentFarmId);

                // Force an explicit map render to ensure canvas is drawn
                setTimeout(() => {
                    const farm = this.getCurrentFarm();
                    this.renderGraphicalMap(farm); // Pass explicit farm
                }, 500);
            } else {

                this.renderDashboard();
                this.renderLandAllocationTable();
            }

            this.updateFarmSelector();
        } catch (error) {

            this.showError('Failed to load farm data: ' + error.message);
        }
    },

    // Load details for a specific farm
    async loadFarmDetails(farmId) {

        try {
            const farm = this.farms.find(f => f.id == farmId);
            if (!farm) return;

            // Fetch related data in parallel
            const [transactions, crops, sections, employees] = await Promise.all([
                api.transactions.getByFarm(farmId),
                api.crops.getByFarm(farmId),
                api.sections.getByFarm(farmId),
                api.employees.getByFarm(farmId)
            ]);

            // Attach to farm object in memory
            this.transactions = transactions;





            // Split crops into fruit trees and cash crops
            this.fruitTrees = crops.filter(c => c.category === 'fruit');
            this.cashCrops = crops.filter(c => c.category === 'cash');

            // Sync local farm object for logs/reference
            farm.fruitTrees = this.fruitTrees;
            farm.cashCrops = this.cashCrops;



            farm.sections = sections.map(s => ({
                ...s,
                area: parseFloat(s.area) || 0,
                percentage: parseFloat(s.percentage) || 0
            }));
            farm.employees = employees;

            // REMOVED: this.farmData = farm; (Shadows getter)




            // Update UI
            this.renderFarmDetails();
            this.renderGraphicalMap(farm); // Pass explicit farm to bypass state issues
            setTimeout(() => this.renderFarmMap(farm), 200); // Small delay for Google Maps to init
            this.renderTransactions();
            this.renderCrops();
            this.renderFarmMap(farm); // Re-render satellite map
            // DIV: renderGraphicalMap() was redundant and dangerous here

            // Re-render employees if table exists (it's in the employees tab)
            this.renderEmployees();

            // Refresh financial metrics and allocations
            this.renderDashboard();
            this.renderLandAllocationTable();

            // Refresh financial section reports
            this.updateCurrentMonth();
            this.initializeCharts();

            // Load Farm Analysis UI state
            if (this.loadFarmAnalysisUI) {
                this.loadFarmAnalysisUI();
            }
        } catch (error) {
            console.error('Failed to load farm details:', error);
        }
    },

    // Render employees (new method needed since I added the functionality)
    renderEmployees() {
        const tbody = document.getElementById('employeesTableBody');
        const emptyMsg = document.getElementById('noEmployeesMessage');
        const farm = this.getCurrentFarm();

        if (!tbody) return;

        const employees = farm.employees || [];

        if (employees.length === 0) {
            tbody.innerHTML = '';
            if (emptyMsg) emptyMsg.classList.remove('hidden');
            return;
        }

        if (emptyMsg) emptyMsg.classList.add('hidden');

        tbody.innerHTML = employees.map(emp => `
            <tr>
                <td><strong>${emp.name}</strong></td>
                <td>${emp.role}</td>
                <td><span class="badge badge-secondary">${emp.type}</span></td>
                <td><span class="badge ${emp.status === 'Active' ? 'badge-success' : 'badge-danger'}">${emp.status}</span></td>
                <td>${emp.phone || '-'}</td>
                <td>${emp.pay_frequency || '-'}</td>
                <td>${emp.pay_rate ? this.formatCurrency(emp.pay_rate) : '-'}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="app.editEmployee(${emp.id})">✏️</button>
                    <button class="btn btn-sm btn-outline-danger" onclick="app.deleteEmployee(${emp.id})">🗑️</button>
                </td>
            </tr>
        `).join('');
    },

    // Save data to localStorage
    // Save data (Deprecated - now using API directly)
    saveData() {
        // localStorage.setItem('allFarms', JSON.stringify(this.farms));
        if (this.currentFarmId) {
            localStorage.setItem('currentFarmId', this.currentFarmId);
        }
    },

    // Calculate financial metrics
    calculateMetrics(sectionId = null) {
        let transactions = this.transactions;
        if (sectionId) {
            transactions = transactions.filter(t => t.section_id == sectionId || t.sectionId == sectionId);
        }

        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + parseFloat(t.amount), 0);

        const expenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + parseFloat(t.amount), 0);

        const netCashFlow = income - expenses;

        return { income, expenses, netCashFlow };
    },

    // Render dashboard
    // Import MOMO Transactions
    importMomoTransactions() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.xlsx, .xls, .pdf';

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            this.showLoading('Processing file...');

            try {
                let transactions = [];
                if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
                    transactions = await this.parseMomoExcel(file);
                } else if (file.name.endsWith('.pdf')) {
                    transactions = await this.parseMomoPDF(file);
                } else {
                    throw new Error('Unsupported file format. Please upload Excel or PDF.');
                }

                if (transactions.length === 0) {
                    let msg = 'No matching "MOMO" transactions found.\n';
                    if (transactions.debugHeaders) {
                        msg += '\nDetected Columns:\n' + transactions.debugHeaders.join(', ') + '\n';
                    }
                    msg += '\nTroubleshooting:\n1. Check if "Payment Type" or "Payment" column exists.\n2. Ensure "MOMO" or "MOMO USER" is present in the row.\n3. Check detected columns above.';
                    this.showInfo(msg);
                    this.hideLoading();
                    return;
                }

                const confirmMsg = `Found ${transactions.length} MOMO transactions. Import them now?`;
                this.showConfirmation(confirmMsg, () => this.saveImportedTransactions(transactions));

            } catch (error) {
                console.error('Import error:', error);
                this.showError('Failed to import file: ' + error.message);
            } finally {
                this.hideLoading();
            }
        };

        input.click();
    },

    async parseMomoExcel(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: "", raw: false });



                    const processed = this.processMomoData(jsonData);
                    resolve(processed);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = (err) => reject(err);
            reader.readAsArrayBuffer(file);
        });
    },

    async parseMomoPDF(file) {
        // Set worker source to avoid warning
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let transactions = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();

                // Group text items by Y-coordinate to reconstruct lines
                const lines = {};
                textContent.items.forEach(item => {
                    const y = Math.round(item.transform[5]);
                    if (!lines[y]) lines[y] = [];
                    lines[y].push(item);
                });

                Object.keys(lines).forEach(y => {
                    lines[y].sort((a, b) => a.transform[4] - b.transform[4]);
                    const lineText = lines[y].map(item => item.str).join(' ').trim();

                    if (lineText.toUpperCase().includes('MOMO')) {
                        const dateMatch = lineText.match(/(\d{2}[/-]\d{2}[/-]\d{4}|\d{4}[/-]\d{2}[/-]\d{2})/);
                        const amountMatches = lineText.match(/[0-9,]+\.[0-9]{2}|[0-9,]{3,}/g);

                        if (dateMatch && amountMatches) {
                            let rawAmount = amountMatches[amountMatches.length - 1];
                            let amount = parseFloat(this.sanitizeAmount(rawAmount));
                            let description = lineText
                                .replace(dateMatch[0], '')
                                .replace(/MOMO( USER)?/i, '')
                                .replace(rawAmount, '')
                                .replace(/\s+/g, ' ')
                                .trim();
                            description = description.replace(/^[\s\-\.|]+|[\s\-\.|]+$/g, '').trim();
                            if (description.length < 3) description = "MOMO Import";

                            // Convert Date
                            let dateStr = dateMatch[0];
                            let isoDate;
                            // Check DD/MM/YYYY
                            if (/^\d{2}[\/-]\d{2}[\/-]\d{4}/.test(dateStr)) {
                                const parts = dateStr.split(/[\/-]/);
                                isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
                            } else {
                                try {
                                    isoDate = new Date(dateStr).toISOString().split('T')[0];
                                } catch (e) {
                                    isoDate = new Date().toISOString().split('T')[0];
                                }
                            }

                            transactions.push({
                                date: isoDate, // Valid YYYY-MM-DD
                                type: 'expense',
                                category: 'Other',
                                description: description,
                                amount: Math.abs(amount) // Ensure positive
                            });
                        }
                    }
                });
            }
            return transactions;
        } catch (error) {
            console.error("PDF Parsing Error:", error);
            throw new Error("Failed to parse PDF: " + error.message);
        }
    },

    processMomoData(rows) {
        const transactions = [];
        console.log(`Processing ${rows.length} rows for MOMO import.`);

        // Helper to find column loosely, prioritizing search keys order
        const findVal = (row, keys) => {
            for (let searchKey of keys) {
                const rowKey = Object.keys(row).find(k => k.toLowerCase().includes(searchKey.toLowerCase()));
                if (rowKey) return row[rowKey];
            }
            return null;
        };

        let matchCount = 0;
        rows.forEach((row, index) => {
            let isMomo = false;

            // 1. Try specific column lookup
            const paymentType = findVal(row, ['Payment Type', 'Payment', 'Type']);
            if (paymentType && paymentType.toString().toUpperCase().includes('MOMO')) {
                isMomo = true;
            }
            // 2. Deep Scan Fallback: Check ALL values in the row
            else {
                isMomo = Object.values(row).some(val => val && val.toString().toUpperCase().includes('MOMO'));
            }

            if (index < 5) console.log(`Row ${index} IsMomo: ${isMomo}`, row);

            if (isMomo) {
                matchCount++;
                const dateStr = findVal(row, ['Date & Time', 'Date']);
                // Strict mapping: Description comes from Reference column
                const reference = findVal(row, ['Reference', 'Refrence']) || "MOMO Import";
                const amountVal = findVal(row, ['Amount', 'Value', 'Debit', 'Credit']);

                if (dateStr && amountVal) {
                    // 1. Robust Date Parsing (Handle DD/MM/YYYY)
                    let parsedDate;
                    // Check for DD/MM/YYYY or DD-MM-YYYY
                    if (typeof dateStr === 'string' && /^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}/.test(dateStr)) {
                        const parts = dateStr.split(/[\/-]/);
                        // Assume DD/MM/YYYY -> YYYY-MM-DD construction
                        // parts[0] = Day, parts[1] = Month, parts[2] = Year
                        parsedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                    } else {
                        // Fallback to standard parser (works for YYYY-MM-DD or Excel dates if number)
                        parsedDate = new Date(dateStr);
                    }

                    // Validate Date
                    let isoDate;
                    if (isNaN(parsedDate.getTime())) {
                        console.warn('Invalid date found, defaulting to today. Original:', dateStr);
                        isoDate = new Date().toISOString().split('T')[0];
                    } else {
                        isoDate = parsedDate.toISOString().split('T')[0];
                    }

                    // 2. Normalize Amount (Handle negative values)
                    let rawAmount = parseFloat(this.sanitizeAmount(amountVal) || amountVal.toString().replace(/[^0-9.-]+/g, ""));
                    if (isNaN(rawAmount)) rawAmount = 0;

                    // Backend expects positive amounts for expenses (type='expense' handles direction)
                    const amount = Math.abs(rawAmount);

                    transactions.push({
                        date: isoDate,
                        type: 'expense',
                        category: 'Other', // Per requirement
                        description: reference, // Per requirement: Description = Reference
                        amount: amount
                    });
                } else {
                    console.warn('Row matched MOMO but missing Date or Amount:', row);
                }
            }
        });

        console.log(`Found ${matchCount} matching MOMO rows. Created ${transactions.length} transactions.`);

        // Attach debug info to array
        if (rows.length > 0) {
            transactions.debugHeaders = Object.keys(rows[0]);
            transactions.debugRow = JSON.stringify(rows[0], null, 2);
        }

        return transactions;
    },

    async saveImportedTransactions(transactions) {
        this.showLoading(`Saving ${transactions.length} transactions...`);
        console.log(`Debug: Saving transactions to Farm ID: ${this.currentFarmId}`);
        let savedCount = 0;
        let errors = 0;

        for (const t of transactions) {
            try {
                await api.transactions.create(this.currentFarmId, t);
                savedCount++;
            } catch (err) {
                console.error("Failed to save transaction", t, err);
                errors++;
            }
        }

        this.hideLoading();
        this.showSuccess(`Imported ${savedCount} transactions.${errors > 0 ? ` (${errors} failed)` : ''}`);
        this.loadData(); // Refresh UI
    },

    formatDateForInput(date) {
        if (!date || isNaN(date.getTime())) return new Date().toISOString().split('T')[0];
        return date.toISOString().split('T')[0];
    },

    // Add generic helpers if not exists (showLoading, hideLoading are assumed to exist or need impl)
    // I'll assume showLoading/showSuccess exist in app or I'll implement simple alert based ones if not found.
    // Based on app.js (lines 665+), I didn't see explicit showLoading, but showSuccess was used in password change.

    sanitizeAmount(val) {
        if (typeof val === 'number') return val;
        if (!val) return 0;
        // Remove currency symbols and commas
        return parseFloat(val.toString().replace(/[^0-9.-]/g, ''));
    },

    // UI Helpers
    showLoading(message) {
        // Simple loading overlay
        let loader = document.getElementById('app-loader');
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'app-loader';
            loader.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;justify-content:center;align-items:center;color:white;font-size:1.5rem;flex-direction:column;';
            loader.innerHTML = '<div class="spinner"></div><div id="app-loader-msg" style="margin-top:10px">Loading...</div>';
            document.body.appendChild(loader);
        }
        document.getElementById('app-loader-msg').textContent = message || 'Loading...';
        loader.style.display = 'flex';
    },

    hideLoading() {
        const loader = document.getElementById('app-loader');
        if (loader) loader.style.display = 'none';
    },

    showInfo(message) {
        alert('ℹ️ ' + message);
    },

    showConfirmation(message, onConfirm) {
        if (confirm(message)) {
            onConfirm();
        }
    },

    showError(message) {
        alert('❌ ' + message);
    },

    showSuccess(message) {
        alert('✅ ' + message);
    },

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

        // Update farm area and perimeter
        const farm = this.getCurrentFarm();
        const totalAreaEl = document.getElementById('totalArea');
        const areaPerimeterEl = document.getElementById('areaPerimeter');

        if (totalAreaEl) {
            const areaHa = farm ? (parseFloat(farm.area) || 0) : 0;
            const areaAcres = areaHa * 2.47105;
            totalAreaEl.textContent = `${areaHa.toFixed(2)} ha / ${areaAcres.toFixed(2)} acres`;
        }
        if (areaPerimeterEl) {
            areaPerimeterEl.textContent = `${farm ? (parseFloat(farm.perimeter) || 0).toFixed(2) : '0.00'} m perimeter`;
        }
    },

    // Render farm details in sidebar
    renderFarmDetails() {
        const farm = this.getCurrentFarm();
        if (!farm) return;

        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };

        setText('farmNameDisplay', farm.name);
        setText('farmLocationDisplay', farm.location || '-');
        const area = parseFloat(farm.area) || 0;
        const perimeter = parseFloat(farm.perimeter) || 0;
        setText('farmAreaDisplay', area.toFixed(4) + ' hectares');
        setText('farmPerimeterDisplay', perimeter.toFixed(2) + ' meters');

        if (farm.centerCoordinates && typeof farm.centerCoordinates.lat === 'number') {
            setText('farmCoordinatesDisplay', `${farm.centerCoordinates.lat.toFixed(6)}, ${farm.centerCoordinates.lng.toFixed(6)}`);
        } else {
            setText('farmCoordinatesDisplay', '-');
        }

        setText('farmAltitudeDisplay', (farm.altitude || 0) + ' meters');

        // Render Land Allocation Table
        this.renderLandAllocationTable();
    },

    async renderAgriCalendar() {
        const farm = this.getCurrentFarm();
        if (!farm || !farm.id) return;
        try {
            const data = await api.get(`/api/calendar/${farm.id}`);
            const badge = document.getElementById('farmZoneBadge');
            if (badge) {
                badge.textContent = `${data.zone} Zone (${data.altitude}m)`;
                badge.className = `badge ${data.zone === 'Highland' ? 'badge-danger' : data.zone === 'Midland' ? 'badge-info' : 'badge-success'}`;
            }
            if (data.alerts && data.alerts.length > 0) {
                const alertsHtml = data.alerts.map(alert => `
                    <div class="alert alert-${alert.type === 'WARNING' ? 'warning' : 'info'}" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
                        <span>${alert.type === 'WARNING' ? '⚠️' : 'ℹ️'}</span>
                        <div><strong>${alert.type}:</strong> ${alert.message}</div>
                    </div>
                `).join('');
                const el = document.getElementById('calendarAlerts');
                if (el) el.innerHTML = alertsHtml;
            }
            const renderCategory = (id, cat) => {
                const el = document.getElementById(id);
                if (!el || !cat) return;

                const campaignsHtml = (cat.campaigns || []).map(camp => `
                    <div class="mt-2 p-2 rounded" style="background-color: rgba(255,255,255,0.5); border: 1px solid rgba(0,0,0,0.05);">
                        <strong>${camp.name}:</strong> ${camp.window}<br>
                        <small class="text-danger">Risk: ${camp.risk}</small>
                    </div>
                `).join('');

                el.innerHTML = `
                    <div class="mb-2"><strong>Season Type:</strong> ${cat.type}</div>
                    <div class="mb-2"><strong>Suitability:</strong> ${cat.suitability}</div>
                    <div class="mt-2">
                        <strong>Available Campaigns:</strong>
                        ${campaignsHtml}
                    </div>
                `;
            };
            renderCategory('cerealsSummary', data.categories.cereals);
            renderCategory('tubersSummary', data.categories.tubers);
            renderCategory('fruitTreesSummary', data.categories.fruitTrees);
            renderCategory('legumesSummary', data.categories.legumes);

            // Populate durations table
            const durationBody = document.getElementById('cropDurationsBody');
            if (durationBody && data.durations) {
                const categories = {
                    'Cereals': ['maize', 'corn', 'rice', 'wheat', 'sorghum', 'millet'],
                    'Tubers': ['cassava', 'yam', 'potato', 'sweet potato'],
                    'Legumes': ['bean', 'soybean', 'soy', 'groundnut', 'cowpea'],
                    'Fruit Trees': ['mango', 'avocado', 'citrus', 'papaya', 'passion fruit']
                };

                const rows = [];
                Object.entries(categories).forEach(([mainCat, crops]) => {
                    crops.forEach(cropName => {
                        const duration = data.durations[cropName];
                        if (duration) {
                            rows.push(`
                                <tr>
                                    <td>${mainCat}</td>
                                    <td style="text-transform: capitalize;">${cropName}</td>
                                    <td>${duration} Months</td>
                                    <td>${mainCat === 'Cereals' || mainCat === 'Legumes' ? '2-3 Campaigns' : mainCat === 'Tubers' ? '1-3 Campaigns' : 'Long-term Cycle'}</td>
                                </tr>
                            `);
                        }
                    });
                });
                durationBody.innerHTML = rows.join('');
            }

            // Render Historical Risk Analysis
            const riskCard = document.getElementById('historicalRiskCard');
            if (riskCard && data.incidentImpact) {
                riskCard.style.display = 'block';
                const statsEl = document.getElementById('riskStats');
                const recEl = document.getElementById('riskRecommendationText');

                const categoriesHtml = Object.entries(data.incidentImpact.summary.byCategory)
                    .map(([cat, count]) => `<div class="mb-1"><strong>${cat}:</strong> ${count} incident(s)</div>`)
                    .join('');

                if (statsEl) statsEl.innerHTML = `
                    <div class="mb-2 text-muted">Based on ${data.incidentImpact.summary.total} historical incidents:</div>
                    ${categoriesHtml}
                `;
                if (recEl) recEl.textContent = data.incidentImpact.recommendation;
            } else if (riskCard) {
                riskCard.style.display = 'none';
            }
        } catch (e) {
            console.error('Error rendering calendar:', e);
            const alertsEl = document.getElementById('calendarAlerts');
            if (alertsEl) alertsEl.innerHTML = '<div class="alert alert-danger">Error fetching calendar data.</div>';
        }
    },

    // Render Land Allocation Table based on sections
    renderLandAllocationTable() {
        const tbody = document.getElementById('landAllocationBody');
        if (!tbody) return;

        const farm = this.getCurrentFarm();
        if (!farm || !farm.sections || farm.sections.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">No allocations defined yet. Use "Enter Allocations" to add sections.</td></tr>';
            return;
        }

        const totalFarmArea = farm.area || 0;

        // Generate rows matching the sections data (Name, Area, Percentage)
        tbody.innerHTML = farm.sections.map(section => {
            const area = parseFloat(section.area) || 0;
            const percentage = totalFarmArea > 0 ? ((area / totalFarmArea) * 100).toFixed(1) : '0.0';

            return `
                <tr>
                    <td>
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: ${section.color || '#ccc'}; margin-right: 5px; border-radius: 50%;"></span>
                        <strong>${section.name || 'Unnamed'}</strong>
                    </td>
                    <td>${area.toFixed(4)}</td>
                    <td>${percentage}%</td>
                </tr>
            `;
        }).join('');
    },

    // Render farm map using Google Maps
    renderFarmMap(explicitFarm = null) {
        const mapDiv = document.getElementById('farmMap');
        if (!mapDiv) return;

        // Check if Google Maps API is loaded
        if (typeof google === 'undefined' || !google.maps) {
            console.warn('Google Maps API not loaded. Please add your API key.');
            mapDiv.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="font-size: 1.2rem; margin-bottom: 0.5rem; color: #cc0000;">âš ï¸ Google Maps API Key Required</p>
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
        const farm = explicitFarm || this.farmData;
        const center = farm && farm.centerCoordinates ?
            farm.centerCoordinates : { lat: 0, lng: 0 };

        const map = new google.maps.Map(mapDiv, {
            center: center,
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
        if (farm.boundaries && farm.boundaries.length > 0) {
            const polygon = new google.maps.Polygon({
                paths: farm.boundaries,
                strokeColor: '#cc0000',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#cc0000',
                fillOpacity: 0.25
            });
            polygon.setMap(map);

            // Add center marker
            const marker = new google.maps.Marker({
                position: farm.centerCoordinates,
                map: map,
                title: `${farm.name} - Center`,
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
                    <h3 style="margin: 0 0 0.5rem 0; color: #cc0000;">${farm.name}</h3>
                    <p style="margin: 0.25rem 0;"><strong>Location:</strong> ${farm.location}</p>
                    <p style="margin: 0.25rem 0;"><strong>Area:</strong> ${farm.area} hectares</p>
                    <p style="margin: 0.25rem 0;"><strong>Perimeter:</strong> ${farm.perimeter} meters</p>
                    <p style="margin: 0.25rem 0;"><strong>Coordinates:</strong> ${farm.centerCoordinates.lat.toFixed(6)}, ${farm.centerCoordinates.lng.toFixed(6)}</p>
                    <p style="margin: 0.25rem 0;"><strong>Boundary Points:</strong> ${farm.boundaries.length}</p>
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
            farm.boundaries.forEach(coord => {
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
        // Initialize state if missing
        if (!this.currentFilters) this.currentFilters = { search: '', type: '', category: '' };
        if (!this.currentSort) this.currentSort = { field: 'date', direction: 'desc' };

        // Recent transactions (Global - always newest 5)
        const recentBody = document.getElementById('recentTransactionsBody');
        const sortedGlobal = [...this.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

        if (recentBody) {
            const recent = sortedGlobal.slice(0, 5);
            if (recent.length === 0) {
                recentBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No transactions yet</td></tr>';
            } else {
                recentBody.innerHTML = recent.map(t => `
                      <tr>
                        <td>${this.formatDate(t.date)}</td>
                        <td><span class="badge ${t.type === 'income' ? 'badge-success' : 'badge-warning'}">${t.type}</span></td>
                        <td>${t.category}</td>
                        <td>${t.description}</td>
                        <td><strong>${this.formatCurrency(t.amount)}</strong></td>
                      </tr>
                  `).join('');
            }
        }

        // Filter and Sort for "All Transactions" Table
        const allBody = document.getElementById('allTransactionsBody');
        if (!allBody) return;

        let filtered = this.transactions.filter(t => {
            const search = (this.currentFilters.search || '').toLowerCase();
            const matchesSearch = !search ||
                (t.description || '').toLowerCase().includes(search) ||
                (t.category || '').toLowerCase().includes(search);
            const matchesType = !this.currentFilters.type || t.type === this.currentFilters.type;
            const matchesCategory = !this.currentFilters.category || t.category === this.currentFilters.category;
            return matchesSearch && matchesType && matchesCategory;
        });

        // Sort
        filtered.sort((a, b) => {
            const field = this.currentSort.field;
            let valA = a[field];
            let valB = b[field];

            if (field === 'date') {
                valA = new Date(valA || 0); valB = new Date(valB || 0);
            } else if (field === 'amount') {
                valA = parseFloat(valA || 0); valB = parseFloat(valB || 0);
            } else {
                valA = (valA || '').toString().toLowerCase();
                valB = (valB || '').toString().toLowerCase();
            }

            if (valA < valB) return this.currentSort.direction === 'asc' ? -1 : 1;
            if (valA > valB) return this.currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });

        // Update Sort Icons
        ['date', 'type', 'category', 'description', 'amount'].forEach(f => {
            const span = document.getElementById(`sort-${f}`);
            if (span) {
                span.textContent = '↕';
                span.style.color = '#ccc';
                if (this.currentSort.field === f) {
                    span.textContent = this.currentSort.direction === 'asc' ? '↑' : '↓';
                    span.style.color = '#007bff';
                }
            }
        });

        // Render
        if (filtered.length === 0) {
            allBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No matching transactions</td></tr>';
        } else {
            allBody.innerHTML = filtered.map(t => {
                // Safe ID passing 
                const infoBtn = `<button class="btn btn-outline-info btn-sm" style="margin-right: 4px;" onclick='app.viewTransaction("${t.id}")' title="View Details"><i class="fas fa-eye"></i></button>`;
                const editBtn = `<button class="btn btn-outline-primary btn-sm" style="margin-right: 4px;" onclick='app.editTransaction("${t.id}")' title="Edit"><i class="fas fa-edit"></i></button>`;
                const deleteBtn = `<button class="btn btn-outline-danger btn-sm" onclick='app.deleteTransaction("${t.id}")' title="Delete"><i class="fas fa-trash"></i></button>`;

                return `
                  <tr>
                    <td>${this.formatDate(t.date)}</td>
                    <td><span class="badge ${t.type === 'income' ? 'badge-success' : 'badge-warning'}">${t.type}</span></td>
                    <td>${t.category}</td>
                    <td>${t.description}</td>
                    <td><strong>${this.formatCurrency(t.amount)}</strong></td>
                    <td style="white-space: nowrap;">
                        ${infoBtn}
                        ${editBtn}
                        ${deleteBtn}
                    </td>
                  </tr>
                `;
            }).join('');
        }

        // Update Filter Categories (lazy load once)
        const catSelect = document.getElementById('filterCategory');
        if (catSelect && catSelect.options.length <= 1) {
            this.updateFilterCategories();
        }
    },

    applyFilters() {
        this.currentFilters = {
            search: document.getElementById('filterSearch').value.toLowerCase(),
            type: document.getElementById('filterType').value,
            category: document.getElementById('filterCategory').value
        };
        this.renderTransactions();
    },

    clearFilters() {
        document.getElementById('filterSearch').value = '';
        document.getElementById('filterType').value = '';
        document.getElementById('filterCategory').value = '';
        this.currentFilters = { search: '', type: '', category: '' };
        this.renderTransactions();
    },

    sortTransactions(field) {
        if (!this.currentSort) this.currentSort = { field: 'date', direction: 'desc' };

        if (this.currentSort.field === field) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.field = field;
            this.currentSort.direction = ['date', 'amount'].includes(field) ? 'desc' : 'asc';
        }
        this.renderTransactions();
    },

    updateFilterCategories() {
        const categories = [...new Set(this.transactions.map(t => t.category))].filter(Boolean).sort();
        const select = document.getElementById('filterCategory');
        if (!select) return;
        const currentVal = select.value;
        select.innerHTML = '<option value="">All Categories</option>' +
            categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.value = currentVal;
    },

    // Render crops
    renderCrops() {
        // Fruit trees
        const fruitBody = document.getElementById('fruitTreesBody');
        if (this.fruitTrees.length === 0) {
            fruitBody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">No fruit trees recorded yet</td></tr>';
        } else {
            fruitBody.innerHTML = this.fruitTrees.map((crop, index) => {
                const alertLevel = crop.alert_level || crop.alertLevel || 'GREEN';
                const alertDescription = crop.alert_description || crop.alertDescription || 'Growing season';
                const plantedDate = crop.planted_date || crop.plantedDate;
                const badgeClass = alertLevel === 'RED' ? 'danger' : alertLevel === 'YELLOW' ? 'warning' : 'success';
                return `
        <tr>
          <td><strong>${crop.type}</strong></td>
          <td>${crop.count}</td>
          <td>${this.formatDate(plantedDate)}</td>
          <td><span class="badge badge-${this.getStatusColor(crop.status)}">${crop.status}</span></td>
          <td>${crop.expected_harvest || crop.expectedHarvest || 'TBD'}</td>
          <td><span class="badge badge-${badgeClass}">${alertLevel}</span></td>
          <td style="font-size: 0.8rem; max-width: 200px;">${alertDescription}</td>
          <td>
            <button class="btn btn-info btn-sm" onclick="app.viewCrop('fruit', ${index})" title="View Details">👁️</button><button class="btn btn-primary btn-sm" onclick="app.editCrop('fruit', ${index})" title="Edit">✏️</button><button class="btn btn-danger btn-sm" onclick="app.deleteFruitTree(${index})" title="Delete">🗑️</button>
          </td>
        </tr>
      `;
            }).join('');
        }

        // Cash crops
        const cashBody = document.getElementById('cashCropsBody');
        if (this.cashCrops.length === 0) {
            cashBody.innerHTML = '<tr><td colspan="9" class="text-center text-muted">No cash crops recorded yet</td></tr>';
        } else {
            cashBody.innerHTML = this.cashCrops.map((crop, index) => {
                const alertLevel = crop.alert_level || crop.alertLevel || 'GREEN';
                const alertDescription = crop.alert_description || crop.alertDescription || 'Growing season';
                const plantedDate = crop.planted_date || crop.plantedDate;
                const harvestDate = crop.harvest_date || crop.harvestDate;
                const badgeClass = alertLevel === 'RED' ? 'danger' : alertLevel === 'YELLOW' ? 'warning' : 'success';
                return `
        <tr>
          <td><strong>${crop.type}</strong></td>
          <td>${crop.area}</td>
          <td>${this.formatDate(plantedDate)}</td>
          <td><span class="badge badge-${this.getStatusColor(crop.status)}">${crop.status}</span></td>
          <td>${harvestDate ? this.formatDate(harvestDate) : 'TBD'}</td>
          <td>${crop.yield || 0} kg</td>
          <td><span class="badge badge-${badgeClass}">${alertLevel}</span></td>
          <td style="font-size: 0.8rem; max-width: 200px;">${alertDescription}</td>
          <td>
            <button class="btn btn-info btn-sm" onclick="app.viewCrop('cash', ${index})" title="View Details">👁️</button><button class="btn btn-primary btn-sm" onclick="app.editCrop('cash', ${index})" title="Edit">✏️</button><button class="btn btn-danger btn-sm" onclick="app.deleteCashCrop(${index})" title="Delete">🗑️</button>
          </td>
        </tr>
      `;
            }).join('');
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
                            callback: (value) => value.toLocaleString() + ' Xaf'
                        }
                    }
                }
            }
        });
    },

    // Land utilization chart
    initLandUtilizationChart() {
        const ctx = document.getElementById('landUtilizationChart');
        const farm = this.getCurrentFarm();
        if (!ctx || !farm || !farm.sections) return;

        if (this.charts.landUtilization) {
            this.charts.landUtilization.destroy();
        }

        // Aggregate areas by type
        const areasByType = {};
        farm.sections.forEach(s => {
            const type = s.type || 'Other';
            areasByType[type] = (areasByType[type] || 0) + (parseFloat(s.area) || 0);
        });

        // Add unallocated area if applicable
        const totalAllocated = Object.values(areasByType).reduce((a, b) => a + b, 0);
        const farmArea = parseFloat(farm.area) || 0;
        if (farmArea > totalAllocated) {
            areasByType['Unallocated'] = farmArea - totalAllocated;
        }

        const labels = Object.keys(areasByType);
        const data = Object.values(areasByType);

        // Predefined colors for common types
        const colorMap = {
            'Fruit Trees': '#90ee90',
            'Cash Crops': '#ffd700',
            'Farm House': '#8b4513',
            'Residential Area': '#2d5016',
            'Unallocated': '#e0e0e0'
        };

        const backgroundColors = labels.map(label => colorMap[label] || '#' + Math.floor(Math.random() * 16777215).toString(16));

        this.charts.landUtilization = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percent = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value.toFixed(4)} ha (${percent}%)`;
                            }
                        }
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
                    label: 'Income (Xaf)',
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
                            callback: (value) => value.toLocaleString() + ' Xaf'
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
        this.currentEditingId = null;
        document.getElementById('transactionForm').reset();
        document.getElementById('transactionDate').value = new Date().toISOString().split('T')[0];

        // Reset dynamic elements
        const title = document.getElementById('transactionModalTitle');
        if (title) title.textContent = 'Add New Transaction';

        const btn = document.getElementById('saveTransactionBtn');
        if (btn) btn.textContent = 'Add Transaction';

        // Populate section dropdown
        const sectionSelect = document.getElementById('transactionSection');
        if (sectionSelect) {
            const sections = this.getCurrentFarm().sections || [];
            sectionSelect.innerHTML = '<option value="">Link to section...</option>' +
                sections.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
        }

        this.openModal('addTransactionModal');
    },

    openAddCropModal(type) {
        this.openModal('addCropModal');
        document.getElementById('cropForm').reset();
        document.getElementById('cropCategory').value = type;

        const cropTypeSelect = document.getElementById('cropType');
        const countGroup = document.getElementById('cropCountGroup');
        const areaGroup = document.getElementById('cropAreaGroup');

        // Populate dropdown from Unified List
        const types = this.userCropTypes[type] || [];

        // Sort: User types first, then defaults if we merge (or just use filtered list)
        // Actually, let's just use the loaded list. If empty, use default.
        const optionsHtml = types.map(t => `<option value="${t.name || t}">${t.name || t}</option>`).join('');

        cropTypeSelect.innerHTML = `
            <option value="">Select type...</option>
            ${optionsHtml}
            <option value="__NEW__">➕ New...</option>
        `;

        // Add "Manage List" link helper
        const manageLink = document.createElement('small');
        manageLink.innerHTML = `<a href="#" onclick="app.openManageTypesModal('${type}'); return false;">⚙️ Manage List</a>`;
        manageLink.style.display = 'block';
        manageLink.style.marginTop = '0.2rem';
        manageLink.style.textAlign = 'right';

        // Remove old link if exists
        const oldLink = cropTypeSelect.parentNode.querySelector('small');
        if (oldLink) oldLink.remove();
        cropTypeSelect.parentNode.appendChild(manageLink);

        // Add change listener for "New..." AND for altitude alerts
        cropTypeSelect.addEventListener('change', (e) => {
            this.handleTypeChange(e, type);
            this.checkCropAltitudeAlert();
        });

        // Clear existing alert state
        this._currentCropAlert = null;
        const alertEl = document.getElementById('cropAltitudeAlert');
        if (alertEl) alertEl.style.display = 'none';

        // Reset checkbox
        const contInput = document.getElementById('cropHasContingency');
        if (contInput) contInput.checked = false;

        if (type === 'fruit') {
            document.getElementById('cropModalTitle').textContent = 'Add Fruit Tree';

            countGroup.style.display = 'block';
            areaGroup.style.display = 'none';
            document.getElementById('cropExpectedHarvestGroup').style.display = 'block';
            document.getElementById('cropHarvestDateGroup').style.display = 'none';
            document.getElementById('cropYieldGroup').style.display = 'none';

            document.getElementById('cropCount').required = true;
            document.getElementById('cropArea').required = false;
        } else {
            document.getElementById('cropModalTitle').textContent = 'Add Cash Crop';

            countGroup.style.display = 'none';
            areaGroup.style.display = 'block';
            document.getElementById('cropExpectedHarvestGroup').style.display = 'none';
            document.getElementById('cropHarvestDateGroup').style.display = 'block';
            document.getElementById('cropYieldGroup').style.display = 'block';

            document.getElementById('cropCount').required = false;
            document.getElementById('cropArea').required = true;
        }

        // Add event listener for custom crop type
        cropTypeSelect.onchange = () => {
            if (cropTypeSelect.value === '__NEW__') {
                const customType = prompt('Enter custom crop type name:');
                if (customType && customType.trim()) {
                    const name = customType.trim();
                    const category = document.getElementById('cropCategory').value;

                    // Immediately persist the new type to the DB
                    api.cropTypes.create({ category, name })
                        .then(() => {
                            const newOption = document.createElement('option');
                            newOption.value = name;
                            newOption.textContent = name;
                            // Insert before the "New..." option
                            cropTypeSelect.insertBefore(newOption, cropTypeSelect.lastElementChild);
                            cropTypeSelect.value = name;

                            // Update local cache
                            if (!app.userCropTypes[category].some(x => (x.name || x) === name)) {
                                app.userCropTypes[category].push({ category, name });
                            }
                            app.showSuccess(`New crop type "${name}" saved!`);
                        })
                        .catch(err => {
                            console.error('Failed to save new crop type:', err);
                            app.showError('Failed to save new type, but you can still use it for now.');

                            // Fallback: Add to dropdown anyway so user isn't blocked, 
                            // but warn them it might not persist if API failed.
                            const newOption = document.createElement('option');
                            newOption.value = name;
                            newOption.textContent = name;
                            cropTypeSelect.insertBefore(newOption, cropTypeSelect.lastElementChild);
                            cropTypeSelect.value = name;
                        });

                } else {
                    cropTypeSelect.value = '';
                }
            }
        };

        document.getElementById('cropPlantedDate').value = new Date().toISOString().split('T')[0];
    },

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            // Ensure display: flex for the overlay to center content
            if (modal.classList.contains('modal-overlay')) {
                modal.style.display = 'flex';
            }
        }
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
        }
    },

    // ===================================
    // Crop Configuration Management
    // ===================================

    async loadCropTypes() {
        try {
            let types = await api.cropTypes.getAll();

            // Intelligent Seeding:
            // If we lack basic defaults (heuristic: "Avocado" or "Maize" missing),
            // we try to ensure defaults exist.
            // We pass existing types to seedDefaultTypes to avoid duplicates.
            const hasBasicDefaults = types.some(t => ['Avocado', 'Maize', 'Corn', 'Cassava'].includes(t.name));

            // If total types are few (e.g. just the one custom one), let's ensure defaults are there.
            // Or if we specifically don't see our flagships.
            if (!hasBasicDefaults || types.length < 3) {
                await this.seedDefaultTypes(types);
                types = await api.cropTypes.getAll(); // Reload after seeding
            }

            // Separate into categories
            this.userCropTypes.fruit = types.filter(t => t.category === 'fruit');
            this.userCropTypes.cash = types.filter(t => t.category === 'cash');

        } catch (error) {
            console.error('Failed to load crop types:', error);
        }
    },

    async seedDefaultTypes(existingTypes = []) {
        console.log('Beginning seedDefaultTypes...'); // Debug
        try {
            const existingNames = new Set(existingTypes.map(t => t.name.toLowerCase()));
            let addedCount = 0;

            // Seed Fruit
            for (const name of this.defaultCropTypes.fruit) {
                if (!existingNames.has(name.toLowerCase())) {
                    console.log(`Seeding default: ${name}`); // Debug
                    await api.cropTypes.create({ category: 'fruit', name });
                    addedCount++;
                }
            }
            // Seed Cash
            for (const name of this.defaultCropTypes.cash) {
                if (!existingNames.has(name.toLowerCase())) {
                    console.log(`Seeding default: ${name}`); // Debug
                    await api.cropTypes.create({ category: 'cash', name });
                    addedCount++;
                }
            }
            console.log(`Seeding complete. Added ${addedCount} types.`); // Debug
            return addedCount;
        } catch (e) {
            console.error('Seeding failed', e);
            throw e; // Rethrow so caller knows
        }
    },

    async restoreDefaultTypes() {
        if (!confirm('This will add any missing default crop types (like Avocado, Corn) to your list. Continue?')) {
            return;
        }

        try {
            // Fetch current to avoid duplicates
            const current = await api.cropTypes.getAll();
            const added = await this.seedDefaultTypes(current);

            await this.loadCropTypes(); // Reload UI
            this.switchTypeTab('fruit'); // Refresh modal view

            if (added > 0) {
                this.showSuccess(`Restored ${added} default types.`);
            } else {
                this.showSuccess('All default types are already present.');
            }
        } catch (error) {
            this.showError('Failed to restore defaults: ' + error.message);
        }
    },

    async handleTypeChange(event, category) {
        if (event.target.value === '__NEW__') {
            const newName = prompt(`Enter new ${category} type:`);
            if (newName && newName.trim()) {
                try {
                    const saved = await api.cropTypes.create({
                        category: category,
                        name: newName.trim()
                    });

                    // Reload types locally
                    await this.loadCropTypes();

                    // Re-render modal dropdown
                    // We need to know which modal called this (Add or Edit)
                    // For now, assuming Add Modal since that's where we attached listener
                    // But wait, openAddCropModal destroys/recreates HTML.

                    // Simple refresh of the select
                    this.refreshCropSelect(category, saved.name);

                } catch (error) {
                    this.showError('Failed to save new type: ' + error.message);
                    event.target.value = ''; // Reset
                }
            } else {
                event.target.value = ''; // Reset if cancelled
            }
        }
    },

    refreshCropSelect(category, selectedValue) {
        const select = document.getElementById('cropType');
        if (!select) return;

        const types = this.userCropTypes[category] || [];

        const optionsHtml = types.map(t => `<option value="${t.name || t}">${t.name || t}</option>`).join('');

        select.innerHTML = `
            <option value="">Select type...</option>
            ${optionsHtml}
            <option value="__NEW__">➕ New...</option>
        `;

        if (selectedValue) select.value = selectedValue;

        // Re-attach listener because innerHTML wipes it? 
        // Actually onchange is on the element property, not attribute, so it might stay or be wiped if we replace parent.
        // We replaced innerHTML of select, so select element itself is same. Listener stays?
        // Let's re-attach to be safe if we replaced the element. We didn't.
    },

    openManageTypesModal(initialTab = 'fruit') {
        this.openModal('manageCropTypesModal');
        this.switchTypeTab(initialTab);
    },

    switchTypeTab(type) {
        // Update tabs UI
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        const btn = document.getElementById(type === 'fruit' ? 'tabTypeFruit' : 'tabTypeCash');
        if (btn) btn.classList.add('active');

        // Render list
        this.renderCropTypesList(type);
    },

    renderCropTypesList(category) {
        const list = document.getElementById('cropTypesList');
        if (!list) return;

        const types = this.userCropTypes[category] || [];

        if (types.length === 0) {
            list.innerHTML = `<li class="list-group-item text-center text-muted">No custom types yet. Using defaults.</li>`;
            return;
        }

        list.innerHTML = types.map(t => `
            <li class="list-group-item flex justify-between items-center">
                <span>${t.name}</span>
                <div>
                    <button class="btn btn-outline btn-sm" onclick="app.editCropType('${t.id}', '${category}')">✏️</button>
                    <button class="btn btn-outline btn-sm text-danger" onclick="app.deleteCropType('${t.id}', '${category}')">🗑️</button>
                </div>
            </li>
        `).join('');
    },

    async editCropType(id, category) {
        const typeObj = this.userCropTypes[category].find(t => t.id == id);
        if (!typeObj) return;

        const newName = prompt('Edit type name:', typeObj.name);
        if (newName && newName.trim() && newName !== typeObj.name) {
            try {
                await api.cropTypes.update(id, newName.trim());
                await this.loadCropTypes();
                this.renderCropTypesList(category);
                this.showSuccess('Updated successfully');
            } catch (error) {
                this.showError('Update failed: ' + error.message);
            }
        }
    },

    async deleteCropType(id, category) {
        if (confirm('Delete this type? It will disappear from the dropdown list.')) {
            try {
                await api.cropTypes.delete(id);
                await this.loadCropTypes();
                this.renderCropTypesList(category);
                this.showSuccess('Deleted successfully');
            } catch (error) {
                this.showError('Delete failed: ' + error.message);
            }
        }
    },

    // ===================================
    // Coordinate Editor Functions
    // ===================================

    // Temporary coordinates storage for editing
    tempCoordinates: [],

    // Open coordinate editor modal
    openCoordinateEditorModal() {
        if (!this.farmData || !this.farmData.id) {
            this.showError('Please select or create a farm before editing coordinates.');
            return;
        }

        // Copy current boundaries to temp storage
        this.tempCoordinates = JSON.parse(JSON.stringify(this.farmData.boundaries || []));

        // Open modal
        this.openModal('coordinateEditorModal');

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
                        Delete
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
            errorDiv.textContent = 'âš ï¸ Please enter valid numeric values for both latitude and longitude';
            errorDiv.style.display = 'block';
            return;
        }

        if (lat < -90 || lat > 90) {
            errorDiv.textContent = 'âš ï¸ Latitude must be between -90 and 90';
            errorDiv.style.display = 'block';
            return;
        }

        if (lng < -180 || lng > 180) {
            errorDiv.textContent = 'âš ï¸ Longitude must be between -180 and 180';
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
            errorDiv.textContent = 'âš ï¸ Please paste coordinates in the textarea';
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
            statusSpan.textContent = `âœ“ Imported ${imported.length} coordinate${imported.length > 1 ? 's' : ''}`;
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
            errorDiv.textContent = 'âš ï¸ No valid coordinates found. Please check your format.';
            errorDiv.style.display = 'block';
        }
    },

    // Delete a coordinate point (Auto-confirmed)
    deleteCoordinatePoint(index) {
        this.tempCoordinates.splice(index, 1);
        this.renderCoordinatesTable();
    },

    // Clear all coordinate points (Auto-confirmed)
    clearAllCoordinates() {
        this.showConfirmation('Are you sure you want to clear all boundary points?', () => {
            this.tempCoordinates = [];
            this.renderCoordinatesTable();
            this.updateCoordinateValidation();
            this.showSuccess('Boundary points cleared.');
        });
    },

    // Update validation message and save button state
    updateCoordinateValidation() {
        const validationMsg = document.getElementById('validationMessage');
        const saveBtn = document.getElementById('saveCoordinatesBtn');

        if (this.tempCoordinates.length < 3) {
            validationMsg.innerHTML = 'âš ï¸ At least 3 points required';
            validationMsg.style.color = '#cc0000';
            saveBtn.disabled = true;
            saveBtn.style.opacity = '0.5';
            saveBtn.style.cursor = 'not-allowed';
        } else {
            validationMsg.innerHTML = `âœ“ Ready to save (${this.tempCoordinates.length} points)`;
            validationMsg.style.color = '#4caf50';
            saveBtn.disabled = false;
            saveBtn.style.opacity = '1';
            saveBtn.style.cursor = 'pointer';
        }
    },

    // Save coordinates and update maps
    async saveCoordinates() {
        // Check if there are filled inputs that weren't added
        const pendingLat = document.getElementById('newPointLat').value;
        const pendingLng = document.getElementById('newPointLng').value;
        if (pendingLat || pendingLng) {
            if (confirm('You have coordinate values entered but not added to the list. Do you want to add them before saving?')) {
                this.addCoordinatePoint();
                // Continue with save after adding
            }
        }

        // Allow clearing all coordinates for blank map
        if (this.tempCoordinates.length === 0) {
            // Confirm explicitly if they are clearing existing boundaries
            if (this.farmData.boundaries && this.farmData.boundaries.length > 0) {
                if (!confirm('You are about to clear all farm boundaries and crop allocations. Are you sure?')) {
                    return;
                }
            }

            // Clear boundaries and all crop allocations
            this.farmData.boundaries = [];
            this.farmData.sections = []; // Clear all crop allocation sections
            this.farmData.centerCoordinates = { lat: 0, lng: 0 };

            try {
                // Save to Backend
                const currentFarm = this.getCurrentFarm();
                if (currentFarm && currentFarm.id) {
                    await api.farms.update(currentFarm.id, {
                        boundaries: [],
                        centerLat: 0,
                        centerLng: 0
                    });
                }

                // Update views
                this.updateMapViews();
                this.renderFarmDetails();
                this.renderFarmSectionsTable();
                this.renderFarmSectionsTable();
                this.renderGraphicalMap(currentFarm);

                // Close modal
                this.closeModal('coordinateEditorModal');

                this.showSuccess('All coordinates and crop allocations cleared!\n\nMap is now blank. Add new coordinates to define your farm boundaries.');
            } catch (err) {
                this.showError('Failed to clear boundaries: ' + err.message);
            }
            return;
        }

        // Validate minimum 3 points for a valid polygon
        if (this.tempCoordinates.length < 3) {
            this.showError('At least 3 coordinate points are required to form a polygon.');
            return;
        }

        // Calculate new center point (average of all coordinates)
        const centerLat = this.tempCoordinates.reduce((sum, coord) => sum + coord.lat, 0) / this.tempCoordinates.length;
        const centerLng = this.tempCoordinates.reduce((sum, coord) => sum + coord.lng, 0) / this.tempCoordinates.length;

        // Safety check for farm ID
        const currentFarm = this.getCurrentFarm();
        if (!currentFarm || !currentFarm.id) {
            this.showError('Cannot save coordinates: Missing Farm ID. Please refresh and try again.');
            console.error('Debug: Attempted to save coordinates with missing farmData.id', { farmData: currentFarm });
            return;
        }

        // Update farm data payload
        const updateData = {
            boundaries: this.tempCoordinates,
            centerLat: centerLat,
            centerLng: centerLng
        };

        try {
            console.log(`Debug: Saving ${this.tempCoordinates.length} coordinates to Farm ${currentFarm.id}...`);
            await api.farms.update(currentFarm.id, updateData);

            // Update local memory
            currentFarm.boundaries = JSON.parse(JSON.stringify(this.tempCoordinates));
            currentFarm.centerCoordinates = {
                lat: centerLat,
                lng: centerLng
            };

            this.updateMapViews();
            this.renderFarmDetails();
            this.renderFarmSectionsTable();
            this.closeModal('coordinateEditorModal');

            this.showSuccess(`Coordinates saved successfully!\nBoundary points: ${this.tempCoordinates.length}`);

        } catch (error) {
            this.showError('Failed to save boundaries: ' + error.message);
        }
    },

    // Update map views after coordinate changes
    updateMapViews() {
        const currentView = this.currentMapView;

        // Update satellite view (Google Maps)
        if (currentView === 'satellite') {
            // Re-render the entire map
            const farm = this.getCurrentFarm();
            this.renderFarmMap(farm);
        } else if (currentView === 'graphical') {
            // Re-render graphical canvas
            const farm = this.getCurrentFarm();
            this.renderGraphicalMap(farm);
        }
    },

    // Update Farm Info tab with new boundary count


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
    async addTransaction(event) {
        event.preventDefault();

        const transactionData = {
            date: document.getElementById('transactionDate').value,
            type: document.getElementById('transactionType').value,
            category: document.getElementById('transactionCategory').value,
            amount: parseFloat(document.getElementById('transactionAmount').value),
            description: document.getElementById('transactionDescription').value,
            sectionId: document.getElementById('transactionSection').value || null
        };

        if (this.currentEditingId) {
            try {
                await api.transactions.update(this.currentEditingId, transactionData);

                // Update local array
                const index = this.transactions.findIndex(t => t.id === this.currentEditingId);
                if (index !== -1) {
                    this.transactions[index] = { ...this.transactions[index], ...transactionData };
                }

                this.closeModal('addTransactionModal');
                this.renderDashboard();
                this.renderTransactions();
                this.updateCurrentMonth();
                this.initializeCharts();
                this.showSuccess('Transaction updated successfully!');
                this.currentEditingId = null;
            } catch (error) {
                this.showError('Failed to update transaction: ' + error.message);
            }
        } else {
            try {
                const newTransaction = await api.transactions.create(this.currentFarmId, transactionData);
                this.transactions.push(newTransaction);

                this.closeModal('addTransactionModal');
                this.renderDashboard();
                this.renderTransactions();
                this.updateCurrentMonth();
                this.initializeCharts();
                this.showSuccess('Transaction added successfully!');
            } catch (error) {
                this.showError('Failed to add transaction: ' + error.message);
            }
        }
    },

    // Delete transaction
    async deleteTransaction(id) {
        // Use loose equality (==) to handle string/number mismatch from HTML
        const transaction = this.transactions.find(t => t.id == id);
        if (!transaction) return;

        this.showConfirmation('Are you sure you want to delete this transaction?', async () => {
            try {
                await api.transactions.delete(id);

                // Remove from local array
                this.transactions = this.transactions.filter(t => t.id != id);

                this.renderDashboard();
                this.renderTransactions();
                this.updateCurrentMonth();
                this.initializeCharts();
                this.showSuccess('Transaction deleted successfully!');
            } catch (error) {
                console.error('Failed to delete transaction:', error);
                this.showError('Failed to delete transaction: ' + error.message);
            }
        });
    },

    viewTransaction(id) {
        const t = this.transactions.find(tr => tr.id == id);
        if (!t) return;

        const info = `
            <div style="text-align: left;">
                <h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">Transaction Details</h4>
                <p><strong>Date:</strong> ${this.formatDate(t.date)}</p>
                <p><strong>Type:</strong> <span class="badge ${t.type === 'income' ? 'badge-success' : 'badge-warning'}">${t.type}</span></p>
                <p><strong>Category:</strong> ${t.category}</p>
                <p><strong>Amount:</strong> ${this.formatCurrency(t.amount)}</p>
                <p><strong>Description:</strong> ${t.description || '-'}</p>
                <hr>
                <p class="text-muted" style="font-size: 0.8rem;">Internal ID: ${t.id}</p>
                <button class="btn btn-primary btn-sm mt-2" onclick="app.closeModal('infoModal')">Close</button>
            </div>
        `;
        this.showInfo(info);
    },

    editTransaction(id) {
        const t = this.transactions.find(tr => tr.id == id);
        if (!t) return;

        this.currentEditingId = t.id;

        // Populate form
        document.getElementById('transactionDate').value = t.date.split('T')[0];
        document.getElementById('transactionType').value = t.type;

        // Trigger type change to populate categories
        this.updateCategoryOptions();

        // Set other fields (after options populated)
        document.getElementById('transactionCategory').value = t.category;
        document.getElementById('transactionAmount').value = t.amount;
        document.getElementById('transactionDescription').value = t.description;

        // Update modal title and button
        const title = document.getElementById('transactionModalTitle');
        if (title) title.textContent = 'Edit Transaction';

        const btn = document.getElementById('saveTransactionBtn');
        if (btn) btn.textContent = 'Update Transaction';

        this.openModal('addTransactionModal');
    },

    // Add crop
    async addCrop(event) {
        event.preventDefault();

        const category = document.getElementById('cropCategory').value;
        const cropData = {
            category: category,
            type: document.getElementById('cropType').value,
            plantedDate: document.getElementById('cropPlantedDate').value,
            status: document.getElementById('cropStatus').value,
            expectedHarvest: document.getElementById('cropExpectedHarvest').value,
            harvestDate: document.getElementById('cropHarvestDate').value,
            yield: parseFloat(document.getElementById('cropYield').value) || 0,
            hasContingency: document.getElementById('cropHasContingency').checked,
            alertLevel: this._currentCropAlert ? this._currentCropAlert.level : 'GREEN',
            alertDescription: this._currentCropAlert ? this._currentCropAlert.message : 'Growing season'
        };

        // Remove empty strings to keep checks clean
        if (!cropData.expectedHarvest) delete cropData.expectedHarvest;
        if (!cropData.harvestDate) delete cropData.harvestDate;

        if (category === 'fruit') {
            cropData.count = parseInt(document.getElementById('cropCount').value) || 0;
            // Yield is not used for fruit trees in this form context (yet)
            delete cropData.yield;
        } else {
            cropData.area = parseFloat(document.getElementById('cropArea').value) || 0;
            // cropData.yield is already set above
        }

        try {
            // Check if editing existing crop
            if (this.editingCropIndex !== undefined && this.editingCropCategory) {
                const crops = this.editingCropCategory === 'fruit' ? this.fruitTrees : this.cashCrops;
                const existingCrop = crops[this.editingCropIndex];

                // Update via API
                const updatedCrop = await api.crops.update(existingCrop.id, cropData);

                // Update local array
                crops[this.editingCropIndex] = { ...existingCrop, ...updatedCrop };

                this.showSuccess('Crop updated successfully!');

                // Clear editing state
                this.editingCropIndex = undefined;
                this.editingCropCategory = null;
            } else {
                // Create new crop
                const newCrop = await api.crops.create(this.currentFarmId, cropData);

                // Add to appropriate local array
                if (category === 'fruit') {
                    this.fruitTrees.push(newCrop);
                } else {
                    this.cashCrops.push(newCrop);
                }

                this.showSuccess('Crop added successfully!');
            }

            this.renderCrops();
            this.closeModal('addCropModal');
        } catch (error) {
            console.error('Failed to save crop:', error);
            this.showError('Failed to save crop: ' + error.message);
        }
    },

    async checkCropAltitudeAlert() {
        const cropName = document.getElementById('cropType').value;
        const plantedDate = document.getElementById('cropPlantedDate').value;
        const hasContingency = document.getElementById('cropHasContingency').checked;

        if (!cropName) return;
        const farm = this.getCurrentFarm();
        if (!farm || !farm.id) return;
        const el = document.getElementById('cropAltitudeAlert');
        if (!el) return;
        try {
            const data = await api.get(`/api/calendar/${farm.id}/alerts?crop=${encodeURIComponent(cropName)}&date=${encodeURIComponent(plantedDate)}&contingency=${hasContingency}`);
            if (data.alert) {
                const color = data.alert.level === 'RED' ? 'danger' : data.alert.level === 'YELLOW' ? 'warning' : 'success';
                el.innerHTML = `<div class="alert alert-${color}" style="padding: 0.5rem; margin: 0.5rem 0; font-size: 0.85rem; border-radius: 4px;"><strong>${data.alert.level}:</strong> ${data.alert.message}</div>`;
                el.style.display = 'block';

                // Store alert info for saving
                this._currentCropAlert = data.alert;

                // Popup for RED alerts
                if (data.alert.level === 'RED' && !hasContingency) {
                    this.showError(`⚠️ SEASONAL ALERT: ${data.alert.message}`);
                }

                // Automatic Harvest Date
                if (data.alert.harvestDate) {
                    const harvestInput = document.getElementById('cropHarvestDate');
                    if (harvestInput) {
                        harvestInput.value = data.alert.harvestDate;
                        // Show the harvest date group if it was hidden
                        const group = document.getElementById('cropHarvestDateGroup');
                        if (group) group.style.display = 'block';
                    }
                }
            } else {
                el.style.display = 'none';
                this._currentCropAlert = null;
            }
        } catch (e) {
            el.style.display = 'none';
            this._currentCropAlert = null;
        }
    },

    // Delete fruit tree
    async deleteFruitTree(index) {
        const crop = this.fruitTrees[index];
        this.showConfirmation('Are you sure you want to delete this crop?', async () => {
            try {
                await api.crops.delete(crop.id);

                this.fruitTrees.splice(index, 1);
                this.renderCrops();
                this.showSuccess('Crop deleted successfully!');
            } catch (error) {
                console.error('Failed to delete fruit tree:', error);
                this.showError('Failed to delete crop: ' + error.message);
            }
        });
    },

    // Delete cash crop
    async deleteCashCrop(index) {
        const crop = this.cashCrops[index];
        this.showConfirmation('Are you sure you want to delete this crop?', async () => {
            try {
                await api.crops.delete(crop.id);

                this.cashCrops.splice(index, 1);
                this.renderCrops();
                this.showSuccess('Crop deleted successfully!');
            } catch (error) {
                console.error('Failed to delete cash crop:', error);
                this.showError('Failed to delete crop: ' + error.message);
            }
        });
    },

    // View crop details
    viewCrop(category, index) {
        const crop = category === 'fruit' ? this.fruitTrees[index] : this.cashCrops[index];
        if (!crop) return;

        const categoryLabel = category === 'fruit' ? 'Fruit Tree' : 'Cash Crop';
        const info = `
            <div style="text-align: left;">
                <h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">${categoryLabel} Details</h4>
                <p><strong>Type:</strong> ${crop.type}</p>
                ${category === 'fruit' ? `<p><strong>Count:</strong> ${crop.count}</p>` : `<p><strong>Area:</strong> ${crop.area} ha</p>`}
                <p><strong>Planted Date:</strong> ${this.formatDate(crop.plantedDate)}</p>
                <p><strong>Status:</strong> <span class="badge badge-${this.getStatusColor(crop.status)}">${crop.status}</span></p>
                ${category === 'fruit' ? `<p><strong>Expected Harvest:</strong> ${crop.expectedHarvest || 'TBD'}</p>` : ''}
                ${category === 'cash' ? `<p><strong>Expected Harvest Date:</strong> ${crop.harvestDate ? this.formatDate(crop.harvestDate) : 'TBD'}</p>` : ''}
                ${category === 'cash' ? `<p><strong>Yield:</strong> ${crop.yield || 0} kg</p>` : ''}
                <hr>
                <p class="text-muted" style="font-size: 0.8rem;">Internal ID: ${crop.id}</p>
                <button class="btn btn-primary btn-sm mt-2" onclick="app.closeModal('infoModal')">Close</button>
            </div>
        `;
        this.showInfo(info);
    },

    // Edit crop
    editCrop(category, index) {
        const crop = category === 'fruit' ? this.fruitTrees[index] : this.cashCrops[index];
        if (!crop) return;

        // Store the editing index and category
        this.editingCropIndex = index;
        this.editingCropCategory = category;

        // Populate the modal
        this.openAddCropModal(category);

        // Update modal title
        document.getElementById('cropModalTitle').textContent = category === 'fruit' ? 'Edit Fruit Tree' : 'Edit Cash Crop';

        // Fill in the form with existing data
        document.getElementById('cropType').value = crop.type;
        if (category === 'fruit') {
            document.getElementById('cropCount').value = crop.count;
            document.getElementById('cropExpectedHarvest').value = crop.expectedHarvest || '';
        } else {
            document.getElementById('cropArea').value = crop.area;
            document.getElementById('cropHarvestDate').value = crop.harvestDate ? crop.harvestDate.split('T')[0] : '';
            document.getElementById('cropYield').value = crop.yield || '';
        }
        document.getElementById('cropPlantedDate').value = crop.plantedDate ? crop.plantedDate.split('T')[0] : '';
        document.getElementById('cropStatus').value = crop.status;
        document.getElementById('cropHasContingency').checked = !!crop.hasContingency;

        // Trigger alert check to show existing alerts
        this.checkCropAltitudeAlert();
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
        const farm = this.getCurrentFarm() || {};

        // Calculate Date Range
        const dates = this.transactions.map(t => new Date(t.date));
        const minDate = dates.length ? new Date(Math.min(...dates)) : new Date();
        const maxDate = dates.length ? new Date(Math.max(...dates)) : new Date();
        const dateRange = dates.length
            ? `${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()}`
            : 'No transactions recorded';

        const profitMargin = income > 0 ? ((netCashFlow / income) * 100).toFixed(2) : 0;
        const roiText = netCashFlow >= 0 ? 'Positive Return' : 'Review Expenses';

        reportContent.innerHTML = `
        <div class="report-container" style="max-width: 850px; margin: 0 auto; font-family: 'Times New Roman', serif; color: #333; line-height: 1.6;">
            <!-- Header -->
            <div style="border-bottom: 3px solid #2e7d32; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="margin: 0; font-size: 28px; color: #2e7d32; text-transform: uppercase; letter-spacing: 1px;">Financial Report</h1>
                    <div style="font-size: 14px; margin-top: 5px; color: #666;">CONFIDENTIAL DOCUMENT</div>
                </div>
                <div style="text-align: right;">
                    <h2 style="margin: 0; font-size: 20px; color: #333;">${farm.name || 'Farm Name'}</h2>
                    <div style="font-size: 14px;">Date: ${new Date().toLocaleDateString()}</div>
                </div>
            </div>

            <!-- Executive Summary Grid -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;">
                <div style="padding: 20px; background: #f9fdf9; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 5px;">Total Revenue</div>
                    <div style="font-size: 24px; font-weight: bold; color: #2e7d32;">${this.formatCurrency(income)}</div>
                </div>
                <div style="padding: 20px; background: #fff5f5; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 5px;">Total Expenses</div>
                    <div style="font-size: 24px; font-weight: bold; color: #c62828;">${this.formatCurrency(expenses)}</div>
                </div>
                <div style="padding: 20px; background: #fff; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 5px;">Net Profit</div>
                    <div style="font-size: 24px; font-weight: bold; color: ${netCashFlow >= 0 ? '#2e7d32' : '#c62828'};">${this.formatCurrency(netCashFlow)}</div>
                </div>
            </div>

            <!-- Farm Details Table -->
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">FARM DATA</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px;">
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee; width: 25%; font-weight: bold;">Location:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${farm.location || 'Not Specified'}</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee; width: 25%; font-weight: bold;">Farm Area:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${parseFloat(farm.area || 0).toFixed(2)} Ha</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Report Period:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${dateRange}</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Total Transactions:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">${this.transactions.length}</td>
                </tr>
            </table>

            <!-- Analysis Section -->
             <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">PERFORMANCE ANALYSIS</h3>
            <div style="margin-bottom: 30px; font-size: 14px;">
                <p>The farm is currently operating with a <strong>profit margin of ${profitMargin}%</strong> based on the reported revenue.
                The Return on Investment (ROI) status is categorized as: <strong>${roiText}</strong>.</p>
                <ul>
                    <li><strong>Revenue Efficiency:</strong> Generated ${this.formatCurrency(income / (parseFloat(farm.area) || 1))} per hectare.</li>
                    <li><strong>Expense Ratio:</strong> Expenses constitute ${income > 0 ? ((expenses / income) * 100).toFixed(1) : 0}% of gross revenue.</li>
                </ul>
            </div>

            <!-- Footer Signatures -->
            <div style="margin-top: 80px; display: flex; justify-content: space-between; page-break-inside: avoid;">
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">PREPARED BY</div>
                </div>
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">AUTHORIZED SIGNATURE</div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 50px; font-size: 10px; color: #aaa; border-top: 1px solid #eee; padding-top: 10px;">
                Generated by Farm Management System • Page 1 of 1 • ${new Date().toLocaleString()}
            </div>
        </div>
        `;

        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    generateOperationsReport() {
        const reportContent = document.getElementById('reportContent');
        const reportPreview = document.getElementById('reportPreview');

        // Get current farm and prepare zones data with defaults
        const farm = this.getCurrentFarm() || {};
        const zones = farm.zones || {};
        const fruitTrees = zones.fruitTrees || { area: 0, percentage: 0 };
        const cashCrops = zones.cashCrops || { area: 0, percentage: 0 };
        const farmHouse = zones.farmHouse || { area: 0, percentage: 0 };
        const residential = zones.residential || { area: 0, percentage: 0 };

        reportContent.innerHTML = `
        <div class="report-container" style="max-width: 850px; margin: 0 auto; font-family: 'Times New Roman', serif; color: #333; line-height: 1.6;">
             <!-- Header -->
            <div style="border-bottom: 3px solid #1976D2; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="margin: 0; font-size: 28px; color: #1976D2; text-transform: uppercase; letter-spacing: 1px;">Operations Report</h1>
                    <div style="font-size: 14px; margin-top: 5px; color: #666;">INTERNAL USE ONLY</div>
                </div>
                <div style="text-align: right;">
                    <h2 style="margin: 0; font-size: 20px; color: #333;">${farm.name || 'Farm Name'}</h2>
                    <div style="font-size: 14px;">Date: ${new Date().toLocaleDateString()}</div>
                </div>
            </div>

            <!-- Farm Overview -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px;">
                <div>
                    <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">FARM DETAILS</h3>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="padding: 5px 0; font-weight: bold;">Total Area:</td><td style="text-align: right;">${parseFloat(farm.area || 0).toFixed(2)} ha</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: bold;">Location:</td><td style="text-align: right;">${farm.location || 'N/A'}</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: bold;">Coordinates:</td><td style="text-align: right;">${farm.centerCoordinates?.lat?.toFixed(4) || 0}, ${farm.centerCoordinates?.lng?.toFixed(4) || 0}</td></tr>
                    </table>
                </div>
                <div>
                    <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">CROP INVENTORY SUMMARY</h3>
                     <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr><td style="padding: 5px 0; font-weight: bold;">Fruit Tree Varieties:</td><td style="text-align: right;">${this.fruitTrees.length}</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: bold;">Cash Crop Types:</td><td style="text-align: right;">${this.cashCrops.length}</td></tr>
                        <tr><td style="padding: 5px 0; font-weight: bold;">Active Sections:</td><td style="text-align: right;">${farm.sections ? farm.sections.length : 0}</td></tr>
                    </table>
                </div>
            </div>

            <!-- Land Utilization Table -->
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">LAND UTILIZATION BREAKDOWN</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px; border: 1px solid #eee;">
                <thead>
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Zone Category</th>
                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Area (Ha)</th>
                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee;">Fruit Trees</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(fruitTrees.area || 0).toFixed(2)}</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(fruitTrees.percentage || 0).toFixed(1)}%</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee;">Cash Crops</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(cashCrops.area || 0).toFixed(2)}</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(cashCrops.percentage || 0).toFixed(1)}%</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee;">Farm House</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(farmHouse.area || 0).toFixed(2)}</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(farmHouse.percentage || 0).toFixed(1)}%</td></tr>
                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee;">Residential</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(residential.area || 0).toFixed(2)}</td><td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${parseFloat(residential.percentage || 0).toFixed(1)}%</td></tr>
                </tbody>
            </table>

            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 0; font-family: Arial, sans-serif; font-size: 16px; color: #444;">OPERATIONAL CAPACITY</h3>
            <p style="font-size: 14px;">The farm is equipped with modern tools and machinery suitable for its size. 
            Irrigation systems cover approximately <strong>${(parseFloat(farm.area || 0) * 0.6).toFixed(1)} ha</strong> (60%) of the arable land. 
            Storage facilities are sufficient for current yield projections.</p>

            <!-- Footer Signatures -->
            <div style="margin-top: 80px; display: flex; justify-content: space-between; page-break-inside: avoid;">
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">OPERATION MANAGER</div>
                </div>
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">FARM OWNER / DIRECTOR</div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 50px; font-size: 10px; color: #aaa; border-top: 1px solid #eee; padding-top: 10px;">
                Generated by Farm Management System • Page 1 of 1 • ${new Date().toLocaleString()}
            </div>
        </div>
        `;


        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    generateInvestorPresentation() {
        const { income, expenses, netCashFlow } = this.calculateMetrics();
        const reportContent = document.getElementById('reportContent');
        const reportPreview = document.getElementById('reportPreview');

        // Get current farm and prepare zones data with defaults
        const farm = this.getCurrentFarm() || {};

        // Simple Projections (Mock logic for demonstration)
        const projectedRevenue = income * 1.15; // 15% growth
        const projectedProfit = netCashFlow * 1.20; // 20% efficiency gain

        reportContent.innerHTML = `
        <div class="report-container" style="max-width: 850px; margin: 0 auto; font-family: 'Times New Roman', serif; color: #333; line-height: 1.6;">
            <!-- Header -->
            <div style="border-bottom: 3px solid #FBC02D; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="margin: 0; font-size: 28px; color: #F57F17; text-transform: uppercase; letter-spacing: 1px;">Investment Memorandum</h1>
                    <div style="font-size: 14px; margin-top: 5px; color: #666;">STRICTLY PRIVATE & CONFIDENTIAL</div>
                </div>
                <div style="text-align: right;">
                    <h2 style="margin: 0; font-size: 20px; color: #333;">${farm.name || 'Farm Name'}</h2>
                    <div style="font-size: 14px;">Date: ${new Date().toLocaleDateString()}</div>
                </div>
            </div>

            <!-- Executive Summary -->
            <div style="background-color: #fffde7; padding: 20px; border-left: 4px solid #FBC02D; margin-bottom: 30px;">
                <h3 style="margin-top: 0; color: #F57F17; font-family: Arial, sans-serif;">EXECUTIVE SUMMARY</h3>
                <p style="margin-bottom: 10px;">
                    <strong>${farm.name || 'Target Farm'}</strong> represents a prime agricultural asset located in <strong>${farm.location || 'Reported Region'}</strong>. 
                    Spanning <strong>${parseFloat(farm.area || 0).toFixed(2)} hectares</strong>, the property has demonstrated consistent operational capacity. 
                    This memorandum outlines the current financial standing and projects significant growth potential through optimized crop management and strategic expansion.
                </p>
                <p style="margin-bottom: 0;">
                    <strong>Current Status:</strong> ${netCashFlow >= 0 ? 'Profitable Operation' : 'Development Phase'} | <strong>Zone utilization:</strong> ${farm.sections ? farm.sections.length : 0} Active Sections
                </p>
            </div>

            <!-- Financial Highlights Grid -->
            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; font-family: Arial, sans-serif; font-size: 16px; color: #444;">FINANCIAL SNAPSHOT (YTD)</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;">
                <div style="padding: 15px; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #666;">Gross Revenue</div>
                    <div style="font-size: 20px; font-weight: bold; color: #333;">${this.formatCurrency(income)}</div>
                </div>
                <div style="padding: 15px; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #666;">Net Cash Flow</div>
                    <div style="font-size: 20px; font-weight: bold; color: ${netCashFlow >= 0 ? '#2e7d32' : '#c62828'};">${this.formatCurrency(netCashFlow)}</div>
                </div>
                <div style="padding: 15px; border: 1px solid #e0e0e0; text-align: center;">
                    <div style="font-size: 11px; text-transform: uppercase; color: #666;">ROI (Current)</div>
                    <div style="font-size: 20px; font-weight: bold; color: #1976D2;">${income > 0 ? ((netCashFlow / income) * 100).toFixed(1) : 0}%</div>
                </div>
            </div>

            <!-- Growth Projections Table -->
             <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; font-family: Arial, sans-serif; font-size: 16px; color: #444;">PROJECTED PERFORMANCE (NEXT FISCAL YEAR)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px; border: 1px solid #eee;">
                <thead>
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Metric</th>
                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Current</th>
                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Projected (+1 Year)</th>
                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Growth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">Annual Revenue</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${this.formatCurrency(income)}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${this.formatCurrency(projectedRevenue)}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee; color: #2e7d32;">+15%</td>
                    </tr>
                     <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">Net Profit</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${this.formatCurrency(netCashFlow)}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee;">${this.formatCurrency(projectedProfit)}</td>
                        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #eee; color: #2e7d32;">+20%</td>
                    </tr>
                </tbody>
            </table>

            <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; font-family: Arial, sans-serif; font-size: 16px; color: #444;">INVESTMENT THESIS</h3>
            <ul>
                <li style="margin-bottom: 8px;"><strong>Asset Security:</strong> Tangible land asset of ${parseFloat(farm.area || 0).toFixed(2)} Ha in a developing region.</li>
                <li style="margin-bottom: 8px;"><strong>Operational Readiness:</strong> Existing infrastructure including farm house, residential zones, and irrigation logistics.</li>
                <li style="margin-bottom: 8px;"><strong>Diversification:</strong> Mixed crop portfolio significantly mitigates single-commodity market risks.</li>
            </ul>

            <!-- Risk Assessment & Mitigation -->
            <div style="page-break-inside: avoid; margin-bottom: 30px;">
                <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; font-family: Arial, sans-serif; font-size: 16px; color: #444;">RISK ASSESSMENT & MITIGATION</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; border: 1px solid #eee;">
                    <thead>
                        <tr style="background-color: #f5f5f5;">
                            <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 25%;">Risk Category</th>
                            <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 35%;">Potential Impact</th>
                            <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Mitigation Strategy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Market Volatility</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Fluctuations in crop prices affecting revenue.</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Diversified portfolio (Fruit Trees & Cash Crops) to balance seasonal variations; Forward contracting for key produce.</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Environmental / Climate</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Drought or erratic rainfall patterns reducing yield.</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Investment in efficient irrigation systems; Implementation of drought-resistant crop varieties; Agroforestry practices.</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Operational</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Equipment downtime or labor shortages.</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">Preventive maintenance schedule; Community engagement for reliable labor pool; Training programs.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Unforeseen Circumstances & Contingency -->
            <div style="page-break-inside: avoid; margin-bottom: 30px; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #757575;">
                <h4 style="margin-top: 0; color: #333; font-family: Arial, sans-serif;">CONTINGENCY PLANNING (The "Black Swan" Protocol)</h4>
                <p style="font-size: 13px; margin-bottom: 8px;">
                    To safeguard investor capital against unforeseen "force majeure" events (e.g., extreme weather events, sudden regulatory changes, or secure transport disruptions):
                </p>
                <ul style="font-size: 13px; margin-bottom: 0;">
                    <li><strong>Emergency Reserve Fund:</strong> 10% of all capital raises are held in a liquid, low-risk liquidity pool reserved strictly for emergency stabilization.</li>
                    <li><strong>Insurance Coverage:</strong> Comprehensive agricultural insurance covering crop loss and infrastructure damage.</li>
                    <li><strong>Adaptive Management:</strong> Agile decision-making structure allowing for rapid pivot in crop focus or operational scale within 48 hours of critical incidents.</li>
                </ul>
            </div>

            <!-- Capital Allocation -->
            <div style="page-break-inside: avoid; margin-bottom: 30px;">
                <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; font-family: Arial, sans-serif; font-size: 16px; color: #444;">PROPOSED CAPITAL ALLOCATION</h3>
                <div style="display: flex; gap: 20px; align-items: flex-start;">
                    <div style="flex: 1;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">Infrastructure Expansion (Irrigation/Storage)</td>
                                    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee; font-weight: bold;">40%</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">Crop Diversification & Seed Procurement</td>
                                    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee; font-weight: bold;">30%</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee;">Technology & Operational Efficiency</td>
                                    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee; font-weight: bold;">20%</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Contingency Reserve</td>
                                    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">10%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     <div style="width: 150px; text-align: center; padding: 10px; background: #fffde7; border: 1px solid #ddd;">
                        <div style="font-size: 32px; font-weight: bold; color: #FBC02D;">100%</div>
                        <div style="font-size: 11px; text-transform: uppercase;">Direct Investment</div>
                    </div>
                </div>
            </div>

            <!-- Footer Signatures -->
            <div style="margin-top: 60px; display: flex; justify-content: space-between; page-break-inside: avoid;">
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">PREPARED BY</div>
                </div>
                <div style="width: 40%; text-align: center;">
                    <div style="border-bottom: 1px solid #333; margin-bottom: 10px;"></div>
                    <div style="font-size: 12px; color: #666;">APPROVED FOR DISTRIBUTION</div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 50px; font-size: 10px; color: #aaa; border-top: 1px solid #eee; padding-top: 10px;">
                CONFIDENTIAL • DO NOT COPY • Generated on ${new Date().toLocaleString()}
            </div>
        </div>
        `;

        reportPreview.style.display = 'block';
        reportPreview.scrollIntoView({ behavior: 'smooth' });
    },

    // Setup smooth scroll navigation
    setupNavigation() {
        document.querySelectorAll('.navbar-nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });

                    // Update active link
                    document.querySelectorAll('.navbar-nav a').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Render sections table and map when viewing Farm Info
                    if (targetId === '#farm-info') {
                        setTimeout(() => {
                            const farm = this.getCurrentFarm();
                            this.renderFarmSectionsTable();
                            this.renderGraphicalMap(farm);
                        }, 100); // Small delay to ensure DOM is ready
                    }
                }
            });
        });

        // Add window resize handler to redraw map
        window.addEventListener('resize', () => {
            const farm = this.getCurrentFarm();
            this.renderGraphicalMap(farm); // Pass explicit farm
        });
    },

    // Utility functions
    formatCurrency(amount) {
        return parseFloat(amount).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }) + ' Xaf';
    },

    formatDate(dateString) {
        if (!dateString) return '-';
        const date = new Date(dateString);
        // Use UTC to avoid timezone rollback (since inputs are YYYY-MM-DD)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC'
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

    // Custom confirmation modal helper
    showConfirmation(message, onConfirm) {
        const msgEl = document.getElementById('confirmationMessage');
        const confirmBtn = document.getElementById('confirmActionBtn');

        if (msgEl) msgEl.textContent = message;

        // Remove old listeners to prevent multiple triggers
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

        newConfirmBtn.onclick = () => {
            this.closeModal('confirmationModal');
            onConfirm();
        };

        this.openModal('confirmationModal');
    },

    // Edit current farm
    editFarm() {
        const farm = this.getCurrentFarm();
        if (!farm) return;

        this.editingFarmId = farm.id;

        // Populate modal fields
        document.getElementById('newFarmName').value = farm.name;
        document.getElementById('newFarmLocation').value = farm.location;
        document.getElementById('newFarmLat').value = farm.centerCoordinates.lat;
        document.getElementById('newFarmLng').value = farm.centerCoordinates.lng;
        document.getElementById('newFarmArea').value = farm.area;
        document.getElementById('newFarmPerimeter').value = farm.perimeter || 0;
        document.getElementById('newFarmAltitude').value = farm.altitude || 0;

        if (farm.boundaries && farm.boundaries.length > 0) {
            document.getElementById('newFarmBoundaries').value = farm.boundaries.map(c => `${c.lat},${c.lng}`).join('\n');
        }

        // Update modal title and button
        document.querySelector('#createFarmModal .modal-title').textContent = 'Edit Farm';
        document.querySelector('#createFarmModal .btn-primary').textContent = 'Update Farm';

        document.getElementById('createFarmModal').classList.add('active');
    },

    // Delete current farm
    async deleteFarm() {
        const farm = this.getCurrentFarm();
        if (!farm) return;

        this.showConfirmation(
            `Are you sure you want to delete ${farm.name}? This action cannot be undone.`,
            async () => {
                try {
                    // Show loading state if needed or just proceed
                    this.showLoading('Deleting farm...');

                    // Call backend API to delete the farm
                    await api.farms.delete(farm.id);

                    // Remove farm from local array
                    this.farms = this.farms.filter(f => f.id !== farm.id);

                    this.hideLoading();

                    // Show success with proper title and message
                    this.showAlert('Success', `${farm.name} has been deleted permanently.`);

                    // Switch to another farm or reset
                    if (this.farms.length > 0) {
                        this.switchFarm(this.farms[0].id);
                    } else {
                        this.currentFarmId = null;
                        localStorage.removeItem('currentFarmId');
                        // Add a small delay before reload so they can see the message
                        setTimeout(() => {
                            location.reload();
                        }, 2000);
                    }

                    this.saveData(); // Keep this for currentFarmId persistence
                    this.updateFarmSelector();
                } catch (error) {
                    this.hideLoading();
                    console.error('Delete farm error:', error);
                    // Show error with proper title and message
                    this.showAlert('Deletion Failed', error.message || 'There was an error deleting the farm.');
                }
            }
        );
    },

    // Create new farm
    openCreateFarmModal() {
        this.editingFarmId = null; // Reset editing state
        document.querySelector('#createFarmModal .modal-title').textContent = 'Create New Farm';
        document.querySelector('#createFarmModal .btn-primary').textContent = 'Create Farm';

        document.getElementById('createFarmModal').classList.add('active');
        document.getElementById('farmForm').reset();
    },

    // Create new farm
    async createNewFarm(event) {
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

        const name = document.getElementById('newFarmName').value;
        const location = document.getElementById('newFarmLocation').value;
        const altitude = parseFloat(document.getElementById('newFarmAltitude').value) || 0;
        const area = parseFloat(document.getElementById('newFarmArea').value);
        const perimeter = parseFloat(document.getElementById('newFarmPerimeter').value) || 0;
        const centerCoordinates = {
            lat: parseFloat(document.getElementById('newFarmLat').value),
            lng: parseFloat(document.getElementById('newFarmLng').value)
        };

        const farmData = {
            name: name,
            location: location,
            altitude: altitude,
            area: area,
            perimeter: perimeter,
            centerLat: centerCoordinates.lat,
            centerLng: centerCoordinates.lng,
            boundaries: boundaries.length > 0 ? boundaries : null,
            zones: {
                fruitTrees: { area: 0, percentage: 0 },
                cashCrops: { area: 0, percentage: 0 },
                farmHouse: { area: 0, percentage: 0 },
                residential: { area: 0, percentage: 0 }
            }
        };

        try {
            if (this.editingFarmId) {
                delete farmData.zones;
                const updatedFarm = await api.farms.update(this.editingFarmId, farmData);
                const sanitizedFarm = this.sanitizeFarmData(updatedFarm);

                // Update local array
                const index = this.farms.findIndex(f => f.id == this.editingFarmId);
                if (index !== -1) {
                    this.farms[index] = { ...this.farms[index], ...sanitizedFarm };
                }

                this.updateFarmSelector();
                this.renderFarmDetails();
                this.closeModal('createFarmModal');
                this.showSuccess('Farm updated successfully!');
                this.editingFarmId = null;
                return;
            }

            // Create new farm
            const newFarm = await api.farms.create(farmData);
            const sanitizedFarm = this.sanitizeFarmData(newFarm);

            // Add to local array
            this.farms.push(sanitizedFarm);
            this.switchFarm(sanitizedFarm.id);
            this.closeModal('createFarmModal');
            this.showSuccess(`Farm "${sanitizedFarm.name}" created successfully!`);
        } catch (error) {
            this.showError('Failed to save farm: ' + error.message);
        }
    },

    // Sanitize farm data from API
    sanitizeFarmData(farm) {
        if (!farm) return null;


        try {
            const boundaries = (Array.isArray(farm.boundaries) ? farm.boundaries :
                (typeof farm.boundaries === 'string' ? JSON.parse(farm.boundaries) : []));

            const sanitizedBoundaries = boundaries.map(b => ({
                lat: parseFloat(b.lat || 0),
                lng: parseFloat(b.lng || 0)
            }));

            const zones = typeof farm.zones === 'string' ? JSON.parse(farm.zones) : (farm.zones || {});

            return {
                ...farm,
                id: parseInt(farm.id),
                area: parseFloat(farm.area) || 0,
                perimeter: parseFloat(farm.perimeter) || 0,
                centerCoordinates: {
                    lat: parseFloat(farm.center_lat || farm.centerCoordinates?.lat || 0),
                    lng: parseFloat(farm.center_lng || farm.centerCoordinates?.lng || 0)
                },
                boundaries: sanitizedBoundaries,
                zones: {
                    fruitTrees: zones.fruitTrees || { area: 0, percentage: 0 },
                    cashCrops: zones.cashCrops || { area: 0, percentage: 0 },
                    farmHouse: zones.farmHouse || { area: 0, percentage: 0 },
                    residential: zones.residential || { area: 0, percentage: 0 },
                    ...(zones)
                }
            };
        } catch (err) {
            console.error(`Debug: sanitizeFarmData ERROR for Farm ${farm.id}:`, err);
            return {
                ...farm,
                id: parseInt(farm.id),
                boundaries: [],
                zones: {
                    fruitTrees: { area: 0, percentage: 0 },
                    cashCrops: { area: 0, percentage: 0 },
                    farmHouse: { area: 0, percentage: 0 },
                    residential: { area: 0, percentage: 0 }
                }
            };
        }
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
    async switchFarm(farmId) {
        // Find existing farm object or wait to load?
        // Usually assume it's in the list
        const farm = this.farms.find(f => String(f.id) === String(farmId));
        // Coerce both to string for robust matching
        // Farms list from API likely has numeric IDs.

        if (!farm) {
            // Maybe it was just created or loaded?
            // Or maybe ID type mismatch.
            const farmByStr = this.farms.find(f => f.id == farmId);
            if (!farmByStr) {
                console.warn(`Farm ${farmId} not found`);
                return;
            }
        }

        this.currentFarmId = parseInt(farmId);
        localStorage.setItem('currentFarmId', this.currentFarmId); // Persist preference

        await this.loadFarmDetails(this.currentFarmId);

        // Update UI logic is inside loadFarmDetails now

        this.updateFarmSelector();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // Update farm switcher in sidebar (radio card style)
    updateFarmSelector() {
        const container = document.getElementById('farmSelectorContainer');
        if (!container) return;

        if (!this.farms || this.farms.length === 0) {
            container.innerHTML = '<div class="text-center p-3 text-muted">No farms found</div>';
            return;
        }

        // Build radio cards
        const html = this.farms.map(farm => `
            <label class="farm-radio-card">
                <input type="radio" name="farm-select" value="${farm.id}" 
                    ${farm.id === this.currentFarmId ? 'checked' : ''} 
                    onchange="app.switchFarm(this.value)">
                <div class="farm-card-content">
                    <div class="farm-card-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div class="farm-card-info">
                        <span class="farm-card-name">${farm.name}</span>
                        <span class="farm-card-tag">Farm ID: #${farm.id.toString().substring(0, 4)}</span>
                    </div>
                    <div class="farm-card-check">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
            </label>
        `).join('');

        container.innerHTML = html;
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
            this.showError('Please enter a category name');
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

        if (!boundariesText) { // Changed from !this.tempCoordinates || this.tempCoordinates.length === 0 as tempCoordinates is not defined here
            this.showError('Please enter boundary coordinates first');
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
                this.showError('Please provide at least 3 coordinate points');
                return;
            }

            // Calculate area using Shoelace formula (in square meters)
            // Then convert to hectares
            const areaInSquareMeters = this.calculatePolygonArea(coordinates);
            const areaInHectares = areaInSquareMeters / 10000;

            // Update the area field
            document.getElementById('newFarmArea').value = areaInHectares.toFixed(4);

            // Calculate perimeter
            const perimeterInMeters = this.calculatePerimeter(coordinates);
            document.getElementById('newFarmPerimeter').value = perimeterInMeters.toFixed(2);

            // Calculate center point
            const center = this.calculateCentroid(coordinates);
            document.getElementById('newFarmLat').value = center.lat.toFixed(6);
            document.getElementById('newFarmLng').value = center.lng.toFixed(6);

            // Show success message
            document.getElementById('calculatedAreaDisplay').textContent =
                `✓ Calculated: ${areaInHectares.toFixed(4)} ha & ${perimeterInMeters.toFixed(2)} m perimeter from ${coordinates.length} points`;

        } catch (error) {
            this.showError('Error parsing coordinates. Please ensure format is: lat,lng (one per line)');
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

    // Calculate perimeter using Haversine formula
    calculatePerimeter(coordinates) {
        if (coordinates.length < 2) return 0;

        let perimeter = 0;
        const R = 6371000; // Earth's radius in meters

        for (let i = 0; i < coordinates.length; i++) {
            const j = (i + 1) % coordinates.length;

            const lat1 = coordinates[i].lat * Math.PI / 180;
            const lat2 = coordinates[j].lat * Math.PI / 180;
            const dLat = (coordinates[j].lat - coordinates[i].lat) * Math.PI / 180;
            const dLng = (coordinates[j].lng - coordinates[i].lng) * Math.PI / 180;

            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;

            perimeter += distance;
        }

        return perimeter;
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
        if (!file || (!file.type.includes('pdf') && !file.type.includes('image'))) {
            this.showError('Please upload a PDF or image file');
            return;
        }

        const fileType = file.type;
        let extractedText = '';

        try {
            if (fileType.includes('pdf')) {
                extractedText = await this.extractTextFromPDF(file);
            } else if (fileType.includes('image')) {
                extractedText = await this.extractTextFromImage(file);
            }

            // Parse coordinates from extracted text
            const coordinates = this.parseCoordinatesFromText(extractedText);

            if (coordinates.length > 0) {
                // Populate the boundary coordinates field
                const boundariesInput = document.getElementById('newFarmBoundaries');
                if (boundariesInput) {
                    boundariesInput.value = coordinates.map(c => `${c.lat},${c.lng}`).join('\n');
                    this.showSuccess(`✓ Extracted ${coordinates.length} coordinate points from file!`);
                } else {
                    this.showSuccess(`Extracted ${coordinates.length} coordinates:\n\n` +
                        coordinates.slice(0, 5).map(c => `${c.lat}, ${c.lng}`).join('\n') +
                        (coordinates.length > 5 ? '\n...' : ''));
                }
            } else {
                this.showError('No valid coordinates found in the file');
            }
        } catch (error) {
            console.error('Error extracting coordinates:', error);
            this.showError('Error processing file: ' + error.message);
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

    // Initialize canvas drawing for crop allocation
    // Math Helpers for Graphical View
    coordsToMeters(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // Earth radius in meters
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    },

    getPolygonCenter(pixels) {
        let x = 0, y = 0;
        pixels.forEach(p => { x += p.x; y += p.y; });
        return { x: x / pixels.length, y: y / pixels.length };
    },

    legacy_initializeCanvasDrawing() {
        const canvas = document.getElementById('farmMapCanvas');
        if (!canvas) return;

        // Initialize drawing state
        this.drawingMode = false;
        this.isDrawing = false;
        this.drawingStartPoint = null;
        this.currentDrawing = [];
        this.drawnCoordinates = [];
        this.pendingSectionBoundaries = [];
        this.shiftKeyPressed = false;

        // Track shift key for square drawing
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Shift') {
                this.shiftKeyPressed = true;
            }
            if (e.key === 'Escape' && this.drawingMode) {
                this.cancelDrawing();
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Shift') {
                this.shiftKeyPressed = false;
            }
        });

        // Mouse down - start rectangle
        canvas.addEventListener('mousedown', (e) => {
            if (!this.drawingMode) return;

            this.isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);

            // Store start point
            this.drawingStartPoint = { x, y };
            this.currentDrawing = [];
        });

        // Mouse move - show rectangle preview
        canvas.addEventListener('mousemove', (e) => {
            if (!this.drawingMode || !this.isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);

            // Calculate rectangle corners
            let width = x - this.drawingStartPoint.x;
            let height = y - this.drawingStartPoint.y;

            // If shift is pressed, make it a square
            if (this.shiftKeyPressed) {
                const size = Math.max(Math.abs(width), Math.abs(height));
                width = width >= 0 ? size : -size;
                height = height >= 0 ? size : -size;
            }

            // Create rectangle points (4 corners)
            this.currentDrawing = [
                { x: this.drawingStartPoint.x, y: this.drawingStartPoint.y },
                { x: this.drawingStartPoint.x + width, y: this.drawingStartPoint.y },
                { x: this.drawingStartPoint.x + width, y: this.drawingStartPoint.y + height },
                { x: this.drawingStartPoint.x, y: this.drawingStartPoint.y + height }
            ];

            this.renderGraphicalMapWithDrawing();
        });

        // Mouse up - finish rectangle
        canvas.addEventListener('mouseup', (e) => {
            if (!this.drawingMode || !this.isDrawing) return;

            this.isDrawing = false;

            // Check if rectangle is large enough (at least 20x20 pixels)
            if (this.currentDrawing.length === 4) {
                const width = Math.abs(this.currentDrawing[1].x - this.currentDrawing[0].x);
                const height = Math.abs(this.currentDrawing[2].y - this.currentDrawing[1].y);

                if (width < 20 || height < 20) { // Changed condition to match instruction's intent for error
                    this.showError('Draw a larger area. Click and drag to create a rectangle.');
                    this.currentDrawing = [];
                    this.renderGraphicalMap();
                    return;
                }

                // Close the rectangle and finish
                this.currentDrawing.push(this.currentDrawing[0]); // Close the shape
                this.finishDrawing();
            }
        });

        // Mouse leave - cancel current stroke if drawing
        canvas.addEventListener('mouseleave', (e) => {
            if (this.isDrawing) {
                this.isDrawing = false;
                this.currentDrawing = [];
                const farm = this.getCurrentFarm();
                this.renderGraphicalMap(farm);
            }
        });
    },

    // Render map with current drawing overlay
    renderGraphicalMapWithDrawing() {
        const farm = this.getCurrentFarm();
        this.renderGraphicalMap(farm); // Draw base map

        if (this.currentDrawing.length === 0) return;

        const canvas = document.getElementById('farmMapCanvas');
        const ctx = canvas.getContext('2d');

        // Draw current points and lines
        ctx.strokeStyle = '#ff0000';
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
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
            ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
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
            ctx.font = 'bold 18px Inter, sans-serif';
            ctx.textAlign = 'center';
            const bgWidth = 200;
            const bgHeight = 30;
            const bgX = (canvas.width - bgWidth) / 2;
            const bgY = 50;

            // Draw background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(bgX, bgY, bgWidth, bgHeight);
            ctx.strokeStyle = '#000';
            ctx.strokeRect(bgX, bgY, bgWidth, bgHeight);

            // Draw text
            ctx.fillStyle = '#000';
            ctx.fillText(`Area: ${area.toFixed(4)} ha`, canvas.width / 2, bgY + 20);
        }
    },



    async createSectionAsync(sectionData, name, area, centerLat, centerLng, cornerCoords) {
        try {
            const newSection = await api.sections.create(this.currentFarmId, sectionData);

            // Normalize
            newSection.boundaries = newSection.boundaries || [];
            if (!this.getCurrentFarm().sections) this.getCurrentFarm().sections = [];
            this.getCurrentFarm().sections.push(newSection);

            this.renderFarmSectionsTable();
            this.renderLandAllocationTable();
            const farm = this.getCurrentFarm();
            this.renderGraphicalMap(farm);

            this.showSuccess(`Section "${name}" created successfully!\nArea: ${area.toFixed(4)} ha`);
        } catch (error) {
            console.error('Failed to create section:', error);
            this.showError('Failed to save drawn section');
        }
    },



    // Toggle crop allocation drawing mode
    toggleDrawingMode() {
        // This is the master toggle. It will delegate to canvas or google maps.
        this.isDrawingMode = !this.isDrawingMode;

        // Ensure consistency with the other property name used in canvas functions
        this.drawingMode = this.isDrawingMode;

        const btn = document.getElementById('drawSectionBtn');

        if (this.isDrawingMode) {
            if (btn) {
                btn.textContent = '🛑 Cancel Allocation';
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-danger');
                btn.classList.add('active');
            }

            this.currentDrawing = [];

            // Switch to graphical view for drawing (it's more reliable for now)
            this.toggleMapView('graphical');

            this.showInfo('Drawing Mode Active!<br><br>• Click on the map to add points<br>• Double-click to finish the section<br>• Right-click or ESC to cancel');
        } else {
            if (btn) {
                btn.textContent = '📐 Crop Allocation';
                btn.classList.remove('btn-danger');
                btn.classList.remove('active');
                btn.classList.add('btn-primary');
            }
            this.currentDrawing = [];
            const farm = this.getCurrentFarm();
            this.renderGraphicalMap(farm);
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
        btn.textContent = 'âœï¸ Draw New Section';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-primary');

        // Show section configuration modal
        // Show section configuration modal
        this.openModal('sectionModal');
        document.getElementById('sectionForm').reset();
    },

    // Handle Section Type Change for Dynamic Dropdown
    handleSectionTypeChange(type) {
        const textInput = document.getElementById('sectionCrop');
        const selectInput = document.getElementById('sectionCropSelect');
        if (!textInput || !selectInput) return;

        let options = [];
        if (type === 'fruit-trees') {
            options = this.userCropTypes.fruit || [];
        } else if (type === 'cash-crops') {
            options = this.userCropTypes.cash || [];
        }

        if (options.length > 0) {
            // Show Select, Hide Text
            textInput.style.display = 'none';
            textInput.required = false;

            selectInput.style.display = 'block';
            selectInput.required = false; // Optional as per original form

            // Populate
            const fragment = document.createDocumentFragment();
            const defOpt = document.createElement('option');
            defOpt.value = "";
            defOpt.textContent = "Select crop...";
            fragment.appendChild(defOpt);

            options.forEach(opt => {
                const el = document.createElement('option');
                // Handle both string and object (if name property exists)
                const val = (typeof opt === 'object' && opt.name) ? opt.name : opt;
                el.value = val;
                el.textContent = val;
                fragment.appendChild(el);
            });
            selectInput.innerHTML = '';
            selectInput.appendChild(fragment);

        } else {
            // Show Text, Hide Select
            textInput.style.display = 'block';
            selectInput.style.display = 'none';
            selectInput.required = false;
        }
    },

    // Save farm section with manual area input
    async saveFarmSection(event) {
        event.preventDefault();

        const farm = this.getCurrentFarm();
        const sectionId = document.getElementById('sectionId').value;
        const name = document.getElementById('sectionName').value;
        const type = document.getElementById('sectionType').value;

        // Determine crop value based on visibility
        let crop = '';
        const selectInput = document.getElementById('sectionCropSelect');
        if (selectInput && selectInput.style.display !== 'none') {
            crop = selectInput.value;
        } else {
            crop = document.getElementById('sectionCrop').value;
        }

        const color = document.getElementById('sectionColor').value;
        const areaInput = document.getElementById('sectionArea');

        // Check if area field exists and has value
        if (!areaInput || !areaInput.value) {
            this.showError('Please enter the area in hectares.');
            return;
        }

        const area = parseFloat(areaInput.value);

        if (isNaN(area) || area <= 0) {
            this.showError('Please enter a valid area greater than 0.');
            return;
        }

        // Calculate percentage of total farm area
        const percentage = ((area / farm.area) * 100).toFixed(1);

        // Generate simple boundaries for graphical visualization if not provided
        // (If we were in drawing mode, boundaries would be passed, but here it's manual)
        // We can keep the dummy boundaries generation if needed for visual compatibility
        const index = farm.sections ? farm.sections.length : 0;
        // Use drawn boundaries if they exist (harmonized with canvas_drawing_functions.js)
        const finalBoundaries = this.drawnSectionBoundaries || this.pendingSectionBoundaries || [
            { lat: farm.centerCoordinates.lat + 0.001, lng: farm.centerCoordinates.lng + 0.001 },
            { lat: farm.centerCoordinates.lat + 0.001, lng: farm.centerCoordinates.lng - 0.001 },
            { lat: farm.centerCoordinates.lat - 0.001, lng: farm.centerCoordinates.lng - 0.001 },
            { lat: farm.centerCoordinates.lat - 0.001, lng: farm.centerCoordinates.lng + 0.001 }
        ];

        const sectionData = {
            name: name,
            type: type,
            cropType: crop,
            color: color,
            area: area,
            percentage: parseFloat(percentage),
            boundaries: finalBoundaries,
            notes: document.getElementById('sectionNotes').value
        };

        try {
            if (sectionId && !String(sectionId).startsWith('section_')) { // existing DB section
                // Update existing section
                const updatedSection = await api.sections.update(sectionId, sectionData);

                // Update local array
                const index = farm.sections.findIndex(s => s.id === sectionId);
                if (index !== -1) {
                    // Preserve extra properties if any?
                    Object.assign(farm.sections[index], updatedSection);
                    // Ensure boundaries and coords are parsed
                    farm.sections[index].boundaries = updatedSection.boundaries || [];
                }
            } else {
                // Add new section
                const newSection = await api.sections.create(farm.id, sectionData);

                // normalize response
                newSection.boundaries = newSection.boundaries || [];

                if (!farm.sections) farm.sections = [];
                farm.sections.push(newSection);
            }

            // Important: Clear the stored boundaries after save
            this.drawnSectionBoundaries = null;

            this.renderFarmSectionsTable();
            this.renderLandAllocationTable();
            this.renderGraphicalMap();
            this.closeModal('sectionModal');

            // Clear form
            document.getElementById('sectionForm').reset();

            this.showSuccess(`Section "${name}" saved successfully!`);
        } catch (error) {
            this.showError('Failed to save section: ' + error.message);
        }
    },

    // Auto Allocation Logic (Heuristic Strip Layout)
    async _deprecated_autoAllocateSections() {
        const farm = this.getCurrentFarm();
        if (!farm || !farm.boundaries || farm.boundaries.length < 3) {
            this.showError('Farm must have boundaries defined for auto-allocation.');
            return;
        }

        if (farm.sections && farm.sections.length > 0) {
            if (!confirm('Warning: Auto-allocation will DELETE all existing sections and generate a new layout. Continue?')) {
                return;
            }
        }

        this.showLoading('Generating optimal layout...');

        try {
            // Delete existing sections (Best Effort)
            if (farm.sections) {
                // Iterate backwards to avoid index issues if we were mutating locally? 
                // Using ID is safer.
                const ids = farm.sections.map(s => s.id);
                for (const id of ids) {
                    try { await api.sections.delete(id); } catch (e) { console.warn('Delete failed', e); }
                }
                farm.sections = [];
            }

            const itemsToAllocate = [];

            // Infrastructure Defaults
            itemsToAllocate.push({ name: 'Farm House', type: 'infrastructure', area: 0.1, color: '#8D6E63' });
            itemsToAllocate.push({ name: 'Residential Area', type: 'infrastructure', area: 0.1, color: '#A1887F' });

            // Crops
            if (this.fruitTrees) {
                this.fruitTrees.forEach(tree => {
                    const estArea = (tree.count * 0.0025); // 25m2 per tree
                    if (estArea > 0.01) itemsToAllocate.push({ name: tree.type, type: 'fruit-trees', cropType: tree.type, area: estArea, color: '#AED581' });
                });
            }
            if (this.cashCrops) {
                this.cashCrops.forEach(crop => {
                    const area = parseFloat(crop.area);
                    if (area > 0) itemsToAllocate.push({ name: crop.type, type: 'cash-crops', cropType: crop.type, area: area, color: '#FFEB3B' });
                });
            }

            // Geometry Processing with Turf.js
            const farmPoly = turf.polygon([farm.boundaries.map(p => [p.lng, p.lat]).concat([[farm.boundaries[0].lng, farm.boundaries[0].lat]])]);
            const farmAreaHa = turf.area(farmPoly) / 10000;
            const bbox = turf.bbox(farmPoly); // [minLng, minLat, maxLng, maxLat]
            const [minLng, minLat, maxLng, maxLat] = bbox;
            const totalHeight = maxLat - minLat;

            let currentLat = maxLat;

            for (const item of itemsToAllocate) {
                // Height Proportional to Area Ratio
                const heightStep = (item.area / farmAreaHa) * totalHeight;
                if (heightStep <= 0) continue;

                const sliceMaxLat = currentLat;
                const sliceMinLat = currentLat - heightStep;

                const slicePoly = turf.polygon([[
                    [minLng, sliceMinLat], [maxLng, sliceMinLat],
                    [maxLng, sliceMaxLat], [minLng, sliceMaxLat],
                    [minLng, sliceMinLat]
                ]]);

                const intersection = turf.intersect(slicePoly, farmPoly);

                if (intersection) {
                    let finalGeom = intersection.geometry;
                    let coords = [];

                    if (finalGeom.type === 'MultiPolygon') {
                        // Find largest ring
                        let maxArea = 0;
                        let maxIdx = 0;
                        finalGeom.coordinates.forEach((polyCoords, idx) => {
                            const a = turf.area(turf.polygon(polyCoords));
                            if (a > maxArea) { maxArea = a; maxIdx = idx; }
                        });
                        coords = finalGeom.coordinates[maxIdx][0];
                    } else if (finalGeom.type === 'Polygon') {
                        coords = finalGeom.coordinates[0];
                    }

                    if (coords.length > 0) {
                        const boundaries = coords.map(c => ({ lat: c[1], lng: c[0] }));

                        const sectionPayload = {
                            name: item.name,
                            type: item.type,
                            cropType: item.cropType || '',
                            color: item.color,
                            area: item.area,
                            percentage: ((item.area / farmAreaHa) * 100).toFixed(2),
                            boundaries: boundaries
                        };

                        await api.sections.create(farm.id, sectionPayload);
                    }
                }
                currentLat = sliceMinLat;
            }

            this.hideLoading();
            this.showSuccess('Auto-allocation complete!');
            await this.loadFarmDetails(farm.id);
            this.renderGraphicalMap();

        } catch (error) {
            console.error(error);
            this.hideLoading();
            this.showError('Auto-allocation failed: ' + error.message);
        }
    },

    // Render farm sections on map
    renderFarmSections() {
        if (!this.map || !this.getCurrentFarm().sections) return;

        // Clear existing section polygons
        if (this.sectionPolygons) {
            this.sectionPolygons.forEach(sp => {
                sp.polygon.setMap(null);
                if (sp.labels) {
                    sp.labels.forEach(label => label.setMap(null));
                }
            });
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
                    <p style="margin: 0.25rem 0;"><strong>Area:</strong> ${(parseFloat(section.area) || 0).toFixed(4)} ha (${(parseFloat(section.percentage) || 0).toFixed(1)}%)</p>
                    ${section.notes ? `<p style="margin: 0.25rem 0;"><strong>Notes:</strong> ${section.notes}</p>` : ''}
                </div>
            `;

            polygon.addListener('click', () => {
                const infoWindow = new google.maps.InfoWindow({ content: infoContent });
                infoWindow.setPosition(section.boundaries[0]);
                infoWindow.open(this.map);
            });

            this.sectionPolygons.push({
                id: section.id,
                polygon: polygon,
                labels: [] // Store labels to clear them later
            });

            // Add edge dimensions (Length/Width)
            if (google.maps.geometry) {
                const path = polygon.getPath();
                const labels = this.sectionPolygons[this.sectionPolygons.length - 1].labels;

                for (let i = 0; i < path.getLength(); i++) {
                    const p1 = path.getAt(i);
                    const p2 = path.getAt((i + 1) % path.getLength());

                    const distance = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
                    const midPoint = google.maps.geometry.spherical.interpolate(p1, p2, 0.5);

                    if (distance > 5) { // Only show label if segment > 5m
                        const labelMarker = new google.maps.Marker({
                            position: midPoint,
                            map: this.map,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 0 // Invisible icon
                            },
                            label: {
                                text: `${distance.toFixed(1)}m`,
                                color: 'white',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                className: 'map-dimension-label' // We can style this background in CSS
                            },
                            zIndex: 3
                        });
                        labels.push(labelMarker);
                    }
                }
            }
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
            tbody.innerHTML = '';
            return;
        }

        tbody.innerHTML = sections.map(section => `
            <tr>
                <td><div style="width: 30px; height: 30px; background: ${section.color}; border-radius: 4px; border: 1px solid #ccc;"></div></td>
                <td><strong>${section.name}</strong></td>
                <td>${section.cropType || '-'}</td>
                <td>${(parseFloat(section.area) || 0).toFixed(4)}</td>
                <td>${(parseFloat(section.percentage) || 0).toFixed(1)}%</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="app.editSection('${section.id}')" title="Edit section" style="margin-right: 0.5rem;">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="app.deleteSection('${section.id}')" title="Delete section">Delete</button>
                </td>
            </tr>
        `).join('');
    },



    // Delete section
    async deleteSection(sectionId) {
        const farm = this.getCurrentFarm();
        if (!farm) return;

        this.showConfirmation('Are you sure you want to delete this section?', async () => {
            try {
                if (!String(sectionId).startsWith('section_')) {
                    await api.sections.delete(sectionId);
                }

                // Remove from local array
                farm.sections = farm.sections.filter(s => s.id != sectionId);

                // Remove polygon from map
                const polygonRef = this.sectionPolygons.find(sp => sp.id === sectionId);
                if (polygonRef) {
                    polygonRef.polygon.setMap(null);
                    this.sectionPolygons = this.sectionPolygons.filter(sp => sp.id !== sectionId);
                }

                this.renderFarmSectionsTable();
                this.renderLandAllocationTable();
                this.showSuccess('Section deleted successfully');

            } catch (error) {
                this.showError('Failed to delete section: ' + error.message);
                // Check if it was a temporary local section (failed save?)
                if (String(sectionId).startsWith('section_')) {
                    farm.sections = farm.sections.filter(s => s.id !== sectionId);
                    this.renderFarmSectionsTable();
                }
            }
        });
    },

    // Print Land Allocation table
    printLandAllocationTable() {
        if (!this.getCurrentFarm().sections || this.getCurrentFarm().sections.length === 0) {
            this.showError('No allocations to print');
            return;
        }

        const sections = this.getCurrentFarm().sections || [];
        const farmName = this.getCurrentFarm().name;
        const totalArea = this.getCurrentFarm().area;

        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Land Allocation - ${farmName}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; }
                    .meta { color: #666; margin-bottom: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th { background: #4CAF50; color: white; padding: 12px; text-align: left; }
                    td { padding: 10px; border-bottom: 1px solid #ddd; }
                    tr:hover { background: #f5f5f5; }
                    .footer { margin-top: 30px; color: #999; font-size: 12px; text-align: center; }
                    @media print { button { display: none; } }
                </style>
            </head>
            <body>
                <h1>🌾 Land Allocation Report</h1>
                <div class="meta">
                    <strong>Farm:</strong> ${farmName}<br>
                    <strong>Total Area:</strong> ${totalArea} hectares<br>
                    <strong>Generated:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Zone/Section</th>
                            <th>Area (HA)</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sections.map(s => `
                            <tr>
                                <td><strong>${s.name}</strong></td>
                                <td>${s.area.toFixed(4)}</td>
                                <td>${s.percentage ? s.percentage.toFixed(1) : '0.0'}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <div class="footer">
                    Generated by Maloure Farm Management System
                </div>
                
                <script>window.print(); window.onafterprint = function() { window.close(); }</script>
            </body>
            </html>
        `);
        printWindow.document.close();
    },

    // Print Crop Allocation Sections table
    printCropAllocationSections() {
        if (!this.getCurrentFarm().sections || this.getCurrentFarm().sections.length === 0) {
            this.showError('No crop allocation sections to print');
            return;
        }

        const sections = this.getCurrentFarm().sections || [];
        const farmName = this.getCurrentFarm().name;

        const printWindow = window.open('', '', 'width=900,height=700');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Crop Allocation Sections - ${farmName}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px; }
                    .meta { color: #666; margin-bottom: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
                    th { background: #4CAF50; color: white; padding: 10px; text-align: left; }
                    td { padding: 8px; border-bottom: 1px solid #ddd; }
                    tr:hover { background: #f5f5f5; }
                    .color-box { width: 18px; height: 18px; border-radius: 3px; border: 1px solid #999; display: inline-block; }
                    .footer { margin-top: 30px; color: #999; font-size: 12px; text-align: center; }
                    .coords { font-family: monospace; font-size: 10px; color: #666; }
                    @media print { button { display: none; } }
                </style>
            </head>
            <body>
                <h1>📊 Crop Allocation Sections</h1>
                <div class="meta">
                    <strong>Farm:</strong> ${farmName}<br>
                    <strong>Total Sections:</strong> ${sections.length}<br>
                    <strong>Generated:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Section Name</th>
                            <th>Type</th>
                            <th>Crop</th>
                            <th>Area (ha)</th>
                            <th>%</th>
                            <th>GPS Coordinates</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sections.map(s => {
            const lat = s.centerCoordinates?.lat?.toFixed(6) || 'N/A';
            const lng = s.centerCoordinates?.lng?.toFixed(6) || 'N/A';
            return `
                            <tr>
                                <td><div class="color-box" style="background: ${s.color};"></div></td>
                                <td><strong>${s.name}</strong></td>
                                <td>${s.type.replace('-', ' ')}</td>
                                <td>${s.cropType || '-'}</td>
                                <td>${s.area.toFixed(4)}</td>
                                <td>${s.percentage.toFixed(1)}%</td>
                                <td class="coords">${lat}, ${lng}</td>
                            </tr>
                        `}).join('')}
                    </tbody>
                </table>
                
                <div class="footer">
                    Generated by Maloure Farm Management System
                </div>
                
                <script>window.print(); window.onafterprint = function() { window.close(); }</script>
            </body>
            </html>
        `);
        printWindow.document.close();
    },

    // Edit section
    editSection(sectionId) {
        const farm = this.getCurrentFarm();
        const section = farm.sections.find(s => s.id == sectionId);

        if (!section) {
            this.showError('Section not found');
            return;
        }

        // Fill the static modal from index.html
        document.getElementById('sectionId').value = section.id;
        document.getElementById('sectionName').value = section.name;
        document.getElementById('sectionType').value = section.type;
        document.getElementById('sectionCrop').value = section.cropType || section.crop || '';
        document.getElementById('sectionArea').value = section.area;

        // Calculate Percentage
        const totalFarmArea = parseFloat(farm.area) || 0;
        if (totalFarmArea > 0) {
            const pct = (section.area / totalFarmArea) * 100;
            document.getElementById('sectionPercentage').value = pct.toFixed(1);
        } else {
            document.getElementById('sectionPercentage').value = '0.0';
        }

        document.getElementById('sectionColor').value = section.color;
        document.getElementById('sectionNotes').value = section.notes || '';

        // Update modal title
        const modalTitle = document.querySelector('#sectionModal .modal-title');
        if (modalTitle) modalTitle.textContent = 'Edit Farm Section';

        // Open modal
        this.openModal('sectionModal');
    },

    // Toggle between satellite and graphical map views
    // Toggle between satellite and graphical map views
    toggleMapView(viewType) {
        const satelliteBtn = document.getElementById('satelliteViewBtn');
        const graphicalBtn = document.getElementById('graphicalViewBtn');
        const mapDiv = document.getElementById('farmMap');
        const canvas = document.getElementById('farmMapCanvas');

        // If Google Maps is not available and user tries satellite, switch to graphical
        if (viewType === 'satellite' && !this.map) {
            this.showAlert(
                'Google Maps API Unavailable',
                'Please add your API key in index.html to use Satellite View.<br><br>Using Graphical View instead.'
            );
            viewType = 'graphical';
        }

        if (viewType === 'graphical') {
            document.getElementById('farmMap').style.display = 'none';
            document.getElementById('farmMapCanvas').style.display = 'block';
            document.getElementById('graphicalStatsHeader').style.display = 'flex'; // Show stats
            document.getElementById('satelliteViewBtn').classList.replace('btn-secondary', 'btn-outline');
            document.getElementById('graphicalViewBtn').classList.replace('btn-outline', 'btn-secondary');

            // Render map
            const farm = this.getCurrentFarm();
            this.renderGraphicalMap(farm); // Pass explicit farm
        } else {
            document.getElementById('farmMap').style.display = 'block';
            document.getElementById('farmMapCanvas').style.display = 'none';
            document.getElementById('graphicalStatsHeader').style.display = 'none'; // Hide stats
            document.getElementById('satelliteViewBtn').classList.replace('btn-outline', 'btn-secondary');
            document.getElementById('graphicalViewBtn').classList.replace('btn-secondary', 'btn-outline');

            // Re-init Google Map if needed
            if (this.map) google.maps.event.trigger(this.map, 'resize');
        }
        this.currentMapView = viewType; // Set current view based on the final viewType
    },

    // Show a generic alert modal
    showAlert(title, message, options = {}) {
        const titleEl = document.getElementById('alertTitle');
        const msgEl = document.getElementById('alertMessage');
        const headerEl = document.getElementById('alertHeader');
        const closeBtn = document.getElementById('alertCloseBtn');

        // Reset visibility
        if (headerEl) headerEl.style.display = 'flex';
        if (closeBtn) closeBtn.style.display = 'flex';

        if (titleEl) {
            if (title) {
                titleEl.textContent = title;
                titleEl.style.display = 'block';
            } else {
                // If no title, hide the entire header for a cleaner look
                if (headerEl) headerEl.style.display = 'none';
            }
        }

        if (options.hideClose && closeBtn) {
            closeBtn.style.display = 'none';
        }

        if (msgEl) msgEl.innerHTML = message;

        this.openModal('alertModal');
    },

    // Show professional info instructions (no title, no X)
    showInfo(message) {
        this.showAlert(null, `<div style="padding: 1rem 0; font-size: 1.1rem;">${message}</div>`, { hideClose: true });
    },

    // Standard Success/Error wrappers
    showSuccess(message) {
        this.showAlert('✓ Success', `<div style="color: #2e7d32; font-weight: 500;">${message}</div>`);
    },

    showError(message) {
        this.showAlert('⚠️ Error', `<div style="color: #c62828;">${message}</div>`);
    },

    // Render graphical representation on canvas
    // Render graphical representation on canvas
    renderGraphicalMap(explicitFarm = null) {
        const canvas = document.getElementById('farmMapCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        // Use intrinsic attributes if offset is 0 (hidden)
        const width = canvas.width || 1200;
        const height = canvas.height || 700;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw background
        ctx.fillStyle = '#f8faf9';
        ctx.fillRect(0, 0, width, height);

        // Ensure we always use the freshest farm data available
        const farm = explicitFarm || (this.getCurrentFarm && this.getCurrentFarm()) || this.farmData;
        const boundariesCount = farm && farm.boundaries ? farm.boundaries.length : 0;

        if (!farm || !farm.boundaries || farm.boundaries.length === 0) {
            const user = (typeof api !== 'undefined' && api.getUser) ? api.getUser() : null;

            ctx.fillStyle = '#666';
            ctx.font = '20px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`No farm boundaries defined for "${farm ? farm.name : 'this farm'}"`, width / 2, height / 2 - 20);

            ctx.font = '14px Inter, sans-serif';
            ctx.fillText('Edit coordinates to add boundaries', width / 2, height / 2 + 20);
            return;
        }

        // Calculate bounds
        const lats = farm.boundaries.map(b => b.lat);
        const lngs = farm.boundaries.map(b => b.lng);
        let minLat = Math.min(...lats);
        let maxLat = Math.max(...lats);
        let minLng = Math.min(...lngs);
        let maxLng = Math.max(...lngs);

        // Prevent division by zero if single point or line
        if (maxLat === minLat) {
            maxLat += 0.0001;
            minLat -= 0.0001;
        }
        if (maxLng === minLng) {
            maxLng += 0.0001;
            minLng -= 0.0001;
        }

        // Add padding
        const padding = 60;
        const mapWidth = width - 2 * padding;
        const mapHeight = height - 2 * padding;

        // Store active bounds for hit testing consistency
        this.activeMapBounds = {
            minLat, maxLat, minLng, maxLng,
            mapWidth, mapHeight, padding,
            width, height
        };

        // Scale functions
        const scaleX = (lng) => padding + ((lng - minLng) / (maxLng - minLng)) * mapWidth;
        const scaleY = (lat) => height - padding - ((lat - minLat) / (maxLat - minLat)) * mapHeight;
        const targetCellSideMeters = Math.sqrt(500); // ~22.36m
        const avgLat = (minLat + maxLat) / 2;
        const R = 6371000; // Earth radius
        const metersPerLat = (2 * Math.PI * R) / 360; // ~111320m
        const metersPerLng = metersPerLat * Math.cos(avgLat * Math.PI / 180);

        const latStep = targetCellSideMeters / metersPerLat;
        const lngStep = targetCellSideMeters / metersPerLng;

        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 0.5;

        // Safety limit: if grid is too dense (> 500 lines), fallback to 10x10 to prevent crash
        const estimatedLinesX = (maxLng - minLng) / lngStep;
        const estimatedLinesY = (maxLat - minLat) / latStep;

        if (estimatedLinesX < 500 && estimatedLinesY < 500) {
            // Draw Vertical Lines
            for (let lng = minLng; lng <= maxLng; lng += lngStep) {
                const x = scaleX(lng);
                if (x >= padding && x <= width - padding) {
                    ctx.beginPath();
                    ctx.moveTo(x, padding);
                    ctx.lineTo(x, height - padding);
                    ctx.stroke();
                }
            }
            // Draw Horizontal Lines
            for (let lat = minLat; lat <= maxLat; lat += latStep) {
                const y = scaleY(lat);
                if (y >= padding && y <= height - padding) {
                    ctx.beginPath();
                    ctx.moveTo(padding, y);
                    ctx.lineTo(width - padding, y);
                    ctx.stroke();
                }
            }
        } else {
            console.warn('Farm area too large for 500m² grid visualization. Falling back to simple grid');
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
        }

        // Expose steps for usage in Unallocated Calculation
        this.gridSteps = { latStep, lngStep, safe: (estimatedLinesX < 500 && estimatedLinesY < 500) };

        // Draw farm boundary
        ctx.beginPath();
        ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;

        farm.boundaries.forEach((coord, i) => {
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

        let totalAllocatedArea = 0;

        ctx.save(); // Save state before clipping

        // Define clipping region (the farm boundary)
        ctx.beginPath();
        farm.boundaries.forEach((coord, i) => { // Use 'farm' instead of 'this.farmData'
            const x = scaleX(coord.lng);
            const y = scaleY(coord.lat);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.clip(); // IMPORTANT: Clip everything to the farm boundary

        sections.forEach(section => {
            if (section.boundaries && section.boundaries.length > 0) {
                // Calculate Area for Stats
                if (section.area) totalAllocatedArea += parseFloat(section.area);

                let baseColor = section.color || '#4CAF50';
                if (!baseColor.startsWith('#')) baseColor = '#' + baseColor;

                ctx.beginPath();
                ctx.fillStyle = baseColor + '66'; // Add transparency (assumes #RRGGBB)
                ctx.strokeStyle = baseColor;
                ctx.lineWidth = 2;

                const pixels = section.boundaries.map(coord => ({
                    x: scaleX(coord.lng),
                    y: scaleY(coord.lat)
                }));

                // Draw Polygon
                pixels.forEach((p, i) => {
                    if (i === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                });
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Draw edge dimensions (Length)
                ctx.font = 'bold 10px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                for (let i = 0; i < section.boundaries.length; i++) {
                    const j = (i + 1) % section.boundaries.length;
                    const p1 = section.boundaries[i];
                    const p2 = section.boundaries[j];

                    const pix1 = pixels[i];
                    const pix2 = pixels[j];

                    const dist = this.coordsToMeters(p1.lat, p1.lng, p2.lat, p2.lng);

                    if (dist > 2) { // Only show label if segment is significant
                        const label = dist.toFixed(1) + 'm';
                        const midX = (pix1.x + pix2.x) / 2;
                        const midY = (pix1.y + pix2.y) / 2;

                        // Draw Label Background
                        const textWidth = ctx.measureText(label).width;
                        ctx.fillStyle = 'rgba(0,0,0,0.7)';
                        ctx.fillRect(midX - textWidth / 2 - 2, midY - 7, textWidth + 4, 14);

                        // Draw Text
                        ctx.fillStyle = '#fff';
                        ctx.fillText(label, midX, midY);
                    }
                }

                // Draw Section Label (Centroid)
                const center = this.getPolygonCenter(pixels);

                // Show Corner Coordinates if Selected
                if (String(this.selectedSectionId) === String(section.id)) {
                    console.log('Rendering coordinates for section:', section.id);
                    const corners = section.boundaries;
                    ctx.font = 'bold 9px Inter, sans-serif';
                    corners.forEach((corner, i) => {
                        const cornerX = scaleX(corner.lng);
                        const cornerY = scaleY(corner.lat);
                        const cornerText = `${corner.lat.toFixed(5)}, ${corner.lng.toFixed(5)}`;

                        // Background box for visibility
                        const textWidth = ctx.measureText(cornerText).width;
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                        ctx.strokeStyle = '#333';
                        ctx.lineWidth = 0.5;
                        ctx.fillRect(cornerX - textWidth / 2 - 2, cornerY - 20, textWidth + 4, 14);
                        ctx.strokeRect(cornerX - textWidth / 2 - 2, cornerY - 20, textWidth + 4, 14);

                        // Text
                        ctx.fillStyle = '#cc0000'; // Distinct color for coords
                        ctx.textAlign = 'center';
                        ctx.fillText(cornerText, cornerX, cornerY - 10);

                        // Marker dot
                        ctx.beginPath();
                        ctx.arc(cornerX, cornerY, 3, 0, 2 * Math.PI);
                        ctx.fillStyle = '#cc0000';
                        ctx.fill();
                    });
                }

                ctx.fillStyle = '#333';
                ctx.font = 'bold 12px Inter, sans-serif';
                ctx.fillText(section.name || section.cropType, center.x, center.y);
            }
        });

        ctx.restore(); // Restore state after drawing sections (removes clipping AND restores save from 4209)

        // Draw farm center point
        const centerX = scaleX(farm.centerCoordinates.lng);
        const centerY = scaleY(farm.centerCoordinates.lat);

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
        ctx.fillText(farm.name, width / 2, 30);

        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`Area: ${parseFloat(farm.area).toFixed(4)} ha`, padding, padding - 30);
        ctx.textAlign = 'right';
        ctx.fillText(`Sections: ${sections.length}`, width - padding, padding - 30);

        // ==========================================
        // UNALLOCATED SPACE VISUALIZATION (GRID-BASED)
        // ==========================================
        if (typeof turf !== 'undefined' && farm.boundaries && farm.boundaries.length >= 3) {
            try {
                // 1. Create Farm Polygon
                const farmCoords = farm.boundaries.map(p => [p.lng, p.lat]);
                farmCoords.push(farmCoords[0]); // Close ring
                const farmPoly = turf.polygon([farmCoords]);

                // 2. Union all Section Polygons
                let allocatedPoly = null;
                const validSections = sections.filter(s => s.boundaries && s.boundaries.length >= 3);

                if (validSections.length > 0) {
                    const sectionPolys = validSections.map(s => {
                        const coords = s.boundaries.map(p => [p.lng, p.lat]);
                        coords.push(coords[0]); // Close ring
                        return turf.polygon([coords]);
                    });

                    allocatedPoly = sectionPolys[0];
                    for (let i = 1; i < sectionPolys.length; i++) {
                        try {
                            allocatedPoly = turf.union(allocatedPoly, sectionPolys[i]);
                        } catch (e) { console.warn('Union error', e); }
                    }
                }

                // 3. Compute Difference (Entire Empty Space)
                let unallocatedFeatures = null;
                if (allocatedPoly) {
                    try {
                        unallocatedFeatures = turf.difference(farmPoly, allocatedPoly);
                    } catch (e) {
                        unallocatedFeatures = farmPoly;
                    }
                } else {
                    unallocatedFeatures = farmPoly;
                }

                // 4. Subdivide by Grid (Dynamic ~500m² cells)
                this.unallocatedFragments = []; // Reset storage
                if (unallocatedFeatures) {
                    // Use calculated steps from visual grid, or fallback to 10x10 if not safe/available
                    let latStep, lngStep;
                    let safe = false;

                    if (this.gridSteps && this.gridSteps.safe) {
                        latStep = this.gridSteps.latStep;
                        lngStep = this.gridSteps.lngStep;
                        safe = true;
                    } else {
                        latStep = (maxLat - minLat) / 10;
                        lngStep = (maxLng - minLng) / 10;
                    }

                    // Loop through grid cells based on steps
                    for (let lat = minLat; lat < maxLat; lat += latStep) {
                        for (let lng = minLng; lng < maxLng; lng += lngStep) {

                            // Define Grid Cell Polygon
                            const cellMinLng = lng;
                            const cellMaxLng = Math.min(lng + lngStep, maxLng); // Clip to max
                            const cellMinLat = lat;
                            const cellMaxLat = Math.min(lat + latStep, maxLat); // Clip to max

                            // Optimization: Simple bounding box check before Turf polygon creation
                            // (Skip if strictly outside farm bounds, though loop handles this mostly)

                            const cellPoly = turf.polygon([[
                                [cellMinLng, cellMinLat],
                                [cellMaxLng, cellMinLat],
                                [cellMaxLng, cellMaxLat],
                                [cellMinLng, cellMaxLat],
                                [cellMinLng, cellMinLat]
                            ]]);

                            // Intersect Grid Cell with Unallocated Space
                            try {
                                const fragment = turf.intersect(cellPoly, unallocatedFeatures);

                                if (fragment) {
                                    // Handle both Polygon and MultiPolygon fragments
                                    let frags = [];
                                    if (fragment.geometry.type === 'MultiPolygon') {
                                        frags = fragment.geometry.coordinates.map(c => turf.polygon(c));
                                    } else {
                                        frags = [fragment];
                                    }

                                    frags.forEach(frag => {
                                        const areaSqMeters = turf.area(frag);
                                        // Store for interactivity
                                        if (areaSqMeters > 5) {
                                            const center = turf.centerOfMass(frag);
                                            const centerCoords = center.geometry.coordinates;

                                            // Handle Selection State Persistence
                                            // Store fragments with an ID based on centroid for reliable selection tracking
                                            const fragId = `${centerCoords[0].toFixed(6)},${centerCoords[1].toFixed(6)}`;
                                            frag.id = fragId;

                                            this.unallocatedFragments.push({
                                                geometry: frag.geometry,
                                                areaSqMeters: areaSqMeters,
                                                id: fragId,
                                                center: centerCoords
                                            });
                                            // console.log('Fragment Added:', fragId, areaSqMeters);

                                            // Check if selected
                                            const isSelected = this.selectedUnallocatedIds && this.selectedUnallocatedIds.has(fragId);

                                            // Draw Outline
                                            ctx.beginPath();
                                            // Highlight if selected
                                            if (isSelected) {
                                                ctx.fillStyle = 'rgba(33, 150, 243, 0.3)'; // Blue Selection Fill
                                                ctx.strokeStyle = '#2196F3';
                                                ctx.lineWidth = 2;
                                            } else {
                                                ctx.fillStyle = 'transparent';
                                                ctx.strokeStyle = '#90a4ae';
                                                ctx.lineWidth = 0.5;
                                            }

                                            const rings = frag.geometry.coordinates;
                                            rings.forEach(ring => {
                                                ring.forEach((coord, i) => {
                                                    const x = scaleX(coord[0]);
                                                    const y = scaleY(coord[1]);
                                                    if (i === 0) ctx.moveTo(x, y);
                                                    else ctx.lineTo(x, y);
                                                });
                                                ctx.closePath();
                                            });
                                            if (isSelected) ctx.fill();
                                            ctx.stroke();

                                            // Draw Label
                                            const cx = scaleX(centerCoords[0]);
                                            const cy = scaleY(centerCoords[1]);

                                            // Force 500m² display if close
                                            let displayArea;
                                            if (Math.abs(areaSqMeters - 500) < 2) {
                                                displayArea = "500";
                                            } else {
                                                displayArea = areaSqMeters.toFixed(0);
                                            }

                                            // Styles: Bold and Black
                                            ctx.fillStyle = '#000000'; // Black
                                            ctx.textAlign = 'center';

                                            // Main Area text
                                            ctx.font = 'bold 10px Inter, sans-serif';
                                            ctx.fillText(displayArea, cx, cy);

                                            // Unit text
                                            ctx.font = 'bold 7px Inter, sans-serif';
                                            ctx.fillText('m²', cx, cy + 9);
                                        }
                                    });
                                }
                            } catch (err) {
                                // Intersection failed
                            }
                        }
                    }
                }
            } catch (err) {
                console.warn('Error calculating grid unallocated space:', err);
            }
        }

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
                ctx.fillStyle = section.color;
                ctx.fillRect(legendX + 10, legendY + i * 20, 15, 15);
                ctx.strokeStyle = '#666';
                ctx.strokeRect(legendX + 10, legendY + i * 20, 15, 15);
                ctx.fillStyle = '#333';
                ctx.fillText(section.name.substring(0, 12), legendX + 30, legendY + i * 20 + 11);
            });
        }

        // Update DOM Stats (Added for dynamic updates)
        const totalAreaEl = document.getElementById('graphicalTotalArea');
        const allocatedAreaEl = document.getElementById('graphicalAllocatedArea');
        const selectedAreaEl = document.getElementById('graphicalSelectedArea');
        const unallocatedAreaEl = document.getElementById('graphicalUnallocatedArea');
        const countEl = document.getElementById('graphicalSectionCount');

        const farmTotalArea = parseFloat(this.farmData.area) || 0;
        const _allocated = sections.reduce((sum, s) => sum + (parseFloat(s.area) || 0), 0);
        const availableArea = Math.max(0, farmTotalArea - _allocated);

        // Calculate Selected Area
        let selectedArea = 0;
        if (this.unallocatedFragments && this.selectedUnallocatedIds) {
            this.unallocatedFragments.forEach(frag => {
                if (this.selectedUnallocatedIds.has(frag.id)) {
                    selectedArea += (frag.areaSqMeters / 10000); // Convert sq meters to hectares
                }
            });
        }

        if (totalAreaEl) totalAreaEl.textContent = farmTotalArea.toFixed(4) + ' ha';
        if (allocatedAreaEl) allocatedAreaEl.textContent = _allocated.toFixed(4) + ' ha';
        if (selectedAreaEl) selectedAreaEl.textContent = selectedArea.toFixed(4) + ' ha';
        if (unallocatedAreaEl) unallocatedAreaEl.textContent = availableArea.toFixed(4) + ' ha'; // Reverted to ha
        if (countEl) countEl.textContent = sections.length;
    },
});

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



// Update all text in the interface
app.updateAllText = function () {
    // Update navigation
    const dashLink = document.getElementById('nav-dashboard');
    if (dashLink) dashLink.textContent = this.t('nav.dashboard');

    const opsLink = document.getElementById('nav-operations');
    if (opsLink) opsLink.textContent = this.t('nav.operations') + ' ▼';

    const finLink = document.getElementById('nav-finances');
    if (finLink) finLink.textContent = this.t('nav.financial');

    const reportsLink = document.getElementById('nav-reports');
    if (reportsLink) reportsLink.textContent = this.t('nav.reports');

    const farmLink = document.getElementById('nav-farm-profile');
    if (farmLink) farmLink.textContent = this.t('nav.farmInfo');

    const advLink = document.getElementById('nav-advanced');
    if (advLink) advLink.textContent = this.t('nav.advanced');

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
        } else if (href === '#employees') {
            this.renderEmployees(); // Ensure data is rendered
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
        locationCard.innerHTML = `<h3 class="card-title">${this.t('farmInfo.locationSpecs')}</h3>`;
    }

    // Update map buttons
    const satelliteBtn = document.getElementById('satelliteViewBtn');
    if (satelliteBtn) satelliteBtn.innerHTML = `${this.t('farmInfo.satelliteView')}`;

    const graphicalBtn = document.getElementById('graphicalViewBtn');
    if (graphicalBtn) graphicalBtn.innerHTML = `${this.t('farmInfo.graphicalView')}`;

    const editCoordsBtn = section.querySelector('button[onclick*="openCoordinateEditorModal"]');
    if (editCoordsBtn) editCoordsBtn.innerHTML = `${this.t('farmInfo.editCoordinates')}`;

    const uploadBtn = section.querySelector('button[onclick*="coordinateUploadInput"]');
    if (uploadBtn) uploadBtn.innerHTML = `${this.t('farmInfo.upload')}`;

    const allocBtn = document.getElementById('drawSectionBtn');
    if (allocBtn) allocBtn.innerHTML = `${this.t('farmInfo.cropAllocation')}`;
};

// Update Coordinate Editor modal text
app.updateCoordinateEditorText = function () {
    // Modal title
    const modalTitle = document.querySelector('#coordinateEditorModal .modal-title');
    if (modalTitle) modalTitle.textContent = `âœï¸ ${this.t('coordEditor.title')}`;

    // Instruction text
    const instruction = document.querySelector('#coordinateEditorModal .modal-body > p');
    if (instruction) instruction.textContent = this.t('coordEditor.instruction');

    // Add New Point section
    const addPointHeader = document.querySelector('#coordinateEditorModal .card-header h4');
    if (addPointHeader && addPointHeader.textContent.includes('Add') || addPointHeader.textContent.includes('Ajouter')) {
        addPointHeader.textContent = `âž• ${this.t('coordEditor.addNewPoint')}`;
    }

    // Bulk Import section
    const bulkHeaders = document.querySelectorAll('#coordinateEditorModal .card-header h4');
    if (bulkHeaders[1]) {
        bulkHeaders[1].textContent = `ðŸ“‹ ${this.t('coordEditor.bulkImport')}`;
    }

    // Table header
    const tableHeaders = document.querySelectorAll('#coordinateEditorModal thead th');
    if (tableHeaders[0]) tableHeaders[0].textContent = this.t('coordEditor.tableHeader.index');
    if (tableHeaders[1]) tableHeaders[1].textContent = this.t('coordEditor.tableHeader.latitude');
    if (tableHeaders[2]) tableHeaders[2].textContent = this.t('coordEditor.tableHeader.longitude');
    if (tableHeaders[3]) tableHeaders[3].textContent = this.t('coordEditor.tableHeader.actions');

    // Buttons
    const addPointBtn = document.querySelector('button[onclick="app.addCoordinatePoint()"]');
    if (addPointBtn) addPointBtn.innerHTML = `âž• ${this.t('coordEditor.addPoint')}`;

    const importBtn = document.querySelector('button[onclick="app.importBulkCoordinates()"]');
    if (importBtn) importBtn.innerHTML = `ðŸ“¥ ${this.t('coordEditor.importCoords')}`;

    const clearAllBtn = document.querySelector('button[onclick="app.clearAllCoordinates()"]');
    if (clearAllBtn) clearAllBtn.innerHTML = `ðŸ—‘ï¸ ${this.t('coordEditor.clearAll')}`;

    const cancelBtn = document.querySelector('#coordinateEditorModal button[onclick*="closeModal"]');
    if (cancelBtn) cancelBtn.textContent = this.t('coordEditor.cancel');

    const saveBtn = document.getElementById('saveCoordinatesBtn');
    if (saveBtn) saveBtn.innerHTML = `ðŸ’¾ ${this.t('coordEditor.saveChanges')}`;

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
    if (exportBtn) exportBtn.innerHTML = `ðŸ“¥ ${this.t('financial.export')}`;

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
    if (cardTitles[0]) cardTitles[0].textContent = `ðŸ‹ ${this.t('crops.fruitTrees')}`;
    if (cardTitles[1]) cardTitles[1].textContent = `ðŸŒ¾ ${this.t('crops.cashCrops')}`;

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
    if (reportBtns[1]) reportBtns[1].innerHTML = `📉 ${this.t('reports.operationsReport')}`;
    if (reportBtns[2]) reportBtns[2].innerHTML = `💼 ${this.t('reports.investorPresentation')}`;

    // Update report preview section if visible
    const reportPreview = document.getElementById('reportPreview');
    if (reportPreview && reportPreview.style.display !== 'none') {
        const previewTitle = reportPreview.querySelector('.card-title');
        if (previewTitle) previewTitle.textContent = this.t('reports.reportPreview');

        const printBtn = reportPreview.querySelector('button[onclick*=\"print\"]');
        if (printBtn) printBtn.innerHTML = `ðŸ–¨ï¸ ${this.t('reports.print')}`;
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
        section.classList.remove('hidden'); // Remove hidden class if present

        // Trigger specific renders if needed
        if (tabName === 'employees') {
            this.renderEmployees();
        } else if (tabName === 'incidents') {
            this.loadIncidents();
        } else if (tabName === 'farm-info') {
            setTimeout(() => {
                const farm = this.getCurrentFarm();
                console.log(`Debug: showTab('farm-info') - Triggering map render with farm: ${farm ? farm.name : 'NULL'}`);
                this.renderGraphicalMap(farm); // Pass explicit farm
                this.renderFarmMap(farm);
            }, 100);
        } else if (tabName === 'advanced') {
            this.initAdvancedFeatures();
        } else if (tabName === 'agri-calendar') {
            this.renderAgriCalendar();
        } else if (tabName === 'analysis') {
            if (this.loadFarmAnalysisUI) {
                this.loadFarmAnalysisUI();
            }
        }
    }

    // Add active class to clicked link
    const activeLink = document.querySelector(`a[href="#${tabName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

// ===================================
// Employee Management Logic
// ===================================

app.renderEmployees = function () {
    const farm = this.getCurrentFarm();
    const tbody = document.getElementById('employeesTableBody');
    const emptyMsg = document.getElementById('noEmployeesMessage');

    if (!farm || !farm.employees || farm.employees.length === 0) {
        if (tbody) tbody.innerHTML = '';
        if (emptyMsg) {
            emptyMsg.classList.remove('hidden');
            emptyMsg.classList.add('visible');
        }
        return;
    }

    if (emptyMsg) {
        emptyMsg.classList.add('hidden');
        emptyMsg.classList.remove('visible');
    }

    if (tbody) {
        tbody.innerHTML = farm.employees.map(emp => `
            <tr>
                <td>${emp.name}</td>
                <td><span class="badge badge-info">${emp.role}</span></td>
                <td><span class="badge badge-secondary">${emp.type || 'Full-time'}</span></td>
                <td><span class="badge ${emp.status === 'Active' ? 'badge-success' : 'badge-danger'}">${emp.status}</span></td>
                <td>${emp.phone || '-'}</td>
                <td>${emp.pay_frequency || 'Monthly'}</td>
                <td>${this.formatCurrency(emp.pay_rate || 0)}</td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="app.openEditEmployeeModal('${emp.id}')">✏️ Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="app.deleteEmployee('${emp.id}')">🗑️ Delete</button>
                </td>
            </tr>
        `).join('');
    }
};

app.openAddEmployeeModal = function () {
    document.getElementById('employeeId').value = '';
    document.getElementById('employeeForm').reset();
    document.getElementById('employeeModalTitle').textContent = 'Add New Employee';
    this.openModal('employeeModal');
};

app.openEditEmployeeModal = function (empId) {
    const farm = this.getCurrentFarm();
    // Ensure loose matching for ID (string vs int)
    const emp = farm.employees.find(e => e.id == empId);
    if (!emp) return;

    document.getElementById('employeeId').value = emp.id;
    document.getElementById('empName').value = emp.name;
    document.getElementById('empRole').value = emp.role;
    document.getElementById('empType').value = emp.type || 'Full-time';
    document.getElementById('empStatus').value = emp.status;
    document.getElementById('empPhone').value = emp.phone;
    document.getElementById('empPayFrequency').value = emp.pay_frequency || 'Monthly';
    document.getElementById('empSalary').value = emp.pay_rate;

    document.getElementById('employeeModalTitle').textContent = 'Edit Employee';
    this.openModal('employeeModal');
};

app.saveEmployee = async function (event) {
    event.preventDefault();
    const farm = this.getCurrentFarm();
    if (!farm) return;

    const id = document.getElementById('employeeId').value;
    const name = document.getElementById('empName').value;
    const role = document.getElementById('empRole').value;
    const type = document.getElementById('empType').value;
    const status = document.getElementById('empStatus').value;
    const phone = document.getElementById('empPhone').value;
    const pay_frequency = document.getElementById('empPayFrequency').value;
    const pay_rate = parseFloat(document.getElementById('empSalary').value) || 0;

    const employeeData = {
        name,
        role,
        type,
        status,
        phone,
        pay_frequency,
        pay_rate
    };

    try {
        if (id) {
            // Update existing
            const updatedEmp = await api.employees.update(id, employeeData);

            // Update local state
            const index = farm.employees.findIndex(e => e.id == id);
            if (index !== -1) {
                farm.employees[index] = updatedEmp;
            }
            this.showSuccess('Employee updated successfully');
        } else {
            // Create new
            const newEmp = await api.employees.create(farm.id, employeeData);

            if (!farm.employees) farm.employees = [];
            farm.employees.push(newEmp);
            this.showSuccess('Employee added successfully');
        }

        this.renderEmployees();
        this.closeModal('employeeModal');
    } catch (error) {
        console.error('Error saving employee:', error);
        this.showError('Failed to save employee: ' + error.message);
    }
};

app.deleteEmployee = function (id) {
    const farm = this.getCurrentFarm();
    if (!farm) return;

    const emp = farm.employees.find(e => e.id == id);
    this.showConfirmation(
        `Are you sure you want to delete ${emp ? emp.name : 'this employee'}?`,
        async () => {
            try {
                await api.employees.delete(id);
                // Remove from local state
                farm.employees = farm.employees.filter(e => e.id != id);
                this.renderEmployees();
                this.showSuccess('Employee deleted successfully');
            } catch (error) {
                console.error('Error deleting employee:', error);
                this.showError('Failed to delete employee: ' + error.message);
            }
        }
    );
};

// ==========================================
// RISK & INCIDENT LOG LOGIC
// ==========================================

app.incidentSubcategories = {
    'CLIMATE': ['Drought/Low Rainfall', 'Excessive Rainfall/Flooding', 'Bush/Wildfire', 'Storm/Hail Damage', 'Frost/Cold Damage', 'Heat Stress Periods'],
    'BIOLOGICAL': ['Pest Infestation', 'Disease Outbreak', 'Weed Infestation', 'Invasive Species', 'Livestock Predation', 'Crop Grazing Damage'],
    'OPERATIONAL': ['Logistics Delay/Failure', 'Equipment Breakdown', 'Labor Shortage/Absenteeism', 'Supply Chain Disruption', 'Input Quality Issues'],
    'SECURITY': ['Theft/Vandalism', 'Trespassing/Encroachment', 'Livestock Rustling', 'Worksite Accident', 'Fire Safety Breach'],
    'MARKET': ['Market Price Volatility', 'Buyer Default/Non-payment', 'Contract Breach', 'Transport Cost Spike', 'Input Cost Inflation'],
    'MANAGEMENT': ['Procedural Negligence', 'Training Deficiency', 'Record-Keeping Gaps', 'Poor Planning/Timing Error', 'Communication Breakdown'],
    'INFRASTRUCTURE': ['Irrigation System Failure', 'Fence/Boundary Damage', 'Storage Facility Issue', 'Road/Access Problem', 'Energy/Power Outage']
};

app.openLogIncidentModal = function () {
    this.openModal('logIncidentModal');
    // Set default date to today
    document.getElementById('incidentDate').valueAsDate = new Date();
};

app.updateIncidentSubcategories = function () {
    const category = document.getElementById('incidentCategory').value;
    const subcategorySelect = document.getElementById('incidentSubcategory');

    subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';

    if (category && this.incidentSubcategories[category]) {
        this.incidentSubcategories[category].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subcategorySelect.appendChild(option);
        });
    }
};

app.handleLogIncidentSubmit = async function () {
    const farm = this.getCurrentFarm();
    if (!farm || !farm.id) return alert('Please select a farm to log an incident.');

    const incident = {
        farm_id: farm.id, // Ensure your backend handles INTEGER farm_id now
        category: document.getElementById('incidentCategory').value,
        subcategory: document.getElementById('incidentSubcategory').value,
        severity: document.getElementById('incidentSeverity').value,
        date_detected: document.getElementById('incidentDate').value,
        affected_assets: document.getElementById('incidentAsset').value,
        financial_impact: document.getElementById('incidentImpact').value,
        status: document.getElementById('incidentStatus').value,
        details: {
            root_cause: document.getElementById('incidentDetails').value,
            action_taken: document.getElementById('incidentAction').value
        }
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/incidents`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(incident)
        });

        if (response.ok) {
            app.showNotification('Incident logged successfully', 'success');
            this.closeModal('logIncidentModal');
            document.getElementById('logIncidentForm').reset();
            this.loadIncidents(); // Refresh list

            // Auto-generate preventive task if applicable
            if (this.checkAutoTaskGeneration) {
                this.checkAutoTaskGeneration(incident);
            }
        } else {
            app.showNotification('Failed to log incident', 'error');
        }
    } catch (error) {
        console.error('Error logging incident:', error);
        app.showNotification('Error connecting to server', 'error');
    }
};

app.loadIncidents = async function () {
    const farm = this.getCurrentFarm();
    if (!farm) return;

    const tbody = document.querySelector('#incidentsTable tbody');
    if (tbody) tbody.innerHTML = '<tr><td colspan="8" class="text-center">Loading incidents...</td></tr>';

    if (!farm || !farm.id) {
        if (tbody) tbody.innerHTML = '<tr><td colspan="8" class="text-center">Please select a farm to view incidents.</td></tr>';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/incidents/${farm.id}`);
        if (response.ok) {
            this.incidents = await response.json(); // Store locally
            this.renderIncidentTable(this.incidents);
            this.updateIncidentStats(this.incidents);
        } else {
            if (tbody) tbody.innerHTML = '<tr><td colspan="8" class="text-center text-danger">Failed to load incidents. Server returned ' + response.status + '</td></tr>';
        }
    } catch (error) {
        console.error('Error loading incidents:', error);
        if (tbody) tbody.innerHTML = '<tr><td colspan="8" class="text-center text-danger">Error connecting to server. Please check your connection.</td></tr>';
    }
};

app.renderIncidentTable = function (incidents) {
    const tbody = document.querySelector('#incidentsTable tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (!incidents || incidents.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center">No incidents logged yet.</td></tr>';
        return;
    }

    incidents.forEach(inc => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${new Date(inc.date_detected).toLocaleDateString()}</td>
            <td>${inc.category}</td>
            <td>${inc.subcategory}</td>
            <td><span class="badge badge-${this.getSeverityClass(inc.severity)}">${inc.severity}</span></td>
            <td>${inc.affected_assets || '-'}</td>
            <td>${this.formatCurrency(inc.financial_impact)}</td>
            <td><span class="badge badge-${this.getStatusClass(inc.status)}">${inc.status}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="app.deleteIncident('${inc.id}')" title="Delete">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

app.filterIncidents = function () {
    const query = document.getElementById('incidentSearch').value.toLowerCase();
    const category = document.getElementById('incidentFilterCategory').value;
    const status = document.getElementById('incidentFilterStatus').value;

    if (!this.incidents) return;

    const filtered = this.incidents.filter(inc => {
        const matchesQuery = !query ||
            inc.category.toLowerCase().includes(query) ||
            inc.subcategory.toLowerCase().includes(query) ||
            (inc.affected_assets && inc.affected_assets.toLowerCase().includes(query)) ||
            (inc.details && JSON.stringify(inc.details).toLowerCase().includes(query));

        const matchesCategory = !category || inc.category === category;
        const matchesStatus = !status || inc.status === status;

        return matchesQuery && matchesCategory && matchesStatus;
    });

    this.renderIncidentTable(filtered);
};

app.updateIncidentStats = function (incidents) {
    const open = incidents.filter(i => i.status === 'Open').length;
    const critical = incidents.filter(i => i.severity === 'Critical').length;
    const resolved = incidents.filter(i => i.status === 'Resolved').length; // Should filter by month locally if needed
    const impact = incidents.reduce((sum, i) => sum + Number(i.financial_impact || 0), 0);

    if (document.getElementById('statsOpenIncidents')) document.getElementById('statsOpenIncidents').textContent = open;
    if (document.getElementById('statsCriticalIncidents')) document.getElementById('statsCriticalIncidents').textContent = critical;
    if (document.getElementById('statsResolvedMonth')) document.getElementById('statsResolvedMonth').textContent = resolved;
    if (document.getElementById('statsTotalImpact')) document.getElementById('statsTotalImpact').textContent = this.formatCurrency(impact);
};

app.getSeverityClass = function (severity) {
    switch (severity) {
        case 'Critical': return 'danger';
        case 'High': return 'warning';
        case 'Medium': return 'info';
        default: return 'success'; // Low
    }
};

app.getStatusClass = function (status) {
    return status === 'Resolved' ? 'success' : (status === 'In Progress' ? 'warning' : 'danger');
};

app.deleteIncident = async function (id) {
    if (!confirm('Are you sure you want to delete this log?')) return;
    try {
        const response = await fetch(`${API_BASE_URL}/api/incidents/${id}`, { method: 'DELETE' });
        if (response.ok) {
            this.loadIncidents();
        }
    } catch (error) {
        console.error('Error deleting incident:', error);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();

    // Global keyboard listener for ESC to cancel drawing
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && app.isDrawingMode) {
            app.toggleDrawingMode();
        }
    });
});

app.generateRiskReport = function () {
    const farm = this.getCurrentFarm();
    if (!farm) return alert('Please select a farm to generate report.');

    // Ensure incidents are loaded
    if (!this.incidents) {
        this.loadIncidents().then(() => this.renderRiskReport(farm));
    } else {
        this.renderRiskReport(farm);
    }
};

app.renderRiskReport = function (farm) {
    const incidents = this.incidents || [];

    // Calculate Stats
    const total = incidents.length;
    const critical = incidents.filter(i => i.severity === 'Critical').length;
    const resolved = incidents.filter(i => i.status === 'Resolved').length;
    const open = incidents.filter(i => i.status === 'Open').length;
    const totalImpact = incidents.reduce((sum, i) => sum + Number(i.financial_impact || 0), 0);

    const today = new Date().toLocaleDateString();

    const html = `
        <div class="report-header">
            <h1 class="report-title">Risk & Incident Report</h1>
            <div class="report-meta">
                <strong>Farm:</strong> ${farm.name} <br>
                <strong>Date:</strong> ${today} <br>
                <strong>Generated By:</strong> Farm Management System
            </div>
        </div>
        
        <div class="report-summary">
            <div class="summary-card">
                <div class="summary-label">Total Incidents</div>
                <div class="summary-value">${total}</div>
            </div>
            <div class="summary-card">
                <div class="summary-label">Critical Risks</div>
                <div class="summary-value" style="color: #dc3545;">${critical}</div>
            </div>
             <div class="summary-card">
                <div class="summary-label">Open Issues</div>
                <div class="summary-value">${open}</div>
            </div>
             <div class="summary-card">
                <div class="summary-label">Total Financial Impact</div>
                <div class="summary-value">${this.formatCurrency(totalImpact)}</div>
            </div>
        </div>
        
        <h3>Detailed Incident Log</h3>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Subcategory</th>
                    <th>Severity</th>
                    <th>Asset/Area</th>
                    <th>Impact</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${incidents.length > 0 ? incidents.map(inc => `
                    <tr>
                        <td>${new Date(inc.date_detected).toLocaleDateString()}</td>
                        <td>${inc.category}</td>
                        <td>${inc.subcategory}</td>
                        <td class="severity-${inc.severity ? inc.severity.toLowerCase() : 'low'}">${inc.severity}</td>
                        <td>${inc.affected_assets || '-'}</td>
                        <td>${this.formatCurrency(inc.financial_impact)}</td>
                        <td class="status-${inc.status === 'In Progress' ? 'progress' : inc.status.toLowerCase()}">${inc.status}</td>
                    </tr>
                `).join('') : '<tr><td colspan="7" style="text-align: center;">No incidents recorded.</td></tr>'}
            </tbody>
        </table>
        
        <div class="no-print" style="margin-top: 2rem; text-align: center;">
            <p>End of Report</p>
        </div>
    `;

    document.getElementById('reportContent').innerHTML = html;
    document.getElementById('reportPreview').style.display = 'block';

    // Scroll to preview
    document.getElementById('reportPreview').scrollIntoView({ behavior: 'smooth' });
};


// ===================================
// ADVANCED FEATURES MODULE
// ===================================

app.initAdvancedFeatures = function () {
    console.log('Advanced Features Initialized');
    this.updateAdvancedText();
    this.loadWeather();
    if (this.initAlerts) this.initAlerts();
    if (this.initTrends) this.initTrends();
    if (this.initTasks) this.initTasks();
    if (this.initInsurance) this.initInsurance();
};

app.updateAdvancedText = function () {
    // Placeholder for future translations
};

// Weather Integration
app.loadWeather = async function () {
    const card = document.querySelector('#weather-card .card-body');
    const farm = this.getCurrentFarm();

    if (!farm || !farm.centerCoordinates || (farm.centerCoordinates.lat === 0 && farm.centerCoordinates.lng === 0)) {
        card.innerHTML = `<div class="alert alert-warning">Please set farm location in 'Farm Profile' -> 'Edit Details' to see local weather.</div>`;
        return;
    }

    const { lat, lng } = farm.centerCoordinates;
    card.innerHTML = `<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p>Fetching forecast for ${lat.toFixed(4)}, ${lng.toFixed(4)}...</p></div>`;

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max&timezone=auto`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather API unavailable');
        const data = await response.json();

        this.renderWeather(data, card);
        this.checkExtremeConditions(data);

    } catch (error) {
        console.error('Weather error:', error);
        card.innerHTML = `<div class="alert alert-danger">Failed to load weather data: ${error.message}</div>`;
    }
};

app.renderWeather = function (data, container) {
    const current = data.current;

    // WMO Weather Codes (Simplified)
    const getWeatherIcon = (code) => {
        if (code === 0) return '\u2600\uFE0F'; // Clear
        if (code <= 3) return '\u26C5'; // Cloudy
        if (code <= 48) return '\uD83C\uDF2B\uFE0F'; // Fog
        if (code <= 67) return '\uD83C\uDF27\uFE0F'; // Rain
        if (code <= 77) return '\u2744\uFE0F'; // Snow
        if (code <= 82) return '\u26C8\uFE0F'; // Showers
        if (code <= 99) return '\u26A1'; // Thunderstorm
        return '\u2753';
    };

    const icon = getWeatherIcon(current.weather_code);

    // Planting Advice Logic
    let advice = "Conditions are stable.";
    let adviceColor = "text-success";

    if (current.rain > 5 || current.wind_speed_10m > 30) {
        advice = "\u26A0\uFE0F Unfavorable for spraying or planting due to rain/wind.";
        adviceColor = "text-danger";
    } else if (current.temperature_2m > 30) {
        advice = "\u26A0\uFE0F High heat stress risk. Ensure irrigation.";
        adviceColor = "text-warning";
    } else {
        advice = "\u2705 Good conditions for field operations.";
    }

    const html = `
        <div class="grid grid-2" style="gap: 2rem;">
            <!-- Current Status -->
            <div style="text-align: center;">
                <div style="font-size: 3rem;">${icon}</div>
                <h2 style="margin: 0;">${current.temperature_2m}${data.current_units.temperature_2m}</h2>
                <p class="text-muted">Current Conditions</p>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;">
                    <span>\uD83D\uDCA7 ${current.relative_humidity_2m}% Humidity</span>
                    <span>\uD83D\uDCA8 ${current.wind_speed_10m} km/h Wind</span>
                    <span>\u2614 ${current.rain} mm Rain</span>
                </div>
            </div>

            <!-- Advice & Check -->
            <div>
                <h4>Farm Advisory</h4>
                <p class="${adviceColor}" style="font-size: 1.1rem; font-weight: 500;">${advice}</p>
                
                <h5 class="mt-3">7-Day Forecast</h5>
                <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 5px;">
                    ${data.daily.time.map((day, i) => `
                        <div style="min-width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; padding: 5px;">
                            <div style="font-size: 0.8rem;">${new Date(day).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                            <div>${getWeatherIcon(data.daily.weather_code[i])}</div>
                            <div style="font-size: 0.8rem; font-weight: bold;">${Math.round(data.daily.temperature_2m_max[i])}\u00B0</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
};

app.checkExtremeConditions = function (data) {
    const badCodes = [95, 96, 99, 66, 67];
    const isBad = badCodes.includes(data.current.weather_code);

    if (isBad) {
        console.warn('Extreme weather detected!');
    }
};

// ===================================
// ALERT SYSTEM MODULE
// ===================================

app.initAlerts = function () {
    this.renderAlertSettings();
    this.checkAlerts();
};

app.renderAlertSettings = async function () {
    const card = document.querySelector('#alerts-card .card-body');
    const farm = this.getCurrentFarm();

    if (!farm) {
        card.innerHTML = '<p class="text-center text-muted">Please select a farm first.</p>';
        return;
    }

    // Load existing thresholds
    try {
        const response = await api.request(`/api/alerts/thresholds/farm/${farm.id}`);
        // Create map for easy lookup
        const thresholds = {};
        if (Array.isArray(response)) {
            response.forEach(t => thresholds[t.incident_category] = t);
        }

        const categories = ['THEFT', 'PEST', 'DISEASE', 'EQUIPMENT'];

        let html = `
            <div class="row">
                <div class="col-md-12 mb-3">
                    <div class="alert alert-info">
                        Set thresholds to receive warnings on the dashboard when incidents exceed a certain number within 30 days.
                    </div>
                </div>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Threshold (Count)</th>
                            <th>Time Period</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        categories.forEach(cat => {
            const t = thresholds[cat] || { count_threshold: 3, time_period_days: 30 };
            html += `
                <tr>
                    <td><span class="badge badge-secondary">${cat}</span></td>
                    <td>
                        <input type="number" id="thresh-count-${cat}" class="form-control form-control-sm" style="width: 80px" value="${t.count_threshold}" min="1">
                    </td>
                    <td>
                        <span class="text-muted">30 Days</span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="app.saveThreshold('${cat}')">Save</button>
                    </td>
                </tr>
            `;
        });

        html += `   </tbody>
                </table>
            </div>
        `;

        card.innerHTML = html;

    } catch (error) {
        console.error('Error loading thresholds:', error);
        card.innerHTML = '<p class="text-center text-danger">Failed to load alert settings.</p>';
    }
};

app.saveThreshold = async function (category) {
    const farm = this.getCurrentFarm();
    if (!farm) return;

    const count = document.getElementById(`thresh-count-${category}`).value;

    try {
        await api.request('/api/alerts/thresholds', {
            method: 'POST',
            body: JSON.stringify({
                farm_id: farm.id,
                incident_category: category,
                count_threshold: parseInt(count),
                time_period_days: 30
            })
        });

        this.showSuccess(`Threshold for ${category} updated.`);
        this.checkAlerts(); // Re-check immediately
    } catch (error) {
        console.error('Error saving threshold:', error);
        this.showError('Failed to save threshold.');
    }
};

app.checkAlerts = async function () {
    // Only check if on dashboard or advanced tab to save resources? 
    // Ideally this runs on load.
    const farm = this.getCurrentFarm();
    if (!farm) return;

    try {
        // 1. Get thresholds
        const thresholds = await api.request(`/api/alerts/thresholds/farm/${farm.id}`);
        if (!Array.isArray(thresholds) || thresholds.length === 0) return;

        // 2. Get recent incidents summary (mocking logic using existing API or new aggregation)
        // For now, we'll fetch all open incidents and count client-side for simplicity 
        // (Optimally this should be a backend aggregation endpoint)
        const incidents = await api.request(`/api/incidents/${farm.id}`); // Correct way to fetch incidents

        const alertsContainer = document.getElementById('dashboard-alerts-container');
        // Check if we need to insert container
        if (!alertsContainer) {
            const dashContainer = document.querySelector('#dashboard .container');
            if (dashContainer) {
                const div = document.createElement('div');
                div.id = 'dashboard-alerts-container';
                div.className = 'mb-4';
                dashContainer.insertBefore(div, dashContainer.firstChild.nextSibling); // Insert after Title
            }
        }

        let alertHtml = '';
        const now = new Date();
        const cutoff = new Date();
        cutoff.setDate(now.getDate() - 30); // Hardcoded 30 days for now matches UI

        thresholds.forEach(t => {
            const count = incidents.filter(i =>
                i.category === t.incident_category &&
                new Date(i.date_detected) >= cutoff
            ).length;

            if (count >= t.count_threshold) {
                alertHtml += `
                    <div class="alert alert-danger" style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>\u26A0\uFE0F CRITICAL ALERT: ${t.incident_category}</strong><br>
                            ${count} incidents recorded in the last 30 days (Threshold: ${t.count_threshold}).
                        </div>
                        <button class="btn btn-sm btn-outline-danger" onclick="app.showTab('incidents')">View Log</button>
                    </div>
                `;
            }
        });

        const container = document.getElementById('dashboard-alerts-container');
        if (container) container.innerHTML = alertHtml;

    } catch (error) {
        console.warn('Alert check failed', error);
    }
};

// ===================================
// TREND ANALYSIS MODULE
// ===================================

app.initTrends = function () {
    this.renderTrendsChart();
};

app.renderTrendsChart = async function () {
    const card = document.querySelector('#trends-card .card-body');
    const farm = this.getCurrentFarm();

    if (!farm) {
        card.innerHTML = '<p class="text-center text-muted">Please select a farm first.</p>';
        return;
    }

    card.innerHTML = '<div class="text-center"><div class="spinner-border text-primary"></div><p>Loading trends...</p></div>';

    try {
        const response = await api.request(`/api/incidents/stats/trends/${farm.id}`);
        // Data format: [{ month: '2025-01', category: 'THEFT', count: 2 }, ...]

        if (!Array.isArray(response) || response.length === 0) {
            card.innerHTML = '<p class="text-center text-muted">No incident data available for trend analysis.</p>';
            return;
        }

        // Process data for Chart.js
        // 1. Get unique months (labels) and sort
        const months = [...new Set(response.map(r => r.month))].sort();

        // 2. Get unique categories (datasets)
        const categories = [...new Set(response.map(r => r.category))];

        // 3. Build Datasets
        const datasets = categories.map(cat => {
            const data = months.map(m => {
                const entry = response.find(r => r.month === m && r.category === cat);
                return entry ? parseInt(entry.count) : 0;
            });

            // Assign distinct color based on category
            const color = this.getCategoryColor(cat);

            return {
                label: cat,
                data: data,
                borderColor: color,
                backgroundColor: color,
                fill: false,
                tension: 0.1
            };
        });

        // Clear and create canvas
        card.innerHTML = '<canvas id="trendsChart" height="300"></canvas>';
        const ctx = document.getElementById('trendsChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: datasets
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1 },
                        title: { display: true, text: 'Incidents' }
                    }
                }
            }
        });

    } catch (error) {
        console.error('Error loading trends:', error);
        card.innerHTML = '<p class="text-center text-danger">Failed to load trend data.</p>';
    }
};

app.getCategoryColor = function (category) {
    const colors = {
        'THEFT': '#dc3545',     // Red
        'PEST': '#ffc107',      // Yellow
        'DISEASE': '#fd7e14',   // Orange
        'CLIMATE': '#0dcaf0',   // Cyan
        'EQUIPMENT': '#6c757d', // Gray
        'SECURITY': '#20c997'   // Teal
    };
    return colors[category] || '#0d6efd'; // Default Blue
};

// ===================================
// TASK MANAGER MODULE
// ===================================

app.initTasks = function () {
    this.renderTaskBoard();
};

app.renderTaskBoard = async function () {
    const card = document.querySelector('#tasks-card .card-body');
    const farm = this.getCurrentFarm();

    if (!farm) {
        card.innerHTML = '<p class="text-center text-muted">Please select a farm first.</p>';
        return;
    }

    try {
        const tasks = await api.request(`/api/tasks/farm/${farm.id}`);
        // tasks = [{ id, title, description, due_date, status, priority }]

        let html = `
            <div class="d-flex justify-content-between mb-3">
                <h5>Task Board</h5>
                <button class="btn btn-sm btn-primary" onclick="app.openAddTaskModal()">\u2795 New Task</button>
            </div>
            <div class="grid grid-2">
                <!-- Pending Tasks -->
                <div style="background: #fff3cd; padding: 10px; border-radius: 8px;">
                    <h6 class="text-warning-dark border-bottom pb-2">\u23F3 Pending</h6>
                    <div id="pending-tasks-list" style="max-height: 300px; overflow-y: auto;">
                        ${this.generateTaskItems(tasks.filter(t => t.status !== 'Completed'))}
                    </div>
                </div>

                <!-- Completed Tasks -->
                <div style="background: #d1e7dd; padding: 10px; border-radius: 8px;">
                    <h6 class="text-success-dark border-bottom pb-2">\u2705 Completed</h6>
                    <div id="completed-tasks-list" style="max-height: 300px; overflow-y: auto;">
                        ${this.generateTaskItems(tasks.filter(t => t.status === 'Completed'))}
                    </div>
                </div>
            </div>
        `;

        card.innerHTML = html;

    } catch (error) {
        console.error('Error loading tasks:', error);
        card.innerHTML = '<p class="text-center text-danger">Failed to load tasks.</p>';
    }
};

app.generateTaskItems = function (tasks) {
    if (tasks.length === 0) return '<p class="text-muted text-center mt-2">No tasks</p>';

    return tasks.map(t => `
        <div class="card mb-2 p-2 shadow-sm" style="font-size: 0.9rem;">
            <div class="d-flex justify-content-between">
                <strong>${t.title}</strong>
                <span class="badge ${t.priority === 'High' ? 'badge-danger' : 'badge-secondary'}">${t.priority}</span>
            </div>
            <p class="mb-1 text-muted small">${t.description || ''}</p>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <small>\uD83D\uDCC5 ${t.due_date ? new Date(t.due_date).toLocaleDateString() : 'No date'}</small>
                <div>
                    ${t.status !== 'Completed' ?
            `<button class="btn btn-sm btn-success py-0" onclick="app.completeTask(${t.id})" title="Mark Complete">\u2714</button>` :
            `<span class="text-success">Done</span>`
        }
                    <button class="btn btn-sm btn-outline-danger py-0" onclick="app.deleteTask(${t.id})" title="Delete">\u2716</button>
                </div>
            </div>
        </div>
    `).join('');
};

app.openAddTaskModal = function (prefill = {}) {
    // Determine the next available ID for the modal (using simple manual modal creation or existing structure)
    // We will inject a simple modal into the DOM if it doesn't exist
    let modal = document.getElementById('addTaskModal');
    if (!modal) {
        const modalHtml = `
            <div class="modal-overlay" id="addTaskModal">
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">Create New Task</h3>
                        <button class="modal-close" onclick="app.closeModal('addTaskModal')">\u00D7</button>
                    </div>
                    <form id="addTaskForm">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" id="taskTitle" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea id="taskDesc" class="form-control" rows="2"></textarea>
                            </div>
                            <div class="grid grid-2">
                                <div class="form-group">
                                    <label>Priority</label>
                                    <select id="taskPriority" class="form-control">
                                        <option value="Low">Low</option>
                                        <option value="Medium" selected>Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Due Date</label>
                                    <input type="date" id="taskDueDate" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="app.closeModal('addTaskModal')">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save Task</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modal = document.getElementById('addTaskModal');

        // Bind submit
        document.getElementById('addTaskForm').onsubmit = (e) => {
            e.preventDefault();
            this.saveTask();
        };
    }

    // Reset and Prefill
    document.getElementById('addTaskForm').reset();
    if (prefill.title) document.getElementById('taskTitle').value = prefill.title;
    if (prefill.description) document.getElementById('taskDesc').value = prefill.description;

    this.openModal('addTaskModal');
};

app.saveTask = async function () {
    const farm = this.getCurrentFarm();
    if (!farm) return;

    const taskData = {
        farm_id: farm.id,
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDesc').value,
        priority: document.getElementById('taskPriority').value,
        due_date: document.getElementById('taskDueDate').value
    };

    try {
        await api.request('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(taskData)
        });

        this.closeModal('addTaskModal');
        this.showSuccess('Task created successfully');
        this.renderTaskBoard();
    } catch (error) {
        console.error('Error creating task:', error);
        this.showError('Failed to create task');
    }
};

app.completeTask = async function (id) {
    try {
        await api.request(`/api/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status: 'Completed' })
        });
        this.renderTaskBoard();
    } catch (error) {
        console.error('Error completing task:', error);
    }
};

app.deleteTask = async function (id) {
    if (!confirm('Delete this task?')) return;
    try {
        await api.request(`/api/tasks/${id}`, { method: 'DELETE' });
        this.renderTaskBoard();
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};

// ===================================
// AUTO-TASK GENERATION LOGIC
// ===================================

app.checkAutoTaskGeneration = function (incident) {
    let taskTitle = '';
    let taskDesc = '';

    if (incident.category === 'THEFT') {
        taskTitle = `Security Review: ${incident.subcategory || 'Theft'}`;
        taskDesc = `Auto-generated follow-up for theft incident. Check boundaries, locks, and coordinate with local security.`;
    } else if (incident.category === 'PEST' || incident.category === 'DISEASE') {
        taskTitle = `Crop Treatment: ${incident.subcategory || 'Incident'}`;
        taskDesc = `Auto-generated follow-up for ${incident.category.toLowerCase()}. Inspect affected area and apply treatment if necessary.`;
    } else if (incident.severity === 'High') {
        taskTitle = `High-Priority Action: ${incident.category}`;
        taskDesc = `Urgent response required for high-severity incident. Evaluate impact and plan mitigation.`;
    }

    if (taskTitle) {
        console.log(`Debug: Triggering auto-task generation for ${incident.category}`);
        // For better UX, we prompt the user
        if (confirm(`Would you like to create a preventive follow-up task: "${taskTitle}"?`)) {
            this.openAddTaskModal({
                title: taskTitle,
                description: taskDesc
            });
        }
    }
};

// ===================================
// INSURANCE LOG MODULE
// ===================================

app.initInsurance = function () {
    this.renderInsuranceClaims();
};

app.renderInsuranceClaims = async function () {
    const card = document.querySelector('#insurance-card .card-body');
    const farm = this.getCurrentFarm();

    if (!farm) {
        card.innerHTML = '<p class="text-center text-muted">Please select a farm first.</p>';
        return;
    }

    try {
        const claims = await api.request(`/api/insurance/farm/${farm.id}`);

        let html = `
            <div class="d-flex justify-content-between mb-3">
                <h5>Insurance Claims Log</h5>
                <button class="btn btn-sm btn-primary" onclick="app.openAddClaimModal()">\uD83D\uDCDD File New Claim</button>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Incident</th>
                            <th>Claim #</th>
                            <th>Provider</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${claims.length === 0 ? '<tr><td colspan="6" class="text-center">No claims filed yet.</td></tr>' : ''}
                        ${claims.map(c => `
                            <tr>
                                <td>${new Date(c.filing_date).toLocaleDateString()}</td>
                                <td>
                                    <small class="text-muted">${c.incident_category || 'N/A'}</small><br>
                                    ${c.incident_date ? new Date(c.incident_date).toLocaleDateString() : ''}
                                </td>
                                <td><code>${c.claim_number}</code></td>
                                <td>${c.provider}</td>
                                <td><span class="badge ${this.getClaimStatusBadge(c.status)}">${c.status}</span></td>
                                <td>${this.formatCurrency(c.amount_claimed)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        card.innerHTML = html;

    } catch (error) {
        console.error('Error loading claims:', error);
        card.innerHTML = '<p class="text-center text-danger">Failed to load insurance log.</p>';
    }
};

app.getClaimStatusBadge = function (status) {
    switch (status) {
        case 'Approved': return 'badge-success';
        case 'Rejected': return 'badge-danger';
        case 'Paid': return 'badge-success';
        case 'Under Review': return 'badge-warning';
        default: return 'badge-secondary';
    }
};

app.openAddClaimModal = async function () {
    const farm = this.getCurrentFarm();

    try {
        // Fetch incidents for dropdown
        const response = await fetch(`${API_BASE_URL}/api/incidents/${farm.id}`);
        const incidents = await response.json();

        let modal = document.getElementById('addClaimModal');
        if (!modal) {
            const modalHtml = `
                <div class="modal-overlay" id="addClaimModal">
                    <div class="modal">
                        <div class="modal-header">
                            <h3 class="modal-title">File Insurance Claim</h3>
                            <button class="modal-close" onclick="app.closeModal('addClaimModal')">\u00D7</button>
                        </div>
                        <form id="addClaimForm">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Linked Incident</label>
                                    <select id="claimIncident" class="form-control" required>
                                        <option value="">-- Select Incident --</option>
                                        ${incidents.map(i => `<option value="${i.id}">${i.category} - ${new Date(i.date_detected).toLocaleDateString()}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="grid grid-2">
                                    <div class="form-group">
                                        <label>Claim Number</label>
                                        <input type="text" id="claimNumber" class="form-control" placeholder="ABC-123" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Provider</label>
                                        <input type="text" id="claimProvider" class="form-control" placeholder="Allianz / AXA" required>
                                    </div>
                                </div>
                                <div class="grid grid-2">
                                    <div class="form-group">
                                        <label>Amount Claimed</label>
                                        <input type="number" id="claimAmount" class="form-control" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Filing Date</label>
                                        <input type="date" id="claimDate" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Notes</label>
                                    <textarea id="claimNotes" class="form-control" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onclick="app.closeModal('addClaimModal')">Cancel</button>
                                <button type="submit" class="btn btn-primary">File Claim</button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            modal = document.getElementById('addClaimModal');
            document.getElementById('addClaimForm').onsubmit = (e) => {
                e.preventDefault();
                this.saveClaim();
            };
        } else {
            const select = document.getElementById('claimIncident');
            select.innerHTML = '<option value="">-- Select Incident --</option>' +
                incidents.map(i => `<option value="${i.id}">${i.category} - ${new Date(i.date_detected).toLocaleDateString()}</option>`).join('');
        }

        document.getElementById('claimDate').valueAsDate = new Date();
        this.openModal('addClaimModal');
    } catch (error) {
        console.error(error);
        this.showError('Could not load incidents list.');
    }
};

app.saveClaim = async function () {
    const farm = this.getCurrentFarm();
    const data = {
        farm_id: farm.id,
        incident_id: document.getElementById('claimIncident').value,
        claim_number: document.getElementById('claimNumber').value,
        provider: document.getElementById('claimProvider').value,
        amount_claimed: parseFloat(document.getElementById('claimAmount').value),
        filing_date: document.getElementById('claimDate').value,
        notes: document.getElementById('claimNotes').value
    };

    try {
        await api.request('/api/insurance', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        this.closeModal('addClaimModal');
        this.showSuccess('Insurance claim filed.');
        this.renderInsuranceClaims();
    } catch (error) {
        console.error(error);
        this.showError('Failed to file claim.');
    }
};

// ==========================================
// FIX: Notification Helpers (Polyfill)
// ==========================================
// These functions are required for incident logging and other features.
// Adding them here ensures they exist even if defined elsewhere.

app.showMessage = function (title, message, isError = false) {
    const modal = document.getElementById('alertModal');
    if (modal) {
        const titleEl = document.getElementById('alertTitle');
        const msgEl = document.getElementById('alertMessage');

        if (titleEl) {
            titleEl.textContent = title;
            titleEl.style.color = isError ? '#dc3545' : '#28a745'; // Bootstrap danger/success colors
        }
        if (msgEl) msgEl.textContent = message;

        if (typeof app.openModal === 'function') {
            app.openModal('alertModal');
        } else {
            modal.classList.add('active'); // Fallback
        }
    } else {
        alert(message);
    }
};

if (typeof app.showSuccess !== 'function') {
    app.showSuccess = function (message) {
        this.showMessage('Success', message, false);
    };
}

if (typeof app.showError !== 'function') {
    app.showError = function (message) {
        this.showMessage('Error', message, true);
    };
}

if (typeof app.showNotification !== 'function') {
    app.showNotification = function (message, type) {
        if (type === 'success') this.showSuccess(message);
        else if (type === 'error') this.showError(message);
        else this.showMessage('Info', message, false);
    };
}
// End of Notification Fix

