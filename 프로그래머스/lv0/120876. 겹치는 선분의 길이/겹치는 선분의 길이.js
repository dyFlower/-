function solution(lines) {
    var answer = 0;
    let temp = [];
    let count = {};

    lines.forEach((v) => {
        for (let i = v[0]; i < v[1]; i++) {
            temp.push((2 * i + 1) / 2);
        }
    });
    for (let i in temp) {
        count[temp[i]] = temp.filter((v) => v == temp[i]).length;
    }
    count = Object.entries(count);

    for (let i of count) {
        if (i[1] > 1) {
            answer++;
        }
    }
    return answer;
}