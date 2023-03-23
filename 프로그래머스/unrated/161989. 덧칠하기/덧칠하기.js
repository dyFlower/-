function solution(n, m, section) {
    let answer = 0;
    const wall = Array(n).fill(true)
    for(let i = 0; i < section.length; i++){
        wall[section[i]-1] = false
    }
    for(let i = 0; i < n; i++){
        if(wall[i] === false){
           for(let j = 0; j < m ; j++){
               wall[i+j] = true
           }
            answer++
        }
    }
    return answer;
}