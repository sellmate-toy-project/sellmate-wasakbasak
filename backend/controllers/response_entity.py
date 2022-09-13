import datetime
from typing import Any, Optional, Union, Sequence, TypeVar, Generic
from pydantic import BaseModel
from pydantic.generics import GenericModel

T = TypeVar("T")


class PagingMeta(BaseModel):
    total_page: int
    current_page: Union[int, None]
    size: Union[int, None]


class Body(GenericModel, Generic[T]):
    body: Sequence[T]


class ResponseEntity(Body, Generic[T]):
    httpStatus: int = 200
    httpMethod: Any
    message: str = ""
    path: Any
    timestamp: str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M%S")
    paging_meta: Optional[PagingMeta]
