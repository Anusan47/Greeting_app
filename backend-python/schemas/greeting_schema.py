from pydantic import BaseModel

class GreetingRequest(BaseModel):
    message: str
    category: str = "general"
