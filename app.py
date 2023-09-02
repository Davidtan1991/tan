from flask import Flask
from controller import homepage, bookingPage


app = Flask(__name__)


app.register_blueprint(homepage.home_page)
app.register_blueprint(bookingPage.booking_page)


if __name__ == '__main__':
    app.run(debug=True)
