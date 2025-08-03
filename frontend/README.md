# 🏋️‍♂️ Fitness Progress Tracker (React Native + Expo)

A mobile application for tracking fitness progress including **Reps, Calories Burned, and Weight**, with interactive charts and history logs.

Built with **React Native**, **Expo**, **Axios**, and **react-native-chart-kit**.

---

## 📱 Features

- Add new progress entries (Reps, Calories, Weight)
- Edit or delete existing progress
- View total stats and average weight
- Interactive line chart of weight progress
- Pull-to-refresh dashboard
- Works with **REST API backend (Node.js + MongoDB)**

---

## 📂 Project Structure

```
FitnessProgressApp/
│── components/
│   ├── StatCard.js
│   ├── ProgressEntryCard.js
│   ├── AddButton.js
│   ├── FormInput.js
│   └── ActionButton.js
│
│── screens/
│   ├── DashboardScreen.js
│   ├── AddProgressScreen.js
│   └── EditProgressScreen.js
│
│── config/
│   └── api.js         # API Base URL
│
│── App.js
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/0markhaled20013/fitness-progress-tracker.git
cd fitness-progress-tracker
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 🚀 Run the App with Expo

1. Install **Expo Go** on your phone:

   - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS](https://apps.apple.com/app/expo-go/id982107779)

2. Start the development server:

```bash
npx expo start
```

3. Scan the **QR Code** in your terminal or browser with the **Expo Go** app.

4. The app will open live on your device.

---

## 🖥️ Backend Setup

This app requires a **Node.js + MongoDB backend** with these endpoints:

- `GET /progress` → Fetch all progress entries
- `POST /progress` → Add new progress
- `PUT /progress/:id` → Update progress
- `DELETE /progress/:id` → Delete progress

Example `.env` for your backend:

```env
MONGODB_URI=mongodb://localhost:27017/fitness-progress
PORT=5000
```

Update `API_BASE_URL` in `config/api.js`:

```js
export const API_BASE_URL = "http://192.168.X.X:5000"; // your local IP
```

> ⚠️ **Use your local network IP** (not `localhost`) for Expo to access the API.

---

## 📊 Screens Overview

1. **DashboardScreen**

   - Displays total stats, average weight, and progress chart
   - Shows last 5 entries with edit options
   - Pull-to-refresh support

2. **AddProgressScreen**

   - Add new progress with **form inputs**
   - Validates inputs before submission

3. **EditProgressScreen**
   - Edit or delete an existing entry
   - Shows entry date and time

---

## 🧩 Reusable Components

- **StatCard** → Displays single stat (Total Reps, Calories, Avg Weight)
- **ProgressEntryCard** → Displays an individual progress entry
- **AddButton** → Floating-style add button
- **FormInput** → Custom styled TextInput with label
- **ActionButton** → Custom button with loading state

---

## 🛠️ Tech Stack

- **React Native + Expo**
- **Axios** (API calls)
- **react-native-chart-kit** (Charts)
- **Node.js + Express + MongoDB** (Backend)

---

## 📸 Screenshots

_(Optional: Add screenshots of your app here)_

---

## 👨‍💻 Author

**Omar Khaled**  
Third-year Computer Science student | Frontend React Developer

