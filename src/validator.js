const validator = {

   isValid: (creditCardNumber) => {
    let datos = (creditCardNumber.split("").reverse())
    let sumaImp = 0;
    let sumaPar = 0;
    //console.log(datos);
    /*if(creditCardNumber === ""){
      document.getElementById("numTarj").innerHTML = "Este campo es obligatorio, Por favor ingrese el número de tarjeta"
      alert("Por favor ingrese el número de tarjeta")*/
      for(let i=0; i<datos.length; i++ ) {
        if(i%2===1){
          let n=(datos[i]*2);
          //console.log(n);
          if(n>=10){
            n=(n-10)+1;
            //console.log(n);
          }
          sumaPar+= n;
          //console.log(sumaPar);
        }else{
          sumaImp+=Number(datos[i]);
          console.log(sumaImp); 
        }
      }
      let result=(sumaPar+sumaImp);
      console.log(result);
      console.log(result % 10 === 0 ? true : false);
      return result % 10 === 0 ? true : false;
  },

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
