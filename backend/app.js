const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require ('mongoose');
const userRoutes = require ('./routes/user');
const sauceRoutes = require ('./routes/sauce');
const path = require('path')


mongoose.connect('mongodb+srv://Effix1st:Eloise2015@cluster0.oljcbaq.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(()=>console.log('Connexion à mongoDB réussie ! '))
.catch(()=>console.log('Connexion à mongoDB échoué ! '));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//************************************************tableau de sauces************************************

app.use(bodyParser.json())

app.use('/api/auth', userRoutes)

app.use('/api/sauces', sauceRoutes)

app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports=app;