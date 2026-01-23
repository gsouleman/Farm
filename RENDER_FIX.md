# Render Backend Configuration Fix

## Problem
Render is looking for package.json in `/opt/render/project/src/` but it's actually in the `backend/` subdirectory.

## Solution 1: Configure Root Directory (Recommended)

In your Render dashboard for the backend service:

1. Go to **Settings**
2. Find **Root Directory** setting
3. Set it to: `backend`
4. **Save Changes**
5. Trigger a new deploy

## Solution 2: Update Build Command

Alternatively, update your build commands:

**Build Command:**
```bash
cd backend && npm install
```

**Start Command:**
```bash
cd backend && npm start
```

## Verification

After deploying, check the logs for:
```
✅ Server running on port 3000
✅ Connected to PostgreSQL database
```

## Environment Variables to Set

Make sure these are configured in Render dashboard:

```
DATABASE_URL=your_neon_connection_string
JWT_SECRET=your-secure-random-string
JWT_EXPIRES_IN=7d
NODE_ENV=production
FRONTEND_URL=https://your-frontend.onrender.com
```

## Next Steps

1. Apply the fix (Solution 1 recommended)
2. Deploy
3. Check health endpoint: `https://your-api.onrender.com/health`
4. Should return: `{"status":"ok","timestamp":"..."}`
