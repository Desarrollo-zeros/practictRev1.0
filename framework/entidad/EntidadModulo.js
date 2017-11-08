
var EntidadModulo = EntidadModulo || (function () {

    return {
        setArrayModulo : function(data){
            this.docente = data;
        },
        getArrayModulo : function(){
            return this.docente;
        },

        setidmodulo : function (id) {
            this.idDocente = id;
        },

        getidmodulo : function () {
            return this.idDocente;
        }

    };


})();