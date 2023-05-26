const express = require('express');
const app = express();
const data = require('./Data/data.json')
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api is')
});

app.get('/data', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`data port: ${port}`)
})