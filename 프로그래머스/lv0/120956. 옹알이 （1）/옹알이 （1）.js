function solution(babbling) {
    var answer = 0;
    
    babbling.forEach(v => {
        if(v.split(/aya|ye|woo|ma/g).join('') == ''){
            answer++
        }
    })
    return answer;
}

//모르겠다~