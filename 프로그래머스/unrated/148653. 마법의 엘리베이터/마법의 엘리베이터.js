function solution(storey) {
    let answer = 0;
    const numList = storey.toString().split('').map(Number).reverse();
    const lengthCheck = (num) => {
        if(num == numList.length - 1){answer++}
        else{numList[num+1]++}}
    
    for(let i = 0; i < numList.length; i++){
        if (numList[i] === 10){lengthCheck(i)}
        else if(numList[i] === 5 && numList[i+1] >= 5){
            answer += 5
            numList[i+1]++
        }
        else if (numList[i] > 5){
            answer += 10 - numList[i]
            lengthCheck(i)
        }
        else {answer += numList[i]}    
    }
    return answer;
}