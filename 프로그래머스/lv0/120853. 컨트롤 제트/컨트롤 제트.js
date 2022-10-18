function solution(s) {
    s = s.split(' ') 
    let i = 0
    for(i in s){
        if(s[0] === 'Z'){
            s.shift()
        }else{
            break}
    }
    i = 0
    while(i < s.length){
        s[i] === 'Z' ? s.splice(i-1, 2): i+=2;
        i--
    }
    return s.length === 0 ? 0 : s.map(Number).reduce((acc,r)=>acc+r);
}

//0일 때가 있었군!!!