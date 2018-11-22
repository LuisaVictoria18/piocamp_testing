var realNumber = "5612";

const guess = function(number1) {
  // TODO: Logic Here
  let result = "";
  let real = realNumber.split("");
  let actual = number1.split("");
  var yes = false;

  for (let i=0; i<actual.length; i++){

    yes = false;

    for (let y=0; y<real.length; y++){
      if(real[i] === actual[y]){

        yes = true; 

        if(i == y){
          result = result + "x";
        }else{
        result = result + "o";
        }
      }
    }
   
  }
 
    return result;


}

const setNumber = function (number1) {
  realNumber = number1;
}


module.exports.guess = guess;
module.exports.setNumber = setNumber;