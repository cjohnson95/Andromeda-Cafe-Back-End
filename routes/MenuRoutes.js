const express = require("express");
const router = express.Router();

const {
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  editMenuItem,
  deleteMenuItem,
} = require("../controllers/MenuController");

router.get("/menu", getMenuItems);
router.post("/menu/add", createMenuItem);

router.get("/menu/:id", getMenuItemById);
router.put("/menu/edit/:id", editMenuItem);
router.delete("/menu/delete/:id", deleteMenuItem);

module.exports = router;
