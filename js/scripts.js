//business logic
function beepBoop(num) {
  let arr = [];
  let finalArr=[];
  for (let i=0; i<=num; i++) {
    arr.push(i);
  }
	for (let i in arr) {
		if (i.includes(3)) {
    finalArr.push(" Won't you be my neighbor?")
    } else if (i.includes(2)) {
      finalArr.push(" Boop!")
    } else if (i.includes(1)) {
      finalArr.push(" Beep!")
    } else {
      finalArr.push(" " + i)
    }
	}
  return finalArr
}

//ui logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    const userNum =$("input.quantity").val();
    const robogerOutput = (beepBoop(userNum));
    $("#robogerSays").text("MR. ROBOGER SAYS : " + robogerOutput);
    $("form#input").hide();
  });
});

