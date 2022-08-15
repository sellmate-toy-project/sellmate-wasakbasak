from typing import Generic, TypeVar, Type, Optional, Any, List
from db.base_class import Base
from pydantic import BaseModel
from sqlalchemy.orm import Session
import enum

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)
DeleteSchemaType = TypeVar("DeleteSchemaType", bound=BaseModel)


class SortType(enum.Enum):
    DESC = "desc"
    ASC = "asc"


class CRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType, DeleteSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get(self, db: Session, id: Any) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.id == id).first()

    def get_multi(
        self,
        db: Session,
        skip: int = 0,
        limit: int = 100,
        sort: str = "id",
        sort_by: SortType = "asc"
    ) -> List[ModelType]:
        return db.query(self.model).order_by(f"{sort} {sort_by.value}").offset(skip).limit(limit).all()
