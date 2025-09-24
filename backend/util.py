import smtplib
from email.mime.text import MIMEText

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

SMTP_SERVER = os.environ.get("SMTP_SERVER")
SMTP_PORT = os.environ.get("SMTP_PORT")
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")
EMAIL_RECEIVER = os.environ.get("EMAIL_RECEIVER")


class Email():
    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message

    def __str__(self):
        return f"{self.name} пишет:\n\n{self.message}\n\nОтветить на почту: {self.email}"


def send_mail(name: str, email: str, message: str):
    msg = Email(name, email, message)

    mime_msg = MIMEText(str(msg), "plain", "utf-8")
    mime_msg["Subject"] = "Новое сообщение с формы от " + name + "."
    mime_msg["From"] = SMTP_USER
    mime_msg["To"] = EMAIL_RECEIVER

    with smtplib.SMTP(SMTP_SERVER, SMTP_PASSWORD) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(mime_msg)
