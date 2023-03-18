

let botonOcultar = document.getElementById("botonOcultar");

let ocultarTexto = document.getElementById("ocultarTexto");

botonOcultar.addEventListener('click',toggleText);
	function toggleText(){
		ocultarTexto.classList.toggle('mostrar');

	}




