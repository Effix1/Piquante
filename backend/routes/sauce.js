const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const sauceCtrl = require('../controllers/sauce');
const multer = require('../middleware/multer-config');


router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/', auth, sauceCtrl.getAllSauces);

router.get('/:id', auth, sauceCtrl.getOneSauce);

router.put('/:id', auth, multer, sauceCtrl.modifySauce);

router.delete('/:id', auth, sauceCtrl.deleteSauce);

router.post('/:id/like', auth, sauceCtrl.likeOrNot);

module.exports = router;