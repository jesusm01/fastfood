import { response } from "express";
import MenuModel from "../models/MenuModel.js";
import UserModel from "../models/userModel.js";
class MenuController{
    constructor(){}
    //services
    async createMenu (request,response){
        var data = request.body;
        var menu = new MenuModel();
        var result = await menu.createMenu(
            data.name,
            data.price,
            data.description,
            data.registerDate
        );
        response.status(200).json(result);
    }

    async getMenu (request,respons){
        var result = await MenuModel.getMenu();
        response.status(200).json(result);
    }
    async updateMenu(request,response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await menu.updateModel(id, updatedata);
        response.status(200).json(result);
    }
}
export default MenuController;