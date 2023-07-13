const expres = require("express");
const { register, login } = require("../controllers/auth");
const router = expres.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
