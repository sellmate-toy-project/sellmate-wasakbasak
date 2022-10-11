from typing import List, Dict
from db.base_class import Base


def convert(
    model: Base,
    filters: List[Dict]
) -> List:
    filter_query = []

    for filter in filters:
        filter = eval(filter)
        if '.' in filter['key']:
            key = filter['key'].split('.')
            filter['key'] = key[1]
            sub_model = Base.get_class_by_module_name(key[0])
            sub_query = query_parser(model=sub_model, **filter)
            query = getattr(model, key[0]).has(sub_query)
            filter_query.append(query)
        else:
            query = query_parser(model=model, **filter)
            filter_query.append(query)

    return filter_query


def query_parser(model, key, condition, value):
    query = None
    if condition == '=':
        query = getattr(model, key) == value
    elif condition == '>':
        query = getattr(model, key) > value
    elif condition == '>=':
        query = getattr(model, key) >= value
    elif condition == '<':
        query = getattr(model, key) < value
    elif condition == '<=':
        query = getattr(model, key) <= value
    elif condition == 'in':
        query = getattr(model, key).in_(value.split(','))
    elif condition == 'like':
        query = getattr(model, key).like(f'%{value}%')

    return query
