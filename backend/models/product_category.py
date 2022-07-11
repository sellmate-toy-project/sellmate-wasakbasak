from sqlalchemy import Column, Integer, String
from db.base_class import Base
from sqlalchemy.orm import relationship


class ProductCategory(Base):
    __tablename__ = "product_categories"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), unique=True, index=True, nullable=False)
    owner_id = Column(Integer)

    products = relationship("Product", back_populates="product_category")
