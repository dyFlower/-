function solution(numbers) {
    const numMap = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

    for(i in Object.values(numMap)) {
        numbers = numbers.replaceAll(Object.keys(numMap)[i], Object.values(numMap)[i]);
    }

    return +numbers;
}

// function solution(numbers) {
//     let temp = ['zero','one','two','three','four','five','six','seven','eight','nine']
//     numbers = numbers.split('')
//     var answer = '';
//     let box = ''
    
//     for(i of numbers){
//         box += i
//         for(j in temp){
//             if(box === temp[j]){
//                 answer += j
//                 box = ''
//             }
//         }
//     }
//     return +answer;
// }
