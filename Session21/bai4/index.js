while(true){
    let a, b, c;

    while(true){
        a=parseInt(prompt("Nhập hệ số a: "));
        if(!isNaN(a)) break;
        alert("hệ số không hợp lệ");

    }
    while (true) {
        b = parseInt(prompt("Nhập hệ số b: "));
        if (!isNaN(b)) break;
        alert("hệ số không hợp lệ");

    }
    while (true) {
        c = parseInt(prompt("Nhập hệ số c: "));
        if (!isNaN(c)) break;
        alert("hệ số không hợp lệ");

    }

if(a===0){
    if(b===0){
        if(c===0){
            alert("Phương trình vô số nghiệm.")
        }else{
            alert("Phuowngg trình vô nghiệm")
        }
    }else{
        let x = -c/b;
        alert("Phương trình có một nghiệm là: " +x);
    }
}else{
    let denta = b * b - 4 * a *c;
    if(denta>0){
        let x1 = (-b + Math.sprt(denta)) / (2*a);
        let x2 = (-b - Math.sprt(denta)) / (2 * a);
        alert(` Phương trình có 2 nghiệm \nx1 = ${x1} \nx2 = ${x2}`);
    }else if(denta === 0){
        let x = -b/(2*a);
        alert(` Phương trình có 1 nghiệm kép là: ${x}`);


    }else{
        alert("Phương trình vô nghiệm")
    }
}
}