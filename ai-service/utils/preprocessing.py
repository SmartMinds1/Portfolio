# Ths file handles data preparation before any processing is done

import pandas as pd

def preprocess_input(data, columns):
    # Convert incoming JSON to DataFrame since ML only understand tables
    input_df = pd.DataFrame([data])
    
    # One-hot encode like we did during training
    input_encoded = pd.get_dummies(input_df)

    # Align with training columns since the model expects EXACT structure
    input_encoded = input_encoded.reindex(columns=columns, fill_value=0)

    return input_encoded

