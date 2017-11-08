<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Practict extends CI_Controller {

    var $validar  = false;
    var $usuario = '';
    var $contrasena = '';
    var $Email = '';


    public function __construct()
    {

        parent::__construct(); //la funcion __construct() hereda el __construct de CI_Controller}

        $this->validar = false;
        $this->usuario = '';
        $this->contrasena = '';
        $this->Email = '';
    }

    public function index() //la funcion publica index es da vista a la pestaña inicial del navegador osea el index de la pagina web
	{
        $this->load->view('practict/index'); //llamo la vista y la muestro esta se encuentra en views/practict/index.php
	}




}
