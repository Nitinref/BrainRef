🧠 BrainRef – Your Second Brain for Smart Bookmarking
BrainRef is a personal link manager that helps you save, organize, and revisit important resources. Whether it's for learning, projects, or research, BrainRef acts as your Second Brain to store valuable links along with tags and descriptions.

🚀 Features
🔐 Authentication System

Sign up / Sign in using JWT

Secure password storage with Bcrypt

Input validation using Zod

🔖 Save Links with Context

Add a title, description, and tags for every link

Create your own digital knowledge base

📋 Clean Dashboard

View all your saved links in a structured layout

Edit or delete links anytime

📁 Collections

Organize bookmarks into custom collections or categories

Easy access to grouped resources

🛠️ Tech Stack
Layer	Tech Used
Frontend	React.js + TypeScript + Tailwind CSS
Backend	Node.js + Express.js
Database	MongoDB
Validation	Zod
Auth	JWT + Bcrypt
📁 Folder Structure (Simplified)
bash
Copy
Edit
BrainRef/
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── LinkCard.jsx
│   │   │   └── TagFilter.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── AddLink.jsx
│   │   ├── services/
│   │   │   └── api.js       # Axios instance
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js

├── server/                  # Node.js Backend
│   ├── controllers/
│   │   └── linkController.js
│   ├── models/
│   │   └── Link.js
│   ├── routes/
│   │   └── linkRoutes.js
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── .env
│   ├── index.js             # Entry point
│   ├── package.json

├── README.md
├── .gitignore
└── Brain.code-workspace     # (optional VS Code workspace config)

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/brainref.git
cd brainref
2. Backend Setup
bash
Copy
Edit
cd server
npm install
npm run dev
Create a .env file inside server/ with:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
3. Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
✨ Future Scope
📦 Bookmark importing from browser

👨‍💻 Author
Made by Nitin
B.Tech CSE | Full Stack Developer | Blockchain Learner | 100xDevs Enthusiast
