from sqlmodel import SQLModel, Field, Column
import sqlalchemy.dialects.postgresql as pg
from typing import Optional
from uuid import UUID, uuid4
from datetime import datetime


class YearGroup(SQLModel, table=True):
    __tablename__ = "year_groups"
    # id: Optional[int] = Field(default=None, primary_key=True)
    uid: UUID = Field(sa_column=Column(pg.UUID(), primary_key=True, unique=True, default_factory=uuid4))
    name: str = Field(index=True, nullable=False, unique=True)
    description: Optional[str] = Field(default=None, nullable=True)
    created_at: datetime = Field(default_factory=datetime.now, nullable=False)
    updated_at: datetime = Field(default_factory=datetime.now, nullable=False)
    
    def __repr__(self):
        return f"YearGroup(uid={self.uid}, name='{self.name}', description='{self.description}', created_at='{self.created_at}', updated_at='{self.updated_at}')"