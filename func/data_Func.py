

class DataFunc:
    def __init__(self) -> None:
        self.feedBackpath = "../static/doc/SimulateDatabase_feedback.txt" #"../tan/static/doc/SimulateDatabase_feedback.txt"

    def getFeedbackData(self):
        with open(self.feedBackpath, "r") as file_f:
            originalFeedbackData = file_f.readlines()
            file_f.close()
        print(originalFeedbackData)????????????
            
    
    def updateFeedbackData(self):
        pass