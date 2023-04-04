
import db from "../models/index";

let handleGetAllNews = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let res = {}
            let news = await db.News.findAll();
            res.errCode = 0;
            res.errMessage = "OK",
            res.data = news;
            resolve(res)
      
         resolve(res);
 
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}
let AddNewsService = (data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
                await db.News.create({
                    tieuDe: data.tieuDe,
                    anhTinTuc: data.anhTinTuc,
                    moTa: data.moTa,
                })
                resolve({
                    errCode: 0,
                    errMessage: "Ok",
                    data
                    
                })
            
           
           
        } catch (error) {
            reject(error)
        }
         
     }) 
}
module.exports = {
    handleGetAllNews:handleGetAllNews,
    AddNewsService:AddNewsService
}