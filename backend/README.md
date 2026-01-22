# Farm Management System - Backend API

Backend API for the Farm Management System built with Node.js, Express, and PostgreSQL.

## Features

- 🔐 JWT Authentication
- 🌾 Multi-farm management
- 💰 Transaction tracking
- 🌱 Crop management
- 📊 Section/plot allocation
- 🔒 Secure password hashing
- ✅ Input validation
- 🚀 Ready for deployment

## Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon.tech recommended)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your credentials:
```env
DATABASE_URL=your_neon_postgres_url
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5500
```

4. Run database migrations:
```bash
psql $DATABASE_URL < database/schema.sql
```

## Running the Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Farms
- `GET /api/farms` - Get all user's farms
- `POST /api/farms` - Create farm
- `GET /api/farms/:id` - Get single farm
- `PUT /api/farms/:id` - Update farm
- `DELETE /api/farms/:id` - Delete farm

### Transactions
- `GET /api/transactions/farm/:farmId` - Get farm transactions
- `POST /api/transactions/farm/:farmId` - Create transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Crops
- `GET /api/crops/farm/:farmId` - Get farm crops
- `POST /api/crops/farm/:farmId` - Create crop
- `PUT /api/crops/:id` - Update crop
- `DELETE /api/crops/:id` - Delete crop

### Sections
- `GET /api/sections/farm/:farmId` - Get farm sections
- `POST /api/sections/farm/:farmId` - Create section
- `PUT /api/sections/:id` - Update section
- `DELETE /api/sections/:id` - Delete section

## Deployment to Render.com

1. Create new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
4. Add environment variables from `.env`
5. Deploy!

## Database Setup (Neon)

1. Create account at https://neon.tech
2. Create new project
3. Copy connection string
4. Run schema.sql to create tables
5. Add DATABASE_URL to environment variables

## Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- Input validation on all endpoints
- SQL injection protection
- CORS configured for frontend

## License

ISC
