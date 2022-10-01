function solution(arr) {
    var answer = arr.reduce((acc, arr) => acc + arr) / arr.length;

    return answer;
}

    // for(let i = 0; i < arr.length; i++){
    //     answer += arr[i];
    // }
    // answer = answer / arr.length;