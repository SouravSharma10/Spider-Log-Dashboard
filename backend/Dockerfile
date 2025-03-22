FROM python:3.9-slim

WORKDIR /app

RUN pip install fastapi uvicorn[standard]

COPY main.py .
RUN pip install fastapi uvicorn httpx

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
