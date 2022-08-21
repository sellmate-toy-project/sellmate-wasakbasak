from sqlalchemy import Column, Integer, PrimaryKeyConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey
from db.base_class import Base


class ProductLike(Base):
    __tablename__ = "product_likes"
    __table_args__ = (
        PrimaryKeyConstraint("user_id", "product_id", name="pk_user_product_id"),
    )
    user_id = Column(Integer, ForeignKey("users.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    
    user = relationship("User", back_populates="product_likes")
    product = relationship("Product", back_populates="product_likes")
