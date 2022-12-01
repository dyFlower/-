function solution(k, score) {
    var answer = [];
    let honor = []
    for(let i in score){
        honor.push(score[i])
        honor.sort((a,b)=>b-a)
        if(honor.length > k){
            honor.pop()
        }
        answer.push(Math.min(...honor))
    }
    return answer;
}