
import restModel from "../models/RestModel.js";
class RestController{
    constructor(){}
    //services
    async createResto(request,response){
        var data = request.body;
        var rest = new restModel();
        var result = await rest.createRest( /*esto hace referencia a la class de RestModel*/
            data.NIT,
            data.owner,
            data.direction,
            data.phone,
            data.date_register,
        );
        response.status(200).json(result);
    }
}
export default RestController;