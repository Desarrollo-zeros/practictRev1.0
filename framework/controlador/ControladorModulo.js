var ControladorModulo = ControladorModulo || (function () {

    return{

        RegistrarModulo : function (nombreModulo,numeroDeCredito) {

            if(nombreModulo == "" && numeroDeCredito == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else {
                ModeloModulo.AgregarModulo(nombreModulo,numeroDeCredito);
            }
        },

        EditarModulo : function (nombreModulo,numeroDeCredito) {
            if(nombreModulo == "" && numeroDeCredito == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else {
                ModeloModulo.EditarModulo(nombreModulo,numeroDeCredito);
            }

        },

        Editar : function(id) {

            var data = EntidadModulo.getArrayModulo();

            $("#tituloRegistrarModulo").css("display","none");
            $("#registrarModulo_Ajax").css("display","none");
            $("#tituloEditarModulo").css("display","block");
            $("#editarModulo_Ajax").css("display","block");


            for(var i in data){
                if(id == data[i].idModulo){
                    $("#nombreModulo1").val(data[i].nombreModulo);
                    $("#numeroDeCredito1").val(data[i].numeroDeCredito);
                     EntidadModulo.setidmodulo(id);
                    $("#nombreModulo1").focus();
                }
            }
        },

        Eliminar : function(id) {
            ModeloModulo.Eliminar(id);
        }



    };

})();




$(document).ready(function () {
    $('#registrarModulo_Ajax').on('submit', function(form){
        form.preventDefault();
        var nombreModulo =   $("#nombreModulo").val();
        var numeroDeCredito =   $("#numeroDeCredito").val();

        if(confirm("Desea Registrar "+nombreModulo)){
            ControladorModulo.RegistrarModulo(nombreModulo,numeroDeCredito);
        }
    });

    $("#editarModulo_Ajax").on('submit', function(form){
        form.preventDefault();
        var nombreModulo =   $("#nombreModulo1").val();
        var numeroDeCredito =   $("#numeroDeCredito1").val();

        if(confirm("Desea Editar "+ nombreModulo)) {
            ControladorModulo.EditarModulo(nombreModulo, numeroDeCredito);
        }


    });

});