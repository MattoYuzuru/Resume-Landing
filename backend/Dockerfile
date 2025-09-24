FROM python:latest

WORKDIR /app

COPY api.py util.py req.txt ./

RUN pip install --upgrade pip
RUN pip install -r req.txt

EXPOSE 8082

CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8082"]
