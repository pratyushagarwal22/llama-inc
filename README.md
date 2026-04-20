# Llama Inc. — Subscription Integration

A minimal monorepo for Llama Inc.'s Stripe Checkout
subscription integration.

## Structure
- `apps/web` — Next.js 14 frontend
- `services/api` — FastAPI backend
- `docs/` — Architecture docs and flow diagrams

## Quick Start
See `docs/APPROACH.md` for full setup instructions.

## How it looks

Screenshots below are from the Stripe test (sandbox) flow. Each title describes what you are seeing.

### Subscription page — this is how it looks

![Subscription page](docs/subscription-page.png)

### Payment page — this is how it looks

![Stripe Checkout payment page](docs/payment-page.png)

### Successful payment page — this is how it looks

![Successful payment confirmation](docs/successful-payment-page.png)

### Stripe dashboard after successful payment — this is how it looks

![Stripe dashboard overview after a successful test payment](docs/stripe-dashboard-after-successful-payment.png)

### Payment failure / cancel page — this is how it looks

![Payment cancelled or abandoned checkout](docs/payment-failure-page.png)

### Flow diagram — this is how it looks

![End-to-end subscription flow diagram](docs/flow-diagram.png)
