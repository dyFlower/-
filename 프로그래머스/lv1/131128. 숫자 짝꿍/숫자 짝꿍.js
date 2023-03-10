function solution(X, Y) {
    var answer = [];
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    X.split('').forEach(v => countX[v]++)
    Y.split('').forEach(v => countY[v]++)
    
    for(let i = 0; i < 10; i++){
        const dupNum = Math.min(countX[i], countY[i])
         for(let j = 0; j < dupNum; j++){
            answer.push(i)
        }
    }
    if(!answer.length){
        return '-1'
    }
    if(!answer.filter(v => v !== 0).length){
        return '0'
    }
    return answer.sort((a,b) => b-a).join('');
}