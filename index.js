import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
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

//O MAC USA PORTA 5000 PARA O CONTROL CENTER, LEMBRAR DE USAR 5001 PARA CODAR 
app.listen(5000, () => console.log('Ouvindo na porta 5000'));

