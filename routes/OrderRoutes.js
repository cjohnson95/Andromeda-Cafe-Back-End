const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrder,
  editOrder,
  deleteOrder,
} = require("../controllers/NewOrderController");

router.get("/order", getOrder);
router.post("/order/add", createOrder);

// router.get("/menu/:id", getMenuItemById);
router.put("/order/edit/:id", editOrder);
router.delete("/order/delete/:id", deleteOrder);

module.exports = router;
