/** Mô hình 3 khối
 * INPUT: thành viên trong gia đình
 * 
 * PROCESS (pseudo code)
 * 	Bước 1: đặt hàm hello() vào onclick của button
		 Bước 2: Viết hàm: 
		 	. Đặt biến member DOM tới  của thẻ seclect
		 	. Đặt biến dad, mom, bro, sis DOM tới từng thẻ option
			. Đặt biến res DOM tới thẻ hiển thị kết quả
			. Sử dụng if...else if...else để viết các trường hợp khi người dùng chọn thành viên và in kết quả với res.innerHTML
*	
	OUTPUT: kết quả: xin chào + (thành viên gia đình)
 */

function hello() {
   var member = document.getElementById("member");
   var dad = document.getElementById("dad");
   var mom = document.getElementById("mom");
   var bro = document.getElementById("bro");
   var sis = document.getElementById("sis");

   var res = document.getElementById("res");
   if (member.value  == dad.value) {
      res.innerHTML = "Hello " + dad.innerHTML + "!";
   } else if (member.value  == mom.value) {
      res.innerHTML = "Hello " + mom.innerHTML + "!";
   } else if (member.value  == bro.value) {
      res.innerHTML = "Hello " + bro.innerHTML + "!";
   } else if (member.value  == sis.value) {
      res.innerHTML = "Hello " + sis.innerHTML + "!";
   } else {
      res.innerHTML = "Xin chào người lạ!";
   }
}
