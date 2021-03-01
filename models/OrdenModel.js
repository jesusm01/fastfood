import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
class ordenModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.OrdenSchema = new this.Schema({
            idrestaurant: String,
            idcliente: String,
            lugardeenvio: String,
            pagototal: Number,
            item:[{
                idmenu : String,
                cantidad : Number,
            }],
        });
        this.mymodel = mongoose.model("orden",this.OrdenSchema);
    }
   
     //SERVICIO POST
     createOrden(body){
        var newOrden = new this.mymodel(body);
        return new Promise((resolve,reject)=>{
            newOrden.save().then((docs)=>{
                console.log("Orden registrado");
                resolve(docs);
            });
        });
    }
    
    //SERVICIO GET
    async getOrden(){
        return new Promise((resolve,reject)=>{
            this.mymodel.find({}, (err,docs)=>{
                if (err) {
                    console.log (err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    //SERVICIO UPDATE
    async updateOrden(id, data){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id:id},{$set: data},(err,docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    
    //SERVICIO DELETE
    async deleteOrden(id) {
        return new Promise((resolve, reject) => {
            this.mymodel.remove({ _id: id }).then((err,docs) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    getModel(){
        return this.mymodel
    }
    
    getSchema() {
        return this.UserSchema;
    }
}
export default ordenModel;