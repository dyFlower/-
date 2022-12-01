function solution(s) {
    var answer = 0;
    let cntX = [0,0]
    let base = undefined
    
    for(let i in s){
        if(base === undefined){
            base = s[i]}
        if(s[i] === base){
            cntX[0]++}
        else{cntX[1]++}
        if(cntX[0] == cntX[1]){
            cntX = [0,0]
            answer++
            base = undefined
        }
    }
    cntX[0] != cntX[1] ?  answer++ : '' 
    return answer;
}