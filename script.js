//your JS code here. If required.
for(let i=1; i<=20; i++) {
	if(i%10 === 0) {
		alert("FizzBuzz");
	}else if(i%5 === 0) {
		alert("Buzz");
	}else if(i%3 === 0) {
		alert("Fizz");
	}else {
		alert(i);
	}
}