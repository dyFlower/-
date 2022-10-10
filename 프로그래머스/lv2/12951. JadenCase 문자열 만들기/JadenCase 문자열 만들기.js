function solution(s) {
    var answer = '';
    s = s.split(' ')
    
    for (let i in s){
        s[i] = s[i].toLowerCase().split('')
        if (s[i].length != 0)
        {s[i][0] = s[i][0].toUpperCase()}
        s[i] = s[i].join('')
    }
    
    answer = s.join(' ')
    return answer;
}