function solution(box, n) {
    let num1 = Math.floor(box[0]/n)
    let num2 = Math.floor(box[1]/n)
    let num3 = Math.floor(box[2]/n)
    return num1 * num2 * num3;
}