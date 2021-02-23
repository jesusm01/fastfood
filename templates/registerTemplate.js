import nodemailer from 'nodemailer';
class Mailer{
    constructor(){

    }
    sendMail(){
        let transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user : 'jesusdevelopermor@gmail.com',
                pass : 'developer_1'
            }
        });
        const name = 'JESUS MORALES PEREZ'
        let mailOption = {
            from: 'FastFood',
            to: 'jesusmoral011096@gmail.com',
            subject: 'FACTURACION',
            html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org=
            /TR/xhtml1/DTD/xhtml1-strict.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
                    <head>
                            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1.0">
                    <title>Epic Games Receipt</title>
                    <style type="text/css">
                            #outlook a{
                                    padding:0;
                            }
                            .ReadMsgBody{
                                    width:100%;
                            }
                            .ExternalClass{
                                    width:100%;
                            }
                            body{
                                    width:100% !important;
                                    min-width:100%;
                                    -webkit-text-size-adjust:100%;
                                    -ms-text-size-adjust:100%;
                                    margin:0;
                                    padding:0;
                            }
                            table,td,a{
                                    -webkit-text-size-adjust:100%;
                                    -ms-text-size-adjust:100%;
                                    margin:0;
                                    padding:0;
                            }
                            body{
                                    margin:0;
                                    padding:0;
                            }
                            img{
                                    outline:none;
                                    text-decoration:none;
                                    border:none;
                                    height:auto;
                                    line-height:100%;
                                    -ms-interpolation-mode:bicubic;
                            }
                            table,table td{
                                    border-collapse:collapse;
                            }
                            a img{
                                    border:none;
                            }
                            a{
                                    color:#6bae7c;
                            }
                            body{
                                    height:100% !important;
                                    margin:0;
                                    padding:0;
                                    background-color:#f1f1f1;
                            }
                            p{
                                    margin:0px 0px !important;
                            }
                            .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{
                                    line-height:100%;
                            }
                            td.expander{
                                    visibility:hidden;
                                    width:0px;
                                    padding:0 !important;
                            }
                            .appleFooter a{
                                    text-decoration:none !important;
                            }
                            .appleLink a{
                                    text-decoration:none !important;
                            }
                            .appleLink1 a{
                                    text-decoration:none !important;
                            }
                            .appleLink2 a{
                                    text-decoration:none !important;
                            }
                            .ExternalClass span[class=ecxoutlook-text]{
                                    font-size:13px !important;
                            }
                            .desktop-hide{
                                    height:0;
                            }
                            .wrapword {
                                    white-space: -moz-pre-wrap !important;  /* Mozilla, since 1999 */
                                    white-space: -webkit-pre-wrap; /*Chrome & Safari */
                                    white-space: -pre-wrap;      /* Opera 4-6 */
                                    white-space: -o-pre-wrap;    /* Opera 7 */
                                    white-space: pre-wrap;       /* css-3 */
                                    word-wrap: break-word;       /* Internet Explorer 5.5+ */
                                    word-break: break-all;
                                    white-space: normal;
                            }
                            @media only screen and (max-width: 600px){
                                    .body{
                                            min-width:100% !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=expand]{
                                            max-height:100% !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=panel]{
                                            width:100% !important;
                                            min-width:0px !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=panel-block]{
                                            width:100% !important;
                                            display:block !important;
                                            min-width:0px !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=panel-padded]{
                                            width:90% !important;
                                            display:block !important;
                                            min-width:0px !important;
                                            padding:0 15px !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=panel-float]{
                                            width:90% !important;
                                            padding:0 15px !important;
                                            display:block !important;
                                            min-width:0px !important;
                                            float:left;
                                            margin-bottom:40px;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=image]{
                                            height:auto !important;
                                            max-width:100% !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    .hide{
                                            display:none !important;
                                            height:0 !important;
                                            font-size:0 !important;
                                            line-height:0 !important;
                                            min-height:0 !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=promo]{
                                            float:left;
                                            width:30% !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=content]{
                                            float:right;
                                            width:65% !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=line]{
                                            height:1px;
                                            background:#dadada;
                                            width:100%;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    [class=expander]{
                                            width:1px !important;
                                    }
                            }
                            @media only screen and (max-width: 600px){
                                    a[href^=tel]{
                                            color:#313131;
                                            text-decoration:none;
                                    }
                            }
                           
                            @media only screen and (max-width: 450px){
                                    [class=mid]{
                                            display:none!important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=desktop-hide]{
                                            height:30px !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=column-block]{
                                            width:100% !important;
                                            display:block !important;
                                            min-width:0px !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=column-padded]{
                                            width:100% !important;
                                            display:block !important;
                                            min-width:0px !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=column-block] div>img{
                                            width:100% !important;
                                            max-width:100% !important;
                                            max-height:auto !important;
                                            height:auto !important;
                                            padding:0 !important;
                                            display:inline !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=column-block] div>a>img{
                                            width:100% !important;
                                            max-width:100% !important;
                                            max-height:auto !important;
                                            height:auto !important;
                                            padding:0 !important;
                                            display:inline !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=three-column-block]{
                                            width:250px !important;
                                            display:inline !important;
                                            min-width:0px !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    [class=content]{
                                            float:none;
                                            width:100% !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    .text-center{
                                    text-align:center!important;
                            }
                            }
                            @media only screen and (max-width: 450px){
                                    td[class=socialIcons]{
                                            display:none !important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    a[class=fullWidth]{
                                            width:100%!important;
                                            text-align:center!important;
                                    }
                            }
                            @media only screen and (max-width: 450px){
                                    img[class=mobileLogo]{
                                            display:inline !important;
                                    }
                            }
                            @media only screen and (max-width: 420px){
                                    [class=content]{
                                            float:none;
                                            width:100% !important;
                                    }
                            }
                            @media only screen and (max-width: 420px){
                                    [class=promo]{
                                            margin-bottom:20px;
                                    }
                            }
                    </style>
                    </head>
            <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color:#f1f1f1;min-width:600px;padding:0;class='body'">
            
            <table class="body" width="100%" style='background-color:"#f1f1f1" min-width:600px' bgcolor="#f1f1f1">
                    <tr>
                            <td class="body" align="center" valign="top" width="100%" style="min-width:600px">
                            <center>
            
            
                            <!-- Start of First Section -->
                                    <table width="100%" style="min-width:600px;" border="0" cellpadding=
                                    ="0" cellspacing="0" class="body" bgcolor="#f1f1f1">
                                            <tr>
                                                    <td align="center">
                                                            <table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" class="body">
                                                                    <tr height="50">
                                                                            <td width="100%" height="50" style="line-height:1px; font-size:1px"></td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table class="panel" border="0" cellpadding="0" cellspacing="0" sty=
                                                                                    le="min-width:600px;">
                                                                                            <tr>
                                                                                                    <td valign="middle" align="center" class="panel">
                                                                                                            <div class="expand" style="max-height:50px">
                                                                                                                    <div>
                                                                                                                            <img align ="none" alt="FastFood" border="0" hspace="0" 
                                                                                                                            src="https://15logo.net/wp-content/uploads/2017/05/fast-food-800x800.jpg"
                                                                                                                            style="max-width:100px;height:auto;display:block;margin:0px;" 
                                                                                                                            title="fastFood" vspace="0" width="100px">
                                                                                                                           
                                                                                                                    </div>
                                                                                                            </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                            <table width="100%" style="min-width:600px;" border="0" cellpadding="0" cellspacing="0" class="body">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="560" class="panel-padded" border="0" cellpadding="0"cellspacing="0" style="min-width:560px">
                                                                                            <tr height="50">
                                                                                                    <td width="100%" height="50" style="line-height:1px; font-size:1px"></td>
                                                                                            </tr>
                                                                                    <tr>
                                                                                            <td width="560" align="center" style="font-family:arial,helvetica,sans-serif; font-weight:bold; mso-line-height-rule: exactly; font-size:50px;
                                                                                            color:#313131; text-align:left; line-height:75px">
            
                                                                                            <!-- LBL_HEADER -->
                                                                                            <div style="text-align:center;line-height:75px">Gracias!</div>
                                                                                            <!-- LBL_HEADER -->
            
                                                                                            </td>
                                                                                    </tr>
                                                                                    <tr height="30">
                                                                                            <td width="100%" height="30" style="line-height:1px; font-size:1px"></td>
                                                                                    </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of First Section -->
            
            
                            <!-- Start of Greetings -->
                                    <table width="100%" style="min-width:600px;" border="0" cellpadding="0" cellspacing="0" class="body" bgcolor="#f1f1f1">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" style="min-width:600px;background-color:#ffffff" 
                                                            bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="body">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="560" class="panel-padded" border="0" cellpadding="0"
                                                                                    cellspacing="0" style="min-width:560px">
                                                                                            <tr height="30">
                                                                                                    <td width="100%" height="30" style="line-height:1px; font-size:1px">
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                    <td width="560" align="center" style="font-family:arial,helvetica,
                                                                                                    sans-serif; mso-line-height-rule: exactly; font-size:16px; color:#313131;
                                                                                                    text-align:left; line-height:24px">
                                                                                                            <div style="text-align:center; line-height:24px">
                                                                                                            <span style="font-size:18px">
                                                                                                            <strong>Hola Jesus:</strong>
                                                                                                            </span>
                                                                                                            <br/>
                                                                                                            Gracias por tu orden en fastFood<br/><br/>
                                                                                                            <span style="font-size:35px; line-height: 45px;"><strong>
                                                                                                            ID de la factura:<br/> F812990070</strong></span><br/>
                                                                                                            <span style="font-size:14px; color:#b2b2b2; line-height:40px">
                                                                                                            ( Guarda una copia de este recibo como referencia. )</span>
                                                                                                            </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                    <tr height="15">
                                                                                            <td width="100%" height="15" style="line-height:1px; font-size:1px"></td>
                                                                                    </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- end of Greetings -->
            
            
                            <!-- Start of Order Information Title -->
                                    <table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" 
                                                            bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff" 
                                                            class="panel">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                    <td style="font-family:arial,helvetica,sans-serif;text-transform:uppercas
                                                                                                    e;mso-line-height-rule: exactly; font-size:14px; color:#b2b2b2; text-align:
                                                                                                    left; line-height:24px">
                                                                                                            <div style="font-family:arial,helvetica,sans-serif; mso-line-height-rule:
                                                                                                            exactly; font-size:14px; color:#b2b2b2; text-align:left;">
                                                                                                                    <strong>INFORMACION DE TU ORDEN:</strong>
                                                                                                            </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="1">
                                                                                                    <td width="100%" height="1" style="line-height:1px; font-size:1px;
                                                                                                    background-color:#e2e3e4"></td>
                                                                                            </tr>
                                                                                    <tr height="15">
                                                                                            <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                    </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of Order Information Title-->
            
            
                            <!-- Start of Two Column Order Info -->
                                    <table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" 
                                                            bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff" class="panel">
                                                                    <tr height="15">
                                                                            <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                    </tr>
                                                            <tr>
                                                                    <td align="center">
                                                                            <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                            <td>
                                                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" 
                                                                                                    width="270" style="min-width:270px;">
                                                                                                            <tr>
                                                                                                                    <td align="center">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:16px; 
                                                                                                                            color:#313131; text-align:left; line-height:24px">
            
                                                                                                                                    <strong>ID del pedido:</strong><br/>
                                                                                                                                    F2102192121216202<br/><br/>
            
                                                                                                                                    <strong>Fecha del pedido:</strong><br/>
                                                                                                                                    de febrero de 2021<br/>
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                            </tr>
                                                                                                    </table>
                                                                                                    <table align="right" border="0" cellpadding="0" cellspacing="0" 
                                                                                                    width="270" style="min-width:270px;">
                                                                                                            <tr>
                                                                                                                    <td align="center">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:16px; 
                                                                                                                            color:#313131; text-align:left; line-height:24px">
            
                                                                                                                                    <strong>Facturado a:</strong><br/>
                                                                                                                                    jesusmoral011096@gmail.com<br/><br/>
            
                                                                                                                                    <strong>Fuente:</strong><br/>
                                                                                                                                    fastFood Commpany<br/>
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                            </tr>
                                                                                                            <tr height="1" class="desktop-hide">
                                                                                                                    <td width="100%" height="1" class="desktop-hide" 
                                                                                                                    style="line-height:1px; font-size:1px"></td>
                                                                                                            </tr>
                                                                                                    </table>
                                                                                            </td>
                                                                                    </tr>
                                                                                    <tr height="15">
                                                                                            <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                    </tr>
                                                                            </table>
                                                                    </td>
                                                            </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of Two Column Order Info -->
            
            
            
                            <!-- Start of Details Information Title -->
                                    <table width="100%" style="min-width:600px" border="0" 
                                    cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" bgcol=
                                                            or="#ffffff" style="min-width:600px;background-color:#ffffff" class="=
                                                            panel">
                                                                    <tr height="15">
                                                                            <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                    <td style="font-family:arial,helvetica,sans-serif;text-transform:
                                                                                                    uppercas=e;mso-line-height-rule: exactly; font-size:14px; 
                                                                                                    color:#b2b2b2; text-align:left; line-height:24px">
                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                            color:#b2b2b2; text-align:left;">
                                                                                                                    <strong>ESTE ES TU PEDIDO:</strong>
                                                                                                            </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="1">
                                                                                                    <td width="100%" height="1" style="line-height:1px; font-size:1px;
                                                                                                    background-color:#e2e3e4"></td>
                                                                                            </tr>
                                                                                    </table>
            
                                                                            <!--column titles -->
                                                                                    <table width="540" border="0" bgcolor="#f1f1f1" cellspacing="0" 
                                                                                    cellpadding="0" style="min-width: 540px; background-color:#f1f1f1">
                                                                                            <tr>
                                                                                                    <td align="center">
                                                                                                            <table width="520" border="0" cellspacing="0" cellpadding="0">
                                                                                                                    <tr height="10">
                                                                                                                            <td width="100%" height="10" style="line-height:1px; font-size:1px;"></td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                            <td align="center">
                                                                                                                                    <table align="left" width="190" border="0" cellspacing="0" cellpadd=
                                                                                                                                    ing="0">
                                                                                                                                            <tr>
                                                                                                                                                    <td>
                                                                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                                                                            color:#313131; text-align:left;">
                                                                                                                                                                    <strong>Descripcion:</strong>
                                                                                                                                                            </div>
                                                                                                                                                    </td>
                                                                                                                                            </tr>
                                                                                                                                    </table>
                                                                                                                                    <table align="left" width="190" border="0" cellspacing="0" cellpadd=
                                                                                                                                    ing="0">
                                                                                                                                            <tr>
                                                                                                                                                    <td>
                                                                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                                                                            color:#313131; text-align:left;">
                                                                                                                                                                    <strong>Distribuidor:</strong>
                                                                                                                                                            </div>
                                                                                                                                                    </td>
                                                                                                                                            </tr>
                                                                                                                                    </table>
                                                                                                                                    <table align="left" width="95" border="0" cellspacing="0" cellpadd=
                                                                                                                                    ing="0">
                                                                                                                                            <tr>
                                                                                                                                                    <td>
                                                                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                                                                            color:#313131; text-align:left;">
                                                                                                                                                                    <strong>Precio/u:</strong>
                                                                                                                                                            </div>
                                                                                                                                                    </td>
                                                                                                                                            </tr>
                                                                                                                                    </table>
                                                                                                                                    <table align="right" width="45" border="0" cellspacing="0" 
                                                                                                                                    cellpadding="0">
                                                                                                                                            <tr>
                                                                                                                                                    <td>
                                                                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                                                                            color:#313131; text-align:right;">
                                                                                                                                                                    <strong>Cant.:</strong>
                                                                                                                                                            </div>
                                                                                                                                                    </td>
                                                                                                                                            </tr>
                                                                                                                                    </table>
                                                                                                                            </td>
                                                                                                                    </tr>
                                                                                                                    <tr height="10">
                                                                                                                            <td width="100%" height="10" style="line-height:1px; font-size:1px;"></td>
                                                                                                                    </tr>
                                                                                                            </table>
                                                                                                    </td>
                                                                                            </tr>
                                                                                    </table>
                                                                            <!-- end of column titles -->
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of Details Information Title-->
            
            
            
                            <!-- Start of 3 Column Details Info -->
                                    <table width="100%" style="min-width:600px" border="0" 
                                    cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" 
                                                            bgcolor="#ffffff" style="min-width:600px;
                                                            background-color:#ffffff" class="panel">
                                                                    <tr height="8">
                                                                            <td width="100%" height="8" style="line-height:1px; font-size:1px;"></td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="520" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                    <td>
                                                                                                    <!-- Start of TO_ORDER_ITEMS loop script -->
                                                                                                    <table align="left" border="0" cellpadding="0" 
                                                                                                    cellspacing="0" width="100%" style="min-width:100%">
                                                                                                            <tr>
                                                                                                                    <td align="center" class="wrapword" width="190" style="min-width:190px;">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:14px; 
                                                                                                                            color:#313131; text-align:left; line-height:20px; 
                                                                                                                            word-break:break-all; padding:5px 5px 5px 0">
                                                                                                                            Pizza Napolitana
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                                    <td align="center" class="wrapword" width="190" style="min-width:190px;">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:14px; 
                                                                                                                            color:#313131; text-align:left; line-height:20px; 
                                                                                                                            word-break:break-all; padding:5px 5px 5px 0">
                                                                                                                            PIZZERIA "EL MANA"
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                                    <td align="center" class="wrapword" width="95" style="min-width:95px;">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:14px; 
                                                                                                                            color:#313131; text-align:left; line-height:20px; 
                                                                                                                            word-break:break-all; padding:5px 0 5px 0">
                                                                                                                            BOB $ 400.00
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                                    <td align="center" class="wrapword" width="45" style="min-width:45px;">
                                                                                                                            <div style="font-family:Ariel, Helvetica, sans-serif; 
                                                                                                                            mso-line-height-rule: exactly; font-size:14px; 
                                                                                                                            color:#313131; text-align:right; line-height:20px; 
                                                                                                                            word-break:break-all; padding:5px 0 5px 0">
                                                                                                                            2
                                                                                                                            </div>
                                                                                                                    </td>
                                                                                                            </tr>
                                                                                                    </table>
                                                                                                    <!-- End of TO_ORDER_ITEMS loop script -->
            
                                                                                                    </td>
                                                                                            </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                                    <tr height="15">
                                                                    <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td align="center">
                                                                    <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr height="1">
                                                                    <td width="100%" height="1" style="line-height:1px; font-size:1px;bac=
                                                                    kground-color:#e2e3e4"></td>
                                                                    </tr>
                                                                    </table>
                                                                    </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of 3 Column Details Info -->
            
            
            
                            <!-- Start of of TAX/TOTAL section -->
                                    <table width="100%" style="min-width:600px" border="0" 
                                    cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" 
                                                            bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff" 
                                                            class="panel">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="520" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr height="15">
                                                                                                    <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                    <td align="center">
                                                                                                            <table align="left" width="412px" border="0" cellpadding="0" cellspacing="0">
                                                                                                                    <tr>
                                                                                                                            <td>
            
                                                                                                                                    <!-- Start TO_PAYMENT_PROCESSOR_FEE script -->
                                                                                                                                    <div style="font-family:Ariel, Helvetica,sans-serif;font-weight:bold;
                                                                                                                                    text-transform:uppercase; mso-line-height-rule: exactly; 
                                                                                                                                    font-size:14px; color:#b2b2b2; text-align:right; line-height:26px;">
                                                                                                                                    TOTAL [ BOB ]:<br/>
                                                                                                                                    </div>
                                                                                                                                    <!-- end TO_PAYMENT_PROCESSOR_FEE script-->
            
                                                                                                                            </td>
                                                                                                                    </tr>
                                                                                                            </table>
                                                                                                    <table align="right" width="80px" border="0" cellpadding="0" cellsp=
                                                                                                    acing="0">
                                                                                                            <tr>
                                                                                                                    <td align="center">
                                                                                                                    <!-- Start TO_PAYMENT_PROCESSOR_FEE script -->
                                                                                                                    <div style="font-family:Ariel, Helvetica,sans-serif;font-weight:bold; 
                                                                                                                    mso-line-height-rule: exactly; font-size:14px; color:#313131;
                                                                                                                    text-align:right; line-height:26px;">
                                                                                                                    $ 800.00<br/>
                                                                                                                    </div>
                                                                                                                    <!-- end TO_PAYMENT_PROCESSOR_FEE script-->
            
                                                                                                                    </td>
                                                                                                            </tr>
                                                                                                    </table>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="15">
                                                                                                    <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                    <td align="center">
                                                                                                            <!-- Start TO_VAT_INCLUDEDscript -->
                                                                                                            <div style="font-family:Ariel, Helvetica,sans-serif; 
                                                                                                            mso-line-height-rule: exactly; font-size:14px; 
                                                                                                            color:#313131; text-align:center; line-height:26px;">
                                                                                                            </div>
                                                                                                            <!-- end TO_VAT_INCLUDED script -->
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="15">
                                                                                                    <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!--End of Tax/toal section -->
            
            
            
                            <!-- start of Payment Details Section title -->
                                    <table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" 
                                                            style="min-width:600px;background-color:#ffffff" class="panel">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                    <td style="font-family:arial,helvetica,sans-serif;text-transform:
                                                                                                    uppercase;mso-line-height-rule: exactly; font-size:14px; 
                                                                                                    color:#b2b2b2; text-align:left; line-height:24px">
                                                                                                            <div style="font-family:arial,helvetica,sans-serif; 
                                                                                                            mso-line-height-rule:exactly; font-size:14px; 
                                                                                                            color:#b2b2b2; text-align:left;">
                                                                                                                    <strong>DETALLES DE PAGO:</strong>
                                                                                                            </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="1">
                                                                                                    <td width="100%" height="1" style="line-height:1px; 
                                                                                                    font-size:1px;background-color:#e2e3e4"></td>
                                                                                            </tr>
                                                                                            <tr height="15">
                                                                                                    <td width="100%" height="15" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- end of payment details section title -->
            
            
            
                            <!-- Start of payment details section and sarl stamp body -->
            
                                    <table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" class="body">
                                            <tr>
                                                    <td align="center">
                                                            <table width="600" border="0" cellpadding="0" cellspacing="0" 
                                                            bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff" class="panel">
                                                                    <tr>
                                                                            <td align="center">
                                                                                    <table width="540" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                    <td align="center">
                                                                                                    <!-- Start of TO_PAYMENT_ITEMS loop script -->
                                                                                                            <table align="left" width="450px" border="0" cellpadding="0" cellspacing="0">
                                                                                                                    <tr>
                                                                                                                            <td>
                                                                                                                                    <div style="font-family:Ariel, Helvetica,sans-serif;
                                                                                                                                    font-weight:bold;text-transform:uppercase; 
                                                                                                                                    mso-line-height-rule: exactly; font-size:14px; 
                                                                                                                                    color:#b2b2b2; text-align:left; line-height:26px;">
                                                                                                                                    PAGADO CON: 
                                                                                                                                    <span style="color:#313131"> [BOB]:</span><br/>
                                                                                                                                    </div>
                                                                                                                            </td>
                                                                                                                    </tr>
                                                                                                            </table>
                                                                                                    <!-- end of TO_PAYMENT_ITEMS loop script -->
            
                                                                                                            <table align="left" width="80px" border="0" cellpadding="0" cellspa=
                                                                                                            cing="0">
                                                                                                                    <tr>
                                                                                                                            <td align="center">
                                                                                                                                    <div style="font-family:Ariel, Helvetica,sans-serif;font-weight:bold; 
                                                                                                                                    mso-line-height-rule: exactly; font-size:14px; color:#313131; 
                                                                                                                                    text-align:right; line-height:26px;">
                                                                                                                                    <!-- Start of TO_PAYMENT_ITEMS amount loop script -->
                                                                                                                                    $ 800<br/>
                                                                                                                                    <!-- end of TO_PAYMENT_ITEMS amount loop script -->
                                                                                                                                    </div>
                                                                                                                            </td>
                                                                                                                    </tr>
                                                                                                            </table>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="20">
                                                                                                    <td width="100%" height="20" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
                                                                                            <tr height="1">
                                                                                                    <td width="100%" height="1" style="line-height:1px; font-size:1px;
                                                                                                    background-color:#e2e3e4"></td>
                                                                                            </tr>
                                                                                            <tr height="20">
                                                                                            <td width="100%" height="20" style="line-height:1px; font-size:1px;"></td>
                                                                                            </tr>
            
                                                                                    <!-- Start of TO_SHOW_REFUND_POLICY script -->
                                                                                            <tr>
                                                                                                    <td align="center">
                                                                                                    <div style="font-family:Ariel, Helvetica,sans-serif; 
                                                                                                    mso-line-height-rule: exactly; font-size:14px; color:#313131; 
                                                                                                    text-align:center; line-height:26px;width:540px;">
                                                                                                    NORMA PODEROSA DE OSMAR MERLOS.
                                                                                                    </div>
                                                                                                    </td>
                                                                                            </tr>
                                                                                            <tr height="20">
                                                                                                    <td width="100%" height="20" style="line-height:1px; font-size:=
                                                                                                    1px;"></td>
                                                                                            </tr>
                                                                                            <tr height="1">
                                                                                                    <td width="100%" height="1" style="line-height:1px; font-size:1=
                                                                                                    px;background-color:#e2e3e4"></td>
                                                                                            </tr>
                                                                                            <tr height="20">
                                                                                                    <td width="100%" height="20" style="line-height:1px; font-size:=
                                                                                                    1px;"></td>
                                                                                            </tr>
                                                                                    <!-- end of TO_SHOW_REFUND_POLICY script -->
            
                                                                                    <!-- Start of TO_ENABLE_WITHDRAWAL_INFO script -->
                                                                                    <!-- Start of TO_ENABLE_WITHDRAWAL_INFO script -->
            
                                                                                    <!-- Start of IS_SHOW_TW_E_INVOICE script -->
                                                                                    <!-- End of IS_SHOW_TW_E_INVOICE script -->
            
                                                                                    <!-- Start of TO_MERCHANT_NAME script -->
                                                                                    <tr>
                                                                                            <td align="center">
                                                                                            <div style="font-family:Ariel, Helvetica,sans-serif; mso-line=
                                                                                            -height-rule: exactly; font-size:14px; color:#313131; text-align:center; li=
                                                                                            ne-height:26px;">
                                                                                            <strong>FastFood Company</strong><br/><br/>
                                                                                            Plaza Avaroa # 127 , Potosí, Bolivia
                                                                                            <br/>
                                                                                            </div>
                                                                                            </td>
                                                                                    </tr>
                                                                                    <!-- End of TO_MERCHANT_NAME script -->
                                                                                    <tr height="50">
                                                                                            <td width="100%" height="50" style="line-height:1px; font-size:1px;"></td>
                                                                                    </tr>
                                                                                    </table>
                                                                            </td>
                                                                    </tr>
                                                            </table>
                                                    </td>
                                            </tr>
                                    </table>
                            <!-- End of payment details and sarl stamp -->
            
                            <!-- start of copyright and Legal -->
                                    <table width="100%" style="min-width:600px;" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                            <td align="center">
                                            <table width="600" class="panel" border="0" cellpadding="0" cellspa=
                                            cing="0" style="min-width:600px">
                                            <tr height="15">
                                            <td width="100%" height="15" style="line-height:1px; font-size:1px">=
                                            </td>
                                            </tr>
                                            <tr>
                                            <td align="center">
                                            <table width="560" class="panel" border="0" cellpadding="0" cellspa=
                                            cing="0" style="min-width:560px">
                                            <tr>
                                            <td align="center">
                                            <div style="font-family: ariel, helvetica, sans-serif;font-weight:b=
                                            old; mso-line-height-rule: exactly; font-size:14px; color:#313131; text-ali=
                                            gn:center; line-height:26px">
                                            
            
            
                                            <!-- End help --><br/>
                                            </div>
                                            </td>
                                            </tr>
                                            <tr height="20">
                                            <td width="100%" height="20" style="line-height:1px; font-size:1px">=
                                            </td>
                                            </tr>
                                            <tr>
                                            <td align="center" class="panel-padded">
                                            <div style="font-family: ariel, helvetica, sans-serif; mso-line-hei=
                                            ght-rule: exactly; font-size:12px; color:#858585; text-align:center; line-h=
                                            eight:20px">
                                                    <p><!-- Start legal -->
                                            &#169; 2021, FastFood Todos los derechos reservados. Epic, FastFood, 
                                            el logotipo de FastFood, FastFood Store y el logo de FastFood Store 
                                            son marcas comerciales o marcas registradas de FastFood Company. 
                                            tanto en Bolivia como en el resto del mundo. 
            
                                            <!-- End legal -->  </p><br/>
                                            
            
                                            <!-- End TOS-->  
                                            
                                            
                                            <!-- Start Privacy Policy -->
                                            
            
                                            <!-- End Privacy Policy --></a>
                                            </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td align="center" class="panel-padded" style="color:#313131">&nbsp;
                                            </tr>
                                            
                                            </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                            </tr>
                                    </table>
                            <!-- End of legal -->
                            </center>
                            </td>
                    </tr>
            </table>
            </body>
            </html>
            
            `
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