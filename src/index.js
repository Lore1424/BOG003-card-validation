import validator from './validator.js';

//Esta función maneja el click en el btn para la compra del juego 1
document.getElementById('btnUno').addEventListener('click', () => {
  document.getElementById('bienvenida').setAttribute('hidden', '');
  document.getElementById('datos').removeAttribute('hidden');
  document.getElementById('mostrarPrecio').innerHTML = '109.900';

})
//Esta función maneja el click en el btn para la compra del juego 2
document.getElementById('btnDos').addEventListener('click', () => {
  document.getElementById('bienvenida').setAttribute('hidden', '');
  document.getElementById('datos').removeAttribute('hidden');
  document.getElementById('mostrarPrecio').innerHTML = '363.152';
})
//Este evento del click despliega todas las funciones para la validacion y enmascarar el numero de la tarjeta.
document.getElementById('finalCompra').addEventListener('click', () => {
  let creditCardNumber = document.getElementById('num').value;
  let datoName = document.getElementById('name').value;
  datoTarjetaValido(creditCardNumber);
  validaDatoName(datoName);
  const esvalido = datoTarjetaValido(creditCardNumber)
  if (esvalido) {
    return;
  } else {

    datoTarjetaValido(creditCardNumber)
  }
  const validaName = validaDatoName(datoName)
  if (validaName) {
    return;
  } else {
    validaDatoName(datoName)
  }
  const cantidad = cantidadValida(creditCardNumber)
  if (cantidad) {
    cantidadValida(creditCardNumber)
  } else {
    return;
  }
  const validacionTarjeta = validarTarjeta(creditCardNumber);
  if (validacionTarjeta) {
    maskifyTarjeta(creditCardNumber);
  }

  mostrarNombre(datoName);
})
//Esta función valida que el campo si reciba dato.
function datoTarjetaValido(creditCardNumber) {
  if (creditCardNumber === "") {
    document.getElementById('numTarj').innerHTML = "Este campo es obligatorio";
    return true;
  } else {
    return false;
  }
}

//Esta función valida que solo el campo contenga 16 dígitos
function cantidadValida(creditCardNumber) {
  if (creditCardNumber.length != 15) {
    document.getElementById('cantTarj').innerHTML = "Este campo requiere 16 dígitos"
    return true;
  } else {
    return false;
  }}

 //Esta función valida que el campo nombre si reciba dato
  function validaDatoName(datoName) {
    if (datoName === "") {
      document.getElementById('nameOblig').innerHTML = "Este campo es obligatorio"
      return true;
    } else {
      return false;
    }
  }
 //Esta función se encarga de validar que la función isvalid retorne true. y permite el paso a la siguiente pantalla
  function validarTarjeta(creditCardNumber) {
    let valid = validator.isValid(creditCardNumber)
    if (valid === true) {
      document.getElementById('datos').setAttribute('hidden', '');
      document.getElementById('validacion').removeAttribute('hidden');
      return true
    } else {
      document.getElementById('verify').innerHTML = 'Tu tarjeta no es valida';
    }
  }
  
  //Esta función se encarga de llamar a la funcion maskify del objeto validator e imprimirla en el html
  function maskifyTarjeta(creditCardNumber) {
    document.getElementById('numCard').innerHTML = validator.maskify(creditCardNumber)

  }

  //Esta función se encarga de mostrar el nombre en mayuscula en el resumen de la compra

  function mostrarNombre(datoName) {

    document.getElementById('nombre').innerHTML = datoName.toUpperCase()

  }

  //Esta función se encarga de retornar al inicio (primera pantalla) y recargar la app

  document.getElementById('btnInicio').addEventListener('click', () => {

    document.getElementById('validacion').setAttribute('hidden', '');
    document.getElementById('bienvenida').removeAttribute('hidden');
    location.reload();

  })
