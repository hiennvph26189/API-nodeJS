import odersService from "../services/odersService";
let handleOdersProducts = async (req, res) => {
    try {
        let data = req.body
        console.log(data);
        let message = await  odersService.handleAddCart(data)
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}
let handleGetUserCartProducts = async (req, res) => {
    try {
        
        let id = req.query.id
        
        let message = await  odersService.handleGetUserCart(id)
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}
let handleDeleteCartProducts = async (req, res) => {
    try {
        let id = req.query.id
        let message = await  odersService.handleDeleteCart(id)
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}
let handleUpdateCartProducts = async (req, res) => {
    try {
        let data = req.body
        console.log(data)
        let message = await  odersService.handleUpdateCart(data)
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}
let handleOrserCartProducts = async (req, res) => {
    try {
        let data = req.body
        console.log(data)
        let message = await  odersService.handleCreateOrderCart(data)
        return res.status(200).json(message)
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     } 
}
let handleLichSuCartProducts = async (req, res) => {
    try {
        let id = req.query.id
        console.log(data)
        let message = await  odersService.handleLichSuOrderCart(id)
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
    handleDeleteCartProducts:handleDeleteCartProducts,
    handleGetUserCartProducts:handleGetUserCartProducts,
    handleUpdateCartProducts:handleUpdateCartProducts,
    handleOrserCartProducts:handleOrserCartProducts,
    handleLichSuCartProducts:handleLichSuCartProducts
  
}