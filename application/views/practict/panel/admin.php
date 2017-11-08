<!doctype html>
<html lang="en">

<head>
    <title>Practict</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="js-css-font/panel/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="js-css-font/panel/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="js-css-font/panel/vendor/linearicons/style.css">
    <link rel="stylesheet" href="js-css-font/panel/vendor/chartist/css/chartist-custom.css">
    <!-- MAIN CSS -->
    <link rel="stylesheet" href="js-css-font/panel/css/main.css">
    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    <link rel="stylesheet" href="js-css-font/panel/css/demo.css">
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">


    <link rel="apple-touch-icon" sizes="180x180" href="js-css-font/fav/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="js-css-font/fav/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="js-css-font/fav/favicon-16x16.png"/>
    <link rel="manifest" href="js-css-font/fav/manifest.json"/>
    <link color="#5bbad5" rel="mask-icon" href="js-css-font/fav/safari-pinned-tab.svg"/>
    <meta name="theme-color" content="#ffffff"/>



</head>

<body>
<!-- WRAPPER -->
<div id="wrapper">
    <!-- NAVBAR -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="brand">
            <a href="<?=base_url("");?>"><img src="js-css-font/img/loeeh.png"  width="85" height="100" alt="Klorofil Logo" class="img-responsive logo"></a>
        </div>
        <div class="container-fluid">
            <div class="navbar-btn">
                <button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
            </div>
            <form class="navbar-form navbar-left">
                <div class="input-group">
                    <input type="text" value="" class="form-control" placeholder="Search dashboard...">
                    <span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>
                </div>
            </form>
            <div class="navbar-btn navbar-btn-right">
               <!-- <a class="btn btn-success update-pro" href="https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro" target="_blank"><i class="fa fa-rocket"></i> <span>UPGRADE TO PRO</span></a> -->
            </div>
            <div id="navbar-menu">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                            <i class="lnr lnr-alarm"></i>
                            <span class="badge bg-danger"></span>
                        </a>
                        <ul class="dropdown-menu notifications">
                           <!-- <li><a href="#" class="notification-item"><span class="dot bg-warning"></span>System space is almost full</a></li>
                            <li><a href="#" class="notification-item"><span class="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
                            <li><a href="#" class="notification-item"><span class="dot bg-success"></span>Monthly report is available</a></li>
                            <li><a href="#" class="notification-item"><span class="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
                            <li><a href="#" class="notification-item"><span class="dot bg-success"></span>Your request has been approved</a></li>
                            <li><a href="#" class="more">See all notifications</a></li> -->
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="lnr lnr-question-circle"></i> <span>Ayuda</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <!-- <li><a href="#">Basic Use</a></li>
                            <li><a href="#">Working With Data</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Troubleshooting</a></li> -->
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="js-css-font/img/loeeh.png" class="img-circle" alt="Avatar"> <span>Panel</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="lnr lnr-envelope"></i> <span>Mensajes</span></a></li>
                            <li><a href="#"><i class="lnr lnr-cog"></i> <span>Configuracion</span></a></li>
                            <li><a href="#" onclick="return Bcerrar();"><i class="lnr lnr-exit"></i> <span>Cerrar Sesión</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- END NAVBAR -->
    <!-- LEFT SIDEBAR -->
    <div id="sidebar-nav" class="sidebar">
        <div class="sidebar-scroll">
            <nav>
                <ul class="nav">
                    <li><a href="" class="active"><i class="lnr lnr-home"></i> <span>Panel</span></a></li>
                    <li><a href="#registrarDocente" onclick="return registrarDocente();" class=""><i class="lnr lnr-user"></i> <span>Gestionar docente </span></a></li>
                    <li><a href="#gestionModulo" onclick="return registrarModulos();" class=""><i class="lnr lnr-book"></i> <span>Gestionar Modulo</span></a></li>
                    <li><a href="#gestionProcedimiento" onclick="return registrarProcedimiento();" class=""><i class="lnr lnr-book"></i> <span>Gestionar Procedimiento</span></a></li>
                    <li><a href="" onclick="return Estadisticas();" class=""><i class="lnr lnr-chart-bars"></i> <span>estadisticas</span></a></li>
                </ul>
            </nav>
        </div>
    </div>


    <!-- MAIN -->
    <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
            <div class="container-fluid">
                <!-- OVERVIEW -->
                <div class="panel panel-headline">
                    <div class="panel-heading">
                        <h3 class="panel-title">Practicas Formativas</h3>
                        <p class="panel-subtitle"><img src="js-css-font/img/enfermeria.png" alt="" class="img-responsive  center-block"/></p>
                    </div>
                </div>

                <div class="row" id="gestionDocente" style="display: none;">
                    <div class="col-md-12">
                        <div class="panel text-center center-block">
                            <div class="panel-heading">
                                <h3 class="panel-title" id="tituloGuardar"><b>Registrar Docente</b></h3>
                                <h3 class="panel-title" id="tituloEditar" style="display: none"><b>Editar Docente</b></h3>
                            </div>
                            <div class="panel-body no-padding">
                                <div class="row center-block  text-center">

                                    <form  role="form" action="javascript:;" id="registrarDocente_Ajax" method="post"  class="center-block" autocomplete="off" style="display: block;">
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="">Primer Nombre</label>
                                                        <input type="text" name="Pnombre" id="Pnombre" value="" class="form-control" required>
                                                    </div>
                                            </div>
                                            <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="">Segundo Nombre</label>
                                                        <input type="text" name="Snombre" id="Snombre" value="" class="form-control" required>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Primer Apellido</label>
                                                    <input type="text" id="Papellido" name="Papellido" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Segundo Apellido</label>
                                                    <input type="text" name="Sapellido"  id="Sapellido" value="" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Correo Electronico</label>
                                                    <input type="email" name="correo"  id="correo" value="" class="form-control" required>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <br>
                                                    <input type="submit" id="RegistrarDocente" name="" value="Guardar Docente" class="btn btn-success">
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <form  role="form" action="javascript:;" id="editarDocente_Ajax" method="post"  class="center-block" autocomplete="off" style="display: none;">
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Primer Nombre</label>
                                                    <input type="text" name="Pnombre1" id="Pnombre1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Segundo Nombre</label>
                                                    <input type="text" name="Snombre1" id="Snombre1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Primer Apellido</label>
                                                    <input type="text" id="Papellido1" name="Papellido1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Segundo Apellido</label>
                                                    <input type="text" name="Sapellido1"  id="Sapellido1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="">Correo Electronico</label>
                                                    <input type="email" name="correo1"  id="correo1" value="" class="form-control" required>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <br>
                                                    <input type="submit" class="btn btn-info" id="RegistrarDocente" name="" value="Editar Docente">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="row center-block  text-center">
                                    <div class="col-md-12">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th style="width: 10px;">Identificacion</th>
                                                    <th  style="width: 20px;">Nombre</th>
                                                    <th  style="width: 100px;">Accion</th>
                                                </tr>
                                            </thead>

                                            <tbody id="tablaDocente">

                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div class="row" id="gestionModulo" style="display: none;">
                    <div class="col-md-12">
                        <div class="panel text-center center-block">
                            <div class="panel-heading">
                                <h3 class="panel-title" id="tituloRegistrarModulo" style="display: block;"><b>Registrar Modulo</b></h3>
                                <h3 class="panel-title" id="tituloEditarModulo" style="display: none;"><b>Editar Modulo</b></h3>
                            </div>
                            <div class="panel-body no-padding">
                                <div class="row center-block  text-center">

                                    <form id="registrarModulo_Ajax" style="display: block;" class="registrarModulo_Ajax" action="" method="post">
                                        <div class="col-md-12">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Modulo:</label>
                                                    <input type="text" name="nombreModulo" id="nombreModulo" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Creditos:</label>
                                                    <input type="number" name="numeroDeCredito" id="numeroDeCredito" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <br><input type="submit" name="" value="Guardar modulo" class="btn btn-success">
                                                </div>
                                            </div>
                                        </div>
                                    </form>



                                    <form id="editarModulo_Ajax" class=editarModulo_Ajax"" action="" style="display: none;" method="post">
                                        <div class="col-md-12">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Modulo:</label>
                                                    <input type="text" name="nombreModulo1" id="nombreModulo1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Creditos:</label>
                                                    <input type="number" name="numeroDeCredito1" id="numeroDeCredito1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <br><input type="submit" name="" value="Editar Modulo" class="btn btn-info">
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div class="row center-block  text-center">
                                        <div class="col-md-12">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th >Id</th>
                                                    <th style="position: relative; left: 45px;">Nombre del Modulo</th>
                                                    <th style="position: relative; right: 50px;">Credito</th>
                                                    <th style="position: relative; left: 30px;">Accion</th>
                                                </tr>
                                                </thead>

                                                <tbody id="tablaModulo">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                         </div>
                    </div>
                </div>
            </div>




                <div class="row" id="gestionProcedimiento" style="display: none;">
                    <div class="col-md-12">
                        <div class="panel text-center center-block">
                            <div class="panel-heading">
                                <h3 class="panel-title" id="tituloRegistrarProcedimiento" style="display: block;"><b>Registrar Procedimiento</b></h3>
                                <h3 class="panel-title" id="tituloEditarProcedimiento" style="display: none;"><b>Editar Procedimiento</b></h3>
                            </div>
                            <div class="panel-body no-padding">
                                <div class="row center-block  text-center">

                                    <form id="registrarProcedimiento_Ajax" style="display: block;" class="registrarProcedimiento_Ajax" action="" method="post">

                                        <div class="col-md-12">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Nombre De Modulo:</label>
                                                    <select class="form-control" name="idModuloP" id="idModuloP" required>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-4">

                                                <div class="form-group">
                                                    <label for="">Procedimiento</label>
                                                    <input type="text" name="nombreProcedimiento" id="nombreProcedimiento" value="" class="form-control" required>
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                    <div class="form-group">
                                                        <br><input type="submit" name="" value="Guardar Procedimiento" class="btn btn-success">
                                                    </div>
                                            </div>

                                        </div>


                                    </form>

                                    <form id="editarProcedimiento_Ajax" class=editarModulo_Ajax"" action="" style="display: none;" method="post">

                                        <div class="col-md-12">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="">Nombre De Modulo:</label>
                                                    <select class="form-control" name="idModuloP1" id="idModuloP1" required>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">

                                                <div class="form-group">
                                                    <label for="">Procedimiento</label>
                                                    <input type="text" name="nombreProcedimiento1" id="nombreProcedimiento1" value="" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <br><input type="submit" name="" value="Editar Procedimiento" class="btn btn-info">
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div class="row center-block  text-center">
                                        <div class="col-md-12">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th style="position: relative; left: 10px;">Id</th>
                                                    <th style="position: relative; right: 5px;">Modulo</th>
                                                    <th style="position: relative; left: 2px;">Prcedimiento</th>
                                                    <th style="position: relative; right: 100px;">Accion</th>
                                                </tr>

                                                </tr>
                                                </thead>

                                                <tbody id="tablaProcedimiento">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



        </div>
        <!-- END MAIN CONTENT -->
    </div>
    <!-- END MAIN -->
    <div class="clearfix"></div>
    <footer>
        <div class="container-fluid">
            <p class="copyright">&copy; 2017 <a href="https://simpleteamgroup.com" target="_blank">SimpleaTeamGroup</a>. Todos los derechos reservados.</p>
        </div>
    </footer>
