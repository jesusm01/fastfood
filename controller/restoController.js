
import ResModel from "../models/ResModel.js";
class MenuController{
    constructor(){}
    //services
    async createResto(request,response){
        var data = request.body;
        var menu = new RestoModel();
        var result = await menu.createResto(
            data.NIT,
            data.owner,
            data.direction,
            data.phone,
            data.date_register,
        );
        response.status(200).json(result);
    }
}
export default restoController;