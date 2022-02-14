function mostrar(){
    let edad = document.getElementById("number").value;
    let nombre = document.getElementById("nombre").value;
	if (edad < 18) {
		alert(nombre + " Eres menor de edad");}
	else{
		alert(nombre + " Eres mayor de edad");}
}
