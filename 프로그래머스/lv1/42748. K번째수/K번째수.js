function solution(array, commands) {
    var answer = [];
    let box = [];
    for(let i = 0; i < commands.length; i++){
        box = array.slice(commands[i][0] - 1 , commands[i][1])
        box.sort((a,b) => a - b) //숫자열이 문자열로 바뀌어서 정렬이 된다,,,,
        answer.push(box[commands[i][2]-1])
        
    }
    return answer;
}