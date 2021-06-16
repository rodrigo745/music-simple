function sesion(formu){
    // Variables por Id tomadas del formulario
    var correo = document.getElementById('correoVacio');
    var password = document.getElementById('passVacia');

    // Validar correo con expresion regular
    var re =  /\S+@\S+\.\S+/;
    if(!re.test(formu.email.value)){
        correo.innerHTML = "Correo inválido";
        password.innerHTML = "";
        return false;
    }
    // Contraseña
    if(formu.contrasena.value.trim().length <= 8){
        correo.innerHTML = "";
        password.innerHTML = "Contraseña inválida, minimo 8 digitos";
        return false;
    }
    alert("Sesión iniciada correctamente");
    return true;
}