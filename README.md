
# Internship Task – Full Stack Authentication App

This is a full-stack user authentication system built for the internship technical assessment at **PairUp Labs**. It includes both frontend (React + Tailwind CSS) and backend (Node.js + Express + MongoDB).

---

## 🔗 Live URL (Optional)
> [Add your deployed frontend/backend links here]

---

project-root/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── models/
│   │   └── user.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md



---


---

## 🚀 Features

- ✅ User registration with hashed password
- ✅ Secure login using JWT
- ✅ Stores auth token and name in `localStorage`
- ✅ Protected home page
- ✅ TailwindCSS styled UI
- ✅ MongoDB Atlas or local MongoDB supported

---

## ⚙️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, Bcrypt, JWT
- **Dev Tools**: Vite, Nodemon, dotenv

---
✅ How It Works
Register Page: Sends user data to /register endpoint. On success, redirects to login page.

Login Page: Sends credentials to /login, stores the token and name in localStorage, and redirects to /home.

Home Page: Welcomes the logged-in user and provides a logout button.

📦 API Routes
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login existing user

🛠️ Improvements to Add
Password confirmation field in registration form

JWT token validation middleware to protect routes

Forgot password and email verification features

User profile page and backend validation



## 🔧 Backend Setup

1. Go to the server directory:

```bash
cd server
Install backend dependencies:

bash
Copy
Edit
npm install
Create a .env file in the server/ directory:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=yourSuperSecretKey
Start the server:

bash
Copy
Edit
npm run dev
# or
node server.js
Your backend will run at: http://localhost:5000


###💻 Frontend Setup
Go to the client directory:

bash
Copy
Edit
cd client
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm run dev
The frontend will be available at: http://localhost:5173


