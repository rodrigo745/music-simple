function validar(formulario){

    // Variables por Id tomadas del formulario
    var correo = document.getElementById('correoVacio');
    var contrasena = document.getElementById('contrasenaVacia');
    var confirmacion = document.getElementById('confirmacionVacia');
    var edad = document.getElementById('edad');
    var favorito = document.getElementById('favorito');
    var condiciones = document.getElementById('condiciones');

    // Validar correo con expresion regular
    var re =  /\S+@\S+\.\S+/;
    if(!re.test(formulario.email.value)){
        correo.innerHTML = "Email inválido";
        contrasena.innerHTML = "";
        confirmacion.innerHTML= "";
        edad.innerHTML = "";
        favorito.innerHTML = "";
        condiciones.innerHTML = "";
        return false;
    }
    // Contraseña
    if(formulario.contrasena.value.trim().length <= 7){
        correo.innerHTML = "";
        contrasena.innerHTML = "Contraseña invalida, mínimo 8 digitos";
        confirmacion.innerHTML = "";
        edad.innerHTML = "";
        favorito.innerHTML = "";
        condiciones.innerHTML = "";

        return false;
    }
    // Confirmacion de contraseña
    if(formulario.contrasena.value != formulario.confirmacion.value){
        correo.innerHTML = "";
        contrasena.innerHTML = "";
        confirmacion.innerHTML= "La confirmación no coincide con la contraseña";
        edad.innerHTML = "";
        favorito.innerHTML = "";
        condiciones.innerHTML = "";
        return false;
    }
    // Genero Favorito
    if(formulario.genFavorito.value == ""){
        correo.innerHTML = "";
        contrasena.innerHTML = "";
        confirmacion.innerHTML = "";
        edad.innerHTML = "";
        favorito.innerHTML = "Debes ingresar una opcion";
        condiciones.innerHTML = "";
        return false;
    }
    // Rango de edad
    if(formulario.flexRadioDefault.value == ""){
        correo.innerHTML = "";
        contrasena.innerHTML = "";
        confirmacion.innerHTML = "";
        edad.innerHTML = "Selecciona tu rango de edad";
        favorito.innerHTML = "";
        condiciones.innerHTML = "";
        return false;
    }
    
    // Terminos y condiciones
    if(!formulario.terminos.checked){
        correo.innerHTML = "";
        contrasena.innerHTML = "";
        confirmacion.innerHTML= "";
        edad.innerHTML = "";
        favorito.innerHTML = "";
        condiciones.innerHTML = "Debes aceptar para continuar";
        return false;
    }
    // Formulario enviado correctamente
    alert("Registro exitoso");
    return true;
}