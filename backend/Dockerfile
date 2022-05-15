# install python
FROM python:3.9 as base
RUN apt-get update \
    && apt-get install -y -qq python3-pip

COPY requirements.txt requirements.txt

# python package install
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

WORKDIR /var/www

# develop-stage
FROM base as develop-stage
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

# production-stage
FROM base as production-stage
ADD . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]