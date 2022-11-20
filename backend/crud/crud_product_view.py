from typing import Any, List
from .base import CRUDBase, SortType
from models.views.product_view import ProductView
from sqlalchemy.orm import Session
from models.product import StatusType
from sqlalchemy.sql import text
from utils import convert_filter


class CRUDProductView(CRUDBase[ProductView, None, None, None]):
    def get_product(
        self,
        db: Session,
        sort: str = "id",
        sort_by: SortType = SortType.ASC,
        filters: List[str] = []
    ) -> Any:
        filter_query = convert_filter.convert(self.model, filters)

        return db.query(self.model)\
            .filter(self.model.status == StatusType.active) \
            .order_by(text(f"{sort} {sort_by.value}"))\
            .filter(*filter_query)


product_view = CRUDProductView(ProductView)
