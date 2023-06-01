/* Funciones para inicio de sesion
** Última modificacion: 01 de junio de 2023 (2023/06/01)
** 
*/

function Habilitar(AEnabled) {
  $("#edUsuario").prop("disabled", !AEnabled);
  $("#edClave").prop("disabled", !AEnabled);
  $("#btnIniciarSesion").prop("disabled", !AEnabled);
}

function jsIniciarSesion() {
  Habilitar(false);  
  sUsuario = $("#edUsuario").val();
  sClave = $("#edClave").val();

  var params = {
    AUsuario: $("#edUsuario").val(),
    AClave: $("#edClave").val()
  };

  $.ajax({
    type: 'POST',
    url: '/Seguridad/Login',
    data: params,
    success: function (response) {
      console.log(response);
      if (response == 0)
        alert("Nombre de usuario o clave incorrectos");
      else if (response == -1)
        alert("No tiene acceso al sistema");
      else if (response > 0)
        location.href = "/home";
      else
        alert("Error no especificado");

      Habilitar(true);
      $("#edUsuario").focus();
      $("#spin").hide();
    },
    error: function (xhr, status, error) {
      var sError = xhr.status + ": " + error;
      showAlertError('Ocurrió un problema: ' + sError, 'alert-danger');
      Habilitar(true);
      $("#edUsuario").focus();
      $("#spin").hide();
    }
  });  
}

$(function () {
  $("#divSpinner").addClass("d-none");
});