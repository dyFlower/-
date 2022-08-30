function solution(s) {
    var answer = '';
    let box = s.split(' ')
    
    for(let i = 0; i < box.length; i++){
        for(let j = 0; j < box[i].length; j++){
            if(j % 2 === 0){
                answer += box[i][j].toUpperCase()
            }else {
                answer += box[i][j].toLowerCase()
            }
        }if(i !== box.length - 1)
        answer += ' '
    }
    return answer;
}