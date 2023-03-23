const mongoose = require ('mongoose');


const sauceSchema = mongoose.Schema({
    userId:String,//identifiant mogodb
    name:String,//nom de la sauce
    manufacturer:String,//fabricant de la sauce
    description:String,//description de la sauce
    mainPepper:String,//le principal ingrédient épicés de la sauce
    imageUrl:String,//image de la sauce dela sauce telechargé plus tard
    heat:Number,//nombre entre 1 et 10 decrivant la sauce
    likes:Number,//nombre d'utilisateur qui aiment la sauce
    dislikes:Number,//nombre d'utilisateur qui desaprouve
    usersLiked:[String],//TABLEAU des identifiant approuvant
    usersDisliked:[String]//TABLEAU des identifiant désapprouvant
    
});


module.exports = mongoose.model('Sauce',sauceSchema);