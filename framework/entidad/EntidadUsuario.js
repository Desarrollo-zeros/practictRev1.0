
var EntidadUsuario = EntidadUsuario || (function(){
    
    
    return {
        setUsuario : function(usuario){
            this.usuario = usuario;
        },
        getUsuario : function(){
            return this.usuario;
        },
        
        setClaveDeAcceso : function(claveDeAcceso){
            this.claveDeAcceso = claveDeAcceso;
        },
        
        getClaveDeAcceso : function(){
            return this.claveDeAcceso;
        }
    };
})();
 

