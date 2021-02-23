import mongoose from "../connection/connect.js";
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
}