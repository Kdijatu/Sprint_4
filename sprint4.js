const busquedaForm = document.getElementById('busqueda');
const loginForm = document.getElementById('loginForm');
const registroForm = document.getElementById('resgistroForm');


// Creo que no he connectado bien el docuemnto html con el de js

//FUNCION PARA VALIDAR LAS BUSQUEDAS
function busquedaValidate(){

	var acumErroresBus = 0;

	busquedaForm.class.List.remove('is-invalid');

	var inputBusqueda = document.getElementById('busqueda'); 

	if(inputBusqueda.value == "") {
		inputBusqueda.classList.add("is-invalid");
		document.getElementById("errorBusqueda").textContent = "Introduzca un elemento de busqueda busqueda";
        acumErroresBus ++;
    }else if(!validar_busqueda(inputBusqueda.value)){ 
		inputBusqueda.classList.add("is-invalid");
		document.getElementById("errorBusqueda").textContent = "La busqueda debe tener un mínimo de 3 crácteres";
		acumErroresBus ++;
	}

}


//FUNCION PARA VALIDAR LOS DATOS DE LOGIN
function loginValidate(){

	var acumErroresLog = 0;

	loginForm.classList.remove('is-invalid');
	var inputLoginEmail = document.forms["loginForm"]["loginEmail"];
	var inputLoginPassword= document.forms["loginForm"]["loginPassword"];

	if(inputLoginEmail.value == "") {
		inputLoginEmail.classList.add("is-invalid");
		document.getElementById("errorLoginEmail").textContent = "Este campo es obligatorio";
        acumErroresLog ++;
    }else if(!validar_email(inputLoginEmail.value)){
		inputLoginEmail.classList.add("is-invalid");
		document.getElementById("errorLoginEmail").textContent = "El email no cumple el formato";
		acumErroresLog ++;
	}

    if(inputLoginPassword.value == "") {           
		inputLoginPassword.classList.add("is-invalid");
		document.getElementById("errorLoginPassword").textContent = "Este campo es obligatorio";
		acumErroresLog ++;

}


//FUNCION PARA VALIDAR LOS DATOS DEL REGISTRO 
function registerValidate() {
	var acumErrores = 0;
	
	registroForm.classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('email');
	var inputName = document.forms["registroForm"]["name"];
	var inputSurname = document.forms["registroForm"]["surname"];
	var inputProvince = document.forms["registroForm"]["province"];
	var inputPassword = document.forms["registroForm"]["password"];
	var inputRePassword = document.forms["registroForm"]["re-password"];

	if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Este campo es oligatorio";
		acumErrores ++;
	}

	if(inputSurname.value == "") {
		inputSurname.classList.add("is-invalid");
		document.getElementById("errorSurname").textContent = "Este campo es oligatorio";
		acumErrores ++;
	}

	if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Seleccione una provincia";
		acumErrores ++;
	}

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {           
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}

		//////////////// REVISAR ESTE IF
	if(inputRePassword.value == !inputPassword) {           
		inputRePassword.classList.add("is-invalid");
		document.getElementById("errorRePassword").textContent = "La contraseña no coincide";
		acumErrores ++;
	}
	

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}


/***************************** ESTA PARTE DEL CODIGO ESTABA EN EL EJEMPLO PERO NO ENTIENDO CUAL ES SU FUNCIÓN
registroForm.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidate();
}, true); */ 

function validar_busqueda(palabra) {
	var regex = /^.{3,}$/;
	return regex.test(palabra) ? true : false;
}


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
