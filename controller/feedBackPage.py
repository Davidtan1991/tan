from flask import Blueprint, json, request
from flask.templating import render_template
from func.data_Func import DataFunc
import copy


feedBack_Page = Blueprint("feedBack_Page", __name__, template_folder = "templates")
dataInstance = DataFunc()

@feedBack_Page.route('/feedBack_Page', methods = ['GET','POST'])
def feedBackPageFunc():
    currentUserID = "idid8"  #idid1 !!?? this should be from login function or homepage
    initialFeedbackList = dataInstance.getInitialFeedbackData()
    initialUserList_fd = dataInstance.getUserData()
    allowFeedbackList = []
    allowFeedBack = 0
    haveOrder = initialUserList_fd.get(currentUserID)
    if haveOrder != None:
        for order in initialUserList_fd[currentUserID]:
            if order[-1] == "N":
                allowFeedbackList = copy.deepcopy(order)
                allowFeedBack = 1
                break   # only show one no-feedback order for each time
    
    return render_template("feedBackPage.html", initialFeedback = initialFeedbackList, allowFeedback = allowFeedbackList, allowFeedbackBool = allowFeedBack)


@feedBack_Page.route('/readMoreFeedback', methods = ['GET','POST'])
def moreFeedback():
    if request.method == "POST":
        currentFeedback_ajax = request.get_json()
        feedbackNum = currentFeedback_ajax['feedbackNum']
        moreFbData = dataInstance.updateFeedbackData(int(feedbackNum))
        
        moreFbDict = {}
        moreFbDict["detail"] = moreFbData

        return json.dumps(moreFbDict)
