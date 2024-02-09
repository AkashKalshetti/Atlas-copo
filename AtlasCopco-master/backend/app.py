# import send_mail
from ExcelData.dload import excel_data
from flask import Flask
# from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/data', methods=["GET"])
def get_data():
    data = excel_data()
    # send_mail.app()s
    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
