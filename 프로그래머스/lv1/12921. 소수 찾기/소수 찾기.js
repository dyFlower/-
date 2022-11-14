function solution(n) {
    var answer = 0;
    let arr = new Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }
    return arr.filter(v => v).length;
}



//     let temp = [];
//     for(let i = 2; i <=n; i++){
//         for(let j = 2; j < i ; j++){
//             if(i%j === 0){
//                 temp.push(i) 
//             }
//         }
//     }
//     temp = [...new Set(temp)]
//     answer = n - 1 - temp.length
