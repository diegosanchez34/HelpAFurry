function validarusuario(){
    var camponombre1=document.getElementById('primerNombre').value;
    var camponombre2=document.getElementById("segundoNombre").value;
    var camponombre2=document.getElementById("primerApellido").value;
    var camponombre2=document.getElementById("segundoApellido").value;
    var campocorreo=document.getElementById('correo').value;
    if(camponombre1==""||camponombre2==""||primerApellido==""||segundoApellido==""||campocorreo==""){
        alert('Ta vacio');
    }else{
        alert("Ta ien");
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
function validarnumeros(){
    var aceptados=/^[0-9]+$/;
    var campocel=document.getElementById("numerocel").value;
    if(campocel.match(aceptados)){

    }else{
        alert("Ta maloooooo");
    }
}