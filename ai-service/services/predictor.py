# This file handles all prediction logic

from model.loader import model, columns
from utils.preprocessing import preprocess_input

def predict_survival(data):
    try:
        # preprocess input
        processed_data = preprocess_input(data, columns)

        # prediction
        prediction = model.predict(processed_data)[0]

        return int(prediction)


    except Exception as e:
        # Log it (later we can improve logging system)
        print(f"Prediction error: {e}")

        # Fail safely
        raise ValueError("Model prediction failed. Check input data.")