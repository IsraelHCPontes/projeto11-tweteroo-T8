import express from "express";

const app = express();
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post("/sing-up", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("ok");
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("ok");
})

app.get("/tweets", (req, res) => {
    tweets.forEach(tweet => {
        const {avatar} = usuarios.find(usuario => tweet.username === usuario.username);
        tweet.avatar = avatar;
    })
    const lestTweets = tweets.slice(-10);
    res.send(lestTweets);
});

app.listen(5001, () => console.log('Ouvindo na porta 5001'));

