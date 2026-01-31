# Build an ACID-Compliant E-commerce Order Processing API with PostgreSQL

A comprehensive talent marketplace platform enabling borderless collaboration and hiring across global communities.

---

## 🌟 Overview

**Partnr** is a talent layer designed to connect professionals, showcase skills, and facilitate project collaborations across borders. The platform provides a modern, scalable solution for the future of work.

---

## 🚀 Tech Stack

### Backend
- **Node.js** (v20)
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **JWT Authentication**
- **Docker & Docker Compose**

### Frontend
- **React.js**
- **Vite**
- **TailwindCSS**
- **React Router**

---

## 📂 Project Structure

```
partnr/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── prisma/
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── README.md
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

- **Docker** and **Docker Compose** (recommended)
- **Node.js** v20+ (if running locally)
- **PostgreSQL** (if running locally)

---

## 🐳 Quick Start with Docker

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/partnr.git
cd partnr
```

### 2. Set Up Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories.

**backend/.env**
```env
DATABASE_URL=postgresql://partnr_user:partnr_password@postgres:5432/partnr_db
JWT_SECRET=supersecretkey
PORT=4000
```

**frontend/.env**
```env
VITE_API_URL=http://localhost:4000
```

### 3. Run with Docker Compose

```bash
docker-compose up --build
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **Health Check**: http://localhost:4000/health

---

## 🛠 Local Development (Without Docker)

### Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Users
- `GET /users/me` - Get current user profile

### Skills
- `POST /skills` - Create skill (authenticated)
- `GET /skills` - List all skills

### Projects
- `POST /projects` - Create project (authenticated)
- `GET /projects` - List all projects

For detailed API documentation, see [backend/README.md](backend/README.md)

---

## 🗄 Database Schema

The application uses **Prisma ORM** with the following main models:

- **User** - User accounts and authentication
- **Profile** - User profiles with bio and details
- **Skill** - Skills taxonomy
- **Project** - Projects created by users
- **ProfileSkill** - Many-to-many relationship between profiles and skills

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

---

## 🚢 Deployment

### Docker Production Build

```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Environment Variables for Production

Ensure you update the following for production:
- `DATABASE_URL` - Production PostgreSQL connection string
- `JWT_SECRET` - Strong secret key
- `VITE_API_URL` - Production API URL

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ by the Partnr team

---

## 📧 Contact

For questions or support, please open an issue or contact us at support@partnr.io

---

## 🔗 Links

- [Documentation](https://docs.partnr.io)
- [API Documentation](https://api.partnr.io/docs)
- [Community Discord](https://discord.gg/partnr)