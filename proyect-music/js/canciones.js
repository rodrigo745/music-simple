$.ajax({
    url: "datos.json"
}).done(function(respuesta){
    var divUno = `<div class="card">
                    <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                        <img src="imagenes/icon_${respuesta.canciones[0].icono}.svg" width="100px" class="" alt="">
                    </div>
                    <div class="card-body m-auto">
                        <h5 class="card-title text-center tpDos">${respuesta.canciones[0].nombre}</h5>
                        <audio src="canciones/${respuesta.canciones[0].ruta}" controls></audio>
                    </div>
                </div>`;
    var divDos = `<div class="card">
                    <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                        <img src="imagenes/icon_${respuesta.canciones[1].icono}.svg" width="100px" class="" alt="">
                    </div>
                    <div class="card-body m-auto">
                        <h5 class="card-title text-center tpDos">${respuesta.canciones[1].nombre}</h5>
                        <audio src="canciones/${respuesta.canciones[1].ruta}" controls></audio>
                    </div>
                </div>`;
    var divTres =`<div class="card">
                    <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                        <img src="imagenes/icon_${respuesta.canciones[2].icono}.svg" width="100px" class="" alt="">
                    </div>
                    <div class="card-body m-auto">
                        <h5 class="card-title text-center tpDos">${respuesta.canciones[2].nombre}</h5>
                        <audio src="canciones/${respuesta.canciones[2].ruta}" controls></audio>
                    </div>
                </div>`;
    var divCuatro =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[3].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[3].nombre}</h5>
                            <audio src="canciones/${respuesta.canciones[3].ruta}" controls></audio>
                        </div>
                    </div>`;
    var divCinco =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[4].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[4].nombre}</h5>
                            <audio src="canciones/${respuesta.canciones[4].ruta}" controls></audio>
                        </div>
                    </div>`;
    var divSeis =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[5].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[5].nombre}</h5>
                            <audio src="canciones/${respuesta.canciones[5].ruta}" controls></audio>
                        </div>
                    </div>`;
    var divSiete =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[6].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[6].nombre}</h5>
                            <audio src="canciones/${respuesta.canciones[6].ruta}" controls></audio>
                        </div>
                    </div>`;
    var divOcho =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[7].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[7].nombre}</h5>
                            <audio src="canciones/${respuesta.canciones[7].ruta}" controls></audio>
                        </div>
                    </div>`;
    var divNueve =`<div class="card">
                        <div class="m-auto bg-gris w-100 d-flex justify-content-center">
                            <img src="imagenes/icon_${respuesta.canciones[8].icono}.svg" width="100px" class="" alt="">
                        </div>
                        <div class="card-body m-auto">
                            <h5 class="card-title text-center tpDos">${respuesta.canciones[8].nombre}</h5>
                            <audio  src="canciones/${respuesta.canciones[8].ruta}" controls></audio>
                        </div>
                    </div>`;
    // Llamando a los elementos
    document.getElementById("divUno").innerHTML = divUno;
    document.getElementById("divDos").innerHTML = divDos;
    document.getElementById("divTres").innerHTML = divTres;
    document.getElementById("divCuatro").innerHTML = divCuatro;
    document.getElementById("divCinco").innerHTML = divCinco;
    document.getElementById("divSeis").innerHTML = divSeis;
    document.getElementById("divSiete").innerHTML = divSiete;
    document.getElementById("divOcho").innerHTML = divOcho;
    document.getElementById("divNueve").innerHTML = divNueve;
});



