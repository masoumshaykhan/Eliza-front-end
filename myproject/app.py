from eliza import *
from flask import Flask,render_template,url_for,redirect,request
app = Flask(__name__)
app.secret_key="masum"

@app.route('/')
def home():
    return render_template('home.html')
  
@app.route('/message', methods=['POST' , 'GET'])  
def send_message():
    if request.method == 'POST':
        message=request.form["msg"]
        print(1111)
        print(message)
        # message = the message we should pass to eliza respond method
        return redirect(url_for("message",msg=message))
    else:
        return render_template('home.html')

@app.route("/<msg>")
def show_message(msg):
    # msg= message we should give from eliza and pass to html
    return "<h1>{msg}</h1>".format(msg=msg)

if __name__ == '__main__':
    app.run(debug=True)