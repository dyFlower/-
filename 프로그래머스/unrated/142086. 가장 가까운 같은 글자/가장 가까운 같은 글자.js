function solution(s) {
    const arr = s.split('').reverse();
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                answer.push(j-i)
                break;
            }if(j == arr.length-1){
                answer.push(-1)
            }
        }
    }
    answer.push(-1)
    return answer.reverse();
}