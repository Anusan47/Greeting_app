from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.greeting_router import router as greeting_router
from database import Base, engine

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include greeting routes
app.include_router(greeting_router, prefix="/greeting")
