function tribonacci ( signature, n )
{
  let newArray = [];

  switch ( n )
  {
    case 0:
      newArray = [];
      break;
    case 1:
      newArray = [signature[ 0 ]];
      break;
    case 2:
      newArray = signature;
      newArray.pop();
      break;
    case 3:
      newArray = signature;
      break;
    default:
      newArray = signature;
      for ( let i = 0; i < n - 3; i++ )
      {
        newArray.push( signature[ i ] + signature[ i+1 ] + signature[ i+2 ] );    
      }    
  }
            
  return newArray;
}
  

console.log( tribonacci( [ 1, 1, 1 ], 0 ) );
console.log( tribonacci( [ 1, 1, 1 ], 1 ) );
console.log( tribonacci( [ 1, 1, 1 ], 2 ) );
console.log( tribonacci( [ 1, 1, 1 ], 3 ) );
console.log( tribonacci( [ 1, 1, 1 ], 4 ) );
console.log( tribonacci( [ 1, 1, 1 ], 10 ) );
