function date(){
    document.getElementById('MostrarFecha').innerHTML = Date();
}
document.getElementById("numeros").addEventListener("keydown", e => e.keyCode != 38 && e.keyCode != 40 && e.preventDefault()); //El usuario solo puede utlizar las flechas arriba y abajo en el teclado
const input = document.querySelector("#numeros"); //Selecciona la etiqueta que tenga un id, aqui por ejemplo está seleccionando a la etiqueta que tenga el ID de numeros
const valueInput = document.getElementById("texto"); //Selecciona todos los elementos con la ID especificada.
input.addEventListener('change',numero);//el addEventListener recibe dos parametros toma el evento change  y lo pone a escuchar,
//y un segundo argumento para llamar cada vez que se desencadena el evento descrito.


function numero(numeros){
    if ((numeros.target.value>0) && (numeros.target.value<=3)){ //si el valor de la etiqueta es mayor a 0 y es menor o igual a 3 entonces:
        valueInput.innerText = "Muy deficiente";//Muestra eso en la pantalla
    }
    if ((numeros.target.value>3) && (numeros.target.value<=5)){
        valueInput.innerText = "Insuficiente";
    }
    if ((numeros.target.value>5) && (numeros.target.value<=6)){
        valueInput.innerText = "Suficiente";
    }
    if ((numeros.target.value>6) && (numeros.target.value<=7)){
        valueInput.innerText = "Bien";
    }
    if ((numeros.target.value>7) && (numeros.target.value<=9)){
        valueInput.innerText = "Notable";
    }
    if ((numeros.target.value>9) && (numeros.target.value<=10)){
        valueInput.innerText = "Excelente";
    }
}

