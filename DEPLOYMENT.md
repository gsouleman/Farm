# Farm Management System - Deployment Guide

## Quick Deployment Checklist

### 1. Neon Database Setup

1. **Create Neon Account**
   - Go to https://neon.tech
   - Sign up for free account
   - Create new project

2. **Get Connection String**
   - Copy the connection string from Neon dashboard
   - Format: `postgresql://user:password@host/database?sslmode=require`

3. **Run Database Schema**
   ```bash
   # Install PostgreSQL client
   # Then run:
   psql "your_connection_string" < backend/database/schema.sql
   ```

### 2. Backend Deployment (Render.com)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up/login

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Or use "Public Git repository" and paste your repo URL

3. **Configure Service**
   - **Name**: farm-management-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `cd backend && npm start`
   - **Instance Type**: Free

4. **Add Environment Variables**
   ```
   DATABASE_URL=your_neon_connection_string
   JWT_SECRET=random-secure-string-change-this
   JWT_EXPIRES_IN=7d
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.onrender.com
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Copy the backend URL (e.g., https://farm-api.onrender.com)

### 3. Frontend Deployment (Render.com)

1. **Update API Client**
   - Edit `api-client.js`
   - Change `baseURL` to your Render backend URL:
   ```javascript
   const API_CONFIG = {
       baseURL: 'https://your-backend-url.onrender.com',
       // ...
   };
   ```

2. **Create Static Site**
   - Click "New +" → "Static Site"
   - Connect repository

3. **Configure Static Site**
   - **Name**: farm-management-frontend
   - **Build Command**: (leave empty)
   - **Publish Directory**: `.` (current directory)

4. **Deploy**
   - Click "Create Static Site"
   - Wait for deployment
   - Visit your frontend URL

### 4. Testing

1. **Test Backend Health**
   ```bash
   curl https://your-backend-url.onrender.com/health
   ```

2. **Test Registration**
   - Visit your frontend URL
   - Click "Sign up"
   - Create an account

3. **Verify French Translation**
   - After login, click language selector
   - Choose "🇫🇷 Français"
   - Verify all UI translates

## Environment Variables Reference

### Backend (.env)
```env
DATABASE_URL=postgresql://user:pass@host/db
JWT_SECRET=your-secret-key-min-32-chars
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://your-frontend.onrender.com
```

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check Neon project is active
- Ensure SSL mode is enabled

### CORS Errors
- Verify FRONTEND_URL matches your frontend domain
- Check backend is deployed and running

### Authentication Issues
- Verify JWT_SECRET is set
- Check token is being sent in headers
- Verify cookies/localStorage not blocked

## Free Tier Limitations

**Neon Free Tier:**
- 3 GB storage
- 1 project
- No credit card required

**Render Free Tier:**
- Web services spin down after 15 min inactivity
- 750 hours/month
- Custom domains supported

## Next Steps

1. Add custom domain (optional)
2. Set up GitHub auto-deploy
3. Configure monitoring
4. Add analytics
5. Implement backup strategy

## Support

- Neon Docs: https://neon.tech/docs
- Render Docs: https://render.com/docs
- Issues: Create on GitHub repository
