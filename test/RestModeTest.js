import restModel from "../models/RestModel.js";
var initTest = async() =>{
    var restmodel = new restModel();
    /*
    Test Para CREATE
    */
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date()
        );
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    restmodel.createRest(
        "Test1", 
        "Test2", 
        "Test3", 
        "Test4", 
        "Test5",
        new Date());
    /*menuModel.createMenu("Test_name1",15,"Test_descrip1",new Date());
    menuModel.createMenu("Test_name2",25,"Test_descrip2",new Date());
    menuModel.createMenu("Test_name3",35,"Test_descrip3",new Date());
    menuModel.createMenu("Test_name4",45,"Test_descrip4",new Date());
    */

    /*menuModel.deleteMenu("6029498b3f8be800f2a470f7");


    /*
    MI PART
    

    await resModel.updateResto("67987493874543sdfsd", {name:"Fidel"});

    console.log(await resModel.getResto());
    
     */
    restmodel.deleteRest("6035f4156bdca20266099350");

    console.log(await restmodel.getRest())
};
initTest();