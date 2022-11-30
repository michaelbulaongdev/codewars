function squareDigits(num) {
  const arrayDigits = Array.from(String(num), Number);
  const arraySquares = arrayDigits.map((x) => x * x);
  const newNumber = Number(arraySquares.join( '' ));
  return newNumber;
}

console.log( squareDigits( 123 ) );
console.log( squareDigits( 234 ) );
console.log( squareDigits( 345 ) );
