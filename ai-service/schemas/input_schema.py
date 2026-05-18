# request validation we validate the incoming inputs (Pydantic)

from pydantic import BaseModel

class TitanicInput(BaseModel):
    Sex: str
    Age: float
    Pclass: int
    Fare: float
    Embarked: str