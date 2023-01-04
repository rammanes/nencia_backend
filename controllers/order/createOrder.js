const { Order } = require('../../models/Order');  

const createOrder = async(req, res) => {
    let { 
        productID,
        quantity,
        price,
        totalPrice,
        addressID
    } = req.body;


    let user = req.user._id

    const newOrder = new Order({
        
        orderOwner: user,  
        products:[{
            product: productID,
            quantity,
            price
        }],
        totalPrice,
        address: addressID
    });

    if (!newOrder) return res.status(500).json({ success: false, msg: 'An error has occurred' })

    await newOrder.save();

    return res.status(201).json({
        success: true,
        msg: 'order created',
        newOrder
    });
}

module.exports = createOrder;