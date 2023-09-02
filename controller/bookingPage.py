from flask import Blueprint
from flask.templating import render_template

booking_page = Blueprint("booking_page", __name__, template_folder="templates")


@booking_page.route('/booking_page')
def bookingPageFunc():
    return render_template("bookingPage.html")
