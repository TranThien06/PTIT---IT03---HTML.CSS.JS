// Tam giác a
let size = 8;
console.log("a.");
for (let i = size; i > 0; i--) {
    console.log("*".repeat(i));
}

// Tam giác b
console.log("\nb.");
for (let i = 1; i <= size; i++) {
    console.log("*".repeat(i));
}

// Tam giác c
console.log("\nc.");
for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "*".repeat(i));
}

// Tam giác d
console.log("\nd.");
for (let i = size; i > 0; i--) {
    console.log(" ".repeat(size - i) + "*".repeat(i));
}
// .repeat(i) dùng để lặp lại chuỗi i lần

