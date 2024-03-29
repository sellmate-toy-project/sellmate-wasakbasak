"""autogenerate migrations

Revision ID: 8200da718564
Revises: 502d42a17e22
Create Date: 2022-08-15 13:04:56.200906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8200da718564'
down_revision = '502d42a17e22'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True))
    op.add_column('products', sa.Column('updated_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'updated_at')
    op.drop_column('products', 'created_at')
    # ### end Alembic commands ###
