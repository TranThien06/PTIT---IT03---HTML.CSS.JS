// Nhập vào chuỗi số nguyên
let input = prompt("Nhập vào một chuỗi số nguyên:");
let reversedInput = input.split('').reverse().join('');
if (input === reversedInput) {
   alert(`${input} là số đối xứng.`);
} else {
    alert(`${input} không phải là số đối xứng.`);
}
