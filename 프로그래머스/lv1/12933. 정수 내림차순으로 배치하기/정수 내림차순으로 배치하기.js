function solution(n) {
    var answer = n.toString().split('').sort((a,b)=> b-a).join('');
    
    return parseInt(answer);
}

//     let a = n.toString();
//     let b = a.split('');
//     let c = b.sort();
    
//     for(let i = 1; i <= c.length; i++){
//         answer += c[c.length - i];
//     }