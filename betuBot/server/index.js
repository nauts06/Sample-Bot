const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const botController = require('./controllers/botController');


app.use(cors());
app.use(bodyParser.json());

// Define routes

app.post('/api/start-bot', botController.startBot);
app.post('/api/stop-bot', botController.stopBot);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
