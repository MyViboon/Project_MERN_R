const expres = require("express");
const router = expres.Router();

router.get("/auth", (req, res) => {
  res.send("Hello, Auth");
});

module.exports = router;
