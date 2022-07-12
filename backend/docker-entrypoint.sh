#!/bin/bash

db_host="db"
db_port=33060

# Wait for the db docker to be running
while ! nc $db_host $db_port; do
  >&2 echo "db is unavailable - sleeping"
  sleep 5
done

# Apply autogenerate migrations
#echo "Apply autogenerate migrations"
#alembic revision --autogenerate -m "autogenerate migrations"

# Apply database migrations
echo "Apply system database migrations"
alembic upgrade head

# Start fastapi server
echo "Start server"
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
done
