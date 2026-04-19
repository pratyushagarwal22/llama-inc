from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    stripe_secret_key: str
    stripe_webhook_secret: str
    stripe_price_id: str
    frontend_url: str = "http://localhost:3000"

    class Config:
        env_file = ".env"

settings = Settings()
