
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const DATA_FILE = path.join(__dirname, '../data/users.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Ensure users file exists with default admin
if (!fs.existsSync(DATA_FILE)) {
    const defaultUsers = [
        {
            id: 1,
            email: 'admin@example.com',
            password_hash: bcrypt.hashSync('password123', 10),
            full_name: 'Admin User',
            role: 'admin',
            must_change_password: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 2,
            email: 'admin', // Allow straight username for legacy
            password_hash: bcrypt.hashSync('password123', 10),
            full_name: 'Admin User',
            role: 'admin',
            must_change_password: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ];
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultUsers, null, 2));
}

function loadUsers() {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function saveUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

const mockPool = {
    async query(text, params) {
        console.log('[MockDB] Query:', text, params);

        const users = loadUsers();

        // SELECT ... WHERE email = $1
        if (text.trim().toLowerCase().startsWith('select') && text.includes('WHERE email = $1')) {
            const user = users.find(u => u.email === params[0]);
            return { rows: user ? [user] : [] };
        }

        // SELECT ... WHERE id = $1
        if (text.trim().toLowerCase().startsWith('select') && text.includes('WHERE id = $1')) {
            const user = users.find(u => u.id === parseInt(params[0]));
            return { rows: user ? [user] : [] };
        }

        // SELECT ALL USERS (Admin List)
        if (text.trim().toLowerCase().startsWith('select') && text.includes('FROM users') && !text.includes('WHERE')) {
            // Simple sort implementation if needed, though mostly frontend handles it or order doesn't fail app
            // The query uses: ORDER BY created_at DESC
            let resultUsers = [...users];
            if (text.includes('ORDER BY created_at DESC')) {
                resultUsers.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            }
            return { rows: resultUsers };
        }

        // INSERT INTO users
        if (text.trim().toLowerCase().startsWith('insert into users')) {
            const newUser = {
                id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
                email: params[0],
                password_hash: params[1],
                full_name: params[2],
                role: params[3],
                must_change_password: params[4],
                created_at: new Date().toISOString()
            };
            users.push(newUser);
            saveUsers(users);
            return { rows: [newUser] };
        }

        // UPDATE users ... WHERE id = $
        if (text.trim().toLowerCase().startsWith('update users')) {
            const idParamIndex = params.length - 1; // ID is usually last
            const id = parseInt(params[idParamIndex]); // Not robust but works for our specific queries

            const userIndex = users.findIndex(u => u.id === id);
            if (userIndex !== -1) {
                // Determine what we are updating based on query content
                if (text.includes('password_hash')) {
                    users[userIndex].password_hash = params[0];
                    users[userIndex].must_change_password = false;
                }
                // Handle generic update (users/:id)
                // This is tricky without parsing, but let's handle the specific Password Change and Profile Update cases if needed.
                // For now, let's assume it's the password update

                saveUsers(users);
                return { rows: [users[userIndex]] };
            }
            return { rows: [] };
        }

        return { rows: [] };
    },

    // API compatibility
    on: () => { },
    connect: async () => ({
        query: mockPool.query,
        release: () => { }
    })
};

module.exports = {
    query: (text, params) => mockPool.query(text, params),
    pool: mockPool
};
