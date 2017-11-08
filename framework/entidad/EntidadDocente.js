
var EntidadDocente = EntidadDocente || (function () {

    return {
        setArrayDocete : function(data){
            this.docente = data;
        },
        getArrayDocete : function(){
            return this.docente;
        },

        setidDocente : function (id) {
            this.idDocente = id;
        },

        getidDocente : function () {
            return this.idDocente;
        }
    };


})();