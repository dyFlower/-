// 선택 정렬
// 가장 작은 값을 선택해서 가장 앞으로 보내는 정렬
// O(N^2), 비효율적
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// 버블 정렬
// 옆의 값과 비교하여 작은 값을 앞으로 보내는 정렬
// O(N^2), 가장 비효율적
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 삽입 정렬
// 각 숫자를 적절한 위치에 삽입하여 정렬
// O(N^2), 위의 정렬들보다는 효율적이긴 하다.
// 거의 정렬되어 있는 상태에서 효율적이다.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let tmp = arr[i];
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

// 퀵 정렬
// 특정 값을 기준으로 큰 값과 작은 값을 교환한 뒤에 배열을 반으로 나눈다. ( 분할 정복, 피봇 사용 )
// O(N * logN), 최악의 경우 O(N^2) : [1,2,3,4,5,6,7,8,9,10]

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  const pivot = partition(arr, left, right);
  quickSort(arr, left, pivot - 1);
  quickSort(arr, pivot + 1, right);
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}
