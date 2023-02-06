
//Problem 2: Finding even or odd
//Function Declaration
function evenOdd(input) {
//condition apply 
    if (typeof input !== "string") {
      return "Enter your Valid String not Number  ";
    }
    const length = input.length;
  
    return length % 2 === 0 ? "Even" : "Odd";
  }
//Function Call
  let result=evenOdd("Phero");
  console.log(result);

//-----------------------------------