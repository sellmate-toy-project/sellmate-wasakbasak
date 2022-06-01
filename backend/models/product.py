from sqlalchemy import Column, Integer, String
from db.base_class import Base


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), unique=True, index=True, nullable=False)
    desc = Column(String(1000))
    price = Column(Integer, nullable=False)
