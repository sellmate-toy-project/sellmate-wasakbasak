from sqlalchemy import Column, Integer, String, Enum, TIMESTAMP
from sqlalchemy.sql.functions import func
from db.base_class import Base
from sqlalchemy.sql.schema import ForeignKey
from ..product import StatusType


class ProductView(Base):
    __tablename__ = "products_view"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(1000), nullable=False)
    code = Column(String(100), index=True, nullable=False)
    desc = Column(String(1000))
    price = Column(Integer, nullable=False)
    status = Column(Enum(StatusType), nullable=True, server_default="active")
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())
    total_like_count = Column(Integer)
    third_floor_like_count = Column(Integer)
    five_floor_like_count = Column(Integer)
    eleven_floor_like_count = Column(Integer)
    total_review_count = Column(Integer)
    total_sales_count = Column(Integer)
    third_floor_sales_count = Column(Integer)
    five_floor_sales_count = Column(Integer)
    eleven_floor_sales_count = Column(Integer)
    main_category = Column(Integer)
    middle_category = Column(Integer)
    sub_category = Column(Integer)
