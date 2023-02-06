//Problem 4: Finding Bad data
//Function Declaration
function findingBadData(array) {
    let badDataCount = 0;
// Apply Loop
    for (let i = 0; i < array.length; i++) {
//condition apply
      if (typeof array[i] !== "number") {
        return "Enter your valid Number Not String";
      }
      if (array[i] < 0) {
        badDataCount++;
      }
    }
    return badDataCount;
  }
//Function Call
  let result=findingBadData([2, -5, -7, -13]);
  console.log(result)

//---------------------------------