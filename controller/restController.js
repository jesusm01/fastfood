
import restModel from "../models/RestModel.js";
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
}
export default RestController;