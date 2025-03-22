
# Spider Log Dashboard 🕷️📜

A real-time log monitoring dashboard for multiple spiders, built using:
- **FastAPI** for backend WebSocket communication
- **React** for frontend UI to display logs
- **Loki + Promtail** for collecting and aggregating logs from running spiders
- **Docker Compose** to orchestrate services

---

## 🏗️ Project Structure

```
SPIDER-LOG-DASHBOARD/
│
├── backend/
│   ├── Dockerfile
│   ├── main.py
│   ├── requirements.txt
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
│
├── spiders/
│   ├── Dockerfile
│   ├── spider1.py
│
├── loki-stack/
│   ├── promtail-config.yml
│
└── docker-compose.yml
```

---

## 🚀 Features

- **Real-time Log Streaming:** View logs of multiple spiders in real-time on the dashboard.
- **WebSocket Communication:** Low-latency streaming from FastAPI backend to React frontend.
- **Dockerized Setup:** Easily run all services with Docker Compose.

---

## 🧰 Tech Stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | React + WebSocket |
| Backend   | FastAPI (WebSocket Server) |
| Logging   | Loki + Promtail |
| Crawler   | Python-based spiders |
| Orchestration | Docker Compose |

---

## 📦 How It Works

1. **Spiders** output logs to `stdout`.
2. **Promtail** collects logs from Docker containers and ships them to **Loki**.
3. **FastAPI backend** fetches logs from Loki and streams them via WebSocket.
4. **React frontend** displays live logs by connecting to the WebSocket.

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/spider-log-dashboard.git
cd spider-log-dashboard
```

### 2. Run Docker Compose

```bash
docker-compose up --build
```

- **Frontend** runs on `http://localhost:3000`
- **Backend API/WebSocket** runs on `http://localhost:8000`
- **Loki** runs on `http://localhost:3100`

---

## 🔗 API Endpoints

- **WebSocket Endpoint:** `ws://localhost:8000/ws/logs/{spider_name}`

---

## 🕸️ Example Spiders

Inside the `spiders/` directory, there are example spiders (e.g., `spider1.py`) that generate logs to simulate real crawlers.

---

## 📝 Project Components

### Backend (FastAPI)
- **main.py**: FastAPI app that connects to Loki, fetches logs, and streams them via WebSocket.

### Frontend (React)
- **LogViewer.js**: React component that connects via WebSocket and renders live logs.

### Loki & Promtail
- Loki stores logs.
- Promtail reads logs from Docker containers and sends them to Loki.
- `promtail-config.yml`: Promtail configuration to target containers.

### Docker Compose
- Brings all services up in isolated containers.
- Maps ports for external access.

---

## 🛠️ Requirements

- Docker
- Docker Compose

Optional (for local development):
- Node.js (for React app)
- Python 3.9+ (for backend and spiders)

---

## 📂 Folder Explanation

| Folder      | Description                              |
|-------------|------------------------------------------|
| backend/    | FastAPI backend to stream logs via WebSocket |
| frontend/   | React app to display logs in real-time   |
| spiders/    | Example spider(s) generating logs        |
| loki-stack/ | Configuration files for Loki and Promtail |
| docker-compose.yml | Orchestrates the entire environment |

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT License

## 👨‍💻 Author

**Sourav Sharma**  
[LinkedIn](https://www.linkedin.com/in/sourav-sharma-519bb2157/)  
[GitHub](https://github.com/SouravSharma10)

---
