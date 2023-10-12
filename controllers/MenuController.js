const MenuItem = require("../models/MenuItem");

const createMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    console.log("Created menu item:", menuItem);
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(400).json(err);
  }
};

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error finding Menu Items" });
  }
};

const getMenuItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const menuItemId = await MenuItem.findById(id);
    if (!menuItemId) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(menuItemId);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error finding Menu Items" });
  }
};

const editMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const menuItemUpdate = await MenuItem.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    if (!menuItemUpdate) {
      return res.status(404).json({ message: "Menu Item not found" });
    }
    res.json(menuItemUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error editing Menu Item" });
  }
};

const deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    const removeMenuItem = await MenuItem.findByIdAndDelete(id);
    if (!removeMenuItem) {
      return res.status(404).json({ message: "Menu Item not found" });
    }
    res.json({ message: "Menu Item deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting Menu Item" });
  }
};

module.exports = {
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  editMenuItem,
  deleteMenuItem,
};
