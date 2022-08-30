function solution(n) {
    let f0 = 0;
    let f1 = 1;
    let f = 0;
    
    for(let i = 1; i < n; i++){
        f = (f0 + f1) % 1234567;
        f0 = f1 % 1234567
        f1 = f % 1234567
    }
    return f;
}