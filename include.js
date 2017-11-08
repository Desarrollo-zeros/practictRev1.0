
var Include = Include || (function() {
    
    return {
     
     añadirEntidad: function(filename) {
       var url = "framework/entidad/";
        var sc = document.createElement("script");
        sc.setAttribute("src", url+filename);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
        console.log("Cargando Entidad " + filename);
     },
     
     añadireModelo: function(filename) {
       var url = "framework/modelo/";
        var sc = document.createElement("script");
        sc.setAttribute("src", url+filename);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
        console.log("cargado Modelo " + filename);
     },
     
     añadirControlador: function(filename) {
       var url = "framework/controlador/";
        var sc = document.createElement("script");
        sc.setAttribute("src", url+filename);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
        console.log("cargado Controlador " + filename);
     },
     
     añadirLibreria :function(filename){
         
        var url = "framework/libreria/";
        var sc = document.createElement("script");
        sc.setAttribute("src", url+filename);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
        console.log("cargado Libreria " + filename);
         
     },
     
     añadirRouter :function(filename){
         
        var url = "framework/router/";
        var sc = document.createElement("script");
        sc.setAttribute("src", url+filename);
        sc.setAttribute("type", "text/javascript");
        document.head.appendChild(sc);
        console.log("cargado Libreria " + filename);
         
     },
      
     informacionDeUso : function(){
        console.log("usuario online : " + EntidadUsuario.getUsuario);
        console.log("Datos JSON Session : " + Session.dump());
        console.log("Datos Storage:" + sessionStorage.getItem("usuario"));
     }, 
     
     
    };
    
})();


Include.añadirRouter("router.js");