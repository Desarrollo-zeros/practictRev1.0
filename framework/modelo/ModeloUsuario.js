
var ModeloUsuario = ModeloUsuario || (function() {     
     return{


         validarSesion: function () {
            if(sessionStorage.getItem("usuario") == null || sessionStorage.getItem("usuario") == "" ){
                return false;
            }
            else{
                return true;
            }
         },

         loginAjax : function(usuario,claveDeAcceso){
            $.ajax({
                url: base_url.base()+"ControlSesiones/iniciarSesion",
                type: 'POST',
                dataType: 'json',
                data: {
                    usuario: usuario,
                    claveDeAcceso : claveDeAcceso,
                    Iniciar_session : "login"
                },
                success: function (data) {
                  if(data.validarUsuario == 1){
                      Session.set("sesionUsuario", data);
                      sessionStorage.setItem('usuario', data.usuario);
                      sessionStorage.setItem('claveDeAcceso', (data.claveDeAcceso));
                      sessionStorage.setItem("onlineLogin",data.validarUsuario)
                      EntidadUsuario.setUsuario((sessionStorage.getItem("usuario")));
                      EntidadUsuario.setClaveDeAcceso(sessionStorage.getItem("claveDeAcceso"));
                      window.location.href = base_url.base()+"panel";
                  }
                  else{
                      swal("Cuidado","Usuario y/o Contraseña invalda","error");
                  }
                }
            });  
        }
     };

 })();

