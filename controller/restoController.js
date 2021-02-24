
import ResModel from "../models/ResModel.js";
class MenuController{
    constructor(){}
    //services
    async createResto(request,response){
        var data = request.body;
        var menu = new RestoModel();
        var result = await menu.createResto(
            data.NIT,
            data.propietario,
            data.street,
            data.telephone,
            data.date_register,
            data.fotolugar
        );
        response.status(200).json(result);
    }
}
export default restoController;