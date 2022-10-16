function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
     let maxNum = function(num1,num2){
        if(num2 === 0){
            return num1
        }
        else {
           return maxNum(num2, num1%num2)
        }
    }

    answer[0] = (denum1 * num2  + denum2 * num1) 
    answer[1] = num1 * num2 
    let g = maxNum(answer[0],answer[1])
    answer[0] = (denum1 * num2  + denum2 * num1) /g
    answer[1] = num1 * num2 /g
    
    return answer;
}