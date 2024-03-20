const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const  { 
    createFedaTransaction,
    generateTokenTransaction } = require("../controllers/fedapayTransactionController")

const { signUp, signIn } = require('../controllers/userController')

router.route('/createtransaction').post(createFedaTransaction)
// router.route('/signin').post(signIn)

module.exports = router;