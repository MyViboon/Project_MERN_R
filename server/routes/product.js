const expres = require("express");
const router = expres.Router();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../controllers/product");

router.post("/product", create);
router.get("/product", list);
router.get("/product/:id", read);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

module.exports = router;
