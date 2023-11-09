import csv
import copy

class DataFunc:
    def __init__(self) -> None:
        self.feedBackPath = "./static/doc/SimulateDatabase_feedback.txt" #"../tan/static/doc/SimulateDatabase_feedback.txt"
        self.userDataPath = "./static/doc/orderRecording.csv"

    def getInitialFeedbackData(self):
        originalFeedbackData = []
        initialFeedbackDataList = [] # length <= 10   
        with open(self.feedBackPath, "r") as file_f:
            originalFeedbackData = file_f.readlines()
            file_f.close()
        
        titleLine = originalFeedbackData.pop(0)
        titleLine = titleLine.rstrip("\n").split("**")

        initialNums = 0
        if len(originalFeedbackData) > 10:
            initialNums = 10
        else:
            initialNums = len(originalFeedbackData)
        
        for i in range(0, initialNums):
            item = originalFeedbackData[i]
            temNew = item.split("**")
            temDict = {}
            for j in range(0, len(temNew)):
                temDict[titleLine[j]] = temNew[j]
            initialFeedbackDataList.append(temDict)
    
        return initialFeedbackDataList



    def updateFeedbackData(self, currentNum):
        updateFeedbackData = []
        updateFeedbackDataList = [] # length <= 10   
        with open(self.feedBackPath, "r") as file_f:
            updateFeedbackData = file_f.readlines()
            file_f.close()
        
        titleLine = updateFeedbackData.pop(0)
        titleLine = titleLine.rstrip("\n").split("**")

        updateNums = currentNum
        if len(updateFeedbackData) > currentNum+5:
            updateNums = currentNum+5
        else:
            updateNums = len(updateFeedbackData)
        
        for i in range(0, updateNums):
            item = updateFeedbackData[i]
            temNew = item.split("**")
            temDict = {}
            for j in range(0, len(temNew)):
                temDict[titleLine[j]] = temNew[j]
            updateFeedbackDataList.append(temDict)
    
        return updateFeedbackDataList


    def getUserData(self):
        userDataDict = {}
        userDataList = []
        userDataFile = open(self.userDataPath, "r")
        userData = csv.reader(userDataFile)
        for row in userData:
            userDataList.append(row)
        
        userDataList.pop(0)

        for o1 in userDataList:
            userDataDict[o1[1]] = []
        
        for o2 in userDataList:
            roomList = copy.deepcopy(o2[2]).split(";")
            orderNew = copy.deepcopy(o2)
            orderNew[2] = roomList
            userDataDict[o2[1]].append(orderNew)
        # { userID: [
        #            [orderID, userID, roomTypeList, startDate, endDate, customerNumbers, hasAlreadyFeedback(Y/N)], 
        #            [.....]......
        #           ]
        # }
        return userDataDict