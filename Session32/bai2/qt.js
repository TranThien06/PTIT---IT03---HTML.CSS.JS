// đếm số lần bấm vào nút
let clickCount = 0;

function countClicks() {
    clickCount++;
    document.getElementById('count').innerText = `Bạn đã bấm ${clickCount} lần.`;
}
