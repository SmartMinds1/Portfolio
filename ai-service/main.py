# entry point (FastAPI app
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas.input_schema import TitanicInput
from services.predictor import predict_survival
# Error handling imports
from fastapi.responses import JSONResponse
from fastapi.requests import Request

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/")
def home():
    return {"message": "Titanic AI Service is running..."}

# Prediction endpoint
@app.post("/predict")
def predict(data: TitanicInput):
    try:
        result = predict_survival(data.dict())

        return {
            "survived": result
        }

    except ValueError as e:
        # Known/expected errors
        raise HTTPException(status_code=400, detail=str(e))

    except Exception as e:
        # Unexpected errors
        raise HTTPException(status_code=500, detail="Internal Server Error")


# GLOBAL ERROR HANDLER
@app.exception_handler(Exception)
def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "message": "Something went wrong in the AI service",
            "error": str(exc)
        }
    )