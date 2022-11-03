import express from "express";

const app = express();

const usuarios = [];
const tweets = ['teste1','teste2','teste3','teste4','teste5','teste6','teste7','teste8','teste9','teste10',];

app.get('/tweets', (req, res) => {
    const lestTweets = tweets.slice(-10);
    res.send(lestTweets);
})

app.listen(5001, () => {
    console.log('Ouvindo na porta 5001')
})

