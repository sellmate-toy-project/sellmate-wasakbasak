import datetime
from typing import Any, Optional, Union, Sequence, TypeVar, Generic
from pydantic import BaseModel
from pydantic.generics import GenericModel

T = TypeVar("T")


class Response(BaseModel):
    httpStatus: int = 200
    httpMethod: Any
    message: str = ""
    path: Any
    timestamp: str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M%S")


class Body(GenericModel, Generic[T]):
    body: Sequence[T]


class PagingMeta(BaseModel):
    total_count: int
    total_page: int
    current_page: Union[int, None]
    size: Union[int, None]


class ResponseEntity(Response, Body, Generic[T]):
    paging_meta: Optional[PagingMeta]
