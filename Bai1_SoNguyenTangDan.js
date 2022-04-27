/* Mô hình 3 khối
* INPUT:	
		3 số nguyên người dùng nhập

	PROCESS: (Pseudo code)
			Tạo hàm lắng nghe sự kiện onclick ở button để lấy dữ liệu người dùng nhập, thực hiện so sánh sau đó in ra kết quả:
				1.  tạo 3 biến DOM tới giá trị 3 số nguyên do người dùng nhập:
			var a; var b; var c;
				2. tạo biến var res DOM tới ô hiển thị kết quả.
				3. sủ dụng if else lồng nhau để so sánh từng biến:
					. a > b:
						.. c > a => b-a-c
						.. a > c:
							...c > b => b-c-a
							...b > c => c-b-a
					. b > a: 
						.. c > b => a-b-c
						.. b > c:
							...c > a => a-c-b
							...a > c => c-a-b
				4. sử dụng res.innerHTML để gán các kết quả đã sắp xếp

	OUTPUT: Kết quả thứ tự tăng dần
*/

function arrange() {
   var a = +document.getElementById("num1").value;
   var b = +document.getElementById("num2").value;
   var c = +document.getElementById("num3").value;
   var res = document.getElementById("res");

   if (a > b) {
      if (c > a) {
         res.innerHTML = b + " < " + a + " < " + c;
      } else {
         if (c > b) {
            res.innerHTML = b + " < " + c + " < " + a;
         } else {
            res.innerHTML = c + " < " + b + " < " + a;
         }
      }
   } else {
      if (c > b) {
         res.innerHTML = a + " < " + b + " < " + c;
      } else {
         if (c > a) {
            res.innerHTML = a + " < " + c + " < " + b;
         } else {
            res.innerHTML = c + " < " + a + " < " + b;
         }
      }
   }
}
