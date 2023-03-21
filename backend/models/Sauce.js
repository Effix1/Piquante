const mongoose = require ('mongoose');

const sauceSchema = mongoose.Schema({
    userId:{type:String, required:true},//identifiant mogodb
    name:{type:String, required:true},//nom de la sauce
    manufacturer:{type:String, required:true},//fabricant de la sauce
    description:{type:String, required:true},//description de la sauce
    mainPepper:{type:String, required:true},//le principal ingrédient épicés de la sauce
    imageUrl:{type:String, required:true},//image de la sauce dela sauce telechargé plus tard
    heat:{type:Number, required:true},//nombre entre 1 et 10 decrivant la sauce
    likes:{type:Number, required:true},//nombre d'utilisateur qui aiment la sauce
    dislikes:{type:Number, required:true},//nombre d'utilisateur qui desaprouve
    usersLiked:[String],//TABLEAU des identifiant approuvant
    usersDisliked:[String],//TABLEAU des identifiant désapprouvant
    
});

module.exports = mongoose.model('Sauce',sauceSchema);