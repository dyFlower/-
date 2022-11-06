function solution(sizes) {
    let bestSize = [Math.max(...sizes.map(v => Math.min(...v))), Math.max(...sizes.map(v => Math.max(...v)))]
    return bestSize[0] * bestSize[1];
}