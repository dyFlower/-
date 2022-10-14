function solution(my_string) {
    return my_string.split('').map(Number).filter(v => !isNaN(v)).reduce((acc,n)=>acc+n);
}