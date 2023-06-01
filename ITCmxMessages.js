/* Funciones para mensajes
** Última modificacion: 01 de junio de 2023 (2023/06/01)
** 
*/

/* Mensajes */
function AjaxError(xhr, status, error) {
  var sError = xhr.status + ": " + error;
  //console.log(xhr);
  showAlert('Ocurri&oacute; un problema (' + sError + ') ' + xhr.responseText, 'alert-danger', 0);
}

function AjaxErrorContenedor(contenedor, xhr, status, error) {
  var sError = xhr.status + ": " + error;
  //console.log(xhr);
  showAlertContainer(contenedor, 'Ocurri&oacute; un problema (' + sError + ') ' + xhr.responseText, 'alert-danger', 0);
}

const AlertCloseTime = 3000;

function showAlertContainer(contenedor, message, alerttype, notimeout) {
  $(contenedor).append(
    '<div id="alertdiv" class="alert alert-dismissible fade show ' + alerttype + ' my-2 mx-2">' +
    '<span>' + message + '</span>' +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
    '</div>');

  if (notimeout === undefined)
    setTimeout(function () {
      $("#alertdiv").fadeOut();
    }, AlertCloseTime);
}

function showAlert(message, alerttype, notimeout) {
  $('#Contenido').before(
    '<div id="alertdiv" class="alert alert-dismissible fade show ' + alerttype + ' my-2 mx-2">' +
    '<span>' + message + '</span>' +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
    '</div>');

  if (notimeout === undefined)
    setTimeout(function () {
      $("#alertdiv").fadeOut();
    }, AlertCloseTime);
}

function showAlertError(message) {
  $('#Contenido').before(
    '<div class="alert alert-dismissible fade show alert-danger my-2 mx-2">' +
    '<span>' + message + '</span>' +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
    '</div>');
}

