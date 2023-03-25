import db from "../models/index";




let handleGetAllProductsService = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let res = {}
            let products = await db.Products.findAll();
            let categories = await db.Categories.findAll();
            res.errCode = 0;
            res.errMessage = "OK",
            res.products = products;
            res.categories = categories;
            resolve(res)
            
         resolve(res);
 
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}
let handleGetProductsService = (page)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let res = {}
            let limit = 5;
            let offset = 0 + (page - 1) * limit;
            
            let products = await db.Products.findAndCountAll({
                offset: offset,
                limit: limit,
                order: [["id", "DESC"]],
            });
           
            res.products = [...products];
            
            resolve(res)
            
         resolve(res);
 
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}

let AddProductsService = (data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            console.log(data,"adlfalfn")
                if(data){
                    await db.Products.create({
                        tenSp: data.tenSp,
                        hangSx: data.hangSx,
                        giaSanPham: data.giaSanPham,
                        idDanhSach: data.idDanhSach,
                        soLuong: data.soLuong,
                        hot: data.hot,
                        sale: data.sale,
                        mota: data.mota,
                        image: data.image,
                    })
                    resolve({
                        errCode: 0,
                        errMessage: "Ok",
                        data
                        
                    })
                }else{
                    resolve({
                        errCode: 1,
                        errMessage: "Lỗi",
                        data
                        
                    })
                }
                
                
            
           
           
        } catch (error) {
            reject(error)
        }
         
     }) 
}
let deleteProduct = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
         let products = await  db.Products.findOne({
            where: {id: id},
            
            
         });
         if(!products){
            resolve({
                errCode: 2,
                errMessage: 'sản phẩm không tồn tại',
            })
           
         }else{
            await db.Products.destroy({
                where: {id: id}
             })
             resolve({
                errCode:0,
                errMessage: 'Xóa thành công'
             })
         }
         
  
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}
let editProductsService = (data)=>{
    return new Promise(async(resolve, reject)=>{
        console.log(data.dataImput,"adadfadf");
       try {
        
        if(!data.dataImput.id){
            resolve({
                errCode: 2,
                errMessage:"Products không tồn tại"
            })
        }
        let products = await  db.Products.findOne({
            where: {id: data.dataImput.id},
            raw: false

           
         });
         if(products){
                products.tenSp= data.dataImput.tenSp,
                products.hangSx= data.dataImput.hangSx,
                products.giaSanPham= data.dataImput.giaSanPham,
                products.idDanhSach= data.dataImput.idDanhSach,
                products.hot= data.dataImput.hot,
                products.sale= data.dataImput.sale,
                products.soLuong= data.dataImput.soLuong,
                products.mota= data.dataImput.mota,
                products.image= data.dataImput.image,

            await products.save()
           
                resolve({
                    errCode: 0,
                    errMessage:"Sửa thành công"
                })
           
         }else{
            resolve({
                errCode: 1,
                errMessage:"User không tồn tại"
            })
         }

       } catch (error) {
            reject(error);
       }
        
        
    })
}

module.exports  = {
    handleGetAllProductsService: handleGetAllProductsService,
    AddProductsService:AddProductsService,
    deleteProduct:deleteProduct,
    editProductsService:editProductsService,
    handleGetProductsService:handleGetProductsService,
    
    
}