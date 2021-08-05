const express = require('express');
const router = express.Router();
const userctrl = require("../controllers/user.controller")

router.post("/user/login",userctrl.login)
router.post("/user/register",userctrl.register)


module.exports = router;