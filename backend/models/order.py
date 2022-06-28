from sqlalchemy import Column, Integer, TIMESTAMP
from sqlalchemy.sql.functions import func
from sqlalchemy.sql.schema import ForeignKey
from db.base_class import Base
from sqlalchemy.orm import relationship


class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey("products.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    ordered_at = Column(TIMESTAMP, server_default=func.now())

    user = relationship("User", back_populates="orders")
    product = relationship("Product", back_populates="orders")
