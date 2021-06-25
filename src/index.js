import validator from './validator.js';

console.log(validator);

document.getElementById('btnUno').addEventListener('click', e => {
    document.getElementById('Bienvenida').setAttribute('hidden','');
    document.getElementById('datos').removeAttribute('hidden');
    document.getElementById('mostrarPrecio').innerHTML = '109.900';
    
})

document.getElementById('btnDos').addEventListener('click', e => {
  document.getElementById('Bienvenida').setAttribute('hidden','');
  document.getElementById('datos').removeAttribute('hidden');
  document.getElementById('mostrarPrecio').innerHTML = '363.152';  
})

document.getElementById("finalcompra").addEventListener("click", () =>{
    let creditCardNumber = document.getElementById('num').value;
    let datoName = document.getElementById('name').value;
    datoName = datoName.toUpperCase();
    localStorage.setItem("name", datoName);
    if (datoName === "") {
      alert("Por favor, ingrese su nombre");
    }
    let valid = validator.isValid(creditCardNumber);
    let ocultar = validator.maskify(creditCardNumber);
    if(valid === true){
      document.getElementById('datos').setAttribute('hidden','');
      document.getElementById('validacion').removeAttribute('hidden');
      document.getElementById('numCard').innerHTML = ocultar;
    }else{
      document.getElementById('verify').innerHTML = 'Tu tarjeta no es valida, por favor verifica el número ingresado.';
    }
    function mostrarnombre() {
      document.getElementById("nombre").innerHTML = localStorage.getItem("name");
    }
    mostrarnombre();
 })

 document.getElementById('btnInicio').addEventListener('click', () =>{
    document.getElementById('validacion').setAttribute('hidden','');
    document.getElementById('Bienvenida').removeAttribute('hidden');
 })


