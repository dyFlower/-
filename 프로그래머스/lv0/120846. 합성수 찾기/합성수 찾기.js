function solution(n) {
    let cnt = 0
    var answer = new Array(n).fill(1).map((v,i) => v + i )
    for(let i = 0; i < answer.length; i++){
        let temp = []
        for(let j = 1; j <= answer[i]; j++){
            if(answer[i] % j === 0){
                temp.push(j)
            }
        }if(temp.length > 2){
            cnt++
        }
    }
    return cnt;
}