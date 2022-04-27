function tomorrow() {
   var date = +document.getElementById("dateInput").value;
   var month = +document.getElementById("monthInput").value;
   var year = +document.getElementById("yearInput").value;

   var res = document.getElementById("res");

   if (1 <= month && month <= 12) {
      if (1 <= date && date <= 29) {
         date++;
         res.innerHTML = date + "/" + month + "/" + year;
      }
   }

	 if (month ===)



















   //  if (date >= 1 && date <= 29 ) { //date: 1-29
   // 	if (month >= 1 && month <= 12) {
   // 		date += 1;
   // 		res.innerHTML = date + "/" + month + "/" + year;
   // 	}
   //  } else if (date === 30) {  //date 30
   // 	 if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
   // 		 date += 1;
   // 		 res.innerHTML = date + "/" + month + "/" + year;
   // 	 } else if (month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
   // 		 date = 1;
   // 		 month += 1;
   // 		 res.innerHTML = date + "/" + month + "/" + year;
   // 	 }
   //  } else if (date === 31) { //date 31
   // 	if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {
   // 		date = 1;
   // 		month += 1;
   // 		res.innerHTML = date + "/" + month + "/" + year;
   // 	} else if (month === 12) {
   // 		date = 1;
   // 		month = 1;
   // 		year += 1;
   // 		res.innerHTML = date + "/" + month + "/" + year;
   // 	}
   // } else {
   //     res.innerHTML = "Nhập lại";
   //  }
}

function yesterday() {}
