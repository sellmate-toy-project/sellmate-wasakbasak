from sqlalchemy import Column, Integer, String
from ..db.database import Base


class Products(Base):
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, unique=True, index=True, nullable=False)
    desc = Column(String)
    price = Column(Integer, nullable=False)
