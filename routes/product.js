const expres = require("express");
const router = expres.Router();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../controllers/product");
const { auth } = require("../middleware/auth");

router.post("/product", auth, create);
router.get("/product", list);
router.get("/product/:id", read);
router.put("/product/:id", auth, update);
router.delete("/product/:id", auth, remove);

module.exports = router;
