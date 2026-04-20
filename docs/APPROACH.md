# Llama Inc. — Subscription Integration Approach

## Overview
Llama Inc. is launching a $10/month premium subscription 
using Stripe Checkout. This document outlines the 
architecture, decisions made, and how to run the project 
locally.

## Architecture

### Frontend (apps/web)
- Next.js 14 with App Router and TypeScript
- Tailwind CSS for styling
- Calls the FastAPI backend to create a Checkout Session
- Redirects user to Stripe-hosted Checkout page
- Handles success and cancel redirect pages

### Backend (services/api)
- FastAPI (Python) handles two endpoints:
  - POST /create-checkout-session — creates a Stripe 
    Checkout Session and returns the hosted URL
  - POST /webhook — receives Stripe events and 
    provisions/revokes premium access

### Why Stripe Hosted Checkout
- Minimal custom code for a solo developer
- PCI compliance handled by Stripe
- Built-in support for subscriptions, tax, and 
  payment methods
- Trade-off: limited branding control and analytics 
  blind spot during checkout flow

## Subscription Flow
[See flow-diagram.png in this directory]

## Running Locally

### Backend
cd services/api
pip install -r requirements.txt
cp .env.example .env
# Add your Stripe keys to .env
uvicorn main:app --reload --port 8000

### Frontend
cd apps/web
npm install
cp .env.local.example .env.local
# Add your keys to .env.local
npm run dev

### Webhooks (local testing)
Install Stripe CLI and run:
stripe listen --forward-to localhost:8000/webhook
Copy the webhook signing secret output into 
STRIPE_WEBHOOK_SECRET in services/api/.env

## Environment Variables

| Variable | Location | Description |
|---|---|---|
| STRIPE_SECRET_KEY | services/api/.env | Stripe secret key |
| STRIPE_WEBHOOK_SECRET | services/api/.env | Webhook signing secret |
| STRIPE_PRICE_ID | services/api/.env | Price ID from Dashboard |
| NEXT_PUBLIC_API_URL | apps/web/.env.local | Backend URL |

## GitHub
Before pushing, verify .env files are gitignored:
git status --short
No .env files should appear in the output.
