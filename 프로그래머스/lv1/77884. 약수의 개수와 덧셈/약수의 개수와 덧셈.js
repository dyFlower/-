function solution(left, right) {
    var answer = 0;
    const stuck = right - left
    let cnt = 0;
    
    for(let i = 0; i <= stuck ; i++){
        for(let j = 1; j <= left; j++){
            if(left % j === 0){
                cnt++ 
            }
        }if(cnt % 2 === 0){
            answer += left
        }else{
            answer -= left}
        left++
        cnt = 0
    }
    
    return answer;
}