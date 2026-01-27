
-- 1. Incident Thresholds (for Alert System)
CREATE TABLE IF NOT EXISTS incident_thresholds (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    incident_category VARCHAR(50) NOT NULL,
    count_threshold INTEGER NOT NULL DEFAULT 3,
    time_period_days INTEGER NOT NULL DEFAULT 30,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tasks (for Preventive Task Generator)
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    status VARCHAR(20) DEFAULT 'Pending', -- Pending, In Progress, Completed
    priority VARCHAR(10) DEFAULT 'Medium', -- Low, Medium, High
    created_from_incident_id UUID REFERENCES incidents(id) ON DELETE SET NULL, -- Link to incident if auto-generated
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Insurance Claims (for Insurance Log)
CREATE TABLE IF NOT EXISTS insurance_claims (
    id SERIAL PRIMARY KEY,
    farm_id INTEGER REFERENCES farms(id) ON DELETE CASCADE,
    incident_id UUID REFERENCES incidents(id) ON DELETE SET NULL,
    claim_number VARCHAR(100),
    provider VARCHAR(100),
    status VARCHAR(50) DEFAULT 'Submitted', -- Submitted, Under Review, Approved, Rejected, Paid
    amount_claimed NUMERIC(12, 2),
    amount_approved NUMERIC(12, 2),
    filing_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
