import stripe
from fastapi import APIRouter, Request, HTTPException
from core.config import settings

router = APIRouter()

@router.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload,
            sig_header,
            settings.stripe_webhook_secret
        )
    except ValueError:
        raise HTTPException(
            status_code=400, 
            detail="Invalid payload"
        )
    except stripe.error.SignatureVerificationError:
        raise HTTPException(
            status_code=400, 
            detail="Invalid signature"
        )

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        # TODO: provision premium access for session.customer
        print(
            f"Subscription activated for customer: "
            f"{session.get('customer')}"
        )

    elif event["type"] == "invoice.payment_failed":
        session = event["data"]["object"]
        # TODO: notify customer and revoke access
        print(
            f"Payment failed for customer: "
            f"{session.get('customer')}"
        )

    return {"status": "ok"}
