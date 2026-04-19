import stripe
from fastapi import APIRouter
from core.config import settings

stripe.api_key = settings.stripe_secret_key
router = APIRouter()

@router.post("/create-checkout-session")
async def create_checkout_session():
    session = stripe.checkout.sessions.create(
        mode="subscription",
        line_items=[{
            "price": settings.stripe_price_id,
            "quantity": 1,
        }],
        success_url=(
            f"{settings.frontend_url}/success"
            f"?session_id={{CHECKOUT_SESSION_ID}}"
        ),
        cancel_url=f"{settings.frontend_url}/cancel",
    )
    return {"url": session.url}
