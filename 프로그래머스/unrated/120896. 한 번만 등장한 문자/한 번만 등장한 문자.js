function solution(s) {
    let temp = {}
    for(let i = 0; i<s.length; i++){
        temp[s[i]] = 0
    }
    for(let i = 0; i < s.length ; i++){
        temp[s[i]]++
    }
    
    return Object.keys(temp).filter(v => temp[v] == 1).sort().join('')
}