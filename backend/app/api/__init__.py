from fastapi import APIRouter
from app.api.endpoints import startups, tools, analytics

api_router = APIRouter()
api_router.include_router(startups.router, prefix="/startups", tags=["startups"])
api_router.include_router(tools.router, prefix="/tools", tags=["tools"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
