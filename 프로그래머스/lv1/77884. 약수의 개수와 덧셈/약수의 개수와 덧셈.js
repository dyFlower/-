function solution(left, right) {
    var answer = 0;
    const num = right - left + 1 //갯수
    let cnt = 0; //약수의 갯수
    
    for(let i = 0; i < num ; i++){
        for(let j = 1; j <= left; j++){
            if(left % j === 0){
                cnt++ 
            } //left에서 약수의 갯수를 계산
        }
        //약수에 갯수에 따라서 덧셈, 뺄셈을 진행
        cnt % 2 === 0 ? answer += left : answer -= left
        
        //다음 값을 탐색하기 위해 left에 1을 더하고, cnt를 0으로 초기화
        left++
        cnt = 0
    }
    return answer;
}