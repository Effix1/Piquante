const mongoose = require ('mongoose');


const sauceSchema = mongoose.Schema({
    userId:{type:String,required:true},//identifiant mogodb
    name:{type:String,required:true},//nom de la sauce
    manufacturer:{type:String,required:true},//fabricant de la sauce
    description:{type:String,required:true},//description de la sauce
    mainPepper:{type:String,required:true},//le principal ingrédient épicés de la sauce
    imageUrl:{type:String,required:true},//image de la sauce dela sauce telechargé plus tard
    heat:{type:Number,required:true},//nombre entre 1 et 10 decrivant la sauce
    likes:{type:Number,required:true},//nombre d'utilisateur qui aiment la sauce
    dislikes:{type:Number,required:true},//nombre d'utilisateur qui desaprouve
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