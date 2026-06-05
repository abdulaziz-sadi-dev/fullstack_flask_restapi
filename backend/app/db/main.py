from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlmodel import text
from app.config import settings

async_engine = create_async_engine(
    url=settings.POSTGRES_URL, echo=True, future=True
)

# test connection

async def get_db() -> AsyncSession:
    async with AsyncSession(async_engine) as session:
        statement = text("SELECT 'hello';")
        results = await session.execute(statement)
        print(results)
        