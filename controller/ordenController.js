import mongoose from "../connection/connect.js";
import UserModel from "../models/userModel.js";
import RolesModel from "../models/rolesModel.js";
import Sha1 from "sha1";
import empty from "is-empty";
var orden = new OrdenModel();
class OrdenController{
    constructor(){}
    //Servicios Ordenes
    async createOrden (req,res){
        var body = req.body;
        var result = await orden.createOrden(body);
        res.status(200).json({serverResonse: result});
    }

    async getOrden(req, res) {
        var params = req.body;
        console.log(params);
        var limit = 100;
        if(params.limit != null){
            limit = parseInt(params.limit);
        }
        res.status(200).json({serverResonse:result});
    }

    async updateOrden(req, res) {
        var datos = req.body;
        var id = request.params.id;
        if(params.id == null){
            res.status(200).json({ serverResponse: "El parametro ID es necesario" });
            return;
        }
        var changed = ["cantidad", "lugardeenvio", "pagototal"];
        var keys = Object.keys(datos);
        var actualizardato = {};
        for (var i=0; i < keys.length; i++){
            if (changed.indexOf(keys[i]) > -1){
                actualizardato[keys[i]] = datos[keys[i]];
            }
        }
        var result = await USER.updateOrden({_id: params.id}, {$set: actualizardato},(err, docs)=>{
            if (err){
                res.status(200).json({ serverResponse: "Existen problemas en la base de datos"});
                return;
            }
            res.status(200).json({serverResponse: result});
        })
    }

    async updateMenu (req,res){
        var id = req.params.id;
        var result = menu.updateOrden(id);
        if(id == null){
            res.status(200).json({serverResponse: "El id no existe"});
            return;
        }
        var result = await USER.remove({_id: req.body.id})
        res.status(200).json({serverResponse:result}); 
    }
}
export default OrdenController; 
