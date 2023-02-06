//Problem 5: Convert your gems into diamond
//Function Declaration
function gemsToDiamond(gems1, gems2, gems3) {
    let total = gems1 * 21 + gems2 * 32 + gems3 * 43;
//condition apply
    if (total > 2000) {
      return total - 2000;
    }
    return total;
  }
//Function Call
  let result=gemsToDiamond(1,1,1);
   console.log(result);

//------------------------------------------