from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    if username == "admin":
        if password == "password":
            return "Success", 200
        else:
            return "Falied", 401
    else:
        return "Failed", 403

  
if __name__ == '__main__':
	app.run(debug = True)