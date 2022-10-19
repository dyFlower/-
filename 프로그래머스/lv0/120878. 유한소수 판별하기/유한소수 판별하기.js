function solution(a, b) {
    let g = 0;
    for(let i = 1; i <= Math.min(a,b); i++){
        a % i === 0 && b % i === 0 ? g = i : '' 
    }
    b /= g
    while(b % 2 === 0){
        b /= 2
    }
    while(b % 5 === 0){
    b /= 5
    }
    return b === 1 ? 1 : 2 ;
}