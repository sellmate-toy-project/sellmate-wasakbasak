from sqlalchemy import Column, Integer, String, TIMESTAMP
from sqlalchemy.sql.functions import func
from sqlalchemy.schema import ForeignKey
from db.base_class import Base


class Posts(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    body = Column(String(1000), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
