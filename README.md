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
brainref/
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.tsx
├── server/            # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.ts
⚙️ Setup Instructions
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
📦 Bookmark importing from browsers

🧠 AI-based tag suggestions

🌐 Shareable collections with friends

📱 Mobile version / PWA

👨‍💻 Author
Made by Nitin
B.Tech CSE | Full Stack Developer | Blockchain Learner | 100xDevs Enthusiast
