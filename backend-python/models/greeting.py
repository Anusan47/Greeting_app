from sqlalchemy import Column, Integer, String
from database import Base

class Greeting(Base):
    __tablename__ = "greetings"
    id = Column(Integer, primary_key=True, index=True)
    message = Column(String(255), nullable=False)
    category = Column(String(50), nullable=False, default="general")
