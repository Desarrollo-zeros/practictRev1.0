<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class Control extends  CI_Model
{


    public function __construct()
    {
        parent::__construct();
    }


    function cerrarTodasSesionesEnLinea(){
        $r = 0;
        if(!empty($_SESSION['idUsuario'])){
            $query1 = $this->db->query('SELECT *FROM sesiones where idSession = "'.session_id().'" AND estado = 1;');
            if($query1->num_rows() >0 ) {
                $row = $query1->row();
                if($row->idSession == session_id() && $row->idUsuario == $_SESSION['idUsuario']){
                    if($row->cerrar == 1 && $row->estado == 1){
                        $this->cerrarSesion();
                        $r = 1;
                    }
                }
            }
        }
        return $r;
    }

    function insertCerrarSesionesEmailACerrar($idUsuario,$correoElectronico,$codigoCerrarSesion){
        $r = false;
        $query = $this->db->query('SELECT * FROM controlCerrarSesionCorreo  WHERE idUsuario = "'.$idUsuario.'"; ');

        if($query->num_rows() >0 ) {
            foreach ($query->result() as $row){
                if($row->idUsuario ==  $idUsuario && $row->correoElectronico == $correoElectronico && $row->codigoCerrarSesion == $codigoCerrarSesion && $row->activo == 1){
                    $this->db->query('UPDATE controlCerrarSesionCorreo SET activo = "0"  WHERE idUsuario = "'.$row->idUsuario.'" and codigoCerrarSesion = "'.$row->codigoCerrarSesion.'";  ');
                    $this->db->query('UPDATE  sesiones  SET  cerrar = 1 WHERE idUsuario = "'.$idUsuario.'" ');
                    $r = true;
                }
            }
        }
        return $r;
    }

    function recuperarContraseña($email,$nuevaClave1,$nuevaClave2){
        $data = $this->U->RecuperarContraseña($email,$nuevaClave2);
        if($this->H->enviarNuevaContraseña($data->Pnombre,$data->Papellido,$data->correoElectronico,$data->claveDeAcceso,$nuevaClave1)){
          return true;
        }
    }

    function  cerrarSesion(){
        $_SESSION = array();

        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }

        $this->db->query('DELETE FROM sesiones WHERE idSession = "'.session_id().'" ');
        $this->db->query('DELETE FROM ci_sessions WHERE id = "'.session_id().'" ');

        $this->session->sess_destroy();
        $this->output->set_header('Last-Modified:'.gmdate('D, d M Y H:i:s').'GMT');
        $this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate');
        $this->output->set_header('Cache-Control: post-check=0, pre-check=0',false);
        $this->output->set_header('Pragma: no-cache');
    }





}
