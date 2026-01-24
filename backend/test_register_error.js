const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function testRegistration() {
    console.log('--- Testing Registration Route ---');

    // 1. Create a dummy admin token (bypass login for test)
    // We assume an admin user with ID 1 exists or just use a dummy ID that RBAC accepts
    const token = jwt.sign(
        { userId: 1, email: 'admin', role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    console.log('Generated Admin Token');

    const userData = {
        email: 'testuser' + Date.now() + '@example.com',
        password: 'password123',
        fullName: 'Test User',
        role: 'user'
    };

    console.log('Sending Registration Request for:', userData.email);

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ Success:', data.message);
        } else {
            console.error('❌ Failed:', response.status);
            console.error('Error Message:', JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

testRegistration();
