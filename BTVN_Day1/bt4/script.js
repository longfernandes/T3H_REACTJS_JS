const a = 16;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
switch (a) {
    case 1:
        let num = 1;
        while (num <= 500) {
            console.log(num);
            num++;
        }
        break;
    case 2:
        console.log("Các số chia hết cho 2 và 3 từ 1 đến 300: ");
        for (let i = 1; i <= 300; i++) {
            if(i % 2 === 0 && i % 3 === 0) {
                console.log(i);
            }
        }
        break;
    case 3:
        let sum1 = 0;
        for (let i = -30; i <= 50; i += 2) {
            sum1 += i;
        }
        console.log('Tổng các số chắn trong đoạn [-30,50] là: ', sum1);
        break;
    case 4: 
        rl.question('Nhập n: ', (n) => {
        n = parseInt(n);
        if (n < 0) {
            console.log('Không thể tính giai thừa số âm.');
        } else {
            let factorial = 1;
            for (let i = 1; i <= n; i++) {
                factorial *= i;
            }
            console.log('Giai thừa của n là:', factorial);
        }
        rl.close();
        
        });
        break;
    case 5:
        rl.question('Nhập số a: ', (a) => {
            rl.question('Nhập số b: ', (b) => {
                rl.question('Nhập số x: ', (x) => {
                    a = parseInt(a);
                    b = parseInt(b);
                    x = parseInt(x);
                    if ( a < b ) {
                        let found = false;
                        for (let i = a; i < b; i++) {
                            if (i % x === 0) {
                                console.log('Số nhỏ nhất chia hết x trong khoảng a, b là: ', i);
                                found = true;
                                break;
                            }
                        }
                        if (!found) console.log('Không có số nào chi hết cho x trong khoảng a,b');
                    } else {
                        console.log('Điều kiện a < b không hợp lệ!');
                    }
                    rl.close();
                });
            });
        });
        break;
    case 6:
        rl.question('Nhập số n (n>=2): ', (n) => {
            n = parseInt(n);
            if (n < 2) {
                console.log('Giá trị n không hợp lệ!');
            } else {
                let S = 0;
                for (let i = 1; i <= n; i++) {
                    S += 1 / (i * (i + 1));
                }
                console.log('Giá trị của S là: ', S.toFixed(6));
            }
            rl.close();
        });
        break;
    case 7:
        rl.question('Nhập số n: ', (n) => {
            n = parseInt(n);
            if (n <= 0) {
                console.log("Vui lòng nhập số nguyên dương.");
            } else {
                let count = 0;
                for (let i = 1; i <= n; i++) {
                    if(n % i === 0) {
                        count++;
                    }
                }
                console.log('Số ước của n là: ', count);
            }
            rl.close();
        });
        break;
    case 8:
        rl.question('Nhập số n: ', (n) => {
            n = parseInt(n);
        
            if (n < 2) {
                console.log('n không phải là số nguyên tố');
            } else {
                let isPrime = true;
        
                for (let i = 2; i < n; i++) {  
                    if (n % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
        
                if (isPrime) {
                    console.log('n là số nguyên tố.');
                } else {
                    console.log('n không phải là số nguyên tố');
                }
            }
            rl.close();
        });
        break;
    case 9:
        rl.question('Nhập vào chuỗi s: ', (s) => {
            rl.question('Nhập vào số l: ',(l) => {
                l = parseInt(l);
                let isValue = true;
                for (let i = 0; i < s.length; i++) {
                    if (s[i] < '0' || s[i] >'9') {
                        isValue = false;
                        break;
                    }
                }
                if (!isValue) {
                    console.log('Chuối không hợp lệ!Vui lòng nhập lại chuỗi')
                } else if (s.length >= l) {
                    console.log('Chuỗi đủ dài!')
                } else {
                    while (s.length < l) {
                        s = '0' + s
                    }
                    console.log('Chuỗi sau khi thêm là: ', s);
                }
                rl.close();
            });
        });
        break;
    case 10:
        rl.question('Nhập số m: ', (m) => {
            rl.question('Nhập số n: ', (n) => {
                m = parseInt(m);
                n = parseInt(n);
                if (m > 0 && n > 0) {
                    let a = m, b = n;
                    while (a !== b) {
                        if (a > b) {
                            a -= b;
                        } else {
                            b -= a;
                        }
                    }
                    let ucln = a;
                    let bcnn = (m * n) / ucln;
                    console.log("Ưóc chúng lớn nhất của m và n là: ", ucln);
                    console.log('Bội chung nhỏ nhất của m và n là: ', bcnn);
                } else {
                    console.log('Vui lòng nhập 2 số nguyên dương');
                }
                rl.close();
            });
        });
        break;
    case 11:
    case 12:
        rl.question('Nhập số n: ',(n) => {
            n = parseInt(n);
            if (n >= 2 && n <= 10) {
                console.log('Bảng của chương của ' + n + ':');
                for (let i = 1; i <= 10; i++) {
                    console.log(n + " x " + i + " = " + (n * i));
                }
            } else {
                console.log("Số không hợp lệ!");
            }
            rl.close();
        });
        break;
    case 13:
        rl.question("Nhập số n: ", (n) => {
            n = parseInt(n);
            if (n >= 2) {
                for (let i = 0; i < n; i++) {
                    let row = "";
                    for (let j = 0; j < n; j++) {
                        row += "* ";
                    }
                    console.log(row);
                }
            } else {
                console.log("Số không hợp lệ!");
            }
            rl.close();
        });
    case 14:
        rl.question("Nhập chiều rộng m: ", (m) => {
            rl.question("Nhập chiều cao n: ", (n) => {
                m = parseInt(m);
                n = parseInt(n);
                if (m >= 2 && n >=2) {
                    for (let i = 0; i < n; i++) {
                        let row = "";
                        for (let j = 0; j < m; j++) {
                            row += "* ";
                        }
                        console.log(row);
                    }
                } else {
                    console.log("Số không hợp lệ!");
                }
                rl.close();
            }); 
        });
        break;
    case 15:
        rl.question("Nhập n: ", (n) => {
            n = parseInt(n);
            if (n >= 3) {
                for (let i = 1; i <= n; i++) {
                    let row ="";
                    for (let j = 1; j <= i; j++) {
                        row += "* ";
                    }
                    console.log(row);
                }
            } else {
                console.log("Số không hợp lệ!");
            }
            rl.close();
        });
        break;
    case 16:
        rl.question("Nhập cân nặng(kg): ", (w) => {
            rl.question("Nhập chiều cao (m): ", (h) => {
                w = parseFloat(w);
                h = parseFloat(h);
            if (w > 0 && h > 0) {
                let bmi = w / (h * h);
                console.log("Chỉ số BMI của bạn: ", bmi.toFixed(2));
                if (bmi < 18.5) {
                    console.log("Nhẹ cân");
                } else if (18.5 <= bmi < 23) {
                    console.log("Bình thường");
                } else if (23 <= bmi < 25) {
                    console.log("Thừa cân");
                } else {
                    console.log("Béo phì");
                }
            } else {
                console.log("Dữ liệu ko hợp lệ!")
            }
            rl.close();
            });
        });
        break;
}
        