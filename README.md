# Quiz-App-Backend

## Beschreibung
Dieses Projekt ist das Backend für eine Quiz-App, die Fragen und Antworten speichert und die Ergebnisse der Benutzer verfolgt.

## Funktionen
- Verwaltung von Quizfragen und -antworten
- Speichern von Benutzerantworten und Berechnen der Punktzahl
- Unterstützung für verschiedene Quiztypen (z. B. Multiple Choice, Ja/Nein)
- Abrufen von Quizstatistiken

## Technologien
- Sprache: Python (Flask), Node.js (Express)
- Datenbank: MySQL

## Installation

### Flask App
1. Erstelle und aktiviere eine virtuelle Umgebung
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
2. Installiere die Abhängigkeiten:
    ```bash
    pip install -r requirements.txt
    ```
3. Setze die Umgebungsvariablen für die Datenbankverbindung:
    ```bash
    export DATABASE_URL='mysql+pymysql://user:password@localhost/quiz_app_db'
    ```
4. Initialisiere die Datenbank:
    ```bash
    flask db init
    flask db migrate -m "Initial migration."
    flask db upgrade
    ```
5. Starte die Flask-App:
    ```bash
    python run.py
    ```

### Express App
1. Installiere die Abhängigkeiten:
    ```bash
    npm install
    ```
2. Setze die Umgebungsvariablen für die Datenbankverbindung in `config/default.json`.
3. Starte die Express-App:
    ```bash
    npm start
    ```

## API Endpunkte
- `GET /quizzes` - Alle Quiz abrufen
- `POST /quiz` - Ein neues Quiz erstellen
- Weitere Endpunkte für Fragen, Antworten und Benutzerantworten

## Testen
Du kannst die API mit Tools wie Postman testen.