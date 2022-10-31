function solution(fees, records) {
  records = records.map((v) => v.split(' '));
  let carNum = {};
  let charge = [];
  for (let i of records) {
    carNum[i[1]] = 0;
  }
  for (let i in carNum) {
    if (records.filter((v) => v[1] == i).length % 2 === 1) {
      records.push(['23:59', i, 'OUT']);
    }
  }
  function getMinute(input) {
    input = input.split(':').map(Number);
    let minute = input[0] * 60 + input[1];
    return minute;
  }
  for (let i of records) {
    if (i[2] == 'IN') {
      carNum[i[1]] -= getMinute(i[0]);
    } else {
      carNum[i[1]] += getMinute(i[0]);
    }
  }
  carNum = Object.entries(carNum).sort((a, b) => a[0] - b[0]);

  for (i of carNum) {
    if (i[1] > fees[0]) {
      i[1] = fees[1] + Math.ceil((i[1] - fees[0]) / fees[2]) * fees[3];
    } else {
      i[1] = fees[1];
    }
  }
  return carNum.map((v) => v[1]);
}