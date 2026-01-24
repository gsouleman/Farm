// const fetch = require('node-fetch'); // Built-in in Node 18+

async function testLogin() {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'gsouleman@gmail.com',
                password: 'Hellt0cell'
            })
        });

        const status = response.status;
        const text = await response.text();

        console.log(`Status: ${status}`);
        console.log(`Body: ${text}`);

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

testLogin();
