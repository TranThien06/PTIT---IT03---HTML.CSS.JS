let result ="javascript"+ 5;
// result = "javascript5". dấu + giúp nối 2 chuỗi lại với nhau
let result1 = "javascript" - 1;
// result1 = NaN. dấu - không thể thực hiện phép trừ giữa chuỗi và số
let result2 = "3" + 2;
// result2 = "32". dấu + giúp nối 2 chuỗi lại với nhau
let result3 = "5" - 4;
// result3 = 1. dấu - giúp thực hiện phép trừ giữa 2 số
let result4 =  isNaN( "123");
// result4 = false. "123" là một chuỗi, nhưng có thể chuyển đổi thành số hợp lệ (123), nên isNaN("123") trả về false (không phải NaN).
let result5 = isNaN("hello");
// result5 = true. "hello" không thể chuyển đổi thành số hợp lệ, nên isNaN("hello") trả về true (là NaN).
let result6 = Number.isNaN("123");
// result6 = false. Number.isNaN() không ép kiểu. "123" là chuỗi, nhưng nó không phải là NaN thực sự, nên Number.isNaN("123") trả về false.
let result7 = Number.isNaN(NaN);
// result7 = true. NaN là NaN thực sự, nên Number.isNaN(NaN) trả về true.

 