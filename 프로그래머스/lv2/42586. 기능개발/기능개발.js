function solution(progresses, speeds) {
    var answer = [];
    let temp = [];
    while(progresses.length > 0){
        for(let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i]
        }
        while(progresses[0] >= 100){
            temp.push(progresses.shift())
            speeds.shift()
        }
        if(temp.length !== 0){
        answer.push(temp.length)
        temp = []}
    }
    return answer;
}