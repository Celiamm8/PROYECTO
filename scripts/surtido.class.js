'use strict'
function Surtido(productos){
  this.productos = productos;

	  function verPorCms(p){
        return p.cms == true;
      }
	  function verPorTienda(p){
        return p.tienda == true;
      }
      function verPorSeo(p){
        return p.seo == true;
      }
      function verPorCorp(p){
        return p.wCorp == true;
      }
      function verPorMedida(p){
        return p.wMedida == true;
      }
      this.filtrarCms = function(){
        var filt = this.productos.filter(verPorCms);
        return filt;
      }
      this.filtrarTiendas = function(){
        var filt = this.productos.filter(verPorTienda);
        return filt;
      }
      this.filtrarSeo = function(){
        var filt = this.productos.filter(verPorSeo);
        return filt;
      }
      this.filtrarCorp = function(){
        var filt = this.productos.filter(verPorCorp);
        return filt;
      }
      this.filtrarMedida = function(){
        var filt = this.productos.filter(verPorMedida);
        return filt;
      }


      this.dibujarSurtido = function(produ){
        cuerpo.innerHTML = " ";
        var str = "";
        if (produ == undefined) {
          for (var i = 0; i < this.productos.length; i++) {
            str += "<div>";
            str += "<img src=" +this.productos[i].foto + " alt = '"
            str += this.productos[i].nombre+"'>";
            str += "<p>"+ this.productos[i].nombre+"</p>";
            str += "<p> Descripción: "+ this.productos[i].descripcion+"</p>";
          str += "</div>";
          }
        }else {
        for (var i = 0; i <produ.length; i++) {
          str += "<div>";
            str += "<img src='" +produ[i].foto + "' alt = '"
            str += produ[i].nombre+"'>";
            str += "<p> El producto:"+ produ[i].nombre+"</p>";
            str += "<p> "+ produ[i].descripcion+"</p>";
            str += "</div>";
          }
        }
        cuerpo.innerHTML = str;
      }
  }
