//2차원 배열 깊은 복사하는 법을 기억해두자,,,!!

function solution(board) {
    let answer = board.map(v => [...v])
    const n = board.length
    for(i in board){
        i=parseInt(i)
        for(j in board[i]){         
            j=parseInt(j)
            if(board[i][j] == 1){            
                if(i - 1 >= 0){
                answer[i - 1][j] = 1} 
                if(i + 1 < n){ 
                answer[i + 1][j] = 1}
                if(i - 1 >= 0 && j + 1 < n){
                answer[i - 1][j + 1] = 1}
                if(i - 1 >= 0 && j - 1 >= 0){
                answer[i - 1][j - 1] = 1}
                if(i + 1 < n && j - 1 >= 0){
                answer[i + 1][j - 1] = 1}
                if(i + 1 < n && j + 1 < n){
                answer[i + 1][j + 1] = 1}
                if(j - 1 >= 0){
                answer[i][j - 1] = 1}
                if(j + 1 < n){
                answer[i][j + 1] = 1}
            }
        }
    }
    return answer.flat().filter(v => v != 1).length;
}