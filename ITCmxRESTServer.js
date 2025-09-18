var authString;
var connectionInfo;

function ConectarServidor(URL, Puerto, Usuario, UID) {
  setConnection(URL, Puerto, '');
  setCredentials(Usuario, UID);

  authString = null;
  if (AdminInst != null) {
    if (AdminInst.authentication != null) {
      authString = AdminInst.authentication;
    }
    connectionInfo = JSON.stringify(AdminInst.connectionInfo);
  }
}

function GenerateURL(file, directorio) {
  var url = window.location.href
  var arr = url.split("/");
  var sFile = arr[0] + "//" + arr[2] + "/" + directorio + "/" + file;
  return sFile
}

function downloadFile(url, name) {
  //const blob = fetch(url).then(r => r.blob())
  //const miurl = URL.createObjectURL(blob)
  console.log("Descargando archivo: " + url);

  let link = document.createElement('a');
  link.download = name;
  link.href = url;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();  
  window.URL.revokeObjectURL(url);

  link.remove();
}