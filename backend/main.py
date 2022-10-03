from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from routes import api
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from fastapi.encoders import jsonable_encoder
from controllers.response_entity import Response

app = FastAPI()

# CORS enabled
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include route
app.include_router(api.api_router, prefix="")


# exception handling
@app.exception_handler(StarletteHTTPException)
def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content=jsonable_encoder(Response(
            httpStatus=exc.status_code,
            httpMethod=request.method,
            path=request.url.path,
            message=exc.detail,
        )),
    )


@app.exception_handler(RequestValidationError)
def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=jsonable_encoder(Response(
            httpStatus=status.HTTP_422_UNPROCESSABLE_ENTITY,
            httpMethod=request.method,
            path=request.url.path,
            message=exc.errors()[0]["msg"],
        )),
    )


# exception handling
@app.exception_handler(StarletteHTTPException)
def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content=jsonable_encoder(ResponseEntity(
            httpStatus=exc.status_code,
            httpMethod=request.method,
            path=request.url.path,
            message=exc.detail,
        )),
    )


@app.exception_handler(RequestValidationError)
def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=jsonable_encoder(ResponseEntity(
            httpStatus=status.HTTP_422_UNPROCESSABLE_ENTITY,
            httpMethod=request.method,
            path=request.url.path,
            message=exc.errors()[0]["msg"],
        )),
    )
