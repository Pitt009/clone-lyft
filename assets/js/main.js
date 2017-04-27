var logo = document.getElementById('logo');
var imgBlanco = document.createElement('img');
var botonAparecer = document.createElement('button');
var encabezado = document.getElementById('seccion1');

imgBlanco.src = "assets/img/logo-white.png" ;
imgBlanco.className = "logoBlanco";
encabezado.appendChild(botonAparecer);
logo.appendChild(imgBlanco);

document.addEventListener("scroll", function() {
  if(window.scrollY > 50){
    cambioClase();
    cambiarTexto();
    cambiarImagen();
    aparecerBoton();
  }else{
    cambioClaseN();
    cambiarTextoN();
    cambiarImagenN();
    aparecerBotonN();
  }
});

function cambioClase() {
  encabezado.style.background = "white";
  }
function cambioClaseN() {
    var encabezado = document.getElementById('seccion1');
    encabezado.style.background = "rgba(51,52,7,0.2)";
    }

function cambiarImagen() {
  imgBlanco.src = "assets/img/logo-pink.png";
}
function cambiarImagenN() {
  imgBlanco.src = "assets/img/logo-white.png" ;
}
function cambiarTexto() {
  var menu = document.getElementsByClassName("menu-li");
  for (var i = 0; i < menu.length; i++) {
    menu[i].className = "menu-li textoNegro";
  };
 };
function cambiarTextoN() {
   var menu = document.getElementsByClassName("menu-li");
   for (var i = 0; i < menu.length; i++) {
     menu[i].className = "menu-li textoBlanco";
   };
  };
function aparecerBoton() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "inline-block";
}
function aparecerBotonN() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "none";
}




var botonEnviarForm = document.getElementById("enviarFormulario");
var botonSignRide = document.getElementById("signRide");
var inputIngresarNumero = document.getElementById("ingresarNumero");
var tituloFormulario=document.getElementById("tituloFormulario");
var textoSpanFormulario=document.getElementById("textoSpanFormulario")

botonEnviarForm.addEventListener("click",mostrarFormularioCompleto);
botonEnviarForm.addEventListener("click",cambiarColorBotonRosa);
botonEnviarForm.addEventListener("click",cambiarTextoTurnMiles)

botonSignRide.addEventListener("click",esconderFormularioCompleto);
botonSignRide.addEventListener("click",cambiarColorBotonNada);
botonSignRide.addEventListener("click", cambiarTextoMeetYour);

inputIngresarNumero.addEventListener("click",mostrarFormularioCompleto);
var divformulario= document.getElementById("imputsEscondidos");

function mostrarFormularioCompleto() {
  /*esta funcion debe de extender el formulario completo*/
  divformulario.className="extenderFormulario"; //clase a checar con estilos
}

function esconderFormularioCompleto() {
  /*esta funcion debe de esconder el formulario*/
  divformulario.className="esconderFormulario" //Esconde el formulario desde el css checar con estilos
}


function cambiarColorBotonRosa() {
  //esta funcion es para cambiar los colores de los botones del formulario
  botonEnviarForm.className="boton-rosa";
  botonSignRide.className="boton-nada";
}

function cambiarColorBotonNada(){
  botonEnviarForm.className="boton-nada";
  botonSignRide.className="boton-rosa";
}

function cambiarTextoMeetYour(){
    tituloFormulario.innerHTML="<strong>MEET YOUR <br> 5-STAR RIDE</strong>";
    textoSpanFormulario.innerHTML="SING UP FOR RIDE IN A TAP.";
}

function cambiarTextoTurnMiles(){
    //cambia el texto del formulario
    tituloFormulario.innerHTML="<strong>TURN MILES <br> INTO MONEY</strong>";
    textoSpanFormulario.innerHTML="SIGN UP TO DRIVE WITH LYFT.";
}
