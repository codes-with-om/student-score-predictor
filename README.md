# Student Score Predictor

An end-to-end Machine Learning web application that predicts student Math scores using demographic and academic behavior features.

## Project Overview

This project demonstrates a complete ML production workflow:

- Data Cleaning
- Feature Engineering
- Preprocessing Pipelines
- Model Training
- FastAPI Backend
- Frontend Integration
- Dockerization
- CI/CD
- Deployment

## Tech Stack

### Machine Learning
- Scikit-learn
- Pandas
- NumPy

### Backend
- FastAPI
- Uvicorn

### Frontend
- HTML
- CSS
- JavaScript

### Deployment & DevOps
- Docker
- GitHub Actions
- Render

---

# Project Structure

```text
student-score-predictor/

├── app/
├── frontend/
├── models/
├── notebooks/
├── data/
├── reports/
├── Dockerfile
├── requirements.txt
└── README.md
```

---

# Features

- Predict student Math scores
- Production-style ML pipeline
- FastAPI prediction API
- Responsive frontend UI
- ML-style animated prediction loader
- Docker support
- CI/CD ready

---

# Run Locally

## Clone repository

```bash
git clone <your-repo-url>
```

## Create virtual environment

```bash
python -m venv venv
```

## Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run FastAPI backend

```bash
uvicorn app.main:app --reload
```

## Open frontend

Use Live Server extension in VS Code.

---

# Docker

## Build Docker image

```bash
docker build -t student-score-predictor .
```

## Run Docker container

```bash
docker run -p 8000:8000 student-score-predictor
```

---

# API Endpoint

## Prediction Endpoint

```text
POST /predict
```

---

# Future Improvements

- Model monitoring
- Database integration
- Authentication
- Cloud deployment scaling
- Advanced frontend UI

---

# Author

Om Pratap Singh