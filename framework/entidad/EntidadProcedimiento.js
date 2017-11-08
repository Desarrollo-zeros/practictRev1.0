
var EntidadProcedimiento = EntidadProcedimiento || (function () {

    return {
        setArrayProcedimiento : function(data){
            this.Procedimiento = data;
        },
        getArrayProcedimiento : function(){
            return this.Procedimiento;
        },

        setidProcedimiento : function (id) {
            this.idProcedimiento = id;
        },

        getidProcedimiento : function () {
            return this.idProcedimiento;
        }
    };


})();