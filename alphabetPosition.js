function alphabetPosition(text) {
  
  const newString = text
    .toLowerCase().split( '' )
    .filter(c => (c>='a' & c<='z'))
    .map( c =>
    {
      if ( c >= 'a' && c <= 'z' )
      {
        return c.charCodeAt( 0 ) - 'a'.charCodeAt( 0 ) + 1;
      }
      return c;
    } )
    .join( ' ' );

  return newString;
}

console.log( alphabetPosition( 'abcde fghij klmno' ) );
