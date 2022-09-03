function solution(strings, n) {
    var answer = [];
    let box = [], box2 = []
    
    for(let i = 0; i < strings.length; i++){
        box[i] = strings[i].split('')
        box[i].unshift(box[i][n])
        box[i].splice(n+1, 1)
        box[i] = box[i].join('')
    }
    box.sort()
    console.log(box)
    for(let i = 0; i < strings.length; i++){
        box2[i] = box[i].split('')
        box2[i].splice(n + 1, 0, box2[i][0])
        box2[i].splice(0, 1)
        box2[i] = box2[i].join('')
    }
    
    return box2;
}