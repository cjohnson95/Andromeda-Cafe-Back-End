const NewOrder = require('../models/NewOrder');



const createOrder = async(req, res) => {
   
    try {
        const newOrder = await NewOrder.create(req.body);
        console.log('Created New Order:', newOrder);
        res.json(newOrder);
    } catch(error) {
        console.error(error);
        res.status(400).json(err);
    }
};

const getOrder = async(req, res) => {
    try {
        const newOrders =  await NewOrder.find();
        res.json(newOrders);
    } catch(error) {
        console.error(error);
        res.status(400).json({message: "Error finding Order"});
    }
};

const editOrder = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const orderUpdate =  await NewOrder.findByIdAndUpdate(
            id,
            {name},
            {new: true}
        );
        if(!orderUpdate) {
            return res.status(404).json({message: "Order not found"});
        }
        res.json(orderUpdate);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error editing order"});
    }
  
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const removeOrder =  await NewOrder.findByIdAndDelete(id);
        if(!removeOrder) {
            return res.status(404).json({message: "Order not found"});
        }
        res.json({message: "Order deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error deleting order"});
    }

};

module.exports = {
    createOrder,
    getOrder,
    editOrder,
    deleteOrder
}