
var ModeloPanel = ModeloPanel || (function() {
    return {
        AgregarDocente : function (Pnombre,Snombre,Papellido,Sapellido,correo) {
            $.ajax({
                url: base_url.base()+"panel/AgregarDocente",
                type: 'POST',
                dataType: 'json',
                data: {
                    Pnombre : Pnombre,
                    Snombre : Snombre,
                    Papellido : Papellido,
                    Sapellido : Sapellido,
                    correo : correo,
                    Guardar : "si",
                },
                success: function (data) {
                   if(data == 1){
                    ModeloPanel.ActualizarTablaDocente();
                   }
                   else{
                       swal("Error","Ocurrio un error al momento de agregarlo el nuevo docente","error");
                   }
                }
            });
        },

        EditarDocente : function (Pnombre,Snombre,Papellido,Sapellido,correo,id) {
            $.ajax({
                url: base_url.base()+"/panel/EditarDocente",
                type: 'POST',
                dataType: 'json',
                data: {
                    idUsuario : id,
                    Pnombre : Pnombre,
                    Snombre : Snombre,
                    Papellido : Papellido,
                    Sapellido : Sapellido,
                    correo : correo,
                    Editar : "si",
                },
                success: function (data) {
                    console.log(data);
                    if(data == 1){
                        ModeloPanel.ActualizarTablaDocente();
                        alert("Docente editado");
                        $("#tituloGuardar").css("display","block");
                        $("#registrarDocente_Ajax").css("display","block");
                        $("#tituloEditar").css("display","none");
                        $("#editarDocente_Ajax").css("display","none");
                    }
                    else{
                        swal("Error","Ocurrio un error al momento de agregarlo el nuevo docente","error");
                    }
                }
            });


        },

        ActualizarTablaDocente : function () {
            var string = "";
            $.ajax({
                url: base_url.base()+"panel/ActualizarTablaDocente",
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    for(var i in data){
                        if(data[i].estado == 1){
                            EntidadDocente.setArrayDocete(data);
                            string += '<tr>' +
                                '<td style="position: relative; left: -100px!important;">'+data[i].idUsuario+'</td>' +
                                '<td style="position: relative; left: -100px!important;">'+data[i].Pnombre+'&nbsp;'+data[i].Snombre+'&nbsp;'+data[i].Papellido+'&nbsp;'+data[i].Sapellido+'</td>' +
                                '<td style="position: relative; left: -100px!important;">' +
                                '<a href="#" class="btn btn-info" onclick="return ControladorPanel.Editar('+data[i].idUsuario+');">Editar</a>' +
                                '<a href="#" class="btn btn-danger" onclick="return ControladorPanel.Eliminar('+data[i].idUsuario+');" >Eliminar </a>' +
                                '</td>' +
                                '</tr>';
                        }
                    }
                    $("#tablaDocente").html(string);
                }
            });
        },

        Eliminar : function(id) {
            $.ajax({
                url: base_url.base()+"panel/EliminarDocente",
                type: 'POST',
                dataType: 'json',
                data :{
                    id : id,
                    Eliminar : "si"
                },
                success: function (data) {
                    if(data == 1){
                        alert("Docente Eliminado");
                        ModeloPanel.ActualizarTablaDocente();
                    }
                    else{
                        alert("Error al Docente Eliminado");
                    }
                },
                error: function (request, status, error) {
                    alert(request.responseText);
                }
            });
        }
    };
})();






