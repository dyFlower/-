function solution(numbers) {
  let numStrings = numbers.map(String);
  numStrings.sort((a, b) => {
    return (b+a) - (a+b);
  });
  return numStrings[0] === '0' ? '0' : numStrings.join('');
}
