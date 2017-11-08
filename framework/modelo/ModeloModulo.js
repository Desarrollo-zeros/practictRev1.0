var ModeloModulo = ModeloModulo || (function () {


    return{


        AgregarModulo : function (nombreModulo,numeroDeCredito) {
            $.ajax({
                url: base_url.base()+"panel/AgregarModulo",
                type: 'POST',
                dataType: 'json',
                data: {
                    nombreModulo : nombreModulo,
                    numeroDeCredito : numeroDeCredito,
                    Guardar : "si"
                },
                success: function (data) {
                    if(data == 1){
                        ModeloModulo.ActualizarTablaModulo();
                    }
                    else{
                        swal("Error","Ocurrio un error al momento de agregarlo el nuevo Modulo","error");
                    }
                }
            });
        },

        EditarModulo : function (nombreModulo,numeroDeCredito) {
            $.ajax({
                url: base_url.base()+"panel/EditarModulo",
                type: 'POST',
                dataType: 'json',
                data: {
                    idModulo: EntidadModulo.getidmodulo(),
                    nombreModulo : nombreModulo,
                    numeroDeCredito : numeroDeCredito,
                    Editar : "si",
                },
                success: function (data) {
                    if(data == 1){
                        alert("Modulo Editado");
                        $("#tituloRegistrarModulo").css("display","block");
                        $("#registrarModulo_Ajax").css("display","block");
                        $("#tituloRegistrarModulo").css("display","none");
                        $("#editarModulo_Ajax").css("display","none");
                        ModeloModulo.ActualizarTablaModulo();
                    }
                    else{
                        swal("Error","Ocurrio un error al momento de actualizar  Modulo","error");
                    }
                }
            });
        },


        ActualizarTablaModulo : function () {
            var string = "";
            $.ajax({
                url: base_url.base()+"panel/ActualizarTablaModulo",
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    EntidadModulo.setArrayModulo(data);
                    for(var i in data){
                            string += '<tr>' +
                                '<td style="position: relative; right: 30px!important;">'+data[i].idModulo+'</td>' +
                                '<td style="position: relative; right: 50px!important;">'+data[i].nombreModulo+'</td>' +
                                '<td style="position: relative; right: 85px!important;">'+data[i].numeroDeCredito+'</td>' +
                                '<td style="position: relative; right: 150px!important;">' +
                                '<a href="#" class="btn btn-info" onclick="return ControladorModulo.Editar('+data[i].idModulo+');">Editar</a>' +
                                '<a href="#" class="btn btn-danger" onclick="return ControladorModulo.Eliminar('+data[i].idModulo+');" >Eliminar </a>' +
                                '</td>' +
                                '</tr>';
                    }
                    $("#tablaModulo").html(string);
                }
            });
        },


        Eliminar : function(id) {
            $.ajax({
                url: base_url.base() + "panel/EliminarModulo",
                type: 'POST',
                dataType: 'json',
                data: {
                    id: id,
                    Eliminar: "si"
                },
                success: function (data) {
                    if (data == 1) {
                        alert("Modulo Eliminado");
                        ModeloModulo.ActualizarTablaModulo();
                    }
                    else {
                        alert("Error al Eliminar al Modulo")
                    }
                },
                error: function (request, status, error) {
                    alert(request.responseText);
                }
            });
        },





    };

})();