function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
if(valor === undefined){
  return true;
} else if (valor === null){
  return true;
} else if (typeof valor === 0){
  return false;
} else if (typeof valor === false){
  return false;
} else if (typeof valor === String()){
  return false;
} else if (typeof valor === Object){
  return false;
} else {
  return false;
}
}


module.exports = esNuloOIndefinido;