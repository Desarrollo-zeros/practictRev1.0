
class Login{
   
    constructor(){
 
    }
    
    cargarUsuario(){
        
        console.log(this.getUsuario);
        /* if(Session.get("sesionUsuario")!== null){
            this.JsonSesion = Session.get("sesionUsuario");
           
            usuario.setUsuario = this.JsonSesion.usuario;
        }
        else if(sessionStorage.getItem()){
            this.JsonSesion = sessionStorage.getItem("sesionUsuario");
            usuario.setUsuario = this.JsonSesion.usuario;
        }*/
    }
    
    comprarInicioConsesiones(){
        
      if(sessionStorage.getItem("usuario") === null){
        $.ajax({
            url: "http://localhost/Practict/ControladorUsuario",
            type: 'POST',
            dataType: 'json',
            data: {
                usuario:"zeros",
                claveDeAcceso : "6BF73D6922D3858CCBBDB947909A4027BF6C647F",
                tipo : 1 //1 envio sha1 , //0 string normal
            },
            success: function (data) {
              if(data.validarUsuario){
                  if(Session.get("sesionUsuario") == null){
                      Session.set("sesionUsuario", data);
                      //btoa encode64
                      //atob decode64
                      sessionStorage.setItem('usuario', btoa(data.usuario));
                      sessionStorage.setItem('claveDeAcceso', (data.claveDeAcceso));
                  }
                  $("#lc1").html("<a href='#' onclick='return Bcerrar();'>Cerrar Sesión</a>");
                  $("#lc2").html("<a href='#' onclick='return Bcerrar();'>Cerrar Sesión</a>");
              }
            }
        });  
        }
        else{
        $("#lc1").html("<a href='#' onclick='return Blogin();'>Iniciar Sesión</a>");
        $("#lc2").html("<a href='#' onclick='return Blogin();'>Iniciar Sesión</a>");
        }
    }
    
}

var login = new Login();

$(document).ready(function(){
  login.cargarUsuario();

});

function olvideC() {
    login.recuperar_ajax();
}




//
/*
class Login{

    constructor(){

    }

     login_ajax(usuario,contraseña){
        $.ajax({
            url: "Practict/iniciarSesion",
            type: 'POST',
            data: {
                usuario: usuario,
                contraseña: contraseña,
                Iniciar_session: 'login'
            },
            success: function (data) {
                if(data == 1) {
                    window.location.href = 'http://practict.simpleteamgroup.com/';
                }
				else{
					swal("Warning","Usuario y/o Contraseña incorrecta","warning");
				}
            }
        });

    }

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
                            url: "ControlSesiones/recuperarEmailC",
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

    }


    cerrarTodasSesionesEnLinea(){
        $.ajax({
            url: "ControlSesiones/cerrarTodasSesionesEnLinea",
            type: 'POST',
            success: function (data) {
                if(data == 1){
                    window.location.href = 'ControlSesiones/cerrarSesion';
                }
            },
        });

    }

}


var login = new Login();

$(document).ready(function () {

    $('#login_Ajax').on('submit', function(form){
        form.preventDefault();

       var usuario =  $('#usuario').val();
       var contraseña =   $('#contraseña').val();

       login.login_ajax(usuario,contraseña);
    });

    setInterval(login.cerrarTodasSesionesEnLinea, 3000);

})



*/