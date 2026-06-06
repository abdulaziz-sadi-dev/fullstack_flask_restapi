from fastapi import APIRouter, Depends
from app.db.main import get_session
from sqlmodel.ext.asyncio.session import AsyncSession
from http import HTTPStatus
from fastapi import HTTPException

router = APIRouter(prefix="/api/v1/year-groups", tags=["year-groups"])


@router.get("/")
async def get_year_groups(session: AsyncSession = Depends(get_session), status_code=HTTPStatus.OK):
    # Placeholder for fetching year groups from the database
    return {"year_groups": ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]}

# create  year group
@router.post("/")
async def create_year_group(name: str, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.CREATED):
    # Placeholder for creating a new year group in the database
    return {"message": f"Year group '{name}' created successfully"}

# update year group
@router.put("/{year_group_id}")
async def update_year_group(year_group_id: int, name: str, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.OK):
    # Placeholder for updating a year group in the database
    return {"message": f"Year group '{name}' updated successfully"}

# delete year group
@router.delete("/{year_group_id}")
async def delete_year_group(year_group_id: int, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.NO_CONTENT):
    # Placeholder for deleting a year group from the database
    return {"message": f"Year group with ID '{year_group_id}' deleted successfully"}
