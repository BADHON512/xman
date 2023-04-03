const { default: mongoose } = require("mongoose")

const ConnectDb=()=>{
    try {
        const {connection}=mongoose.connect("mongodb://127.0.0.1:27017/ECOMMERCE")
        console.log(`Connection with  DB with ${connection.host} url `);
    } catch (error) {
        
    }
}

export default ConnectDb;