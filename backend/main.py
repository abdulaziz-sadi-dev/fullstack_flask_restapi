from fastapi import FastAPI
from app.routes.year_group import router as year_group_router

app = FastAPI()

app.include_router(year_group_router)



@app.get("/")
async def root():
    return {"message": "Hello World"}
