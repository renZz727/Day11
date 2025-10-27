function calculateTotal(billAmount, taxPercentage = 20) {
  return (billAmount * ((100 + taxPercentage) / 100)).toFixed(2);
}

console.log(calculateTotal(12000, 10));
console.log(calculateTotal(2200));

