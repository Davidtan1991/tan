from flask import Blueprint
from flask.templating import render_template

home_page = Blueprint("home_page", __name__, template_folder = "templates")

@home_page.route('/')
def homePageFunc():
    return render_template("home.html")