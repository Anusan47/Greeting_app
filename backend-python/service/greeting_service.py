import random
from sqlalchemy.orm import Session
import crud.greeting_crud as crud

class GreetingService:
    def __init__(self, db: Session):
        self.db = db

    def add_greeting(self, message: str, category: str):
        return crud.add_greeting(self.db, message, category)

    def get_greeting_by_category(self, category: str, name: str):
        greetings = crud.get_greetings_by_category(self.db, category)
        if not greetings:
            return {"message": f"No greetings found for category '{category}'."}
        chosen = random.choice(greetings)
        return {"message": f"{chosen.message} {name}"}

    def get_random_greeting(self, name: str):
        chosen = crud.get_random_greeting(self.db)
        if not chosen:
            return {"message": "No greetings available."}
        return {"message": f"{chosen.message} {name}"}
