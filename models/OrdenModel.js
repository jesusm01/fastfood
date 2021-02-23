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
}