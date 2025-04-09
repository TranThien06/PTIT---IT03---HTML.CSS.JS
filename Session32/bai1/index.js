// tạo màu ngẫu nhiên
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackground(id) {
    const element = document.getElementById(id);
    element.style.backgroundColor = randomColor();
}

