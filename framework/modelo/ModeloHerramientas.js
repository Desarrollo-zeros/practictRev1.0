/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*Modelo herramientas*/


var ModeloHerramientas = ModeloHerramientas || (function(){
    
   return {
        validarString : function(string){
        if(string.length === 0 || string === null || string === ""){
            return true; //vacio
        }
    },
       validarEmail : function (email) {
           if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
               return true;
           } else {
               return false;
           }
       }
       
   };
    
})();
