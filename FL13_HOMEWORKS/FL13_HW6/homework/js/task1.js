// Your code goes here
const checkNum = +prompt('Please, enter check summary value'),
      tip = +prompt('Please, entre sum of tips (in percents %)'),
      currency = '$',
      percents = 100, 
      floatLength = 2;

const statement = isNaN(checkNum) || isNaN(tip) || checkNum < 0 || tip < 0 || tip > percents;

if (statement) {
    alert('Invalid input data');
} else {
    let totalSumToPay = 0, tipAmount = 0;
    
    tipAmount = (+checkNum * (+tip / percents)).toFixed(floatLength);
    totalSumToPay = (+checkNum + +tipAmount).toFixed(floatLength); 

    alert(`
    Check number: ${checkNum}${currency} 
    Tip: ${tip}% 
    Tip amount: ${tipAmount}${currency}
    Total sum to pay:  ${totalSumToPay}${currency}
    `);
}