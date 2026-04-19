from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import checkout, webhooks
from core.config import settings

app = FastAPI(title="Llama Inc. API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(checkout.router)
app.include_router(webhooks.router)
