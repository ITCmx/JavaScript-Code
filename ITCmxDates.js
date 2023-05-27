function calcularDiasEntreFechas(fecha1, fecha2) {
  // Convertir las fechas a objetos Date
  var fechaInicio = new Date(fecha1);
  var fechaFin = new Date(fecha2);

  // Calcular la diferencia en milisegundos
  var diferencia = fechaFin.getTime() - fechaInicio.getTime();

  // Convertir la diferencia a días
  var dias = Math.ceil(diferencia / (1000 * 3600 * 24));

console.log(dias);

  return dias;
}