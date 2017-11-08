var ModeloProcedimiento = ModeloProcedimiento || (function () {

    return{

        RegistrarProcedimiento : function(idModuloP,nombreProcedimiento){

            $.ajax({
                url: base_url.base()+"panel/AgregarProcedimiento",
                type: 'POST',
                dataType: 'json',
                data: {
                    idModuloP : idModuloP,
                    nombreProcedimiento : nombreProcedimiento,
                    Guardar : "si"
                },
                success: function (data) {
                    if(data == 1){
                      ModeloProcedimiento.ActualizarTablaProcedimiento();
                    }
                    else{
                        swal("Error","Ocurrio un error al momento de agregarlo el nuevo Procedimiento","error");
                    }
                }
            });

        },


        ActualizarTablaProcedimiento : function () {
            var string = "";
            $.ajax({
                url: base_url.base()+"panel/ActualizarTablaProcedimiento",
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    EntidadProcedimiento.setArrayProcedimiento(data);
                    for(var i in data){
                        string += '<tr>' +
                            '<td style="position: relative; right: 30px!important;">'+data[i].idProcedimiento+'</td>' +
                            '<td style="position: relative; right: 50px!important;">'+data[i].nombreModulo+'</td>' +
                            '<td style="position: relative; right: 85px!important;">'+data[i].nombreProcedimiento+'</td>' +
                            '<td style="position: relative; right: 150px!important;">' +
                            '<a href="#" class="btn btn-info" onclick="return ControladorProcedimiento.Editar('+data[i].idProcedimiento+');">Editar</a>' +
                            '<a href="#" class="btn btn-danger" onclick="return ControladorProcedimiento.Eliminar('+data[i].idProcedimiento+');" >Eliminar </a>' +
                            '</td>' +
                            '</tr>';
                    }
                    $("#tablaProcedimiento").html(string);
                }
            });
        },

        EditarProcedimiento : function(idModuloP,nombreProcedimiento){
            $.ajax({
                url: base_url.base()+"panel/EditarProcedimiento",
                type: 'POST',
                dataType: 'json',
                data: {
                    idProcedimiento: EntidadProcedimiento.getidProcedimiento(),
                    idModuloP : idModuloP,
                    nombreProcedimiento : nombreProcedimiento,
                    Editar : "si",
                },
                success: function (data) {
                    if(data == 1){
                        alert("procedimiento Editado");
                        $("#tituloRegistrarProcedimiento").css("display","block");
                        $("#registrarProcedimiento_Ajax").css("display","block");
                        $("#tituloRegistrarProcedimiento").css("display","none");
                        $("#editarProcedimiento_Ajax").css("display","none");
                        ModeloProcedimiento.ActualizarTablaProcedimiento();
                    }
                    else{
                        swal("Error","Ocurrio un error al momento de actualizar  Procedimiento","error");
                    }
                }
            });
        },
        Eliminar : function(id) {
            $.ajax({
                url: base_url.base() + "panel/EliminarProcedimiento",
                type: 'POST',
                dataType: 'json',
                data: {
                    id: id,
                    Eliminar: "si"
                },
                success: function (data) {
                    if (data == 1) {
                        alert("Procedimiento Eliminado");
                        ModeloProcedimiento.ActualizarTablaProcedimiento();
                    }
                    else {
                        alert("Error al Eliminar al Procedimiento")
                    }
                },
                error: function (request, status, error) {
                    alert(request.responseText);
                }
            });
        },


    };


})();