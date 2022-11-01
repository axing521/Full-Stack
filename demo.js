/***
 * @creater:ACBash
 * @create_time:22-10-17 14:52:9
 * @last_modify:ACBash
 * @modify_time:22-11-1 12:29:52
 * @line_count:8
 **/

let a = -128;
let bits = [];

for(let i = 8; i >= 0; i--){
    bits.push(a & (1 << i));
}

console.log(bits);