const express = require('express');
const { postLogin, postSignup } = require('./controller');

const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);

module.exports = router;
