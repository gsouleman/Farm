# Farm Management System - Full Stack

Complete farm management application with PostgreSQL backend on Neon and frontend hosted on Render.

## 🌟 Features

- ✅ Multi-language support (English/French)
- ✅ User authentication & authorization
- ✅ Multi-farm management
- ✅ Financial tracking (income/expenses)
- ✅ Crop management (fruit trees & cash crops)
- ✅ Land section allocation
- ✅ Interactive maps (Google Maps + Canvas)
- ✅ Professional investor reports
- ✅ Responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon.tech)
- npm or yarn

### Local Development

1. **Clone repository**
```bash
git clone <your-repo>
cd Farm
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

3. **Setup Database**
- Create Neon account at https://neon.tech
- Run: `psql $DATABASE_URL < database/schema.sql`

4. **Update Frontend**
- Edit `api-client.js` with your backend URL
- Open `index.html` in browser or use Live Server

## 📁 Project Structure

```
Farm/
├── backend/               # Node.js + Express API
│   ├── config/           # Database configuration
│   ├── middleware/       # Auth middleware
│   ├── routes/           # API endpoints
│   ├── database/         # SQL schema
│   └── server.js         # Entry point
├── frontend/             # Static HTML/CSS/JS
│   ├── index.html        # Main app
│   ├── login.html        # Login page
│   ├── register.html     # Registration
│   ├── app.js            # App logic
│   ├── api-client.js     # API client
│   └── styles.css         # Styles
└── DEPLOYMENT.md         # Deployment guide
```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. **Backend**: Deploy to Render.com  
2. **Database**: Create on Neon.tech
3. **Frontend**: Deploy as static site on Render

## 📚 API Documentation

See `backend/README.md` for complete API documentation.

### Example Usage

```javascript
// Login
const response = await api.auth.login('user@example.com', 'password');

// Create farm
const farm = await api.farms.create({
  name: 'My Farm',
  location: 'Douala, Cameroon',
  area: 2.75
});

// Add transaction
const transaction = await api.transactions.create(farmId, {
  date: '2026-01-22',
  type: 'income',
  category: 'Crop Sales',
  description: 'Sold 100kg of avocados',
  amount: 50000
});
```

## 🔒 Security

- Passwords hashed with bcrypt
- JWT authentication
- SQL injection protection
- Input validation
- CORS protection

## 🌍 Languages

- 🇬🇧 English
- 🇫🇷 Français

## 📸 Screenshots

![Dashboard](/screenshots/dashboard.png)
![Farm Map](/screenshots/map.png)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

ISC

## 🆘 Support

- Issues: GitHub Issues
- Email: support@farmmanagement.com

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Weather integration
- [ ] Market price tracking
- [ ] Export to Excel
- [ ] Email notifications
- [ ] Multi-user collaboration

---

Built with ❤️ for farmers everywhere
