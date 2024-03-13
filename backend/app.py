from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

projects = [
    {'id': 1, 'title': 'Project 1', 'description': 'This is project 1'},
    {'id': 2, 'title': 'Project 2', 'description': 'This is project 2'}
]

posts = [
    {'id': 1, 'title': 'Post 1', 'content': 'This is post 1'},
    {'id': 2, 'title': 'Post 2', 'content': 'This is post 2'}
]

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

@app.route('/api/posts', methods=['GET'])
def get_posts():
    return jsonify(posts)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    # TODO: Process the contact form submission and send an email
    return jsonify({'message': 'Contact form submitted successfully'})

if __name__ == '__main__':
    app.run()