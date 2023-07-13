const expres = require("express");
const router = expres.Router();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../controllers/product");
const { appCheckVerification } = require("../middleware/appCheck");

router.post("/product", appCheckVerification, create);
router.get("/product", appCheckVerification, list);
router.get("/product/:id", read);
router.put("/product/:id", appCheckVerification, update);
router.delete("/product/:id", appCheckVerification, remove);

module.exports = router;
