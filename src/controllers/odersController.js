import odersService from "../services/odersService";
let handleOdersProducts = async (req, res) => {
    try {
        message = "OK"
        
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}


module.exports = {
    handleOdersProducts: handleOdersProducts,
  
}