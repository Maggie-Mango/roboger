

beepBoop = function(num) {
  let str = num.toString()
  let array = ['1', '2', '3']
  for (i=0; i<=num; i++) {
    output += i + " "
  } for (let i of str) {
      if (array.includes(i)) {
      console.log('boop')
  }
  }
}
  
  
  console.log(beepBoop(20))