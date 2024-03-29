const Sauce = require ('../models/Sauce');
const fs = require('fs');
//*******************************************création sauce**************************************** */
exports.createSauce = (req,res,next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  delete sauceObject._userId;
  const sauce = new Sauce({
    ...sauceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
  .then(()=>{ res.status(201).json({message:'Sauce enregistrée'})})
  .catch(error=> { res.status(400).json({error})})
};

//*******************************************modification sauce**************************************** */
exports.modifySauce = (req,res,next)=>{
  const sauceObject = req.file ? {
    ...JSON.parse(req.body.sauce) ,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {...req.body};
  
  delete sauceObject._userId;
  Sauce.findOne({_id: req.params.id})
  .then((sauce)=>{
    if (sauce.userId != req.auth.userId){
      res.status(401).json({message:'non-autorisé'});
    } else {
      Sauce.updateOne({_id:req.params.id},{...sauceObject, _id: req.params.id})
      .then(()=> res.status(200).json({message: 'Sauce modifié'}))
      .catch(error=> res.status(401).json({error}));
    }
  })
  .catch((error)=>{
    res.status(400).json({error})
  })
};
//*******************************************suppréssion sauce**************************************** */

exports.deleteSauce = (req,res,next)=>{
  Sauce.findOne({_id: req.params.id})
  .then(sauce => {
    if (sauce.userId != req.auth.userId){
      res.status(401).json({message: 'Non autorisé'});
    } else {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, ()=>{
        Sauce.deleteOne({_id:req.params.id})
        .then(()=>{res.status(200).json({message: 'objet suprimé !'})})
        .catch(error => res.status(401).json({error}))
      })
    }
  })
};
//*******************************************sélectioné une sauce**************************************** */
exports.getOneSauce = (req,res,next)=>{
  Sauce.findOne({ _id: req.params.id})
  .then(sauce=> res.status(200).json(sauce))
  .catch(error=> res.status(400).json({error}))
}
//*******************************************retourne le tableau de l'ensemble des sauces**************************************** */
exports.getAllSauces = (req,res,next) => {
  Sauce.find()
  .then(sauce=>res.status(200).json(sauce))
  .catch(error => res.status(400).json({error}))
}

//*******************************************fonction like des sauces ****************************************************** */
exports.likeOrNot = async (req, res, next) => {
  try {
    const sauce = await Sauce.findOne({ _id: req.params.id });
    const userId = req.body.userId;
    const like = req.body.like;
    
    
    if (like === 1 && !sauce.usersLiked.includes(userId)) {
      await Sauce.updateOne(
        { _id: req.params.id },
        {
          $push: { usersLiked: userId },
          $inc: { likes: +1 },
        }
        );
        return res.status(200).json({ message: "Sauce likée !" });
      }
      
      if (like === -1 && !sauce.usersDisliked.includes(userId)) {
        await Sauce.updateOne(
          { _id: req.params.id },
          {
            $push: { usersDisliked: userId },
            $inc: { dislikes: +1 },
          }
          );
          return res.status(200).json({ message: "Sauce dislikée !" });
        }
        
        if (like === 0) {
          if (sauce.usersLiked.includes(userId)) {
            await Sauce.updateOne(
              { _id: req.params.id },
              {
                $pull: { usersLiked: userId },
                $inc: { likes: -1 },
              }
              );
              return res.status(200).json({ message: "Like annulé." });
            }
            
            if (sauce.usersDisliked.includes(userId)) {
              await Sauce.updateOne(
                { _id: req.params.id },
                {
                  $pull: { usersDisliked: userId },
                  $inc: { dislikes: -1 },
                }
                );
                return res.status(200).json({ message: "Dislike annulé." });
              }
            }
            
            return res.status(401).json({ message: "Action non autorisée." });
          } 
          catch (error) {
            return res.status(500).json({ error });
          }
        };
        