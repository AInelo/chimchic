const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const  { 
    createFedaTransaction,
    generateTokenTransaction, 
    callback} = require("../controllers/fedapayTransactionController")

// const { signUp, signIn } = require('../controllers/userController')

router.route('/createtransaction').post(createFedaTransaction);
// router.route('/signin').post(signIn)
router.route('/generate-token').post(generateTokenTransaction);

router.route('/callback').get(callback)

module.exports = router;