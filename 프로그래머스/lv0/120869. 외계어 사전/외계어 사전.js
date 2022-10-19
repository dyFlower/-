function solution(spell, dic) {
    var answer = 2;
    let temp = 0;
    for(i of dic){
        for(j of spell){
            i.includes(j) ? temp++ : ''
        }if(temp === spell.length){
            answer = 1
        }
        temp=0
    }
    return answer;
}