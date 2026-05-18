# entry point ONE SHOT COLAB (FastAPI app

from fastapi import FastAPI
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

# Create app that starts backend server instance
app = FastAPI()

# Load model + columns (my model and exact feature structure used during training)
model = joblib.load("model.pkl")
columns = joblib.load("columns.pkl")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test if the server is running
@app.get("/")
def home():
    return {"message": "Titanic AI Service is running..."}

# Prediction route (React sends data here using POST)
@app.post("/predict")
def predict(data: dict):
    # Convert incoming JSON to DataFrame since ML only understand tables
    input_df = pd.DataFrame([data])

    # One-hot encode like we did during training
    input_encoded = pd.get_dummies(input_df)

    # Align with training columns since the model expects EXACT structure
    input_encoded = input_encoded.reindex(columns=columns, fill_value=0)

    # Model runs prediction
    prediction = model.predict(input_encoded)[0]

    # Return result
    return {
        "survived": int(prediction)
    }