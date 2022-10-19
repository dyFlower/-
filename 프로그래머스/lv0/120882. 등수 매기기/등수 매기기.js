function solution(score) {
    var answer = [];
    for(i in score){
        score[i] = (score[i][0] + score[i][1]) / 2
    }
    let temp = [...score].sort((a,b)=>b-a)
    
    for(i in score){
        answer.push(temp.indexOf(score[i]) + 1)
    }
    return answer;
}