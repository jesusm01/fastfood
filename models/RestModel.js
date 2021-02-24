import mongoose from "../connection/connect.js";

class restModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.restSchema = new this.Schema({
            name: String,
            NIT: String,
            owner: String,
            direction: String,
            phone: String,  
            date_register: Date,
        });
        this.mymodel = mongoose.model("restos",this.restSchema);
    }
    createRest(name, NIT, owner, direction, phone, date_register){
        var Rest = {
            name,
            NIT,
            owner,
            direction,
            phone,
            date_register
        };
        var newRest = new this.mymodel(Rest);
        return new Promise((resolve,reject)=>{
            newRest.save().then((err,docs)=>{
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
            this.mymodel.update({ _id:id},{$set: restUpdate},(err,docs) => {
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
}
export default restModel;