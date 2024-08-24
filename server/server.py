from flask import Flask

app = Flask(__name__)


@app.route("/flask")
def flask():
    return "Aadhithya"


if __name__=="__main__":
    app.run(debug=True)