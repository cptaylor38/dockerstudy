const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/', (req,res)=> {
    res.send('Hello World');
});

app.get('/hgtv', (req, res)=> {

    let action = ( async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.hgtv.com/sweepstakes/hgtv-dream-home/sweepstakes');
    })();

    res.send(action);
})

app.listen(8080, ()=> {
    console.log('Listening on Port 8080');
})