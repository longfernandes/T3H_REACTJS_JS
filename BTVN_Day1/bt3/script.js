const a = 6;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
switch (a) {
    case 1:
        let sum1 = 0;
        for (let i = 1; i <= 50; i++){
            sum1 += i;

        }
        console.log('Tổng từ 1 đến 50 là: ',sum1);
        break;
    case 2:
        let sum2 = 0;
        for (let i = -10; i <= 50; i+=2) {
            sum2 += i;
        }
        console.log('Tổng các số chẵn từ -10 đến 50 là: ', sum2);
        break;
    case 3:
        console.log("Các số chia hết cho 9 trong đoạn[-100,100]");
        for (let i = -100; i <= 100; i++) {
            if ( i % 9 === 0) {
                console.log(i);
            }
        }
        break;
    case 4:
        let num = 1;
        while ( num <= 200) {
            console.log(num);
            num++;
        }
        break;
    case 5:
        rl.question('Nhập vào một chuỗi: ', (s) => {
            rl.question('Nhập vào một số l: ', (l) => {
                l = parseInt(l);
                while (s.length < l) {
                    s += 'a';
                }
                console.log('Chuỗi sau khi thêm:', s);
                rl.close();
            });
        });
        break;
    case 6:
        rl.question('Nhập số x (0 < x < y < 100): ', (x) => {
            rl.question('Nhập số y: ', (y) => {
                x = parseInt(x);
                y = parseInt(y);
                if (x > 0 && x < y && y < 100) {
                    while (x < y) {
                        console.log('x = ', x);
                        console.log('y =', y);
                        x++;
                        y--;
                    }
                } else {
                    console.log('Giá trị không hợp lệ!');
                }
                rl.close();
            });
        });
        break;



}