from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey
from ..db.database import Base


class ProductLike(Base):
    __tablename__ = "product_likes"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    product_id = Column(Integer, ForeignKey("products.id"))

    users = relationship("User", back_populate="product_likes")
