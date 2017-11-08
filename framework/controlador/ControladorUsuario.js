
/*Controlador Usuario*/

var ControladorUsuario = ControladorUsuario || (function(){
    
    return{
        
        
        iniciarSesion : function(usuario,claveDeAcceso){
            if(!ModeloHerramientas.validarString(usuario) &&  !ModeloHerramientas.validarString(claveDeAcceso)){
                ModeloUsuario.loginAjax(usuario,claveDeAcceso);
            }
        },   
    
        controlLogin : function(){
            if(ModeloUsuario.validarSesion()){
                 $("#dash1").html("<a href='#' onclick='return dashboard();'>Panel</a>");
                 $("#dash2").html("<a href='#' onclick='return dashboard();'>Panel</a>");
                 $("#lc1").html("<a href='#login' onclick='return Bcerrar();'>Cerrar Sesión</a>");
                 $("#lc2").html("<a href='#login' onclick='return Bcerrar();'>Cerrar Sesión</a>");
            }
            else{
                  $("#lc1").html("<a href='#login' onclick='return Blogin();'>Iniciar Sesión</a>");
                  $("#lc2").html("<a href='#login' onclick='return Blogin();'>Iniciar Sesión</a>");
            }
        },


        recuperar_ajax(){
            swal({
                title: 'Por favor Ingrese su correo electronico',
                input: 'email',
                showCancelButton: true,
                confirmButtonText: 'Recuperar Contraseña',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#03b4c8',
                cancelButtonColor: '#dd5e60',
                showLoaderOnConfirm: true,
                preConfirm: function (email) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function() {

                            $.ajax({
                                url:  base_url.base()+"ControlSesiones/recuperarEmailC",
                                type: 'POST',
                                data: {
                                    email: email,
                                    recuperar: 'recuperar'
                                },
                                success: function (data) {
                                    if(data == 1){
                                        resolve();
                                    }
                                    else{
                                        reject();
                                    }
                                },
                            });
                        }, 2000)
                    })
                },
                allowOutsideClick: false
            }).then(function (email) {
                swal({
                    type: 'success',
                    title: 'Se ha enviado al correo electronico  '+email+' con su nueva contraseña!'
                })
            })

        },

        cerrarTodasSesionesEnLinea(){
            $.ajax({
                url: base_url.base()+"ControlSesiones/cerrarTodasSesionesEnLinea",
                type: 'POST',
                success: function (data) {
                    if(data == 1){
                        window.location.href = base_url.base()+'/ControlSesiones/cerrarSesion';
                    }
                },
            });

        }

    };

})();

$(document).ready(function(){
    ControladorUsuario.controlLogin();
});

function dashboard(){
    window.location.href = base_url.base()+"panel";
}


function Blogin() {
    document.getElementById("callaction").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function Bcerrar() {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("claveDeAcceso");
    Session.clear();
    window.location.href = base_url.base()+"/ControlSesiones/cerrarSesion";
}

function Bnoticias() {
    document.getElementById("callaction").style.display = "block";
    document.getElementById("login").style.display = "none";
}



$('#login_Ajax').on('submit', function(form){
    form.preventDefault();
    var usuario =  $('#usuario').val();
    var claveDeAcceso =   $('#contraseña').val();
    ControladorUsuario.iniciarSesion(usuario,claveDeAcceso);
});


function olvideC() {
    ControladorUsuario.recuperar_ajax();
}
