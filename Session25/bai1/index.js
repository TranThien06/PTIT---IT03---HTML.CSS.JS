function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Mảng không được rỗng");
    }
    return Math.min(...arr);
}
//////////////////////
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(findMin(numbers));
