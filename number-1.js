/*1. terdapat sebuah array seperti berikut:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
0 + 17
1 + 16
2 + 15
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlah = 0;

for (let i = 0; i < array.length; i++) {
    for (const j of array) {
        if (array[i] + j === 17) {
            jumlah += 1;
            console.log(`${array[i]} + ${j} = ${array[i] + j}`);
        }
    }
}
console.log(`Jumlah pasangan penjumlahan yang hasilnya 17 adalah ${jumlah}`);