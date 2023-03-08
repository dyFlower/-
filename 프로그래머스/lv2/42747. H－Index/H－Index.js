function solution(citations) {
    let answer = 0;
    let tempUp = []
    let tempDown = []
    for(let i = 0; i < citations.length + 1; i++){
        tempUp = citations.filter(v => v >= i)
        tempDown = citations.filter(v => v < i)
        if(tempUp.length >= i && tempDown.length < i){
            answer = i
        }
    }
    return answer
}