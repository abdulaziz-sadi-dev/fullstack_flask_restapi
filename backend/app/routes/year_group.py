from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/year-groups", tags=["year-groups"])


@router.get("/")
async def get_year_groups():
    # Placeholder for fetching year groups from the database
    return {"year_groups": ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]}


