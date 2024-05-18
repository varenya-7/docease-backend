const {Router} = require("express");
const { handleSignup, handleSignIn } = require("../controllers/patient");

const router = Router();

router.post("/signup",handleSignup)
router.post("/signin",handleSignIn)
module.exports = router