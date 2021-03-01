

import Sha1 from "sha1"; 
import { response } from "express";
import isEmpty from "is-empty";
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
        res.json(result);
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
    async upload (request,response){
        var id = request.params.id;
        if(!isEmpty(request.files)){
            var files = request.files;
            var file = files.avatar;
            var date = new Date();
            var token = Sha1(date.toString()).substr(0,5);
            var totalname = `${token}_${file.name}`;
            var totalpath = `/opt/app/files/${totalname}`;
            var result = await file.mv(totalpath,(err)=>{
                if(err){
                    response.status(200).json({response:"error en la carga de imagen"});
                   
                    return;
                    
                }
            });
            /// End upload wok
            var obj = {};
            obj["directorypath"]=totalpath;
            obj["uriAvatar"]= `/showAvatar/${totalname}`;
            obj["default"]=true;
            obj["name"]=totalname;
            var res =  await menu.uploadAvatar(id,obj);
            response.status(200).json(res);
        }
    }
    async getAvatar(request,response){
        var name = request.params.name;
        var respuesta = await menu.findAvatar(name);
        response.sendFile(respuesta);
    }


}
export default MenuController;