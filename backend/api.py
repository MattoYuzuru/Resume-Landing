from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from util import send_mail

app = FastAPI()


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


@app.post("/api/send-mail")
async def post_send_mail(form_data: ContactForm):
    try:
        send_mail(form_data.name, form_data.email, form_data.message)
        return {"status": "ok", "message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
