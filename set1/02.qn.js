function getTicketPrice(age) {
  if (age <= 12) return "$10";
  else if (age <= 59) return "$20";
  else return "$15";
}

console.log(getTicketPrice(4));
console.log(getTicketPrice(43));
console.log(getTicketPrice(71));
