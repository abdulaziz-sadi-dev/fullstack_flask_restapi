from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel
from app.config import settings


async_engine = create_async_engine(
    url=settings.POSTGRES_URL, echo=True, future=True
)



async def create_tables() -> AsyncSession:
    async with async_engine.begin() as conn:
        from .models import YearGroup
        await conn.run_sync(SQLModel.metadata.create_all)
       


# create session dependency
async def get_session() -> AsyncSession:
    async_session = sessionmaker(
       bind=async_engine, expire_on_commit=False, class_=AsyncSession
    )
    async with async_session() as session:
        yield session