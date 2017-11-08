var ControladorPanel = ControladorPanel || (function () {

    
    return{
        RegistrarDocente : function (Pnombre,Snombre,Papellido,Sapellido,correo) {
            if(Pnombre == "" && Snombre == "" && Papellido == "" && Sapellido == "" && correo == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else{
                if(ModeloHerramientas.validarEmail(correo)){
                    ModeloPanel.AgregarDocente(Pnombre,Snombre,Papellido,Sapellido,correo);
                }else{
                    swal("Cuidado","Correo invalido","warning");
                }
            }
        },

        EditarDocente : function (Pnombre,Snombre,Papellido,Sapellido,correo) {

            if(Pnombre == "" && Snombre == "" && Papellido == "" && Sapellido == "" && correo == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else{
                if(ModeloHerramientas.validarEmail(correo)){
                    ModeloPanel.EditarDocente(Pnombre,Snombre,Papellido,Sapellido,correo,EntidadDocente.getidDocente());
                }else{
                    swal("Cuidado","Correo invalido","warning");
                }
            }

        },

        Editar : function(id) {

            var data = EntidadDocente.getArrayDocete();

                $("#tituloGuardar").css("display","none");
                $("#registrarDocente_Ajax").css("display","none");
                $("#tituloEditar").css("display","block");
                $("#editarDocente_Ajax").css("display","block");

            for(var i in data){
                if(id == data[i].idUsuario){
                    $("#Pnombre1").val(data[i].Pnombre);
                    $("#Snombre1").val(data[i].Snombre);
                    $("#Papellido1").val(data[i].Papellido);
                    $("#Sapellido1").val(data[i].Sapellido);
                    $("#correo1").val(data[i].correoElectronico);
                    EntidadDocente.setidDocente(id);
                    $("#Pnombre1").focus();
                }
            }
         },

     Eliminar : function(id) {
        ModeloPanel.Eliminar(id);
    }


    };
    
})();

$(document).ready(function () {
    $('#registrarDocente_Ajax').on('submit', function(form){
        form.preventDefault();
        var Pnombre =   $("#Pnombre").val();
        var Snombre =   $("#Snombre").val();
        var Papellido = $("#Papellido").val();
        var Sapellido = $("#Sapellido").val();
        var correo =    $("#correo").val();
        if(confirm("Desea Registrar al docente "+Pnombre+" "+" "+Snombre+" "+Papellido+" "+Sapellido)){
            ControladorPanel.RegistrarDocente(Pnombre,Snombre,Papellido,Sapellido,correo);
        }
    });

    $("#editarDocente_Ajax").on('submit', function(form){
        form.preventDefault();
        var Pnombre =   $("#Pnombre1").val();
        var Snombre =   $("#Snombre1").val();
        var Papellido = $("#Papellido1").val();
        var Sapellido = $("#Sapellido1").val();
        var correo =    $("#correo1").val();
        if(confirm("Desea Editar al docente "+Pnombre+" "+" "+Snombre+" "+Papellido+" "+Sapellido)){
            ControladorPanel.EditarDocente(Pnombre,Snombre,Papellido,Sapellido,correo);
        }
    });

});

