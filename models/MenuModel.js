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

    async createMenu(menudata){
        var menu = new this.mymodel(menudata);
        return new Promise((resolve,reject)=>{
            menu.save().then((docs)=>{
                if(docs){
                    resolve(docs);
                }
            });
        });
    }
    async deleteMenu(id){
        const result = await this.mymodel.remove({_id:id});
        return (docs);
    }
    async updateMenu(id,updateData){
        const result = await this.mymodel.update({_id:id},{$set:updateData});
        return desult;
    }

    async getMenu(key){
        var filter = {};
        if (key != null){
            filter = key
        }
        const result = await this.mymodel.find(filter).sort(0).limit(10);
        return result;
    }

    getModel(){
        return this.mymodel
    }

    async checkNamedb(name){
        var result = await this.mymodel.find({name:name});
        if(result.length>0){
            return true;
        }
        return false;
    }
}
export default menuModel;