function isIsogram(str){
  const arr = str.toLowerCase().split( '' );  
  const result = new Set( arr ).size !== arr.length; 
  return !result;
}

console.log( isIsogram( '' ) );
console.log( isIsogram( 'Dominic' ) );
console.log( isIsogram( 'Bulaong' ) );
console.log( isIsogram( 'Michael' ) );
