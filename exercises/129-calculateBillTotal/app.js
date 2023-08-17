function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let impv = 0.095 * preTaxAndTipAmount;
    let impP = 0.15 * preTaxAndTipAmount;
    let result = impv + impP + preTaxAndTipAmount;
    return result;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
