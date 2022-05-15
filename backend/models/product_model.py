from sqlalchemy import Column, Integer, String
from ..db.database import Base


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, unique=True, index=True, nullable=False)
    desc = Column(String)
    price = Column(Integer, nullable=False)
