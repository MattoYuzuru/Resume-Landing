from typing import Annotated

from fastapi import FastAPI, Form

from util import send_mail

app = FastAPI()


@app.post("/api/send-mail")
async def post_send_mail(
        name: Annotated[str, Form()],
        email: Annotated[str, Form()],
        message: Annotated[str, Form()]
):
    send_mail(name, email, message)
    return {"status": "ok"}
