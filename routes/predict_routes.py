from fastapi import APIRouter
from schemas.predict_schema import PredictionInput
from services.predict_service import predict

router = APIRouter(prefix="/api", tags=["Prediction"])

@router.post("/predict")
def make_prediction(input_data: PredictionInput):
    result = predict(input_data.data)
    return {"prediction": result}