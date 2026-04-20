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

### Subscription page

![Subscription page](docs/subscription-page.png)

### Payment page

![Stripe Checkout payment page](docs/payment-page.png)

### Successful payment page

![Successful payment confirmation](docs/successful-payment-page.png)

### Stripe dashboard after successful payment

![Stripe dashboard overview after a successful test payment](docs/stripe-dashboard-after-successful-payment.png)

### Payment failure / cancel page

![Payment cancelled or abandoned checkout](docs/payment-failure-page.png)

### Flow diagram

![End-to-end subscription flow diagram](docs/flow-diagram.png)
