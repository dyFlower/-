function solution(n) {
    return Array(n).fill(1).map((n, i)=> n+i).filter(n => n % 2 != 0)
}

//     var answer = new Array(n)
//     for(let i = 1; i <= n; i++){
//         answer[i] =i
//     }
//     return answer.filter(n => n%2 != 0);