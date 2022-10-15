function solution(hp) {
    let a = 0;
    let b = 0;
    
    a = Math.floor(hp / 5)
    hp = hp % 5
    
    b =  Math.floor(hp / 3)
    hp = hp % 3

    return hp + a + b;
}