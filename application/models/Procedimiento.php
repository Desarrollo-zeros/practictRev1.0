<?php
/**
 * Created by PhpStorm.
 * User: zeros
 * Date: 5/11/2017
 * Time: 8:56 PM
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Procedimiento extends  CI_Model{


    public function __construct()
    {
        parent::__construct();
    }

    public function AgregarProcedimiento($idModuloP, $nombreProcedimiento){
        $data = array(
            "nombreProcedimiento" => $nombreProcedimiento,
            "idModulo" => $idModuloP
        );

        if($this->db->insert("procedimiento",$data)){
         return true;
        }
        else{
            return false;
        }
    }


    public function EditarProcedimiento($idProcedimiento,$nombreProcedimiento,$idModulo){
        $data = array(
            "nombreProcedimiento" => $nombreProcedimiento,
            "idModulo" => $idModulo
        );
        $this->db->where("idProcedimiento",$idProcedimiento);
        if($this->db->update("procedimiento",$data)){
            return true;
        }
        else{
            return false;
        }
    }

    public function ActualizarTablaProcedimiento(){
        $query = $this->db->query("select p.idProcedimiento, m.nombreModulo, p.nombreProcedimiento from  procedimiento p inner join modulo m on p.idModulo = m.idModulo;");
        if($query->num_rows()>0){
            return $query->result_array();
        }
    }



    public function Eliminar($id){
        if($this->db->delete('procedimiento', array('idProcedimiento' => $id))){
            return true;
        }
        else{
            return false;
        }
    }

}
