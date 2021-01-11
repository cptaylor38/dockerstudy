const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/storenet', (req, res)=> {
    res.send('launching');
})

app.get('/icplus', (req, res)=> {
    res.send('icplus')
})

app.get('patientprofile', (req, res)=> {
    res.send('patientprofile')
})

app.get('thirdparty', (req, res)=> {
    res.send('thirdparty');
})

app.get('sdl', (req, res)=> {
    res.send('sdl');
})

app.listen(8000, ()=> {
    console.log('Listening on Port 8000');
})