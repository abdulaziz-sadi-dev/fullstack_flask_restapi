from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.routes.year_group import router as year_group_router
from app.db.main import get_db


# create lifecycle events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup code here
    print("Starting up...")
    await get_db()  # test database connection
    yield
    # shutdown code here
    print("Shutting down...")

app = FastAPI(title="Year Group API", version="1.0.0", description="API for managing year groups", lifespan=lifespan)





app.include_router(year_group_router)
