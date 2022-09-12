from pydantic import BaseSettings


class Settings(BaseSettings):
    APP_ENV: str = "dev"

    # Security
    SECRET_KEY: str = "d80b71594f3a92b9098914874174e13aff10d3936068689399a0d9c9fa35003f"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8

    # Database
    DB_HOST: str = "db"
    DB_PORT: str = "3306"
    DB_DATABASE: str = "wasakbasak"
    DB_USERNAME: str = "root"
    DB_PASSWORD: str = "password1!"

    def get_db_url(self):
        return f"mysql+pymysql://{self.DB_USERNAME}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_DATABASE}"

    class Config:
        env_file = ".env"


settings = Settings()
