import mongoose from "../connection/connect.js";
class OrdenController{
    constructor(){}
    async createOrden (request,response){
        var data = request.body;
        var menu = new OrdenModel();
        var result = await menu.createOrden(
            data.lugarenvio,
            data.pagototal,
        );
        response.status(200).json(result);
    }
}
export default OrdenController;