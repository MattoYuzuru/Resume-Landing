from fastapi import FastAPI, Request
from util import send_mail

app = FastAPI()


@app.post("/api/send-mail")
async def post_send_mail(request: Request):
    form_data = await request.form()
    name = form_data.get("name")
    email = form_data.get("email")
    message = form_data.get("message")

    if not all([name, email, message]):
        return {"error": "Missing required fields"}

    send_mail(name, email, message)
    return {"status": "ok"}
