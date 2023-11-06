from flask import Blueprint
from flask.templating import render_template
from func.data_Func import DataFunc



feedBack_Page = Blueprint("feedBack_Page", __name__, template_folder = "templates")
dataInstance = DataFunc()

@feedBack_Page.route('/feedBack_Page')
def feedBackPageFunc():
    initialFeedbacklist = dataInstance.getInitialFeedbackData()

    return render_template("feedBackPage.html", initialFeedback = initialFeedbacklist)