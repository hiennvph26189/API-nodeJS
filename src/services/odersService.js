import db from "../models/index";
let checkProducts = (id)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            
            let Products = await db.Products.findOne({
                where: {id: id}
            })
            
            if (Products) {
                resolve(true)
            }else{
                
                resolve(false)
            }
        } catch (error) {
            reject(error);
        }
    })
}
let checkUserMember = (id)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            
            let user = await db.Members.findOne({
                where: {id: id}
            })
            if (user) {
                resolve(true)
            }else{
                
                resolve(false)
            }
        } catch (error) {
            reject(error);
        }
    })
}
let handleGetUserCart = (id)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let checkUser = await checkUserMember(id)
            let User = await db.Members.findOne({
                where: {id:id }
            })
            if(checkUser){
                
               let getCart = await db.Carts.findAll({
                    where: {idUser: id,
                        status : 0
                    },
                    order: [
                        ['id', 'ASC'],
                       
                    ]
                })
                
               if(User){
                resolve({
                    errCode: 0,
                    errMessage :"List thành công",
                    Carts :getCart
                })
               }else{
                resolve({
                    errCode: 0,
                    errMessage :"User không tồn tại",
                    
                })
               }
                    
                   


                
            }else{
                resolve({
                    errCode: 1,
                    errMessage:"User không tồn tại",

                })
            }
          
        } catch (error) {
            reject(error);
        }
    })
}
let handleAddCart = (data)=>{

    return new Promise(async(resolve, reject)=>{
        try {
           let idSP = data.idSP;
           let 	idUsers = data.idUser;
           let check = checkProducts(idSP)
           
           let checkUser = checkUserMember(idUsers)
         
                let User = await db.Members.findOne({
                    where: {id:idUsers }
                })
                
                let dataProduct = await db.Products.findOne({
                    where: {id:idSP }
                })
                if(dataProduct&&User){
                    await db.Carts.create({
                        ipSanPham: dataProduct.id,
                        idUser: idUsers,
                        size: data.size,
                        soLuong: 1,
                        thanhTien: dataProduct.sale ==0?dataProduct.giaSanPham:(dataProduct.giaSanPham-(dataProduct.giaSanPham*dataProduct.sale/100)),
                        status: 0
                    })
                    resolve({
                        errCode: 0,
                        errMessage:"Đã thêm sản phẩm vào Giỏ hàng",
    
                    })
                }else{
                    resolve({
                        errCode: 1,
                        errMessage:"Sản phẩm hoặc user không tồn tại"
                    })
                }
               
          
           
            
        
 
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}
let handleDeleteCart = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
         let Cart = await  db.Carts.findOne({
            where: {id: id},
            
            
         });

         if(!Cart){
            resolve({
                errCode: 2,
                errMessage: 'giỏ hàng không tồn tại',
            })
           
         }else{
            await db.Carts.destroy({
                where: {id: id}
             })
             resolve({
                errCode:0,
                errMessage: 'Xóa thành công'+ Cart.id
             })
         }
         
  
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}

let handleUpdateCart = (data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
        
         let Cart = await  db.Carts.findOne({
            where: {id: data.id}, 
         });
         let idSP = Cart.ipSanPham
         let dataProduct = await db.Products.findOne({
            where: {id:idSP }
        })
         
         console.log(Cart);
         if(!Cart){
            resolve({
                errCode: 2,
                errMessage: 'giỏ hàng không tồn tại',
            })
           
         }else{
            await db.Carts.update(
                
                {
                    soLuong: data.soLuong,
                    thanhTien: dataProduct.sale ==0?dataProduct.giaSanPham *data.soLuong:(dataProduct.giaSanPham-(dataProduct.giaSanPham*dataProduct.sale/100))*data.soLuong,
                },
                {where: {id: data.id}}
             )
             resolve({
                errCode:0,
                errMessage: 'update thành công'+ Cart.id
             })
         }
         
  
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}
module.exports  = {
    handleAddCart:handleAddCart,
    handleDeleteCart:handleDeleteCart,
    handleGetUserCart:handleGetUserCart,
    handleUpdateCart:handleUpdateCart
    
}