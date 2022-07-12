from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import scrapers

router = APIRouter()


@router.get("/snack", response_model=None)
def snack(
    db: Session = Depends(deps.get_db),
) -> Any:
    scraper = scrapers.Ssg(db)
    scraper.collect_category()
