function solution(answers) {
    var answer = [];
    let box = [];
    const supo1 = [1, 2, 3, 4, 5]
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4 ,5 ,5]
    
    let S1 = 0, S2 = 0, S3 = 0
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === supo1[i % 5]){
            S1++}
        if(answers[i] === supo2[i % 8]){
            S2++}
        if(answers[i] === supo3[i % 10]){
            S3++}
    }
    box.push(S1,S2,S3)
    
    let maxScore = Math.max.apply(null, box)
    //let maxScore = Math.max(S1, S2, S3)
    for(let i = 0; i < 3; i++){
        if(box[i] == maxScore){
            answer.push(i + 1)
        }
    }
    
    return answer;
}
/*바보 같이 풀었다... let maxScore = Math.max(S1,S2,S3) 했어도 됐었다..
대신! 배열에서 최대값을 구할려면 Math.max.apply(null, arr)인 것을 다시 한번 생각!!*/