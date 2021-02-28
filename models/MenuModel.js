import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";

class menuModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.MenuSchema = new this.Schema({
            name: {
                type : String
            },
            price: {
                type : Number,
                min : 0,
            },
            description: String,
            registerDate:Date,
        });
        if (modelenum["menus"] == null) {
            this.mymodel = mongoose.model("menus", this.MenuSchema);
            modelenum["menus"] = this.mymodel;
          } 
        else {
            this.mymodel = modelenum["menus"];
          }
        
    }

    async createMenu(id, menudata){
        this.restModel = modelenum["restaurant"];
        return new Promise((resolve,reject)=>{
            this.restModel.update({_id:id},{$push:{menu:menudata}},(err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    
    async getMenu(id){
        this.restModel = modelenum["restaurant"];
        const result = this.restModel.find({_id:id},{menu:1});
        return result;
    }

    async getMenuUnique(id){
        this.restModel = modelenum["restaurant"];
        const result = this.restModel.find({'menu._id': id},{'menu.$':1});
        return result;
    }

    async updateMenu(id,menuUpdate){
        this.restModel = modelenum["restaurant"];
        return new Promise((resolve,reject)=>{
            this.restModel.updateOne(
                {'menu._id':id},
                {$set:{'menu.$':menuUpdate}},
                (err,docs)=>{
                    if(err){
                        console.log(err);
                        resolve(err);
                        return;
                    }
                    resolve(docs);
                });
        });
    }

    async deleteMenu (id){
        this.restModel = modelenum["restaurant"];
        return new Promise((resolve,reject)=>{
            this.restModel.updateOne(
                {},
                {$pull:{menu:{_id:id}}},
                {multi:true}).then((err,docs)=>{
                    if(err){
                        console.log(err);
                        resolve(err);
                        return;
                    }
                    resolve(docs);
                });
        });
    }
}
export default menuModel;