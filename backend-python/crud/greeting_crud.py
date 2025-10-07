import random
from sqlalchemy.orm import Session
from sqlalchemy import func
from models.greeting import Greeting

def add_greeting(db: Session, message: str, category: str):
    new_greeting = Greeting(message=message, category=category.lower())
    db.add(new_greeting)
    db.commit()
    db.refresh(new_greeting)
    return new_greeting

def get_greetings_by_category(db: Session, category: str):
    greetings = db.query(Greeting).filter(func.lower(Greeting.category) == category.lower()).all()
    if not greetings:
        greetings = db.query(Greeting).filter(func.lower(Greeting.category) == "general").all()
    return greetings

def get_random_greeting(db: Session):
    greetings = db.query(Greeting).all()
    return random.choice(greetings) if greetings else None