</div>


<!-- END WRAPPER -->
<!-- Javascript -->
<script src="js-css-font/panel/vendor/jquery/jquery.min.js"></script>
<script src="js-css-font/panel/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="js-css-font/panel/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="js-css-font/panel/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
<script src="js-css-font/panel/scripts/klorofil-common.js"></script>
<script src="js-css-font/js/swal2.js"></script>
<script src="include.js"></script>

<script>
    var base_url = base_url || (function() {
        return{
            base : function () {
                return "<?=base_url();?>";
            }
        }
    })();


   function registrarDocente(){
       $("#gestionModulo").css("display","none");
       $("#gestionProcedimiento").css("display","none");
       $("#gestionDocente").css("display","block");
       ModeloPanel.ActualizarTablaDocente();
   }


   function registrarModulos(){
       $("#gestionDocente").css("display","none");
       $("#gestionProcedimiento").css("display","none");
       $("#gestionModulo").css("display","block");
       ModeloModulo.ActualizarTablaModulo();
    }


    function registrarProcedimiento() {
        $("#gestionDocente").css("display","none");
        $("#gestionModulo").css("display","none");
        $("#gestionProcedimiento").css("display","block");
        ControladorProcedimiento.cargarModuloSelect();
        ModeloProcedimiento.ActualizarTablaProcedimiento();
    }



</script>
</body>

</html>
