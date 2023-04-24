	/*
	*
	*declaración de variables
	*input: caja de texto principal
	*boton: encriptar
	*label: muestra texto encriptado
	*
	*/
	var input = document.getElementById("entradaTexto")
	var botonEncriptar = document.getElementById("encriptar")
	var botonDesencriptar = document.getElementById("desencriptar")
	var ocultarLabel = document.getElementById("div-right")
	var label = document.getElementById("nuevoTexto")
	var botonCopiar = document.getElementById("copiar")
	var ocultarBotonCopiar = document.getElementById("contenedor-copiar")
	var imagen = document.getElementById("munheco")
	var informacion = document.getElementById("info")

	var letrasEncriptadas = ["ai","enter","imes","ober","ufat"]
	var letrasDesencriptadas = ['a','e','i','o','u']
	var textArray

	/*
	*
	*declaración de funciones
	*encriptar
	*desencriptar
	*remplazarCaracter
	*contarCaracteres
	*mostrarOcultos
	*copiarTexto
	*
	*/
	  function contarCaracteres() {

	    var contador = document.getElementById("contador");
	    var maximo = input.getAttribute("maxlength");
	    var actual = input.value.length;

	    var restante = 0
	    restante += actual;

	    contador.innerHTML = restante;
	}

	function remplazarCaracter(caracter,posicion){

		switch(caracter){
			case 'a': textArray[posicion] = letrasEncriptadas[0]
				break
			case 'e': textArray[posicion] = letrasEncriptadas[1]
				break
			case 'i': textArray[posicion] = letrasEncriptadas[2]
				break
			case 'o': textArray[posicion] = letrasEncriptadas[3]
				break
			case 'u': textArray[posicion] = letrasEncriptadas[4]
				break	
		}
	
	}

	function encriptar() {
		
		if (input.value.trim() != ""){
			textArray = []
			textArray = input.value.split("")
			var caracter

			for (var i = 0; i <= textArray.length; i++) {
				caracter = textArray[i]
				remplazarCaracter(caracter,i)
			}

			label.innerHTML = textArray.join('')
			
			input.value = "" 
			contarCaracteres()
			mostrarOcultos()
			return false;
		}

	}

	function desencriptar() {

		if (input.value.trim() != "") {
			label.innerHTML = input.value.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
			mostrarOcultos()
			input.value = "" 
			contarCaracteres()		
			return false;
		}	
	}

	function copiarTexto(){

	    let contenido = label.textContent;
	    let temporal = document.createElement('input');

	    temporal.value = contenido;
	    document.body.appendChild(temporal);

	    temporal.select();
	    document.execCommand('copy');

	    temporal.remove();
	    alert("Texto copiado en el portapapeles")
	}

	function mostrarOcultos(){
	    ocultarLabel.style.display = "block";
	    ocultarBotonCopiar.style.display = "inline";
	    imagen.style.display = "none"
	    informacion.style.display = "none"
	}

	botonEncriptar.onclick = encriptar
	botonDesencriptar.onclick = desencriptar
	botonCopiar.onclick = copiarTexto;

