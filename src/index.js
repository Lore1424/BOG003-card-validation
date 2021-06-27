import validator from './validator.js';

console.log(validator);

document.getElementById('btnUno').addEventListener('click', e => {
  document.getElementById('bienvenida').setAttribute('hidden', '');
  document.getElementById('datos').removeAttribute('hidden');
  document.getElementById('mostrarPrecio').innerHTML = '109.900';

})

document.getElementById('btnDos').addEventListener('click', e => {
  document.getElementById('bienvenida').setAttribute('hidden', '');
  document.getElementById('datos').removeAttribute('hidden');
  document.getElementById('mostrarPrecio').innerHTML = '363.152';
})

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

function datoTarjetaValido(creditCardNumber) {
  if (creditCardNumber === "") {
    document.getElementById('numTarj').innerHTML = "Este campo es obligatorio, por favor digitar su número de tarjeta ";
    return true;
  } else {
    return false;
  }
}

function cantidadValida(creditCardNumber) {
  if (creditCardNumber.length != 15) {
    document.getElementById('cantTarj').innerHTML = "Este campo requiere 16 dígitos, por favor validar el número ingresado"
    return true;
  } else {
    return false;
  }}

  function validaDatoName(datoName) {
    if (datoName === "") {
      document.getElementById('nameOblig').innerHTML = "Este campo es obligatorio, por favor digitar su nombre y apellido"
      return true;
    } else {
      return false;
    }
  }

  function validarTarjeta(creditCardNumber) {
    let valid = validator.isValid(creditCardNumber)
    if (valid === true) {
      document.getElementById('datos').setAttribute('hidden', '');
      document.getElementById('validacion').removeAttribute('hidden');
      return true
    } else {
      document.getElementById('verify').innerHTML = 'Tu tarjeta no es valida, por favor verifica el número ingresado.';
    }
  }

  function maskifyTarjeta(creditCardNumber) {
    document.getElementById('numCard').innerHTML = validator.maskify(creditCardNumber)

  }

  function mostrarNombre(datoName) {

    document.getElementById('nombre').innerHTML = datoName.toUpperCase()

  }

  document.getElementById('btnInicio').addEventListener('click', () => {

    document.getElementById('validacion').setAttribute('hidden', '');
    document.getElementById('bienvenida').removeAttribute('hidden');
    location.reload();

  })
