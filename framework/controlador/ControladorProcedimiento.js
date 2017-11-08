var ControladorProcedimiento = ControladorProcedimiento  || (function () {


    return{

        cargarModuloSelect : function () {
            ModeloModulo.ActualizarTablaModulo();
            ModeloModulo.ActualizarTablaModulo();
            var Data = EntidadModulo.getArrayModulo();
            var String = '';
            for(var i in Data){
                String  += '<option value="'+Data[i].idModulo+'">'+Data[i].nombreModulo+'</option>';
            }
            console.log(Data);
            $("#idModuloP").html(String);
            $("#idModuloP1").html(String);
        },

        RegistrarProcedimiento : function (idModuloP,nombreProcedimiento) {
            if(idModuloP == "" && nombreProcedimiento == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else {
                ModeloProcedimiento.RegistrarProcedimiento(idModuloP,nombreProcedimiento);
            }
        },

        EditarProcedimiento : function(idModuloP,nombreProcedimiento){
            if(nombreModulo == "" && numeroDeCredito == ""){
                swal("Cuidado","no puede dejar campos vacios","warning");
            }
            else {
                ModeloProcedimiento.EditarProcedimiento(idModuloP,nombreProcedimiento);
            }
        },

        Editar : function(id) {

            var data = EntidadProcedimiento.getArrayProcedimiento();

            $("#tituloRegistrarProcedimiento").css("display","none");
            $("#registrarProcedimiento_Ajax").css("display","none");
            $("#tituloRegistrarProcedimiento").css("display","block");
            $("#editarProcedimiento_Ajax").css("display","block");

            for(var i in data){
                if(id == data[i].idProcedimiento){
                    $("#nombreProcedimiento1").val(data[i].nombreProcedimiento);
                    EntidadProcedimiento.setidProcedimiento(id);
                    $("#nombreProcedimiento1").focus();
                }
            }
        },
        Eliminar : function(id) {
            ModeloProcedimiento.Eliminar(id);
        }


    };


})();


$(document).ready(function () {
    $('#registrarProcedimiento_Ajax').on('submit', function(form){
        form.preventDefault();
        var idModuloP =   $("#idModuloP").val();
        var nombreProcedimiento =   $("#nombreProcedimiento").val();

        if(confirm("Desea Registrar "+nombreProcedimiento)){
            ControladorProcedimiento.RegistrarProcedimiento(idModuloP,nombreProcedimiento);
        }
    });

    $("#editarProcedimiento_Ajax").on('submit', function(form){
        form.preventDefault();
        form.preventDefault();
        var idModuloP =   $("#idModuloP1").val();
        var nombreProcedimiento =   $("#nombreProcedimiento1").val();

        if(confirm("Desea Editar "+nombreProcedimiento)){
            ControladorProcedimiento.EditarProcedimiento(idModuloP,nombreProcedimiento);
        }


    });

});