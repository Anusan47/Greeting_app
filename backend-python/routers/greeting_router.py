from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from database import SessionLocal
from schemas.greeting_schema import GreetingRequest
from service.greeting_service import GreetingService

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add_greeting(payload: GreetingRequest, db: Session = Depends(get_db)):
    service = GreetingService(db)
    return service.add_greeting(payload.message, payload.category)

@router.get("/")
def get_greeting(category: str = Query("general"), name: str = Query("Guest"), db: Session = Depends(get_db)):
    service = GreetingService(db)
    return service.get_greeting_by_category(category, name)

@router.get("/random")
def get_random_greeting(name: str = Query("Guest"), db: Session = Depends(get_db)):
    service = GreetingService(db)
    return service.get_random_greeting(name)
