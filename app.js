const express = require('express');
const app = express();
const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Routes
app.use('/api/quizzes', require('./routes/quiz'));
app.use('/api/users', require('./routes/user'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));