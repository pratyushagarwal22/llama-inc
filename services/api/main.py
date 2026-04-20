from urllib.parse import urlparse

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import checkout, webhooks
from core.config import settings


def _cors_origins() -> list[str]:
    """Allow the configured frontend URL plus localhost/127.0.0.1 swap (common dev pitfall)."""
    base = settings.frontend_url.rstrip("/")
    origins = [base]
    parsed = urlparse(base)
    if parsed.hostname == "localhost":
        origins.append(base.replace("://localhost", "://127.0.0.1", 1))
    elif parsed.hostname == "127.0.0.1":
        origins.append(base.replace("://127.0.0.1", "://localhost", 1))
    return list(dict.fromkeys(origins))


app = FastAPI(title="Llama Inc. API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins(),
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(checkout.router)
app.include_router(webhooks.router)
