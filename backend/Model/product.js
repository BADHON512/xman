const { default: mongoose } = require("mongoose");



const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Product name"]
    },
    description: {
        type: String,
        required: [true, "Please enter your Product description "]
    },
    price: {
        type: Number,
        required: [true, "Please enter your Product price"]
    },
    images: [
        {
            public_id: {
                type:String
            },

            url: {
                type: String,
            }


        }
    ],

    category: {
        type: String,
        required: [true, "please enter your product category"],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Accessorise",
                "Laptops",
                "Headphones",
                "Sports"
            ],

            message: " Select your category"
        }
    },

    seller: {
        type: String,
        required: [true, "Please enter your product seller"]
    },
    stock: {
        type: String,
        required: [true, "Please enter your stock"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            rating: {
                type: Number
            },
            comment: {
                type: String,
                required: true
            },
            createAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    createAt: {
        type: Date,
        default: Date.now
    }

})

mongoose.models = {}

const Product = mongoose.model("Product", productSchema)

export default Product;