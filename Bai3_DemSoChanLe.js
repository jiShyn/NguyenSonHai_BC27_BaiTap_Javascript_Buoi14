/** MÔ HÌNH 3 KHỐI
 * INPUT: 3 sô nguyên người dùng nhập
 * PROCESS (pseudo code):
 * 	Bước 1: Tạo hàm count() lắng nghe sự kiện onlick ở button
 *	Bước 2: Viết hàm:
 * 		. tạo 3 biến a, b, c DOM tới giá trị của ô input người dùng nhập
 * 		. tạo biến evenNum = 0 chứa số chẵn khi đếm
 * 		. tạo biến res DOM tới thẻ hiện kết quả
 * 		dùng if để lần lượt kiểm tra a, b, c có chia hết cho 2 không. Nếu chia hết cho 2 thì tăng biến evenNum lên 1
 * 		. in kết quả ra với res.innerHTML với evenNum đã tính ở trên là số chãn, số lẻ thì lấy 3 - evenNum
 * 
 * OUTPUT: số lượng số chẵn, số lượng số lẻ.
 */

function count() {
   var a = document.getElementById("num1").value;
   var b = document.getElementById("num2").value;
   var c = document.getElementById("num3").value;

	 var evenNum = 0;

   var res = document.getElementById("res");

	 if (a % 2 === 0) {
		evenNum++
	 }

	 if (b % 2 === 0) {
		 evenNum++

	 }
	 if (c % 2 === 0) {
		 evenNum++
	 }

	 res.style.color = "green"
	 res.innerHTML = "Có " + evenNum + " số chẵn, " + (3 - evenNum) + " số lẻ!"
}
