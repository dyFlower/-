function solution(s) {
    var answer = '';
    const box = s.split('')
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let alpha =''
    
    for(let i = 0; i < box.length; i++){
       if(!isNaN(Number(box[i]))){
           answer += box[i]
       }else{
           alpha += box[i]
           for(let j = 0; j < 10; j++){
               if(alpha == word[j]){
                   answer += j
                   alpha = ''
               }
           }
       }
    }
    return Number(answer);
}

//미친 풀이 : split >> join