function predict() {
   var a = document.getElementById("triangle-edge-1").value;
   var b = document.getElementById("triangle-edge-2").value;
   var c = document.getElementById("triangle-edge-3").value;

   var res = document.getElementById("res");
	 res.style.color = "green"

	 if (a===b && b===c && a===c) {
		 res.innerHTML = "Hình tam giác đều"
	 } else if (a === b || a===c || b===c) {
		 res.innerHTML = "Hình tam giác cân"
	 } else if (a**2 === b**2 + c**2 || b**2 === a**2 + c**2 || c**2 === a**2 + b**2) {
		 res.innerHTML = "Hình tam giác vuông"
	 } else {
		 res.innerHTML = "Một tam giác nào đó"
	 } 
}
