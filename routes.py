from flask import request, jsonify
from . import app, db
from .models import User, Quiz, Question, Answer

@app.route('/quizzes', methods=['GET'])
def get_quizzes():
    quizzes = Quiz.query.all()
    return jsonify([quiz.title for quiz in quizzes])

@app.route('/quiz', methods=['POST'])
def create_quiz():
    data = request.get_json()
    quiz = Quiz(title=data['title'])
    db.session.add(quiz)
    db.session.commit()
    return jsonify({"message": "Quiz created"}), 201

# Weitere Routen für Fragen, Antworten und Benutzerantworten