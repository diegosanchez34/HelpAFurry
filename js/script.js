function validarusuario(){
    var camponombre1=document.getElementById('primerNombre').value;
    var camponombre2=document.getElementById("segundoNombre").value;
    var camponombre2=document.getElementById("primerApellido").value;
    var camponombre2=document.getElementById("segundoApellido").value;
    var campocorreo=document.getElementById('correo').value;
    if(camponombre1==""||camponombre2==""||primerApellido==""||segundoApellido==""||campocorreo==""){
        alert('Por favor rellene los campos');
    }else{
        alert("Está bien");
    }
  }
  function largo(){
    var minlargo=50;
    var campocomentario=document.getElementById('comentarios').val().length;
    if(campocomentario<minlargo){
        var campopelado = document.getElementById("errorlength");
        campopelado.parentNode.innerHTML = "<p>te pasaste</p>";
    }
}