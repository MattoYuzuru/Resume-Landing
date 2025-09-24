from fastapi import FastAPI, Form

from util import send_mail

app = FastAPI()


@app.post("/api/send-mail")
def post_send_mail(
        name: str = Form(...),
        email: str = Form(...),
        message: str = Form(...)
):
    send_mail(name, email, message)
    return {"status": "ok"}
