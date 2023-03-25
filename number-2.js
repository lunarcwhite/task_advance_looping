/*

2. ada 2 string "hello" dan "world", outputkan huruf yang sama dalam 2 string tersebut

l
0

hint: cara ambil huruf per index
> let huruf = "hello"
> huruf[0]
> h */

let hello = 'hello'
let world = 'world'

for (const i of hello) {
    for (const j of world) {
        if(i === j){
            console.log(i);
        }
    }
}