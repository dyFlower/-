function solution(dots) {
    let width = new Set();
    let height = new Set();

    for (let i in dots) {
        width.add(dots[i][0]);
        height.add(dots[i][1]);
    }
    width = [...width];
    height = [...height];
    return Math.abs(parseInt(width[0] - width[1]) * (height[0] - height[1]));
}
