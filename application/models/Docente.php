<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Docente extends  CI_Model{

    public function __construct()
    {
        parent::__construct();
    }


    public function AgregarDocente($Pnombre,$Snombre,$Papellido,$Sapellido,$correo){

        $claveDeAcceso = $this->H->generarCodigo();

        $data = array(
            "Pnombre"  => $Pnombre,
            "Snombre" => $Snombre,
            "Papellido" => $Papellido,
            "Sapellido" => $Sapellido,
            "correoElectronico" => $correo,
            "claveDeAcceso" => $this->H->encryptEmailContraseña($correo,$claveDeAcceso),
            "clave" => $claveDeAcceso
        );

        $this->H->enviarNuevoUsuarioEMail($Pnombre." ".$Snombre." ".$Papellido." ".$Sapellido." ".$Sapellido,$correo,$claveDeAcceso);

        return $this->db->insert("usuario",$data);
    }

    public function EditarDocente($idUsuario,$Pnombre,$Snombre,$Papellido,$Sapellido,$correo){

        $data = array(
            "Pnombre"  => $Pnombre,
            "Snombre" => $Snombre,
            "Papellido" => $Papellido,
            "Sapellido" => $Sapellido,
            "correoElectronico" => $correo,
        );

        $this->db->where('idUsuario',$idUsuario);
        $this->db->update("usuario",$data);
        return true;

    }


    public function ActualizarTablaDocente(){
        $query = $this->db->query('select *from usuario');
        return $query->result_array();
    }

    public function Eliminar($id){
        $data = array("estado" => "0");
        $this->db->where('idUsuario',$id);
        if($this->db->update('usuario',$data)){
            return true;
        }
    }

}