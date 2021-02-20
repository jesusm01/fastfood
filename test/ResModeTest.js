import ResModel from "../models/ResModel.js";
var initTest = async() =>{
    var resModel = new ResModel();
    /*menuModel.createMenu("Test_name1",15,"Test_descrip1",new Date());
    menuModel.createMenu("Test_name2",25,"Test_descrip2",new Date());
    menuModel.createMenu("Test_name3",35,"Test_descrip3",new Date());
    menuModel.createMenu("Test_name4",45,"Test_descrip4",new Date());
    */

    /*menuModel.deleteMenu("6029498b3f8be800f2a470f7");*/

    await resModel.updateResto("67987493874543sdfsd", {name:"Fidel"});

    console.log(await resModel.getResto());
};
initTest();