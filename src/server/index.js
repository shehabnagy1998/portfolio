const express = require('express'),
    path = require('path'),
    app = express(),
    Port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'))
})

app.listen(Port, _ => { console.log(`listen on ${Port}`); });