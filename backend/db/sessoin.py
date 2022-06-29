from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


engine = create_engine("mysql+pymysql://root:password1!@db:3306/wasakbasak", pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
