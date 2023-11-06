

class DataFunc:
    def __init__(self) -> None:
        self.feedBackpath = "./static/doc/SimulateDatabase_feedback.txt" #"../tan/static/doc/SimulateDatabase_feedback.txt"
        
    def getInitialFeedbackData(self):
        originalFeedbackData = []
        initialFeedbackDataList = [] # length <= 10   
        with open(self.feedBackpath, "r") as file_f:
            originalFeedbackData = file_f.readlines()
            file_f.close()
        
        titleLine = originalFeedbackData.pop(0)
        titleLine = titleLine.rstrip("\n").split("**")


        for item in originalFeedbackData:
            temNew = item.split("**")
            temDict = {}
            for i in range(0, len(temNew)):
                temDict[titleLine[i]] = temNew[i]
            initialFeedbackDataList.append(temDict)
    
        return initialFeedbackDataList



    def updateFeedbackData(self):
        pass