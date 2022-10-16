function solution(common) {
    let a = common.length - 1;
    return common[a] - common[a-1] === common[a-1] - common[a -2] ? 2 * common[a] - common[a-1] : common[a] * (common[a] / common[a - 1])
}
