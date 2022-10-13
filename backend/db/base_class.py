from typing import Any
from sqlalchemy.ext.declarative import as_declarative, declared_attr


@as_declarative()
class Base:
    id: Any
    __name__: str
    # Generate __tablename__ automatically
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()

    def get_class_by_module_name(module_name):
        for mapper in Base.registry.mappers:
            cls = mapper.class_

            if module_name in cls.__module__:
                return cls
