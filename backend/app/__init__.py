from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.year_groups.routes import router as year_group_router
from app.db.main import create_tables


# create lifecycle events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup code here
    print("Starting up...")
    await create_tables()  # create database tables
    yield
    # shutdown code here
    print("Shutting down...")

app = FastAPI(title="IGCSE AI powered assessment platform", version="1.0.0", description="API for managing year groups", lifespan=lifespan)



# routes management

app.include_router(year_group_router)
