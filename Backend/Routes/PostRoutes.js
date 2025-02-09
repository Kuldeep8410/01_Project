const express = require('express');
const router = express.Router();

const signupctrl  = require('../Controllers/SignCtrl');
const signUpValidation = require('../Middlewares/SignAndLoginMdle');

router.post('/signup',signUpValidation, signupctrl);
module.exports = router;