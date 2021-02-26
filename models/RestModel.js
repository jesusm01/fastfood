import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import RolesModel from "./rolesModel.js";
class restModel{
    constructor(){
        var roles = new RolesModel();
        this.Schema = mongoose.Schema;
        this.restSchema = new this.Schema({
            /*name: String,
            NIT: String,
            owner: String,
            direction: String,
            phone: String,  
            date_register: Date,*/
            name:{
                type: String,
                validate: {
                 validator: (value) => {
                     return /^[A-Za-z0-9\s]+$/.test(value);
                 },
                 message: (props) => 'This Restaurant name ${props.value} is invalid', 
                 },
            },
            NIT: {
                type: String,
                validate: {
                 validator: (value) => {
                     return /^[0-9,$]*$/.test(value);
                 },
                 message: (props) => 'This NIT ${props.value} is invalid', 
                 },               
            },
            owner: {
                type: String,
                validate: {
                 validator: (value) => {
                     return /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(value);
                 },
                 message: (props) => 'This name ${props.value} is invalid', 
                 },
            },
            direction: {
                type: String,
                validate: {
                 validator: (value) => {
                     return /^[A-Za-z0-9\s]+$/.test(value);
                 },
                 message: (props) => 'This Direction ${props.value} is invalid', 
                 },
                
            },
            phone: {
                type: String,
                validate: {
                 validator: (value) => {
                     return  /^[0-9,$]*$/.test(value);
                 },
                 message: (props) => 'This Number phone ${props.value} is invalid', 
                 },
            },
            date_register: Date,

            roles: [roles.getSchema()],
        });
        if (modelenum["restos"] == null) {
            this.mymodel = mongoose.model("restos", this.restSchema);
            modelenum["restos"] = this.mymodel;
          } else {
            this.mymodel = modelenum["restos"];
        }
        /*this.mymodel = mongoose.model("restos",this.restSchema);*/
    }
    createRest(name, NIT, owner, direction, phone, date_register){
        var Rest = {
            name,
            NIT,
            owner,
            direction,
            phone,
            date_register,
        };
        var newRest = new this.mymodel(Rest);
        //aqui viene la validacion:
        var error = newRest.validateSync();
        return new Promise((resolve,reject)=>{
            if(error){
                resolve(error);
                return;
           }
            newRest.save().then((docs)=>{
                console.log("Rest register successful");
                resolve(docs);
            });
        });
    }
    getRest(){
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

    updateRest(id, restUpdate){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id: id}, {$set: restUpdate}, (err,docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });    
    }
    deleteRest(id) {
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
    getSchema(){
        return this.restSchema;
    }
}
export default restModel;