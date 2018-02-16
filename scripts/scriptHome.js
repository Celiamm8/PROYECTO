var p = new Surtido(productos);
var servicios=[productos[0],productos[1],productos[2],productos[3],productos[4],productos[5],productos[6],productos[7]];
p.dibujarSurtido(servicios);

function verPorCms() {
  p.dibujarSurtido(p.filtrarCms());
}
function verPorTienda() {
  p.dibujarSurtido(p.filtrarTiendas());
}
function verPorSeo() {
  p.dibujarSurtido(p.filtrarSeo());
}
function verPorCorp() {
  p.dibujarSurtido(p.filtrarCorp());
}
function verPorMedida() {
  p.dibujarSurtido(p.filtrarMedida());
}
