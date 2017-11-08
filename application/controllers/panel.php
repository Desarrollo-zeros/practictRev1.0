<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class panel extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index(){

         if(!empty($_SESSION['idUsuario']) && !empty($_SESSION['estado']) && $_SESSION['estado'] == 1){
            $rol = $this->U->getRol();
            if($rol<1){
                $this->load->view('practict/panel/profesor');
            }
            else{
                $this->load->view('practict/panel/admin');
            }
        }
        else{
            redirect("");
        }
    }

    public function AgregarDocente(){
        if(!empty($this->input->post("Guardar"))){
            $Pnombre = $this->input->post("Pnombre");
            $Snombre = $this->input->post("Snombre");
            $Papellido = $this->input->post("Papellido");
            $Sapellido = $this->input->post("Sapellido");
            $correo = $this->input->post("correo");
            if(!empty($Pnombre) && !empty($Snombre) && !empty($Papellido) && !empty($Sapellido) && !empty($correo)){
                if($this->D->AgregarDocente($Pnombre,$Snombre,$Papellido,$Sapellido,$correo)){
                    echo "1";
                }
                else{
                    echo "0";
                }
            }
        }
    }


    public function EditarDocente(){

        if(!empty($this->input->post("Editar"))) {

            $Pnombre = $this->input->post("Pnombre");
            $Snombre = $this->input->post("Snombre");
            $Papellido = $this->input->post("Papellido");
            $Sapellido = $this->input->post("Sapellido");
            $idUsuario = $this->input->post("idUsuario");
            $correo = $this->input->post("correo");

            if (!empty($Pnombre) && !empty($Snombre) && !empty($Papellido) && !empty($Sapellido) && !empty($correo) && !empty($idUsuario)) {
                if ($this->D->EditarDocente($idUsuario,$Pnombre,$Snombre,$Papellido,$Sapellido,$correo)) {
                    echo "1";
                } else {
                    echo "0";
                }
            }

        }
    }

    public function ActualizarTablaDocente(){
        echo json_encode($this->D->ActualizarTablaDocente());
    }

    public function EliminarDocente(){
        if(!empty( $this->input->post('Eliminar'))){
            if( $this->input->post('Eliminar') == "si"){
                echo $this->D->Eliminar($this->input->post('id'));
            }
        }
    }

    public function BuscarDocente(){
        if(!empty( $this->input->post('Eliminar'))){
            if( $this->input->post('Eliminar') == "si"){
                echo json_encode($this->D->BuscarDocente($this->input->post("id")));
            }
        }
    }


    function ActualizarTablaModulo(){
        echo json_encode($this->M->ActualizadTablaModulo());
    }


    public function AgregarModulo(){
        if(!empty($this->input->post("Guardar")) && $this->input->post("Guardar") =="si"){
            $nombreModulo =  $this->input->post("nombreModulo");
            $numeroDeCredito = $this->input->post("numeroDeCredito");
            if($this->M->AgregarModulo($nombreModulo,$numeroDeCredito)){
                echo 1;
            }
            else{
                echo 2;
            }
        }
    }

    public function EditarModulo(){
        if(!empty($this->input->post("Editar")) && $this->input->post("Editar") == "si"){
            $idModulo = $this->input->post("idModulo");
            $nombreModulo =  $this->input->post("nombreModulo");
            $numeroDeCredito = $this->input->post("numeroDeCredito");
            if($this->M->EditarModulo($idModulo,$nombreModulo,$numeroDeCredito)){
                echo 1;
            }
            else{
                echo 2;
            }
        }
    }

    public function EliminarModulo(){
        if(!empty( $this->input->post('Eliminar'))){
            if( $this->input->post('Eliminar') == "si"){
                echo $this->M->Eliminar($this->input->post('id'));
            }
        }
    }


    public function AgregarProcedimiento(){
        if(!empty($this->input->post("Guardar")) && $this->input->post("Guardar") =="si") {
            $idModuloP = $this->input->post("idModuloP");
            $nombreProcedimiento = $this->input->post("nombreProcedimiento");
            if ($this->P->AgregarProcedimiento($idModuloP, $nombreProcedimiento)) {
                echo 1;
            } else {
                echo 2;
            }
        }
    }



    public function EditarProcedimiento(){
        if(!empty($this->input->post("Editar")) && $this->input->post("Editar") == "si"){
            $idModulo = $this->input->post("idModuloP");
            $nombreProcedimiento =  $this->input->post("nombreProcedimiento");
            $idProcedimiento = $this->input->post("idProcedimiento");
            if($this->P->EditarProcedimiento($idProcedimiento,$nombreProcedimiento,$idModulo)){
                echo 1;
            }
            else{
                echo 2;
            }
        }
    }

    function ActualizarTablaProcedimiento(){
        echo json_encode($this->P->ActualizarTablaProcedimiento());
    }

    public function EliminarProcedimiento(){

        if(!empty( $this->input->post('Eliminar'))){
            if( $this->input->post('Eliminar') == "si"){
                echo $this->P->Eliminar($this->input->post('id'));
            }
        }
    }

}