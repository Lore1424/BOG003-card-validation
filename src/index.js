import validator from './validator.js';

console.log(validator);

/*function btnComprar(){
    document.getElementById("Bienvenida").style.display="none";
    document.getElementById("datos").removeAttribute("hidden");
    document.getElementById("datos").style.display="block";
}

//Averiguar cómo podríamos evitar tener que hacer ID por cada botón
document.getElementById("btnUno").addEventListener("click", btnComprar); 
document.getElementById("btnDos").addEventListener("click", btnComprar);*/

document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', e => {
    document.getElementById('Bienvenida').setAttribute('hidden','');
    document.getElementById('datos').removeAttribute('hidden');
}))