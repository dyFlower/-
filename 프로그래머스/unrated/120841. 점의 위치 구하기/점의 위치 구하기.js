function solution(dot) {
    return dot[0] * dot[1] < 0 ? dot[0] < 0 ? 2 : 4 : dot[0] < 0 ? 3 : 1;
}