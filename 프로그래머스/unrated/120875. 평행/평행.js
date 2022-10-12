function solution(dots) {
    let temp = [];

    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            temp.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
        }
    }
    let cor = new Set(temp);

    return cor.size !== 6 ? 1 : 0;
}
