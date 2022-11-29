function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// function solution(numlist, n) {
//     var answer = [];
//     numlist = numlist.sort((a,b) => b-a)
//     let closeNum = [...numlist].map(v => Math.abs(v - n))
//     for(let i in numlist){
//         answer.push(numlist[closeNum.indexOf(Math.min(...closeNum))])
//         closeNum[closeNum.indexOf(Math.min(...closeNum))] = 100000
//     }
//     return answer;
// }

//다시 풀어보기!!
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// 아 삼항 연산자의 false를 통해 푸는 거였군 이해 완료!}