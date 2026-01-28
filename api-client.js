// API Configuration
const API_CONFIG = {
    // Automatically detect environment
    get baseURL() {
        const localURL = 'http://localhost:3000';
        const remoteURL = 'https://farm-backend-uq2z.onrender.com';

        const host = window.location.hostname;

        // Detect local environments (localhost, 127.0.0.1, LAN IPs)
        if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '' ||
            host.startsWith('192.168.') || host.startsWith('10.') || host.startsWith('172.')) {
            return localURL;
        }
        return remoteURL;
    },
    endpoints: {
        auth: {
            register: '/api/auth/register',
            login: '/api/auth/login',
            changePassword: '/api/auth/change-password',
            me: '/api/auth/me',
            users: '/api/auth/users'
        },
        farms: '/api/farms',
        transactions: '/api/transactions',
        crops: '/api/crops',
        cropTypes: '/api/crop-types',
        sections: '/api/sections',
        employees: '/api/employees',
        analysis: '/api/analysis'
    }
};

// API Client
const api = {
    // Get auth token
    getToken() {
        return localStorage.getItem('authToken');
    },

    // Set auth token
    setToken(token) {
        localStorage.setItem('authToken', token);
    },

    // Remove auth token
    removeToken() {
        localStorage.removeItem('authToken');
    },

    // Get current user
    getUser() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    },

    // Set current user
    setUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },

    // Remove current user
    removeUser() {
        localStorage.removeItem('currentUser');
    },

    // Authenticated GET request
    async get(endpoint) {
        return await this.request(endpoint, { method: 'GET' });
    },

    // Authenticated POST request
    async post(endpoint, data) {
        return await this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },

    // Make authenticated API request
    async request(endpoint, options = {}) {
        const token = this.getToken();
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            ...options,
            headers
        };

        try {
            const url = `${API_CONFIG.baseURL}${endpoint}`;

            const response = await fetch(url, config);

            if (response.status === 401) {
                // Token expired or invalid
                this.removeToken();
                this.removeUser();

                // Only redirect if we're not already on the landing page or login page
                const isAuthPage = window.location.pathname.endsWith('landing.html') ||
                    window.location.pathname.endsWith('login.html') ||
                    window.location.pathname === '/';

                if (!isAuthPage) {
                    setTimeout(() => {
                        window.location.href = 'landing.html';
                    }, 300);
                }
                throw new Error('Authentication required');
            }

            // const data = await response.json(); // Moved below the !response.ok check

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {

                throw new Error(data.error?.message || `Request failed with status ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    },

    // Authentication APIs
    auth: {
        async register(email, password, fullName, role) {
            const data = await api.request(API_CONFIG.endpoints.auth.register, {
                method: 'POST',
                body: JSON.stringify({ email, password, fullName, role })
            });
            return data;
        },

        async login(email, password) {
            const response = await api.request(API_CONFIG.endpoints.auth.login, {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });

            api.setToken(response.token);
            api.setUser(response.user);
            return response;
        },

        async changePassword(currentPassword, newPassword) {
            return await api.request(API_CONFIG.endpoints.auth.changePassword, {
                method: 'POST',
                body: JSON.stringify({ currentPassword, newPassword })
            });
        },

        async logout() {
            api.removeToken();
            api.removeUser();
            window.location.href = '/landing.html';
        },

        async me() {
            return await api.request(API_CONFIG.endpoints.auth.me);
        },

        async getUsers() {
            return await api.request(API_CONFIG.endpoints.auth.users);
        },

        async updateUser(id, userData) {
            return await api.request(`${API_CONFIG.endpoints.auth.users}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(userData)
            });
        },

        async deleteUser(id) {
            return await api.request(`${API_CONFIG.endpoints.auth.users}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Farm APIs
    farms: {
        async getAll() {
            const response = await api.request(API_CONFIG.endpoints.farms);

            return response;
        },

        async getOne(id) {
            const response = await api.request(`${API_CONFIG.endpoints.farms}/${id}`);

            return response;
        },

        async create(farmData) {
            return await api.request(API_CONFIG.endpoints.farms, {
                method: 'POST',
                body: JSON.stringify(farmData)
            });
        },

        async update(id, farmData) {
            return await api.request(`${API_CONFIG.endpoints.farms}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(farmData)
            });
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.farms}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Transaction APIs
    transactions: {
        async getByFarm(farmId) {
            return await api.request(`${API_CONFIG.endpoints.transactions}/farm/${farmId}`);
        },

        async create(farmId, transactionData) {
            return await api.request(`${API_CONFIG.endpoints.transactions}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(transactionData)
            });
        },

        async update(id, transactionData) {
            return await api.request(`${API_CONFIG.endpoints.transactions}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(transactionData)
            });
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.transactions}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Crop Types APIs
    cropTypes: {
        async getAll() {
            return await api.request(API_CONFIG.endpoints.cropTypes);
        },
        async create(data) {
            return await api.request(API_CONFIG.endpoints.cropTypes, {
                method: 'POST',
                body: JSON.stringify(data)
            });
        },
        async update(id, name) {
            return await api.request(`${API_CONFIG.endpoints.cropTypes}/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name })
            });
        },
        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.cropTypes}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Crop APIs
    crops: {
        // Helper to normalize DB snake_case to frontend camelCase
        normalize(crop) {
            if (!crop) return null;
            // console.log('Debug: Normalizing crop', crop);
            return {
                ...crop,
                plantedDate: crop.planted_date || crop.plantedDate,
                harvestDate: crop.harvest_date || crop.harvestDate,
                farmId: crop.farm_id || crop.farmId,
                createdAt: crop.created_at || crop.createdAt,
                updatedAt: crop.updated_at || crop.updatedAt,
                expectedHarvest: crop.expected_harvest || crop.expectedHarvest,
                // Ensure numbers are numbers
                count: crop.count ? parseInt(crop.count) : null,
                area: crop.area ? parseFloat(crop.area) : null,
                yield: crop.yield ? parseFloat(crop.yield) : null
            };
        },

        async getByFarm(farmId) {

            try {
                const crops = await api.request(`${API_CONFIG.endpoints.crops}/farm/${farmId}`);


                if (!Array.isArray(crops)) {

                    return [];
                }

                return crops.map(c => this.normalize(c));
            } catch (error) {

                throw error;
            }
        },

        async create(farmId, cropData) {
            const crop = await api.request(`${API_CONFIG.endpoints.crops}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(cropData)
            });
            return this.normalize(crop);
        },

        async update(id, cropData) {
            const crop = await api.request(`${API_CONFIG.endpoints.crops}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(cropData)
            });
            return this.normalize(crop);
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.crops}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Section APIs
    sections: {
        normalize(section) {
            if (!section) return null;
            return {
                ...section,
                cropType: section.crop_type || section.cropType,
                farmId: section.farm_id || section.farmId,
                createdAt: section.created_at || section.createdAt,
                // Ensure boundaries are parsed if stringified
                boundaries: typeof section.boundaries === 'string' ? JSON.parse(section.boundaries) : section.boundaries,
                area: parseFloat(section.area) || 0,
                percentage: parseFloat(section.percentage) || 0
            };
        },

        async getByFarm(farmId) {
            const sections = await api.request(`${API_CONFIG.endpoints.sections}/farm/${farmId}`);
            if (!Array.isArray(sections)) return [];
            return sections.map(s => this.normalize(s));
        },

        async create(farmId, sectionData) {
            const section = await api.request(`${API_CONFIG.endpoints.sections}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(sectionData)
            });
            return this.normalize(section);
        },

        async update(id, sectionData) {
            const section = await api.request(`${API_CONFIG.endpoints.sections}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(sectionData)
            });
            return this.normalize(section);
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.sections}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Employee APIs
    employees: {
        async getByFarm(farmId) {
            return await api.request(`${API_CONFIG.endpoints.employees}/farm/${farmId}`);
        },

        async create(farmId, employeeData) {
            return await api.request(`${API_CONFIG.endpoints.employees}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(employeeData)
            });
        },

        async update(id, employeeData) {
            return await api.request(`${API_CONFIG.endpoints.employees}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(employeeData)
            });
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.employees}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Analysis APIs
    analysis: {
        async get(farmId) {
            return await api.request(`${API_CONFIG.endpoints.analysis}/${farmId}`);
        },

        async save(farmId, data) {
            return await api.request(API_CONFIG.endpoints.analysis, {
                method: 'POST',
                body: JSON.stringify({ farm_id: farmId, data })
            });
        },

        async delete(farmId) {
            return await api.request(`${API_CONFIG.endpoints.analysis}/${farmId}`, {
                method: 'DELETE'
            });
        }
    }
};

// Check if user is authenticated
function isAuthenticated() {
    return !!api.getToken();
}

// Protect routes (call this on page load for protected pages)
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '/landing.html';
    }
}
