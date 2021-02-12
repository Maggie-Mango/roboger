

function beepBoop(num) {
  let arr = [];
  let finalArr=[];
  for (let i=0; i<=num; i++) {
    arr.push(" "+ i);
  }
  //console.log(arr)
	for (let i in arr) {
		if (i.includes(3)) {
    finalArr.push("won't you be my neighbor")
    } else {
    finalArr.push(i)
    }
	}
	console.log(finalArr)
  
  }
  
  beepBoop(13)