const Product = require("../models/ProductModel");

exports.getProductByCategory = async (req, res) => {
    try{
        // fatch category dat from req body
        const { main_category } = req.body;

        // validate category
        if(!main_category){
            return res.status(400).json(
                {
                    success: false,
                    error: "Invalid category",
                    message: "Please provide a valid category!!"
                }
            );
        }

        // find all products in the category
        const products = await Product.find({ main_category: main_category});

        // check if products found
        if(!products){
            return res.status(404).json(
                {
                    success: false,
                    error: "No products found in the given category",
                    message: "No products found!!"
                }
            );
        }

        // return the products
        res.status(200).json(
            {
                success: true,
                message: "Products fetched successfully",
                data: products
            }
        );

    }
    catch(error){
        res.status(500).json(
            {
                success: false,
                error: error.message,
                message: "failed to fatch products by Category!!"
            }
        );
    }
}

