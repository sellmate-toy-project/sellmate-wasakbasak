from db.base_class import Base
from .view import View
from sqlalchemy import MetaData

metadata = MetaData()


class ProductView(Base):
    products_view = View(
        "products_view",
        metadata,
    )
    assert products_view.primary_key == [products_view.id]

    __tablename__ = products_view
