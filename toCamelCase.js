function toCamelCase (str) {
  
  let arr1 = str.split('-').join('/').split('_').join('/').split('/')

  let arr2 = []
  arr2.push(arr1[0])

  for (i = 1; i < arr1.length; i++) {
    let cap = arr1[i][0].toUpperCase()
    let body = arr1[i].slice(1)
    let word = cap.concat(body)
    arr2.push(word)
  }

  let result = arr2.join('')
  console.log(result)
  return result
}

//test input
toCamelCase('to-camel-case')
toCamelCase('String_to_camel_case')
toCamelCase('theCat-is_hungry')
