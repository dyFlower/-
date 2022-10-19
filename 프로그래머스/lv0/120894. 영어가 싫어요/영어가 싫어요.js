function solution(numbers) {
    let temp = ['zero','one','two','three','four','five','six','seven','eight','nine']
    numbers = numbers.split('')
    var answer = '';
    let box = ''
    
    for(i of numbers){
        box += i
        for(j in temp){
            if(box === temp[j]){
                answer += j
                box = ''
            }
        }
    }
    return +answer;
}