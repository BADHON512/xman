import nc from "next-connect"
import ConnectDb from '../../../backend/config/dbConnect';
import { getSingleProduct } from '../../../backend/controllers/productController';




const handel=nc()
ConnectDb()

handel.get(getSingleProduct)



export default handel;