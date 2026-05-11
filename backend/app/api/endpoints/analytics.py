from fastapi import APIRouter
import pandas as pd
import numpy as np

router = APIRouter()

@router.get("/summary")
async def get_analytics_summary():
    # Mock data processing using Pandas
    data = {
        'category': ['Generative AI', 'Coding Assistants', 'AI Video Tools', 'AI Agents', 'AI Automation'],
        'funding': [1200, 800, 600, 1500, 950],
        'growth_rate': [0.45, 0.30, 0.25, 0.55, 0.35]
    }
    df = pd.DataFrame(data)
    
    # Simple calculations
    total_funding = float(df['funding'].sum())
    avg_growth = float(df['growth_rate'].mean())
    
    # Trending sector
    trending_idx = df['growth_rate'].idxmax()
    trending_sector = df.iloc[trending_idx]['category']
    
    return {
        "total_funding_m": total_funding,
        "average_growth": avg_growth,
        "trending_sector": trending_sector,
        "sector_breakdown": df.to_dict(orient='records')
    }

@router.get("/forecast")
async def get_forecast():
    # Simulate a forecast using numpy
    months = np.arange(1, 13)
    base_funding = 100
    noise = np.random.normal(0, 5, 12)
    forecast = base_funding * (1.1 ** months) + noise
    
    return {
        "months": months.tolist(),
        "forecasted_funding": forecast.tolist()
    }
