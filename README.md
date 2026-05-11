# AI Startup Analytics Dashboard (Aura Analytics)

A high-performance, futuristic business intelligence dashboard for the AI startup and tool ecosystem.

## 🚀 Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, Recharts, Lucide React
- **Backend**: FastAPI (Python), Pandas, NumPy, Scikit-learn
- **Database**: PostgreSQL (Dockerized)
- **Containerization**: Docker, Docker Compose

## ✨ Key Features

- **Ecosystem Overview**: Real-time funding trends and growth metrics.
- **AI Tool Analytics**: Detailed comparison of pricing, traffic, and sentiment for top AI tools.
- **Market Gap Analysis**: ML-powered detection of underserved AI niches and opportunities.
- **Sentiment Analysis**: Public perception tracking using NLP-driven metrics.
- **Startup Intelligence**: Funding leaderboards and market health scoring.
- **Admin Panel**: CSV data ingestion and pipeline monitoring.
- **Futuristic UI**: Glassmorphism cards, animated transitions, and dark-mode optimization.

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python (v3.11+)
- Docker & Docker Compose (Recommended)

### Using Docker (Recommended)
1. Clone the repository.
2. Run `docker-compose up --build`.
3. Access the frontend at `http://localhost:3000` and backend at `http://localhost:8000`.

### Manual Setup

#### Backend
1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn app.main:app --reload`

#### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## 📊 Mock Data
The application currently uses a realistic dummy dataset generated in `frontend/src/services/mockData.js` and simulated backend processing in `backend/app/api/endpoints/analytics.py`.

## 🛡️ License
MIT License
