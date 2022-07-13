from sqlalchemy import Column, Integer, String, UniqueConstraint
from db.base_class import Base
from sqlalchemy.orm import relationship


class ProductCategory(Base):
    __tablename__ = "product_categories"
    __table_args__ = (
        UniqueConstraint('name', 'code', name='uix_name_code'),
    )
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), index=True, nullable=False)
    code = Column(String(100))
    owner_id = Column(Integer)

    products = relationship("Product", back_populates="product_category")
