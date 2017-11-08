

/* global Include */

console.log("cargando router.....");




function includes(){
     Include.añadireModelo("ModeloUsuario.js");
     Include.añadirLibreria("libSesion.js");
     Include.añadirEntidad("EntidadUsuario.js");
     Include.añadireModelo("ModeloHerramientas.js");
     Include.añadirControlador("ControladorUsuario.js")
     Include.añadireModelo("ModeloPanel.js");
     Include.añadirControlador("ControladorPanel.js");
     Include.añadirEntidad("EntidadDocente.js");
     Include.añadirEntidad("EntidadModulo.js");
     Include.añadirControlador("ControladorModulo.js");
     Include.añadireModelo("ModeloModulo.js");
     Include.añadirControlador("ControladorProcedimiento.js");
     Include.añadirEntidad("EntidadProcedimiento.js");
     Include.añadireModelo("ModeloProcedimiento.js");
}

$(document).ready(function(){

   var URLactual = window.location.href;

    includes();
   
   switch(URLactual){
       
      /*case "http://localhost/Practict/"  :
       case "http://localhost/Practict/#" : 
       case "http://localhost/Practict/#callaction" :
       case "http://localhost/Practict/#login" : */
     
      
        default : console.log("router no pudo cargar el archivo");
   }
   
});






