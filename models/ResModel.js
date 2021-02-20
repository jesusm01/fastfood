import mongoose from "../connection/connect.js";
class resModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.resSchema = new this.Schema({
            name: String,
            NIT: String,
            propietario: String,
            street: String,
            telephone: String,
            log: Float,
            lat: Float,
            logo: Image,
            date_register: Date,
            fotolugar: image
        });
        this.mymodel = mongoose.model("menu",this.MenuSchema);
    }

    createResto(name,price,description,registerDate){
        var restaurant = {
            name: String,
            NIT: String,
            propietario: String,
            street: String,
            telephone: String,
            log: Float,
            lat: Float,
            logo: Image,
            date_register: Date,
            fotolugar: image
        };
        var newResto = new this.mymodel(resto);
        return new Promise((resolve,reject)=>{
            newResto.save().then((err,docs)=>{
                console.log("menu register successful");
                resolve(docs);
            });
        });
    }

    getResto(){
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

    updateResto(id, restoUpdate){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id:id},{$set: restoUpdate},(err,docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
       
    }

    deleteResto(id) {
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
}
export default ResModel;