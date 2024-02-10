const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common.controllers');
const passport = require('passport')
router.use(passport.authenticate('jwt', { session: false }))
router.post("/home", commonController.home);

module.exports = router