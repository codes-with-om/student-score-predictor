from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from app.model_loader import model
from app.schemas import StudentData

app = FastAPI(title="Student Score Predictor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # development ke liye okay
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Student Score Predictor API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/predict")
def predict_score(data: StudentData):
    input_dict = data.dict()

    study_hours_mapping = {
        "< 5": 0,
        "5 - 10": 1,
        "> 10": 2
    }

    study_hours = input_dict["WklyStudyHours"]

    if study_hours not in study_hours_mapping:
        return {
            "error": "Invalid WklyStudyHours value"
        }

    input_dict["WklyStudyHours"] = study_hours_mapping[study_hours]

    input_df = pd.DataFrame([input_dict])

    prediction = model.predict(input_df)

    return {
        "success": True,
        "prediction": round(float(prediction[0]), 2)
    }