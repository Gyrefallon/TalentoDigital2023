// funcion contador de items en forma de tabla
let count = 0;
      let sum = 0;
      let cart = {};
      
      if (localStorage.getItem("count")) {
          count = parseInt(localStorage.getItem("count"));
      }
      
      if (localStorage.getItem("sum")) {
          sum = parseInt(localStorage.getItem("sum"));
      }
      
      if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
      }
      
      updateCart();
      
      let btns = document.querySelectorAll(".products button");
      
      for (let i = 0; i < btns.length; i++) {
          let btn = btns[i];
          btn.addEventListener("click", add);
      
          // id = btn.dataset.id;
          // if (cart.indexOf(id) >= 0) {
          //     btn.className = "added";
          //     btn.textContent = "Remove";
          // }
      }
      
      function add(event) {
          let price = Number(event.target.dataset.price);
          let title = event.target.dataset.title;
          let id = event.target.dataset.id;
      
      if (id in cart) {
          cart[id].qty++;
      } else {
          let cartItem = {
              title: title,
              price: price,
              qty: 1
          };
          cart[id] = cartItem
      }
      
          count++;
          sum += price;
      
          console.log(cart);
      
          // let index = cart.indexOf(event.target.dataset.id);
          // if (index >= 0) {
          //     cart.splice(index, 1);
          //     count--;
          //     sum -= price;
          //     event.target.className = "";
          //     event.target.textContent = "Add to cart";
          // } else {
          //     cart.push(event.target.dataset.id);
          //     count++;
          //     sum += price;
          //     event.target.className = "added";
          //     event.target.textContent = "Remove";
          // }
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCart();
      }
      
      function updateCart() {
          document.getElementById("sum").textContent = sum;
          document.getElementById("count").textContent = count;
          localStorage.setItem("sum", sum);
          localStorage.setItem("count", count);
      }
//funcion para borrar todos los items del carro
function deleteItems() {
    localStorage.clear();
    window.location.reload();
    
}
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
    };}
    
function nComentario(){
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevocomentario").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if(valorIngresado === ''){
        alert("Ingrese un comentario!")
    } else {
        document.getElementById("comentarios").appendChild(li);
    }
    document.getElementById("nuevocomentario").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i;
    for (i= 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function myFunction() {
        if(sum > 0){
            alert("Has pagado con exito!");
        }
        else{
            alert("No hay articulos en el carro")
        }
    }