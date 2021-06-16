$.ajax({
    url: "datos.json"
}).done(function(respuesta){
    // Declarar las variables
    var uno = respuesta.canciones[0];
    var dos = respuesta.canciones[1];
    var tres = respuesta.canciones[2];
    var cuatro = respuesta.canciones[3];
    var cinco = respuesta.canciones[4];
    var seis = respuesta.canciones[5];
    var siete = respuesta.canciones[6];
    var ocho = respuesta.canciones[7];
    var nueve = respuesta.canciones[8];

    // obtener el numero de reproducciones
    var arrayL = [uno.reproducciones, dos.reproducciones, tres.reproducciones, 
        cuatro.reproducciones, cinco.reproducciones, seis.reproducciones, 
        siete.reproducciones, ocho.reproducciones, nueve.reproducciones];

    // Ordenar de mayor a menor
    arrayL.sort((a, b) => b - a);

    // Colocar las 3 mayores
    var luUno = arrayL[0];
    var luDos = arrayL[1];
    var luTres = arrayL[2];

    // Comparar e imprimir
    switch (luUno) {
        // Primer lugar
        case uno.reproducciones:
            var divUno = `<h6 class="col-4 text-primary tpUno">${uno.nombre}</h6>
            <audio src="canciones/${uno.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divUno;
          break;
          case dos.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${dos.nombre}</h6>
            <audio src="canciones/${dos.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case tres.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${tres.nombre}</h6>
            <audio src="canciones/${tres.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case cuatro.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${cuatro.nombre}</h6>
            <audio src="canciones/${cuatro.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case cinco.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${cinco.nombre}</h6>
            <audio src="canciones/${cinco.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case seis.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${seis.nombre}</h6>
            <audio src="canciones/${seis.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case siete.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${siete.nombre}</h6>
            <audio src="canciones/${siete.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
          case ocho.reproducciones:
            var divOcho = `<h6 class="col-4 text-primary tpUno">${ocho.nombre}</h6>
            <audio src="canciones/${ocho.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divOcho;
          break;
          case nueve.reproducciones:
            var divDos = `<h6 class="col-4 text-primary tpUno">${nueve.nombre}</h6>
            <audio src="canciones/${nueve.ruta}" class="col-8 col-md-4" controls></audio>`;
            document.getElementById("lugarUno").innerHTML = divDos;
          break;
        default:
            console.log("No hay coincidencias");
          break;
      }

    // Segundo lugar
      switch (luDos) {
       case uno.reproducciones:
        var divUno = `<h6 class="col-4 text-primary tpUno">${uno.nombre}</h6>
        <audio src="canciones/${uno.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divUno;
      break;
      case dos.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${dos.nombre}</h6>
        <audio src="canciones/${dos.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case tres.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${tres.nombre}</h6>
        <audio src="canciones/${tres.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case cuatro.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${cuatro.nombre}</h6>
        <audio src="canciones/${cuatro.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case cinco.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${cinco.nombre}</h6>
        <audio src="canciones/${cinco.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case seis.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${seis.nombre}</h6>
        <audio src="canciones/${seis.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case siete.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${siete.nombre}</h6>
        <audio src="canciones/${siete.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
      case ocho.reproducciones:
        var divOcho = `<h6 class="col-4 text-primary tpUno">${ocho.nombre}</h6>
        <audio src="canciones/${ocho.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divOcho;
      break;
      case nueve.reproducciones:
        var divDos = `<h6 class="col-4 text-primary tpUno">${nueve.nombre}</h6>
        <audio src="canciones/${nueve.ruta}" class="col-8 col-md-4" controls></audio>`;
        document.getElementById("lugarDos").innerHTML = divDos;
      break;
    default:
        console.log("No hay coincidencias");
      break;
  }


  // Tercer lugar
  switch (luTres) {
    case uno.reproducciones:
     var divUno = `<h6 class="col-4 text-primary tpUno">${uno.nombre}</h6>
     <audio src="canciones/${uno.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divUno;
   break;
   case dos.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${dos.nombre}</h6>
     <audio src="canciones/${dos.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case tres.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${tres.nombre}</h6>
     <audio src="canciones/${tres.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case cuatro.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${cuatro.nombre}</h6>
     <audio src="canciones/${cuatro.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case cinco.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${cinco.nombre}</h6>
     <audio src="canciones/${cinco.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case seis.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${seis.nombre}</h6>
     <audio src="canciones/${seis.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case siete.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${siete.nombre}</h6>
     <audio src="canciones/${siete.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
   case ocho.reproducciones:
     var divOcho = `<h6 class="col-4 text-primary tpUno">${ocho.nombre}</h6>
     <audio src="canciones/${ocho.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divOcho;
   break;
   case nueve.reproducciones:
     var divDos = `<h6 class="col-4 text-primary tpUno">${nueve.nombre}</h6>
     <audio src="canciones/${nueve.ruta}" class="col-8 col-md-4" controls></audio>`;
     document.getElementById("lugarTres").innerHTML = divDos;
   break;
 default:
     console.log("No hay coincidencias");
   break;
}

});
