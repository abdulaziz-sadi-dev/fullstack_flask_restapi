from app.db.models import YearGroup
from pydantic import BaseModel
from uuid import UUID

class YearGroupResponseModel(YearGroup):
    uid: UUID
    name: str
    description: str | None = None

class YearGroupCreateModel(BaseModel):
    name: str
    description: str | None = None
    
class YearGroupUpdateModel(BaseModel):
    name: str
    description: str | None = None
