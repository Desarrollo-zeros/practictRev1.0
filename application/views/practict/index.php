<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Practict</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="https://simpleteamgroup.com/" />
    <script src="js-css-font/js/jquery-latest.js"></script>


    <link rel="apple-touch-icon" sizes="180x180" href="js-css-font/fav/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="js-css-font/fav/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="js-css-font/fav/favicon-16x16.png"/>
    <link rel="manifest" href="js-css-font/fav/manifest.json"/>
    <link color="#5bbad5" rel="mask-icon" href="js-css-font/fav/safari-pinned-tab.svg"/>
    <meta name="theme-color" content="#ffffff"/>

    <!-- css -->
    <link href="js-css-font/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="js-css-font/simple-line-icons/css/simple-line-icons.css"/>
    <link href="js-css-font/css/fancybox/jquery.fancybox.css" rel="stylesheet"/>
    <link href="js-css-font/css/flexslider.css" rel="stylesheet" />
    <link href="js-css-font/css/style.css" rel="stylesheet" />
    

    

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>




<body>

<div id="wrapper" class="home-page">
    <!-- start header -->
    <header>
        <div class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href=""><img src="js-css-font/img/loeeh.png" alt="logo"/></a>
                </div>
                <div class="navbar-collapse collapse ">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="">Inicio</a></li>
                        <li><a onclick="return Bnoticias();" href="#callaction">Noticias</a></li>
                        <li id="dash1"></li>
                        <li id="lc1" ></li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="navbar-wrapper">
            <div class="container-fluid">
                <nav class="navbar navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="" ><img src="js-css-font/img/loeeh.png" alt="logo"/></a>

                        </div>
                        <div id="navbar" class="navbar-collapse collapse">

                            <ul class="nav navbar-nav">
                                <li class="active"><a href="">Inicio</a></li>
                                <li><a onclick="return Bnoticias();" href="#callaction">Noticias</a></li>
                                <li id="dash2"></li>
                                <li id="lc2" ></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </header>
    <!-- end header -->
    <section id="banner">
            <!-- Slider -->
            <div id="main-slider" class="flexslider">
                <ul id="Obanner" class="slides">
                    <li>
                        <img src="js-css-font/img/slides/1.jpg" alt="" />
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="flex-caption">
                                        <img src="js-css-font/img/loeeh.png" alt="logo" style="width: 100px;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="js-css-font/img/slides/2.jpg" alt="" />
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="flex-caption">
                                        <img src="js-css-font/img/loeeh.png" alt="logo" style="width: 100px;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        <!-- end slider -->

    </section>

    <section id="login" style="display: none;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="form-wrap">
                        <h1>Inicio De Sesión</h1>
                        <form  role="form" action="javascript:;" id="login_Ajax" method="post"  autocomplete="off">
                            <div class="form-group">
                                <label for="usuario" class="sr-only">Usuario / Email</label>
                                <input type="text" name="usuario" id="usuario" class="form-control" placeholder="Usuario / Email" value="" required="">
                            </div>
                            <div class="form-group">
                                <label for="contraseña" class="sr-only">Contraseña</label>
                                <input type="password" name="contraseña" id="contraseña" class="form-control" placeholder="Contraseña" value="" required="">
                            </div>
                            <div class="checkbox">
                                <span class="character-checkbox" onclick="return showPassword();"></span>
                                <span class="label">Ver contraseña</span>
                            </div>
                            <input type="submit" id="login_submit" class="btn btn-custom btn-lg btn-block" value="Ingresar">
                            <a  onclick="return olvideC();" class="" href="javascript:void" style="color: #03b4c8; font-size: 15px;">¿Olvidaste la Contraseña?</a>
                        </form>
                        <hr>
                    </div>
                </div> <!-- /.col-xs-12 -->
            </div> <!-- /.row -->

        </div> <!-- /.container -->
    </section>

    <section id="callaction" class="callaction">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div>
                        <h1 class="text-center" style="color:#1fa67b;">Noticias</h1>
                        <div id="noticias"></div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

  

    <footer>
        <div id="sub-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="copyright">
                            <img src="js-css-font/img/logounicesar.png" width="200" height="100" class="img-responsive"/>
                            <p>
                                <span>&copy; Practict 2017 Todos los derechos reservados. By </span><a href="https://simpleteamgroup.com/" target="_blank">SimpleTeamGroup/</a>
                            </p>
                        </div>

                    </div>
                    <div class="col-lg-6">
                        <ul class="social-network">
                            <li><a href="#" data-placement="top" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#" data-placement="top" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#" data-placement="top" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#" data-placement="top" title="Pinterest"><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="#" data-placement="top" title="Google plus"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

<a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>



<!-- javascript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="js-css-font/js/jquery.js"></script>

<script src="js-css-font/js/bootstrap.min.js"></script>
<script src="js-css-font/js/jquery.fancybox.pack.js"></script>
<script src="js-css-font/js/jquery.fancybox-media.js"></script>
<script src="js-css-font/js/portfolio/jquery.quicksand.js"></script>
<script src="js-css-font/js/portfolio/setting.js"></script>
<script src="js-css-font/js/jquery.flexslider.js"></script>
<script src="js-css-font/js/animate.js"></script>
<script src="js-css-font/js/custom.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js-css-font/js/swal2.js"></script>
<script src="include.js"></script>
<script type="text/javascript">



    var base_url = base_url || (function() {
        return{
            base : function () {
                return "<?=base_url();?>";
            }
        }
    })();


    function showPassword() {

        var key_attr = $('#contraseña').attr('type');

        if(key_attr != 'text') {

            $('.checkbox').addClass('show');
            $('#contraseña').attr('type', 'text');

        } else {

            $('.checkbox').removeClass('show');
            $('#contraseña').attr('type', 'password');

        }

    }

    
    $(document).ready(function(){




        var string = '<div  id="general_page" class="general_page" style="display:block;">'+
                             '<div class="c-content-blog-post-1"> '+
                                '<div class="c-title c-font-bold">'+
                                    '<a href="#" style="color:#000000;">Practicas Formativas</a> '+
                                '</div> '+
                                '<div class="c-desc"> '+
                                    '<img src="js-css-font/img/enfermeria.png" alt="" class="img-responsive"/>'+
                                    
                                    '<div class="c-panel"> <div class="c-author"> '+
                                       '<a>Postado por  <span class="c-font-uppercase">zeros</span></a> a las <span class="c-font-uppercase">2017-09-27 19:39:30</span> '+
                                        '</div> '+
                                            '<div class="c-comments"> '+
                                            '<i class="icon-speech"></i> <a href="#"></a>'+
                                        '</div> '+
                                    '</div>'+
                                '</div>'+
                             '</div>'+
                        '</div>';   
                        
             $("#noticias").html(string);
        
    });
    

</script>
</body>

<!-- Mirrored from webthemez.com/demo/biotex-pharma-industry-corporate-html-web-template/ by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 14 Oct 2017 19:31:34 GMT -->
</html>