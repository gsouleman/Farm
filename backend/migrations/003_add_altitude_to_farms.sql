-- Migration: Add altitude column to farms table
ALTER TABLE farms ADD COLUMN IF NOT EXISTS altitude NUMERIC DEFAULT 0;

-- Optional: Add index for performance if we eventually query by altitude ranges
CREATE INDEX IF NOT EXISTS idx_farms_altitude ON farms(altitude);
