🍭 Sweet Shop Management System

A full-stack web application to help sweet shop owners manage their inventory, sales, staff, and customer orders efficiently. Built with React, Node.js, MongoDB, and motion/react animations for a delightful user experience.

🚀 Features

✨ User Authentication: Secure login and registration with JWT.

🍬 Inventory Management: Track sweets, stock levels, and restocking.

💵 Sales & Billing: Manage orders, generate invoices, and track revenue.

👩‍🍳 Staff Management: Monitor tasks and performance of shop staff.

📊 Dashboard: Visual representation of sales, inventory, and orders.

🎨 Sweet-themed Design: Friendly, colorful interface for a joyful experience.

🧪 Test-Driven Development (TDD): Reliable, maintainable codebase.

🖥️ Frontend

The frontend is built using React and Tailwind CSS with motion/react for animations:

Home Page: Welcoming screen with navigation links.

About Page: Explains system benefits and features.

⚙️ Backend

The backend is built using Node.js, Express, and MongoDB:

User Routes: Register and login users securely.

Sweets Routes: CRUD operations for sweets and inventory.

Inventory Routes: Manage stock, restock notifications, and orders.

JWT Authentication: Ensures secure API endpoints.


📁 Project Structure
TDD-Kata-Sweet-Shop-Management-System/
├── client/                  # Frontend React app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Home, About, Login, Register pages
│   │   └── App.js           # Main application component
├── server/                  # Backend Node.js app
│   ├── models/              # MongoDB schemas
│   ├── routes/              # Express route handlers
│   ├── controllers/         # Business logic
│   └── server.js            # Entry point for backend
└── README.md                # Project documentation


⚡ Installation & Setup

Clone the repository:

git clone https://github.com/akshaymairal04/TDD-Kata-Sweet-Shop-Management-System.git
cd TDD-Kata-Sweet-Shop-Management-System


Install dependencies:

# Frontend
cd client
npm install

# Backend
cd ../server
npm install


Setup environment variables:
Create a .env file in server/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Run the application:

# Start backend server
cd server
npm start

# Start frontend
cd ../client
npm start


Access the app: Open http://localhost:3000
 in your browser

Login & Register Pages: Secure user authentication forms.

Dashboard: Displays inventory, orders, and sales data in cards.
