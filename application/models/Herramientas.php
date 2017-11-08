<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Herramientas extends  CI_Model{

    function __construct()
    {
        parent::__construct();

    }


    public function encryptEmailContraseña($email, $contraseña)
    {
        $sha_pass_hash_email = strtoupper(bin2hex(strrev(hex2bin(strtoupper(hash("sha256",strtoupper(hash("sha256", strtoupper($email)).":".strtoupper($contraseña))))))));
        return $sha_pass_hash_email; //retorna email:contraseña
    }

    public function encryptUsuarioContraseña($username, $contraseña)
    {
        if(!is_string($username)) { $username = ""; }
        if(!is_string($contraseña)) { $contraseña = ""; }
        $sha_pass_hash = sha1(strtoupper($username).':'.strtoupper($contraseña));
        return strtoupper($sha_pass_hash);   //retorna usuario:contraseña
    }

    public function validarEmail($arg){
        if (filter_var($arg, FILTER_VALIDATE_EMAIL)) {
            return true;
        }
        else{
            return false;
        }
    }

    function getRealIP()
    {
        if (isset($_SERVER["HTTP_CLIENT_IP"]))
        {
            return $_SERVER["HTTP_CLIENT_IP"];
        }
        elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
        {
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        }
        elseif (isset($_SERVER["HTTP_X_FORWARDED"]))
        {
            return $_SERVER["HTTP_X_FORWARDED"];
        }
        elseif (isset($_SERVER["HTTP_FORWARDED_FOR"]))
        {
            return $_SERVER["HTTP_FORWARDED_FOR"];
        }
        elseif (isset($_SERVER["HTTP_FORWARDED"]))
        {
            return $_SERVER["HTTP_FORWARDED"];
        }
        else
        {
            return $_SERVER["REMOTE_ADDR"];
        }
    }

    function smtpEmailC()
    {
        $configGmail = array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.gmail.com',
            'smtp_port' => 587,
            'smtp_user' => "wowzeros2@gmail.com",
            'smtp_pass' => "1997102007wae",
            'mailtype' => 'html',
            'charset' => 'utf-8',
            'newline' => "\r\n"
        );
        return $configGmail;
    }

    function generarCodigo(){
        $longitud = 6;
        $key = '';
        $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
        $max = strlen($pattern) - 1;
        for ($i = 0; $i < $longitud; $i++) $key .= $pattern{mt_rand(0, $max)};
        return $key;
    }

    function detect()
    {
        $browser=array("IE","OPERA","MOZILLA","NETSCAPE","FIREFOX","SAFARI","CHROME");
        $os=array("WIN","MAC","LINUX");

        # definimos unos valores por defecto para el navegador y el sistema operativo
        $info['browser'] = "OTHER";
        $info['os'] = "OTHER";

        # buscamos el navegador con su sistema operativo
        foreach($browser as $parent)
        {
            $s = strpos(strtoupper($_SERVER['HTTP_USER_AGENT']), $parent);
            $f = $s + strlen($parent);
            $version = substr($_SERVER['HTTP_USER_AGENT'], $f, 15);
            $version = preg_replace('/[^0-9,.]/','',$version);
            if ($s)
            {
                $info['browser'] = $parent;
                $info['version'] = $version;
            }
        }

        # obtenemos el sistema operativo
        foreach($os as $val)
        {
            if (strpos(strtoupper($_SERVER['HTTP_USER_AGENT']),$val)!==false)
                $info['os'] = $val;
        }

        # devolvemos el array de valores
        return $info;
    }

    function notificarIngreso($idUsuario,$nombres,$apellidos,$correoElectronico,$ipAntigua, $ipNueva){


        $codigoCerrarSesion = $this->generarCodigo();
        $this->email->initialize($this->smtpEmailC());
        $this->email->from('wowzeros2@gmail.com');
        $this->email->to("$correoElectronico");
        $this->email->subject('Alerta de seguridad');
        $this->email->message('
        
        
        <html>

<head>

<style>
.footer {
	    position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
  }
  
  .header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
  }
  .container-fluid {
      padding-top: 5px;
      padding-bottom: 5px;
  }
  
  .bg-4 { 
      background-color: #03b4c8;
      color: #ffffff;
  }
  
  .text-center{
    text-align: center;
  }
  
  a:link   
{   
 text-decoration:none;   
}   

.submit {
    background-color: #03b4c8;
    border: none;
    color: white;
    padding: 8px 8px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
	font-family:Roboto-Regular,Helvetica,Arial,sans-serif;
	color:#ffffff;
	font-weight:400;
	line-height:20px;
    font-size:13px;
	text-decoration:none;
}
  
</style>
</head>


<table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr height="32px"></tr>
        <tr align="center">
            <td>
                <table border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px;max-width:600px;min-width:220px">
                    <tbody>
                        <tr>
                            <td>
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="direction:ltr;padding-bottom:7px">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left"><img width="92" height="32" src="https://image.ibb.co/cG1od6/loeeh.pngloeeh.png" style="width:92px;height:32px" class="CToWUd"></td>
                                                            <td align="right" style="font-family:Roboto-Light,Helvetica,Arial,sans-serif">'.$nombres.' '.$apellidos.'</td>
                                                            <td align="right" width="35"><img width="28" height="28" style="width:28px;height:28px;border-radius:50%" src="https://ci6.googleusercontent.com/proxy/_ehxLExCa2FPeTKuNVAgMUxyx7YBxMq8-qickdiS6h0GI2UChu_KZURQgNm3-OuvpRjUg26eTgHNny2H1gs6Pzzy81YKOLOVHegzDqMfEMQVAWTuszLuOL68hqTN=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" class="CToWUd"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/6NxNAmLKGq1e8ePcitdSiE-X-g8kwo2ATcZjIpFFPtHwgl7s6aanLDIF9dsO8K_I6mvnuTEPEOBsA1ofqn8y7FrVN0Arjzpe7m-ybWUmwNHmDkVVjLyV=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-nw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/eketyJkGVxhK6Z5kXJPMvc_xp4ewMG0-rRub0qdMfuT8kRsGDhdrztbZqOttWDJvnFldtuGk_LaoOSBBNNxxI0PtZrvXy1Kt39bkZKAr5Fs0Qt0Puw=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-n.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/xXtFP3fp-NWW8Fb-jpdgVdKyl14_H1kufMnB0ms_EbTo-TtcXRkIcX0LK69J6deIRi7KtH9BXAlSZ709fcAywLyu6uHSgFLQ8kg3vVUZHZ310P_EbOIQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-ne.png\') top right no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/jx-kL5P_JYf7EHBI57k0jTf0wQfWYZB9kjzqrzIUKgvE3oSR3AwtIrijgMsn2DzciTsgxv2g5Rs9DjUo3-CCepVGCikhcSsa_4WWHymP1-RbfK9Uxg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                            <td>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;padding-left:16px;padding-right:16px;border-bottom:thin solid #f0f0f0;padding-bottom:30px;padding-top:32px;font-size:25px;text-align:center;word-break:break-word">
                                                    <div class="m_-1758319509973513776v2sp">Alguien accedió a tu cuenta en un nuevo&nbsp;dispositivo<br><a style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;font-family:Roboto-Light,Helvetica,Arial,sans-serif;color:#757575;font-size:16px;line-height:1.8">' . $correoElectronico . '</a></div>
                                               
                                                </div>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.6;padding-left:16px;padding-right:16px;padding-bottom:32px;padding-top:24px">
                                                    <div class="m_-1758319509973513776v2sp">Alguien acaba de acceder a tu cuenta de practict desde un nuevo dispositivo. Te enviamos este correo electrónico para asegurarnos de que hayas sido tú.
                                                     <br><br>IP Antigua: '.$ipAntigua.'
                                                     <br>IP Nuevo Ingreso: '.$ipNueva.'
                                                     <br>Sistema operativo: 
                                                     <br>Navegador 
                                                                                                       
                                                        <div style="padding-top:24px" align="center">
															<a class="submit" href="http://practict.simpleteamgroup.com/ControlSesiones/controlCerrarSesionCorreo?idUsuario='.$idUsuario.'&correoElectronico='.$correoElectronico.'&codigoCerrarSesion='.$codigoCerrarSesion.'" class="submit">Cerrar Sesiones Activas</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/v4PZGPA_yWl9Ao0I9PMW-iusp_SIUwORiMYopVopB7tHHf5JrzCM8wjpZjUH8PCy1nP9bvypqYynsjnbqBKKV8fKuQyziI02mZiGELaNneCrxgcZ7g=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci4.googleusercontent.com/proxy/NmRFBb5WaOipoP4-CA_Wr23mwv5paJ8NxNkn-IFUdRudCxS35ItH90_LXh3XIbUzaYpYQ5GQCuxTn9ZNxP3TiEm4kraOE1ViKAaPcxDgFyGhLXwm7Vym=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci3.googleusercontent.com/proxy/NiBXJ6NLEKMReFj7Q_woMq9t-SpwXXuP1gUMLt5ayWo38pcgPoMyntxtn7uSckxGL8db40em6KTuoVGr5EvfgiVACFYRGWsD2e8zeNZ08VEMzxdCnA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/Jyaq0B-T749z8QKm69foqx_50a92MjjSAeEkYA-z-7fa8yaIhCynKRmprO2-kCbtU-MBzXiYpWgX4rfuXWbD7zs0-TuMTr0MDBK7QWNhj0rX6boEmYWM=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style="text-align:left">
                                                    <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;padding-top:10px;font-size:10px;line-height:18px">
                                                        <div>Te enviamos este correo electrónico para notificarte acerca de la seguridad de tu cuenta.</div>
                                                         <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;direction:ltr;font-size:10px;line-height:18px">© 2017 SimpleTeamGroup Inc., <a href="https://simpleteamgroup.com/" target="_blank">Contactanos</a></div>
                                                    </div>
                                                    <div style="display:none!important;max-height:0px;max-width:0px">et:31</div>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr height="32px"></tr>
    </tbody>
</table>

<footer class="footer container-fluid bg-4 text-center">
			<p class="text-center">Copyright © 2017<a href="https://simpleteamgroup.com/"> SimpleTeamGroup</a></p> 
</footer>

</html>
        
        
        
        ');

            if($this->email->send()){
                $this->db->query('INSERT INTO controlCerrarSesionCorreo(idUsuario,correoElectronico,codigoCerrarSesion) VALUES("'.$idUsuario.'", "'.$correoElectronico.'" ,"'.$codigoCerrarSesion.'"); ');
            }
        return $this->email->print_debugger();
    }

    function enviarNuevaContraseña($nombres,$apellidos,$correoElectronico,$claveDeAcceso,$cambioClaveDeAcceso){
        $this->email->initialize($this->smtpEmailC());
        $this->email->from('wowzeros2@gmail.com');
        $this->email->to($correoElectronico);
        $this->email->subject('Cambio de contraseña');
        $this->email->message('
        
          
        <html>

<head>

<style>
.footer {
	    position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
  }
  
  .header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
  }
  .container-fluid {
      padding-top: 5px;
      padding-bottom: 5px;
  }
  
  .bg-4 { 
      background-color: #03b4c8;
      color: #ffffff;
  }
  
  .text-center{
    text-align: center;
  }
  
  a:link   
{   
 text-decoration:none;   
}   

.submit {
    background-color: #03b4c8;
    border: none;
    color: white;
    padding: 8px 8px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
	font-family:Roboto-Regular,Helvetica,Arial,sans-serif;
	color:#ffffff;
	font-weight:400;
	line-height:20px;
    font-size:13px;
	text-decoration:none;
}
  
</style>
</head>


<table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr height="32px"></tr>
        <tr align="center">
            <td>
                <table border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px;max-width:600px;min-width:220px">
                    <tbody>
                        <tr>
                            <td>
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="direction:ltr;padding-bottom:7px">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left"><img width="92" height="32" src="https://image.ibb.co/cG1od6/loeeh.pngloeeh.png" style="width:92px;height:32px" class="CToWUd"></td>
                                                            <td align="right" style="font-family:Roboto-Light,Helvetica,Arial,sans-serif">'.$nombres.' '.$apellidos.'</td>
                                                            <td align="right" width="35"><img width="28" height="28" style="width:28px;height:28px;border-radius:50%" src="https://ci6.googleusercontent.com/proxy/_ehxLExCa2FPeTKuNVAgMUxyx7YBxMq8-qickdiS6h0GI2UChu_KZURQgNm3-OuvpRjUg26eTgHNny2H1gs6Pzzy81YKOLOVHegzDqMfEMQVAWTuszLuOL68hqTN=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" class="CToWUd"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/6NxNAmLKGq1e8ePcitdSiE-X-g8kwo2ATcZjIpFFPtHwgl7s6aanLDIF9dsO8K_I6mvnuTEPEOBsA1ofqn8y7FrVN0Arjzpe7m-ybWUmwNHmDkVVjLyV=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-nw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/eketyJkGVxhK6Z5kXJPMvc_xp4ewMG0-rRub0qdMfuT8kRsGDhdrztbZqOttWDJvnFldtuGk_LaoOSBBNNxxI0PtZrvXy1Kt39bkZKAr5Fs0Qt0Puw=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-n.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/xXtFP3fp-NWW8Fb-jpdgVdKyl14_H1kufMnB0ms_EbTo-TtcXRkIcX0LK69J6deIRi7KtH9BXAlSZ709fcAywLyu6uHSgFLQ8kg3vVUZHZ310P_EbOIQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-ne.png\') top right no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/jx-kL5P_JYf7EHBI57k0jTf0wQfWYZB9kjzqrzIUKgvE3oSR3AwtIrijgMsn2DzciTsgxv2g5Rs9DjUo3-CCepVGCikhcSsa_4WWHymP1-RbfK9Uxg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                            <td>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;padding-left:16px;padding-right:16px;border-bottom:thin solid #f0f0f0;padding-bottom:30px;padding-top:32px;font-size:25px;text-align:center;word-break:break-word">
                                                    <div class="m_-1758319509973513776v2sp">Solicitud de nueva contraseña &nbsp;<br><a style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;font-family:Roboto-Light,Helvetica,Arial,sans-serif;color:#757575;font-size:16px;line-height:1.8">' . $correoElectronico . '</a></div>
                                               
                                                </div>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.6;padding-left:16px;padding-right:16px;padding-bottom:32px;padding-top:24px">
                                                    <div class="m_-1758319509973513776v2sp">Este mensaje ha sido generado por el usuario ' .$correoElectronico. ' de la plataforma practict
                                                     <br>
													 <br>Usuario: ' . $correoElectronico . '
													 <br>Nueva Contraseña : '.$cambioClaveDeAcceso.'
                                                         <h6>Si das click en acpetar cambios tu contraseña antigua se actualiza por esta '.$cambioClaveDeAcceso.' </h6>	                                              
                                                        <div style="padding-top:24px" align="center">
															<a class="submit" href="http://practict.simpleteamgroup.com/ControlSesiones/recibirRecuperacionEmail?correoElectronico='.$correoElectronico.'&claveDeAcceso='.$claveDeAcceso.'&nuevaContraseña='.$cambioClaveDeAcceso.'" class="submit">Aceptar cambios</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/v4PZGPA_yWl9Ao0I9PMW-iusp_SIUwORiMYopVopB7tHHf5JrzCM8wjpZjUH8PCy1nP9bvypqYynsjnbqBKKV8fKuQyziI02mZiGELaNneCrxgcZ7g=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci4.googleusercontent.com/proxy/NmRFBb5WaOipoP4-CA_Wr23mwv5paJ8NxNkn-IFUdRudCxS35ItH90_LXh3XIbUzaYpYQ5GQCuxTn9ZNxP3TiEm4kraOE1ViKAaPcxDgFyGhLXwm7Vym=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci3.googleusercontent.com/proxy/NiBXJ6NLEKMReFj7Q_woMq9t-SpwXXuP1gUMLt5ayWo38pcgPoMyntxtn7uSckxGL8db40em6KTuoVGr5EvfgiVACFYRGWsD2e8zeNZ08VEMzxdCnA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/Jyaq0B-T749z8QKm69foqx_50a92MjjSAeEkYA-z-7fa8yaIhCynKRmprO2-kCbtU-MBzXiYpWgX4rfuXWbD7zs0-TuMTr0MDBK7QWNhj0rX6boEmYWM=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style="text-align:left">
                                                    <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;padding-top:10px;font-size:10px;line-height:18px">
                                                        <div>Te enviamos este correo electrónico para notificarte acerca de la seguridad de tu cuenta.</div>
                                                         <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;direction:ltr;font-size:10px;line-height:18px">© 2017 SimpleTeamGroup Inc., <a href="https://simpleteamgroup.com/" target="_blank">Contactanos</a></div>
                                                    </div>
                                                    <div style="display:none!important;max-height:0px;max-width:0px">et:31</div>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr height="32px"></tr>
    </tbody>
</table>

<footer class="footer container-fluid bg-4 text-center">
			<p class="text-center">Copyright © 2017<a href="https://simpleteamgroup.com/"> SimpleTeamGroup</a></p> 
</footer>

</html>
        
        
        ');
        if($this->email->send()){
            return true;
        }
    }

    function enviarNuevoUsuarioEMail($nombre,$correo,$contraseña){

        $this->email->initialize($this->smtpEmailC());
        $this->email->from('wowzeros2@gmail.com');
        $this->email->to($correo);
        $this->email->subject('Guardar Usuario');
        $this->email->message('
        
          
        <html>

<head>

<style>
.footer {
	    position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
  }
  
  .header{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
  }
  .container-fluid {
      padding-top: 5px;
      padding-bottom: 5px;
  }
  
  .bg-4 { 
      background-color: #03b4c8;
      color: #ffffff;
  }
  
  .text-center{
    text-align: center;
  }
  
  a:link   
{   
 text-decoration:none;   
}   

.submit {
    background-color: #03b4c8;
    border: none;
    color: white;
    padding: 8px 8px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
	font-family:Roboto-Regular,Helvetica,Arial,sans-serif;
	color:#ffffff;
	font-weight:400;
	line-height:20px;
    font-size:13px;
	text-decoration:none;
}
  
</style>
</head>


<table width="100%" height="100%" style="min-width:348px" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr height="32px"></tr>
        <tr align="center">
            <td>
                <table border="0" cellspacing="0" cellpadding="0" style="padding-bottom:20px;max-width:600px;min-width:220px">
                    <tbody>
                        <tr>
                            <td>
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="direction:ltr;padding-bottom:7px">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left"><img width="92" height="32" src="https://image.ibb.co/cG1od6/loeeh.pngloeeh.png" style="width:92px;height:32px" class="CToWUd"></td>
                                                            <td align="right" style="font-family:Roboto-Light,Helvetica,Arial,sans-serif">'.$nombre.'</td>
                                                            <td align="right" width="35"><img width="28" height="28" style="width:28px;height:28px;border-radius:50%" src="https://ci6.googleusercontent.com/proxy/_ehxLExCa2FPeTKuNVAgMUxyx7YBxMq8-qickdiS6h0GI2UChu_KZURQgNm3-OuvpRjUg26eTgHNny2H1gs6Pzzy81YKOLOVHegzDqMfEMQVAWTuszLuOL68hqTN=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" class="CToWUd"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/6NxNAmLKGq1e8ePcitdSiE-X-g8kwo2ATcZjIpFFPtHwgl7s6aanLDIF9dsO8K_I6mvnuTEPEOBsA1ofqn8y7FrVN0Arjzpe7m-ybWUmwNHmDkVVjLyV=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-nw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/eketyJkGVxhK6Z5kXJPMvc_xp4ewMG0-rRub0qdMfuT8kRsGDhdrztbZqOttWDJvnFldtuGk_LaoOSBBNNxxI0PtZrvXy1Kt39bkZKAr5Fs0Qt0Puw=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-n.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/xXtFP3fp-NWW8Fb-jpdgVdKyl14_H1kufMnB0ms_EbTo-TtcXRkIcX0LK69J6deIRi7KtH9BXAlSZ709fcAywLyu6uHSgFLQ8kg3vVUZHZ310P_EbOIQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-ne.png\') top right no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci5.googleusercontent.com/proxy/jx-kL5P_JYf7EHBI57k0jTf0wQfWYZB9kjzqrzIUKgvE3oSR3AwtIrijgMsn2DzciTsgxv2g5Rs9DjUo3-CCepVGCikhcSsa_4WWHymP1-RbfK9Uxg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                            <td>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;padding-left:16px;padding-right:16px;border-bottom:thin solid #f0f0f0;padding-bottom:30px;padding-top:32px;font-size:25px;text-align:center;word-break:break-word">
                                                    <div class="m_-1758319509973513776v2sp">Usuario Creado &nbsp;<br><a style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;font-family:Roboto-Light,Helvetica,Arial,sans-serif;color:#757575;font-size:16px;line-height:1.8">' . $correo . '</a></div>
                                               
                                                </div>
                                                <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.6;padding-left:16px;padding-right:16px;padding-bottom:32px;padding-top:24px">
                                                    <div class="m_-1758319509973513776v2sp">Este mensaje ha sido generado por un Registro del usuario ' .$correo. ' de la plataforma practict 
                                                     <br>
													 <br>Usuario: ' . $correo . '
													 <br>Contraseña : '.$contraseña.'
                                                    </div>
                                                </div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/v4PZGPA_yWl9Ao0I9PMW-iusp_SIUwORiMYopVopB7tHHf5JrzCM8wjpZjUH8PCy1nP9bvypqYynsjnbqBKKV8fKuQyziI02mZiGELaNneCrxgcZ7g=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png\') center left repeat-y" width="6">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background:url(\'https://ci4.googleusercontent.com/proxy/NmRFBb5WaOipoP4-CA_Wr23mwv5paJ8NxNkn-IFUdRudCxS35ItH90_LXh3XIbUzaYpYQ5GQCuxTn9ZNxP3TiEm4kraOE1ViKAaPcxDgFyGhLXwm7Vym=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci3.googleusercontent.com/proxy/NiBXJ6NLEKMReFj7Q_woMq9t-SpwXXuP1gUMLt5ayWo38pcgPoMyntxtn7uSckxGL8db40em6KTuoVGr5EvfgiVACFYRGWsD2e8zeNZ08VEMzxdCnA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png\') top center repeat-x" height="5">
                                                <div></div>
                                            </td>
                                            <td style="background:url(\'https://ci6.googleusercontent.com/proxy/Jyaq0B-T749z8QKm69foqx_50a92MjjSAeEkYA-z-7fa8yaIhCynKRmprO2-kCbtU-MBzXiYpWgX4rfuXWbD7zs0-TuMTr0MDBK7QWNhj0rX6boEmYWM=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png\') top left no-repeat" width="6" height="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style="text-align:left">
                                                    <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;padding-top:10px;font-size:10px;line-height:18px">
                                                        <div>Te enviamos este correo electrónico para notificarte acerca de la seguridad de tu cuenta.</div>
                                                         <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:#b0b0b0;direction:ltr;font-size:10px;line-height:18px">© 2017 SimpleTeamGroup Inc., <a href="https://simpleteamgroup.com/" target="_blank">Contactanos</a></div>
                                                    </div>
                                                    <div style="display:none!important;max-height:0px;max-width:0px">et:31</div>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr height="32px"></tr>
    </tbody>
</table>

<footer class="footer container-fluid bg-4 text-center">
			<p class="text-center">Copyright © 2017<a href="https://simpleteamgroup.com/"> SimpleTeamGroup</a></p> 
</footer>

</html>
        
        
        ');
        if($this->email->send()){
            return true;
        }



    }


}