from fastapi import FastAPI
from pydantic import BaseModel
from util import *

app = FastAPI()

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/send-mail")
def post_send_mail(data: ContactForm):
    send_mail(data.name, data.email, data.message)
    return {"status": "ok"}