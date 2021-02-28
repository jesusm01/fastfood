import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
class ordenModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.OrdenSchema = new this.Schema({
            idmenu: String,
            idrestaurant: String,
            cantidad: Number,
            idcliente: String,
            lugardeenvio:{
                lat: String,
                long: String
            },
            pagototal: Number
        });
        this.mymodel = mongoose.model("orden",this.OrdenSchema);
    }
   
     //SERVICIO POST
     createOrden(idmenu,idrestaurant,cantidad,idcliente, lugardeenvio, pagototal){
        var orden = {
            idmenu,
            idrestaurant,
            cantidad,
            idcliente,
            lugardeenvio,
            pagototal
        };
        var newOrden = new this.mymodel(orden);
        return new Promise((resolve,reject)=>{
            newOrden.save().then((docs)=>{
                console.log("Orden registrado");
                resolve(docs);
            });
        });
    }
    
    //SERVICIO GET
    getOrden(){
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
    updateModel(id, ordenUpdate){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id:id},{$set: ordenUpdate},(err,docs) => {
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
    deleteOrden(id) {
        return new Promise((resolve, reject) => {
            this.mymodel.remove({ _id: id }).then((err, docs) => {
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