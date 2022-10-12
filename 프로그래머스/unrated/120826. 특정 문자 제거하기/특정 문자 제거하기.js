function solution(my_string, letter) {
    return my_string.split('').filter(n => n != letter).join('');
}