

function beepBoop(num) {
  let arr = [];
  let finalArr=[];
  for (let i=0; i<=num; i++) {
    arr.push(" "+ i);
  }
  //console.log(arr)
	for (let i in arr) {
		if (i.includes(3)) {
    finalArr.push("Won't you be my neighbor?")
    } else if (i.includes(2)) {
    finalArr.push("Boop!")
    } else if (i.includes(1)) {
    finalArr.push("Beep!")
    } else{
    finalArr.push(i)
    }
	}
	console.log(finalArr)
  
  }
  
  beepBoop(13)