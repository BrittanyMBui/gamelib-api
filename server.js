const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000
const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CROSS ORIGIN RESOURCE SHARING
app.use(cors());


app.use('/api/v1/games', routes.games);




// Home Route
app.get('/', (req, res) => {
  res.send('<h1>GameLib API</h1>')
});


// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));