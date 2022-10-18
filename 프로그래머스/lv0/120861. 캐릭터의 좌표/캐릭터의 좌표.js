function solution(keyinput, board) {
    var answer = [0,0];
    let limitX = Math.floor(board[0] / 2)
    let limitY = Math.floor(board[1] / 2)
    
    for(i in keyinput){
        switch(keyinput[i]){
            case "left":
                answer[0] -= 1
                if(answer[0] < -1 * limitX){
                    answer[0] += 1
                }
                break;
            case "right":
                answer[0] +=1
                 if(answer[0] > limitX){
                    answer[0] -= 1
                }
                break;
            case "up":
                answer[1] +=1
                 if(answer[1] > limitY){
                    answer[1] -= 1
                }
                break;
            case "down":
                answer[1] -=1
                    if(answer[1] < -1 * limitY){
                    answer[1] += 1
                }
                break;   
        }
    }
    return answer;
}