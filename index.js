import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;

    if(!username || !avatar){
        res.status(400).send('Todos os campos são obrigatórios')
        return;
    }
    
    usuarios.push({username, avatar});
    res.status(201).send("ok");
});

app.post("/tweets", (req, res) => {
    const {username, tweet}= req.body;

    if(!username || !tweet){
        res.status(400).send('Todos os campos são obrigatórios')
        return;
    }

    tweets.push({username, tweet});
    res.status(201).send("ok");
})

app.get("/tweets", (req, res) => {
    tweets.forEach(tweet => {
        const {avatar} = usuarios.find(usuario => tweet.username === usuario.username);
        tweet.avatar = avatar;
    })
    const lestTweets = tweets.slice(-10);
    res.send(lestTweets);
});


app.get('/tweets/:username', (req, res) => {
    const {username} = req.params;
    const envios = tweets.filter(tweet => tweet.username === username)
   
    res.send(envios)
})

//O MAC USA PORTA 5000 PARA O CONTROL CENTER, LEMBRAR DE USAR 5001 PARA CODAR 
app.listen(5001, () => console.log('Ouvindo na porta 5001'));

