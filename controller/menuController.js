
import { request } from "express";
import MenuModel from "../models/MenuModel.js";
var menu = new MenuModel();
class MenuController{
    constructor(){}
    //services
    async createMenu(req,res){
        var body = req.body;
        var result = await menu.createMenu(body);
        res.status(200).json({serverResonse: result});
    }
    async deleteMenu(req,res){
        var id = req.params.id;
        var result = menu.deleteMenu(id);
        res.status(200).json({serverResonse:result});
    }
    async updateMenu (req,res){
        var id = re.params.id;
        var result = menu.updateMenu(id);
        res.status(200).json({serverResponse:result}); 
    }
    async getMenu (req,res){
        var key = request.params.key;
        var keySearch = {};
        keySearch["name"] = key;
        var result = await menu.getMenu(keySearch);
        res.status(200).json({serverResonse:result});
    }
}
export default MenuController;