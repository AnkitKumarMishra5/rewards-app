# 🎁 Rewards App - Setup Guide

A simple MERN stack game where clicking a button earns points, with a chance to win extra points and prizes! 🚀

## 📌 Features
- Click the button to earn points
- 50% chance of getting extra 10 points
- 25% chance of winning a prize 🎉

## 🎬 DEMO
![Rewards App Demo](https://github.com/AnkitKumarMishra5/rewards-app/blob/c61b4559ce92cba71c3466ebb84d603013ea6948/client/public/rewards-app.gif)

---

## 🛠️ Setup Instructions

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/AnkitKumarMishra5/rewards-app
cd rewards-app
```

### **2️⃣ Install and Run the Backend (Server)**
```sh
cd server  # Navigate to the server folder
npm install  # Install dependencies
```
#### **📌 Configure `.env` File (Optional)**
Create a `.env` file in the `server/` directory and add:
```
MONGO_URI=mongodb://localhost:27017/dbname
PORT=5000
```
#### **🚀 Start the Server**
```sh
npm run dev  # Runs with Nodemon (auto-restart on changes)
# OR
npm start  # Runs normally with Node.js
```

---

### **3️⃣ Install and Run the Frontend (Client)**
```sh
cd ../client  # Navigate to the client folder
npm install  # Install dependencies
```
#### **🚀 Start the Client**
```sh
npm run dev  # Start Vite development server
```

---

## 🎮 How to Play
1. Open **http://localhost:3000/** in your browser.
2. Enter a username to start playing.
3. Click the button to earn points!
4. Look out for bonus points and prizes!

---

## 🔥 Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express, MongoDB w/ Mongoose
- **Tools:** Nodemon

---

## 🛠 Available Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server (frontend/backend) |
| `npm start` | Starts backend server (production mode) |
| `npm run build` | Builds the frontend for production |
| `npm run preview` | Runs built frontend |

---
