function solution(seoul) {
    var answer = '';
    
    /*첫번째 풀이
        for(let i = 0; i < seoul.length; i++){
        if(seoul[i] === 'Kim'){
            answer = `김서방은 ${i}에 있다`
            break;
        }
    }*/
    
    //두번째 풀이
    let a = seoul.indexOf("Kim")
    answer = `김서방은 ${a}에 있다`
    
    return answer;
}