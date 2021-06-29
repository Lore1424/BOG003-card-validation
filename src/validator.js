const validator = {
  //Esta función se encarga de validar el número de la tarjeta, utilizando el algoritmo de luhn

   isValid: (creditCardNumber) => {
    let datos = (creditCardNumber.split("").reverse())
    let sumaImp = 0;
    let sumaPar = 0;
      for(let i=0; i<datos.length; i++ ) {
        if(i%2===1){
          let n=(datos[i]*2);
          if(n>=10){
            n=(n-10)+1;
          }
          sumaPar+= n;
        }else{
          sumaImp+=Number(datos[i]);
        }
      }
      let result=(sumaPar+sumaImp);
      return result % 10 === 0 ? true : false;
  },
//Esta función se encarga de enmascarar los ultimos 4 dígitos de la tarjeta
  maskify: (creditCardNumber) => {
      let maskiNum = creditCardNumber.length;
      let output = "";
      for(let i = 0; i< maskiNum - 4;i++){
          output += "#";
      }
      return output + creditCardNumber.substring(maskiNum-4,maskiNum);
    }
};

export default validator;
