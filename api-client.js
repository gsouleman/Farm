// API Configuration
const API_CONFIG = {
    // baseURL: 'http://10.62.241.36:3000', // Local backend URL (LAN Access)
    baseURL: 'https://farm-backend-uq2z.onrender.com', // Production backend URL
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
        sections: '/api/sections',
        employees: '/api/employees'
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
            console.log(`Debug: API Request: ${options.method || 'GET'} ${url}`);
            const response = await fetch(url, config);

            if (response.status === 401) {
                // Token expired or invalid
                this.removeToken();
                this.removeUser();
                // Redirect to login
                if (window.location.pathname !== '/login.html') {
                    window.location.href = '/login.html';
                }
                throw new Error('Authentication required');
            }

            // const data = await response.json(); // Moved below the !response.ok check

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                console.error(`Debug: API Error [${endpoint}]:`, data);
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
            window.location.href = '/login.html';
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
            console.log(`Debug: API - getAll() returned ${response.length} farms`);
            return response;
        },

        async getOne(id) {
            return await api.request(`${API_CONFIG.endpoints.farms}/${id}`);
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

    // Crop APIs
    crops: {
        async getByFarm(farmId) {
            return await api.request(`${API_CONFIG.endpoints.crops}/farm/${farmId}`);
        },

        async create(farmId, cropData) {
            return await api.request(`${API_CONFIG.endpoints.crops}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(cropData)
            });
        },

        async update(id, cropData) {
            return await api.request(`${API_CONFIG.endpoints.crops}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(cropData)
            });
        },

        async delete(id) {
            return await api.request(`${API_CONFIG.endpoints.crops}/${id}`, {
                method: 'DELETE'
            });
        }
    },

    // Section APIs
    sections: {
        async getByFarm(farmId) {
            return await api.request(`${API_CONFIG.endpoints.sections}/farm/${farmId}`);
        },

        async create(farmId, sectionData) {
            return await api.request(`${API_CONFIG.endpoints.sections}/farm/${farmId}`, {
                method: 'POST',
                body: JSON.stringify(sectionData)
            });
        },

        async update(id, sectionData) {
            return await api.request(`${API_CONFIG.endpoints.sections}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(sectionData)
            });
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
    }
};

// Check if user is authenticated
function isAuthenticated() {
    return !!api.getToken();
}

// Protect routes (call this on page load for protected pages)
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '/login.html';
    }
}
