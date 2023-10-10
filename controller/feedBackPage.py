from flask import Blueprint
from flask.templating import render_template


feedBack_Page = Blueprint("feedBack_Page", __name__, template_folder = "templates")

@feedBack_Page.route('/feedBack_Page')
def feedBackPageFunc():
    return render_template("feedBackPage.html")