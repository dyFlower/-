function solution(clothes) {
    let answer = 1;
    const temp = {};
    for(let i = 0; i < clothes.length; i++){
        for(let j = 0; j < clothes[i].length - 1; j++){
            if(!temp[clothes[i][clothes[i].length - 1 ]]){
                temp[clothes[i][clothes[i].length - 1 ]] = []
            }
            temp[clothes[i][clothes[i].length - 1 ]].push(clothes[i][j])
        }
    }
    for(let i = 0; i < Object.values(temp).length; i++){
        answer *= Object.values(temp)[i].length + 1
    }
    return answer - 1;
}