from dataclasses import field
from http import HTTPStatus
from http.client import HTTPException

from fastapi import HTTPException

from app.year_groups.schemas import YearGroupCreateModel, YearGroupUpdateModel
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlmodel import select
from app.db.models import YearGroup
from app.db.main import get_session


class YearGroupService: 
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_year_groups(self):
        # Placeholder for fetching year groups from the database
        statement = select(YearGroup).order_by(YearGroup.created_at)
        result = await self.session.exec(statement)
    
        return result.all()

    async def create_year_group(self, year_group_data: YearGroupCreateModel):
        new_year_group =  YearGroup(**year_group_data.model_dump())
        self.session.add(new_year_group)
        await self.session.commit()
        await self.session.refresh(new_year_group)
        return new_year_group
    # get single year group by id
    async def get_year_group_by_id(self, year_group_id: str):
        statement = select(YearGroup).where(YearGroup.uid == year_group_id)
        result = await self.session.exec(statement)
        return result.first()
    
    # update year group
    async def update_year_group(self, year_group_id: str, year_group_update_data: YearGroupUpdateModel):
        year_group = await self.get_year_group_by_id(year_group_id) # called from the route handler to check if the year group exists before updating
        
        if not year_group:
            raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Year group not found")
        for key, value in year_group_update_data.model_dump().items():
            setattr(year_group, key, value)
        self.session.add(year_group)
        await self.session.commit()
        await self.session.refresh(year_group)
        return year_group

    # delete year group
    async def delete_year_group(self, year_group_id: str):
        year_group = await self.get_year_group_by_id(year_group_id)
        if not year_group:
            raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Year group not found")
        self.session.delete(year_group)
        await self.session.commit() 
        return {"message": f"Year group with ID '{year_group_id}' deleted successfully"}