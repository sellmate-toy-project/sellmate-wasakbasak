from sqlalchemy import Column, Integer, String, TIMESTAMP
from sqlalchemy.sql.functions import func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey
from ..db.base_class import Base


class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    ordered_at = Column(TIMESTAMP, server_default=func.now())
