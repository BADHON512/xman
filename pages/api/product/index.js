
import nc from "next-connect"
import ConnectDb from './../../../backend/config/dbConnect';
import { getProduct, newProduct } from './../../../backend/controllers/productController';




const handel=nc()
 ConnectDb()
handel.post(newProduct)
handel.get(getProduct)



export default handel;