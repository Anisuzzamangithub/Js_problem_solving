
// Problem: 1 Solve :Let's Play a mind game---------------
//Function Declaration
function mindGame(number) {
    //condition apply 
    if (typeof number === "number") {
        number = (number * 3 + 10) / 2;
        number -= 5;
      return number;
    } else {
      return "Enter your integer number not string ";
    }
  }
  //function call
  let result=mindGame(5);
  console.log(result);
  
//----------------------------------------------------------