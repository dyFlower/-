function solution(n) {
    var answer = 0;
    let box = n.toString(3).split('').reverse()
    let a = '';
    
    for(let i = 0; i < box.length; i++){
        a += box[i]
    }
    answer = parseInt(a, 3)
    
    return answer;
}

//테스트 10번이 미통과인 이유