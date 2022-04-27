function tomorrow() {
   var date = +document.getElementById("dateInput").value;
   var month = +document.getElementById("monthInput").value;
   var year = +document.getElementById("yearInput").value;

   var res = document.getElementById("res");

   if (
      month === 1 ||
      month === 3 ||
      month === 5 || // Xét các tháng có 31 ngày
      month === 7 ||
      month === 8 ||
      month === 10
   ) {
      if (1 <= date && date <= 30) {
         //Từ ngày 1 -> 30 thì date++
         date++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 31) {
         // Ngày 31 thì date = 1 và month++
         date = 1;
         month++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else if (month === 12) {
      // Xét tháng 12
      if (1 <= date && date <= 30) {
         // Từ ngày 1 -> 30 thì date++
         date++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 31) {
         // Ngày cuối cùng của năm 31/12 thì date = 1 và month = 1 và year++
         date = 1;
         month = 1;
         year++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else if (
      month === 2 ||
      month === 4 || // Xét các tháng có 30 ngày
      month === 6 ||
      month === 9 ||
      month === 11
   ) {
      if (1 <= date && date <= 29) {
         //Từ ngày 1 -> 29 thì date++
         date++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 30) {
         // Ngày 30 thì date = 1 và month++
         date = 1;
         month++;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else {
      res.innerHTML = "Tháng không xác định !!!";
   }
}

function yesterday() {
   var date = +document.getElementById("dateInput").value;
   var month = +document.getElementById("monthInput").value;
   var year = +document.getElementById("yearInput").value;

   var res = document.getElementById("res");

   if (
      month === 3 ||
      month === 5 || // xét các tháng có tháng trước là 30 ngày 
      month === 7 ||
      month === 10 ||
      month === 12
   ) {
      if (2 <= date && date <= 31) { //Từ ngày 2 -> 31 thì date--
         date--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 1) { // Ngày 1 thì date = 30 và month--
         date = 30;
         month--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else if (month === 8) { // tháng 8 có tháng trước là 31 ngày
      if (2 <= date && date <= 31) { // Từ ngày 2 -> 31 thì date--
         date--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 1) { // Ngày 1/8 có ngày hôm qua là 31/7
         date = 31;
         month = 7;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else if (month === 1) { // tháng 1 có tháng trước là năm trước
      if (2 <= date && date <= 31) { //Từ ngày 2 -> 31 thì date--
         date--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if ((date = 1)) { // 1/1 có ngày hôm qua là 31/12/year--
         date = 31;
         month = 12;
         year--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else if (
      month === 2 ||
      month === 4 || // Xét các tháng tháng trước là 31 ngày
      month === 6 ||
      month === 9 ||
      month === 11
   ) {
      if (2 <= date && date <= 30) { //Từ ngày 2 -> 30 thì date--
         date--;
         res.innerHTML = date + "/" + month + "/" + year;
      } else if (date === 1) { // Ngày 1 mỗi tháng có ngày hôm qua là 31/month--
         date = 31;
         month--
         res.innerHTML = date + "/" + month + "/" + year;
      } else {
         res.innerHTML = "Ngày không xác định !!!";
      }
   } else {
      res.innerHTML = "Tháng không xác định !!!";
   }
}
