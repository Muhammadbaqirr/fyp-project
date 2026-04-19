import os
import numpy as np
from tensorflow.keras.models import load_model

# correct path set karo
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "..", "model", "model.h5")

# model load
model = load_model(model_path, compile=False)

# prediction function
def predict(data):
    input_array = np.array(data).reshape(1, -1)
    prediction = model.predict(input_array)
    return prediction.tolist()