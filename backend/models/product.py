import enum
from sqlalchemy import Column, Integer, String, Enum, UniqueConstraint, TIMESTAMP
from sqlalchemy.sql.functions import func
from db.base_class import Base
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey


class StatusType(enum.Enum):
    active = "active"
    soldOut = "soldOut"
    delete = "delete"


class Product(Base):
    __tablename__ = "products"
    __table_args__ = (
        UniqueConstraint('product_category_id', 'code', name='uix_name_code'),
    )
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    product_category_id = Column(Integer, ForeignKey("product_categories.id"))
    name = Column(String(1000), nullable=False)
    code = Column(String(100), index=True, nullable=False)
    desc = Column(String(1000))
    price = Column(Integer, nullable=False)
    status = Column(Enum(StatusType), nullable=True, server_default="active")
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    orders = relationship("Order", back_populates="product")
    product_likes = relationship("ProductLike", back_populates="product")
    reviews = relationship("Review", back_populates="product")
    product_category = relationship("ProductCategory", back_populates="products")
