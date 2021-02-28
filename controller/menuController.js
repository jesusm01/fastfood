

import { response } from "express";
import MenuModel from "../models/MenuModel.js";
var menu = new MenuModel();
class MenuController{
    constructor(){}
    //services
    async createMenu(req,res){
        var id = req.params.id;
        var body = req.body;
        var result = await menu.createMenu(id,body);
        res.status(200).json({serverResonse: result});
    }
    async deleteMenu(req,res){
        var id = req.params.id;
        var result = menu.deleteMenu(id);
        res.status(200).json({serverResonse:result});
    }
    async updateMenu (req,res){
        var id = req.params.id;
        var result = menu.updateMenu(id);
        res.status(200).json({serverResponse:result}); 
    }
    async getMenu (req,res){
        var id = req.params.id;
        var result = await menu.getMenu(id);
        res.status(200).json({serverResonse:result});
    }
    async getMenuUnique(req,res){
        var id = req.params.id;
        var result = await menu.getMenuUnique(id);
        res.status(200).json({serverResponse:result});

    }
    async updateMenu (req,res){
        var id = req.params.id;
        var dataUpdate = req.body;
        var result = await menu.updateMenu(id,dataUpdate);
        res.status(200).json(result);
    }
}
export default MenuController;