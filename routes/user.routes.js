const express = require('express');
const router = express.Router();
const userctrl = require("../controllers/user.controller")


//view
router.get("/user/login",userctrl.getLogin)
router.get("/user/register",userctrl.getRegister);

router.post("/user/login",userctrl.login)
router.post("/user/register",require("../middleware/passwordtohash"),userctrl.register)


module.exports = router;