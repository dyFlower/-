function solution(keymap, targets) {
    var answer = [];
    let temp = [];
    let wordTemp = [];
    for(let target of targets){
        for(let char of target){
            for(let key of keymap){
                if(key.includes(char)){
                    temp.push(key.indexOf(char) + 1)
                }
            }
            wordTemp.push(Math.min(...temp))
            temp = []
        }
        if(wordTemp.includes(Infinity)){
            answer.push(-1)
            wordTemp = []
        }
        else{
        answer.push(wordTemp.reduce((acc,v) => acc + v))
        wordTemp = []
        }
    }
    return answer;
}