function solution(array) {
    const numMax = [[...array].sort((a,b)=> b-a)][0][0]
    return [numMax, array.indexOf(numMax)]
}