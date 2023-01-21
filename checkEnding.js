function checkEnding (str1, str2) {
  
  if (str2 === '') {
    // console.log('empty string: true')
    return true
  
  } else if (str1.length >= str2.length) {
    
    let i = 0
    let str1ending = str1.length - str2.length
    let result = false

    while (i < str2.length) {
      if (str1[str1ending + i] === str2[i]) {
        // console.log('passed', str2[i])
        result = true
        i++
      } else {
        // console.log('failed', str2[i])
        result = false
        break
      }
    }
    // console.log('result:', result)
    return result

  } else {
    // console.log('invalid length: false')
    return false
  }

}

//test input

console.log(checkEnding('samurai', 'ai')) //must return true
console.log(checkEnding('apple', 'ple')) //must return true
console.log(checkEnding('michael', '')) //must return true

console.log(checkEnding('pear', 'spear')) //must return false
console.log(checkEnding('sumo', 'uno')) //must return false
console.log(checkEnding(':-)', ':-(')) //must return false
