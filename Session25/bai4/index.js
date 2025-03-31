function kiemTraSoNguyenTo(n) {
    if (n < 2) return false; //số nhỏ hơn 2 không phải số nguyên tố
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; //nếu chia hết thì không phải số nguyên tố
    }
    return true; //nếu không chia hết cho số nào thì là số nguyên tố
}


let so = 17;
if (kiemTraSoNguyenTo(so)) {
    console.log(`${so} là số nguyên tố.`);
} else {
    console.log(`${so} không phải là số nguyên tố.`);
}
