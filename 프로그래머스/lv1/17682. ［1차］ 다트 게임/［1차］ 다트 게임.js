function solution(dartResult) {
    var answer = 0;
    let temp = 0;
    let temp2 = [];

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] == 'S') {
            temp2.push(temp);
        } else if (dartResult[i] == 'D') {
            temp2.push(temp ** 2);
        } else if (dartResult[i] == 'T') {
            temp2.push(temp ** 3);
        } else if (dartResult[i] == '*') {
            temp2[temp2.length - 1] *= 2;
            temp2[temp2.length - 2] *= 2;
        } else if (dartResult[i] == '#') {
            temp2[temp2.length - 1] *= -1;
        }
    }
    for (let i of temp2) {
        answer += i;
    }
    return answer;
}