from pydantic import BaseModel
from typing import Any


class Token(BaseModel):
    access_token: str
    token_type: str
    user: Any

