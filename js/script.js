function validarusuario(){
    var camponombre1=$("#primerNombre").val();
    var camponombre2=$("#segundoNombre").val();
    var camponombre2=$("#primerApellido").val();
    var camponombre2=$("#segundoApellido").val();
    var campocorreo=$("#correo").val();
    if(camponombre1==""||camponombre2==""||primerApellido==""||segundoApellido==""||campocorreo==""){
        alert('Por favor rellene los campos');
    }
    else{
        if (largo()==false){
            alert ("No cumple con el largo en el comentario");
        }
        else{
            if(validarnumeros()==false){
                alert('No puede incluir letras en el celular');
        }
        else{
            alert("Su formulario ha sido enviado");
        } 
        }
    }
    
    
}

function largo(){

    var minlargo=50;
    var campocomentario=$("#comentarios").val().length;
    if(campocomentario<minlargo){
        var campopelado = $("#errorlength");
        return false;
    }
    else return true;
}
function validarnumeros(){
    var aceptados=/^[0-9]+$/;
    var campocel=document.getElementById("numeroTelefono").value;
    if(!aceptados.test(campocel)){
      return false;
    }else
      return true;
  }

function limpiar(){
    $(document).ready(function() {
        $("input[type='reset']").click(function() {
          $(".formulario")[0].reset();
        });
      });
}

 /*
 
function validarusuario(){
    var camponombre1=document.getElementById('primerNombre').value;
    var camponombre2=document.getElementById("segundoNombre").value;
    var camponombre2=document.getElementById("primerApellido").value;
    var camponombre2=document.getElementById("segundoApellido").value;
    var campocorreo=document.getElementById('correo').value;
    if(camponombre1==""||camponombre2==""||primerApellido==""||segundoApellido==""||campocorreo==""){
        alert('Por favor rellene los campos');
    }else{
        alert("Su formulario ha sido enviado");
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

 function largo(){
    var minlargo=50;
    var campocomentario=document.getElementById('comentarios').val().length;
    if(campocomentario<minlargo){
        var campopelado = document.getElementById("errorlength");
        campopelado.parentNode.innerHTML = "<p>te pasaste</p>";
    }
}*/