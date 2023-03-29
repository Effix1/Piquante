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
    //TABLEAU des identifiant approuvant
    usersLiked:{
        type: [String],
        required:true,
        default:[],
    },
    //TABLEAU des identifiant désapprouvant
    usersDisliked:{
        type: [String],
        required:true,
        default:[],
    }
    
});


module.exports = mongoose.model('Sauce',sauceSchema);