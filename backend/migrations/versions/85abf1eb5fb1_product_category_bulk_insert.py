"""product category _bulk_insert

Revision ID: 85abf1eb5fb1
Revises: 75033dbdbb96
Create Date: 2022-07-12 11:09:35.596744

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table, column
from sqlalchemy import String

# revision identifiers, used by Alembic.
revision = '85abf1eb5fb1'
down_revision = '75033dbdbb96'
branch_labels = None
depends_on = None

product_categories_table = table('product_categories',
                                 column('name', String)
                                 )


def upgrade() -> None:
    op.bulk_insert(
        product_categories_table,
        [
            {'name': '과자'},
            {'name': '음료'},
        ]
    )


def downgrade() -> None:
    pass
