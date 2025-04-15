# 📊 Real-Time Analytics Dashboard for Website Traffic Monitoring

This is a full-stack real-time dashboard that monitors simulated website traffic using a clean React frontend and a Node.js backend. It displays live metrics for:

- 👥 Active Users  
- 📈 Page Views  
- ⏱️ Average Session Duration  

Backend uses WebSocket (Socket.IO) to stream mock data to the frontend every few seconds.

---

## 🧰 Tech Stack

| Layer       | Tools/Technologies       |
|-------------|--------------------------|
| Frontend    | React, Recharts, CSS     |
| Backend     | Node.js, Express, Socket.IO |
| Charts      | Recharts                 |
| Real-Time   | WebSocket (Socket.IO)    |

## 🚀 Features

- Real-time updates via WebSocket (no polling)
- Interactive line chart for page views
- Auto-refreshing UI
- Responsive layout
- Live counter & progress bar updates

### 🔙 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
npm install
npm run start
Server will run at http://localhost:4000
```

### 🌐 Frontend Setup

1. Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm start
Open your browser at http://localhost:3000 to view the dashboard.
```

---

## 🔁 Real-Time Data Flow

- Backend generates mock data:

```json
{
  "timestamp": "2025-04-11T12:01:00Z",
  "active_users": 87,
  "page_views": 152,
  "avg_session_duration": 4.6
}
```

### 🔧 Components

- Frontend (React): Renders UI, listens for WebSocket updates, and updates the state.
- Backend (Node.js): Emits mock traffic data using socket.io every 3 seconds.

## 💡 Assumptions

- No real user tracking — data is simulated randomly
- Session duration ranges between 1 to 10 minutes
- No backend database is used (in-memory mock only)

## 🧪 Possible Improvements

- Add data persistence (MongoDB/PostgreSQL)
- Add filtering by date/time
- Include historical reports & export options
- Improve visuals (charts, transitions, dark mode)
- Deploy to Vercel (frontend) + Railway/Render (backend)

## 🎥 Demo Video

- Demo Video: https://drive.google.com/file/d/1hoxwawP13FExoOZ1uxzdsXAyMrA4QFPq/view?usp=sharing