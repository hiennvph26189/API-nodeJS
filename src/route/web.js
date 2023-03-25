import express from "express";
import multer from 'multer';
import path from 'path';
import homcontroller from "../controllers/homcontroller";
import userController from "../controllers/userController";
import categoryController from "../controllers/categoryController";
import productController from "../controllers/productController";
import odersController from "../controllers/odersController";
import memberController from "../controllers/memberController";
import appRoot from "app-root-path"
import  uploadCloud from '../config/uploadFile'
let router = express.Router();


let initWebRouter = (app)=>{
    router.get('/',(req, res)=>{
        return res.send('adafd')
    }) 

    // API trên web quản trị
    router.get('/homeCOntroller',homcontroller.getHomePage)
    router.get('/crud',homcontroller.getCRUD);
    router.post('/post-crud',homcontroller.postCRUD);
    router.get('/get-crud',homcontroller.getListCRUD);
    router.get('/edit-crud',homcontroller.getEditCRUD);
    router.post('/post-edit-crud',homcontroller.getPutEditCRUD);
    router.get('/delete-crud',homcontroller.getDeleteCRUD);


    router.post('/api/login',userController.handleLogin);
    router.get('/api/get-all-users',userController.handleGetAllUsers);
    router.post('/api/creat-new-users',userController.handleCreateNewUsers);
    router.put('/api/edit-users',userController.handleEditUsers);
    router.delete('/api/delete-users',userController.handleDeleteUsers);
    router.get('/roles',userController.handleRoleID);

    router.get('/api/get-all-categories',categoryController.handleGetAllcategories);
    router.post('/api/add-categories',categoryController.handleAddCategories);
    router.put('/api/edit-categories',categoryController.handleEditCategories);
    router.delete('/api/delete-categories',categoryController.handleDeleteCategory);

    

    router.get('/api/get-all-product',productController.handleGetAllProducts);
    router.post('/api/add-product',productController.handleAddProducts);
    router.delete('/api/delete-product',productController.handleDeleteProduct);
    router.put('/api/edit-product',productController.handleEditProduct);
    router.post('/api/get-product',productController.handleGetProduct);
    router.post('/api/post-image-product',uploadCloud.single('image'),productController.handleUploadFileProduct);
    router.post('/api/delete-image-product',productController.handleDeleteFileProduct);

   
    router.post('/api/oders-product',odersController.handleOdersProducts);
    // API Members webADmin
    router.get('/api/get-all-members',memberController.handleGetAllMenbers);
    router.put('/api/edit-members',memberController.handleEditMenbers);
    router.post('/api/naptien-members',memberController.handleNapTienMenbers);

    // API trên app điện thoại
    router.post('/api/add-member',memberController.handleAddMembers);
    router.post('/api/login-member',memberController.handleLoginMember);
    router.post('/api/profile-member',memberController.handleProfileMember);
    router.put('/api/edit-profile-member',memberController.handleEditProfileMember);

    return app.use("/",router)
}
module.exports = initWebRouter