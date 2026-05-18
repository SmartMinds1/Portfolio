# This is the model loading logic
import joblib

# Load model + columns (my model once when imported and exact feature structure used during training)
model = joblib.load("model/model.pkl")
columns = joblib.load("model/columns.pkl")