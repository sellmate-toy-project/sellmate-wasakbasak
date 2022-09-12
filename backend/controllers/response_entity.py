import datetime
from typing import Any, Optional, Union
from pydantic import BaseModel


class PagingMeta(BaseModel):
    total: int
    next_page: Union[str, None]
    prev_page: Union[str, None]


class ResponseEntity(BaseModel):
    httpStatus: int = 200
    httpMethod: Any
    message: str = ""
    path: Any
    timestamp: str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M%S")
    paging_meta: Optional[PagingMeta]
    body: Any
