import { json } from "express";
import Sha1 from "sha1"; 
import restModel from "../models/RestModel.js";
import empty from "is-empty";
var REST = new restModel(); /*solo una instancia*/
class RestController{
    constructor(){}
    //services
    async createResto(request,response){
        var data = request.body;
        var result = await REST.createRest( /*esto hace referencia a la class de RestModel*/
            data.name,
            data.NIT,
            data.owner,
            data.direction,
            data.phone,
            data.date_register,
            //data.map,
        );
        response.status(200).json(result);
    }
    async getResto(request, response){
            var result = await REST.getRest();
            response.status(200).json(result);
    }
    async updateResto(request, response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await REST.updateRest(id, updatedata);
        response.status(200).json(result);
    }

    async deleteResto(request, response){
        var id = request.params.id;
        var result = await REST.deleteRest(id);
        response.status(200).json(result);
    }

    async upload(request,response){
        var id = request.params.id;
        if(!empty(request.files)){
            ///Aqui exisitirian archivos
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
            var res =  await REST.updateAvatar(id,obj);
            response.status(200).json(res);
        }

    }
    async getAvatar(request,response){
        /*
        ///EN CASO DE TENER SOLO 1 SERVIDOIR
        var name = request.params.name;
        response.sendFile("/opt/app/files/" + name);*/
        ///EN CASO DE TENER VARIOS SERVIDORES
        var name = request.params.name;
        var respuesta = await REST.findAvatar(name);
        response.sendFile(respuesta);
    }
    async getRestId(request,response){
        var id = request.params.id;
        var result = await REST.mymodel.findById(id);
        response.json(result);
    }

}
export default RestController;