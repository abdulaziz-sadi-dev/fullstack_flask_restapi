from typing import List

from fastapi import APIRouter, Depends
from app.db.main import get_session
from sqlmodel.ext.asyncio.session import AsyncSession
from http import HTTPStatus
from fastapi import HTTPException
from .service import YearGroupService
from .schemas import YearGroupResponseModel, YearGroupCreateModel, YearGroupUpdateModel




router = APIRouter(prefix="/api/v1/year-groups", tags=["year-groups"])


@router.get("/", response_model=List[YearGroupResponseModel])
async def get_year_groups(session: AsyncSession = Depends(get_session), status_code=HTTPStatus.OK):
    year_groups = await YearGroupService(session).get_year_groups()
    
    return  year_groups

# create  year group
@router.post("/", status_code=HTTPStatus.CREATED)
async def create_year_group(year_group: YearGroupCreateModel, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.CREATED):
    new_year_group = await YearGroupService(session).create_year_group(year_group)
    if not new_year_group:
        raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="Failed to create year group")
    
    return new_year_group

# get single year group by id
@router.get("/{year_group_id}", response_model=YearGroupResponseModel)
async def get_year_group_by_id(year_group_id: str, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.OK):
    year_group = await YearGroupService(session).get_year_group_by_id(year_group_id)
    if not year_group:
        raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Year group not found")
    return year_group

# update year group
@router.put("/{year_group_id}", response_model=YearGroupResponseModel)
async def update_year_group(year_group_id: str, year_group_update_data: YearGroupUpdateModel, session: AsyncSession = Depends(get_session), status_code=HTTPStatus.OK):
  
    return await YearGroupService(session).update_year_group(year_group_id, year_group_update_data)

# delete year group
@router.delete("/{year_group_id}", status_code=HTTPStatus.NO_CONTENT)
async def delete_year_group(year_group_id: str, session: AsyncSession = Depends(get_session)):
    await YearGroupService(session).delete_year_group(year_group_id)
