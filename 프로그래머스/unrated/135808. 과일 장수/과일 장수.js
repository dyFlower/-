function solution(k, m, score) {
    var answer = 0;
    let boxCnt = Math.floor(score.length / m)
    score = score.sort((a, b) => b - a)
    
    for(let i = 1; i <= boxCnt; i++){
        answer += score[i * m - 1] * m
    }
    
    return answer;
}