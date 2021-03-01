import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import RolesModel from "./rolesModel.js";
import MenuModel from "./MenuModel.js";

var menuModel = new MenuModel();
class restModel{
    constructor(){
        var roles = new RolesModel();
        this.Schema = mongoose.Schema;
        this.restSchema = new this.Schema({

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
                     return /[0-9]{12}/g.test(value);
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
            menu:[menuModel.MenuSchema],
            fotos:[
                {
                    directorypath: String,  //ruta para HHTP
                    uriAvatar: String,
                    name:String,      // ruta para nuestro servidor
                    default:Boolean
                }
            ],
            date_register: Date,
        });
        if (modelenum["restaurant"] == null) {
            this.mymodel = mongoose.model("restaurant", this.restSchema);
            modelenum["restaurant"] = this.mymodel;
          } else {
            this.mymodel = modelenum["restaurant"];
        }
        /*this.mymodel = mongoose.model("restaurant",this.restSchema);*/
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
    

    async updateAvatar(id,data){
        var result = await this.mymodel.update(
            {_id:id},
            {$push:{fotos:data}});
        return result;
    }

    async findAvatar(name){
        /*var avatarImages = await this.mymodel.find({"fotos.name":name});
        if (avatarImages != null && avatarImages.length > 0){
            var avatarImage = avatarImages[0];
            var resultdata = avatarImage.fotos.filter((item)=>{
                if(item.name == name) {
                    return true;
                }
                return false;
            });
            return resultdata;
        }
        return {};*/

        var avatarImage = await this.mymodel.find({"fotos.name":name},{"fotos.$":1});
        console.log(typeof(avatarImage));
        var resultado = avatarImage[0].fotos[0].directorypath;
        return resultado;
    }

    getModel(){
        return this.mymodel
    }
    getSchema(){
        return this.restSchema;
    }
}
export default restModel;