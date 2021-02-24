import nodemailer from 'nodemailer';
import Maker from './makeInvoice.js';

var maker = new Maker();


class Mailer{
    constructor(){

    }
    sendMail(
    ){
        let html = maker.makehtml();
        let mail = 'jesusmoral011096@gmail.com';

        let transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user : 'jesusdevelopermor@gmail.com',
                pass : 'developer_1'
            }
        });
        let mailOption = {
            from: 'FastFood',
            to: mail,
            subject: 'FACTURACION',
            html: html
        };
        transport.sendMail(mailOption,(error,info)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("El correo se envio correctamente");
            }
        });

    }
}
export default Mailer;