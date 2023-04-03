import Product from './../Model/product';
import ApiFilter from './../Utils/APIFilter';


export const newProduct = async (req, res, next) => {
    try {
        const data = req.body
        if (!data) return res.status(201).json({ message: "NO data provided" })
        const product = await Product.create(data)

        return res.status(201).json(product)
    } catch (error) {
        res.status(201).json(error)
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const resPerPage = 5
        const productCount = await Product.countDocuments()
        const Api = new ApiFilter(Product.find(), req.query).search().filter()

        let product = await Api.data
      
        const filteredProductsCount = product.length
        Api.pagination(resPerPage)
         product = await Api.data.clone()



        res.status(200).json({
            productCount,
            resPerPage,
            filteredProductsCount,
            product
        })
    } catch (error) {
        res.status(404).json({ error: "some thing is wrong" })
    }
}

export const getSingleProduct = async (req, res, next) => {
    try {

        const product = await Product.findById(req.query.id)

        if (!product) {
            res.status(201).json({ error: "product not found" })
        }
        return res.status(201).json(product)
    } catch (error) {
        res.status(201).json(error)
    }
}