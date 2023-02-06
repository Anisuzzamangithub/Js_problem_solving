//Problem 3: Is Less or Greater than seven
//Function Declaration
function isLGSeven(input) {
//condition apply
    if (typeof input !== 'number') {
      return 'Enter your valid number not String ';
    }
    const difference = Math.abs(input - 7);
    return difference <= 7 ? difference : 2 * difference;
  }
//Function Call
  let result=isLGSeven(13);
  console.log(result);

//--------------------------------------------------
