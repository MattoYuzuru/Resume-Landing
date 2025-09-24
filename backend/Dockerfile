FROM python:3.12-slim

WORKDIR /app

COPY api.py util.py req.txt ./

RUN pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r req.txt

EXPOSE 8082

CMD ["python", "-m", "uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8082"]
