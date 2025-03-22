from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import httpx
import asyncio

app = FastAPI()

LOKI_URL = "http://loki:3100/loki/api/v1/query_range"

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/logs/{spider_name}")
async def get_logs(spider_name: str):
    params = {
        "query": f'{{job="docker-logs"}} |= "{spider_name}"',
        "limit": 50
    }
    async with httpx.AsyncClient() as client:
        res = await client.get(LOKI_URL, params=params)
        return res.json()

@app.websocket("/ws/logs/{spider_name}")
async def websocket_endpoint(websocket: WebSocket, spider_name: str):
    await websocket.accept()
    print(f"✅ Client connected for spider: {spider_name}")
    
    try:
        while True:
            # Query Loki for logs in each iteration
            params = {
                "query": f'{{job="docker-logs"}} |= "{spider_name}"',
                "limit": 1  # latest log
            }

            async with httpx.AsyncClient() as client:
                response = await client.get(LOKI_URL, params=params)
                data = response.json()

            # You can format/parse `data` here before sending
            await websocket.send_json(data)

            await asyncio.sleep(2)  # Send logs every 2 seconds
    except WebSocketDisconnect:
        print(f"❌ Client disconnected from {spider_name}")
    except Exception as e:
        print(f"⚠️ Error in websocket for {spider_name}: {e}")
