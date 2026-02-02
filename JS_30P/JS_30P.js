let n = +prompt("Nhập một số nguyên n");

if( n % 2 == 0 ){
    console.log(` ${n} là số chẵn `);
}else if( n % 2 != 0){
    console.log(` ${n} là số lẻ `);
}
if(n < 0){
    console.log(` ${n} là số âm `);
}else if(n > 0){
    console.log(` ${n} là số dương `);
}
if(n > 0){
    for( let i = 1 ; i <= n; i++){
        console.log(` ${i}`);
    }        
}else if(n <= 0){
    console.log(` ${n} không phù hợp để tạo dãy số `);
}


