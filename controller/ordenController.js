import OrdenModel from "../models/OrdenModel.js";

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
        var result = await orden.getOrden();
        res.status(200).json({serverResonse:result});
    }

    async updateOrden(req, res) {
        var datos = req.body;
        var id = req.params.id;
        var result = await orden.updateOrden(id,datos);
        res.status(200).json(result);
    }
    async deleteOrden (req,res){
        var id = req.params.id;
        var result = await orden.deleteOrden(id);
        res.status(200).json(result);
    }
}
export default OrdenController; 
