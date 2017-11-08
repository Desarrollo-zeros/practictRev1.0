<?php
/**
 * Created by PhpStorm.
 * User: zeros
 * Date: 5/11/2017
 * Time: 8:56 PM
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Modulo extends  CI_Model{

    public function __construct()
    {
        parent::__construct();
    }


    public function ActualizadTablaModulo(){
        $query = $this->db->query("select *from modulo");
        if($query->num_rows()>0){
            return $query->result_array();
        }
    }


    public function AgregarModulo($nombreModulo,$numeroDeCredito){

        $data = array(
          "nombreModulo" => $nombreModulo,
          "numeroDeCredito" => $numeroDeCredito
        );
        return $this->db->insert("modulo",$data);
    }


    public function EditarModulo($idModulo,$nombreModulo,$numeroDeCredito){
        $data = array(
            "nombreModulo" => $nombreModulo,
            "numeroDeCredito" => $numeroDeCredito
        );
        $this->db->where("idModulo",$idModulo);
        if($this->db->update("modulo",$data)){
            return true;
        }
        else{
            return false;
        }
    }


    public function Eliminar($id){
       if($this->db->delete('modulo', array('idModulo' => $id))){
           return true;
       }
       else{
           return false;
       }
    }

}