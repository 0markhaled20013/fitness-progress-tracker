# 🏋️ Fitness Progress Tracker API

A **Node.js + Express + MongoDB REST API** to track fitness progress, including **reps, calories, and weight**.

## 🚀 Features

- CRUD API to manage fitness progress
- MongoDB database using **Mongoose**
- Middleware to check **DB connection**
- Clean **MVC architecture** with controllers & routes
- Fully **RESTful API** ready for frontend or mobile apps

---

## 📂 Project Structure

```
fitness-progress-api/
│
├── server.js                # Entry point
├── package.json
├── .env                     # Environment variables (NOT in GitHub)
│
├── config/
│   └── db.js                # MongoDB connection
│
├── models/
│   └── Progress.js          # Progress model
│
├── controllers/
│   └── progressController.js # CRUD logic
│
├── routes/
│   └── progressRoutes.js     # API routes
│
├── middlewares/
│   └── checkDbConnection.js  # DB connection middleware
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/0markhaled20013/fitness-progress-tracker.git
cd fitness-progress-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fitness-progress
```

4. **Run the server in development mode**

npm start

```

5. Open your browser or API client (Postman) at:

```

http://localhost:5000

````

---

## 📡 API Endpoints

| Method     | Endpoint        | Description                |
| ---------- | --------------- | -------------------------- |
| **GET**    | `/progress`     | Fetch all progress records |
| **POST**   | `/progress`     | Add a new progress record  |
| **PUT**    | `/progress/:id` | Update a progress record   |
| **DELETE** | `/progress/:id` | Delete a progress record   |

---

### 📥 Example `POST /progress` Request

```json
{
  "reps": 20,
  "calories": 250,
  "weight": 70,
  "date": "2025-08-01"
}
````

### 📤 Example Response

```json
{
  "_id": "66abc1234567890",
  "reps": 20,
  "calories": 250,
  "weight": 70,
  "date": "2025-08-01T00:00:00.000Z",
  "createdAt": "2025-08-02T12:00:00.000Z",
  "updatedAt": "2025-08-02T12:00:00.000Z"
}
```

---

## 🛡️ Environment Variables

| Variable      | Description                   |
| ------------- | ----------------------------- |
| `PORT`        | Server port (default: `5000`) |
| `MONGODB_URI` | MongoDB connection string     |

> **Made with ❤️ by [Omar Khaled](https://github.com/0markhaled20013)**
