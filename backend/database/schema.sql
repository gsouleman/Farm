-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user', 'guest')),
    must_change_password BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Note: existing users will default to 'user' and must_change_password=TRUE due to default values if we ran this as ALTER TABLE.
-- Since this is the schema definition, new tables will have these.
-- For migration of existing DB, we might need a separate script or manual query.

-- Farms table
CREATE TABLE IF NOT EXISTS farms (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    location TEXT,
    area DECIMAL(10,2),
    perimeter DECIMAL(10,2),
    center_lat DECIMAL(10,6),
    center_lng DECIMAL(10,6),
    boundaries JSONB,
    zones JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('income', 'expense')),
    category VARCHAR(100) NOT NULL,
    description TEXT,
    amount DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Crops table
CREATE TABLE IF NOT EXISTS crops (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    category VARCHAR(20) NOT NULL CHECK (category IN ('fruit', 'cash')),
    type VARCHAR(100) NOT NULL,
    count INTEGER,
    area DECIMAL(10,2),
    planted_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    harvest_date DATE,
    yield DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Sections table
CREATE TABLE IF NOT EXISTS sections (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    crop_type VARCHAR(100),
    area DECIMAL(10,2) NOT NULL,
    percentage DECIMAL(5,2),
    color VARCHAR(7) NOT NULL,
    boundaries JSONB,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Section Note: The sections table stores crop allocation areas (graphical representation)

-- Employees table
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- Manager, Field Worker, Driver, Security, Admin
    type VARCHAR(50) NOT NULL, -- Full-time, Part-time, Casual
    status VARCHAR(50) DEFAULT 'Active', -- Active, Inactive
    phone VARCHAR(20),
    pay_frequency VARCHAR(20), -- Monthly, Weekly, Daily, Hourly
    pay_rate DECIMAL(12,2),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_farms_user_id ON farms(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_farm_id ON transactions(farm_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON transactions(date);
CREATE INDEX IF NOT EXISTS idx_crops_farm_id ON crops(farm_id);
CREATE INDEX IF NOT EXISTS idx_sections_farm_id ON sections(farm_id);
CREATE INDEX IF NOT EXISTS idx_employees_farm_id ON employees(farm_id);
