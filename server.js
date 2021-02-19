const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

require('./models')

app.get('/', (req, res) => {
    res.send('<h1>GameLib API</h1>')
});








app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});