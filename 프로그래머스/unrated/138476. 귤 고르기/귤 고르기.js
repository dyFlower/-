function solution(k, tangerine) {
    var answer = 1;
    const tangerineCount = {}
    
    for(let i = 0; i < tangerine.length; i++){
        if(tangerineCount[tangerine[i]] == undefined){
            tangerineCount[tangerine[i]] = 1
        }else{tangerineCount[tangerine[i]]++}
    }
    
    const sorted = Object.entries(tangerineCount).sort((a, b) => b[1] - a[1]);
    
    for(let j = 1; j <= k; j++){
        sorted[0][1] -= 1
        if(sorted[0][1] === 0){
            sorted.shift()
            if(j !== k){
                answer++
            }
        }
    }    
    return answer;
}