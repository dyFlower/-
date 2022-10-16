function solution(my_string) {
    let temp = my_string.split('').map(Number).join('').split('NaN').map(Number).filter((v) => v != 0);
    return temp.length === 0 ? 0 : temp.reduce((acc, r) => acc + r);
}
