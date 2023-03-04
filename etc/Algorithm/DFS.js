// 깊이 우선 탐색
// 스택 사용

// 스택을 사용한 DFS
function dfsWithStack(startNode) {
  let stack = []; // 탐색할 노드를 담을 스택
  let visited = new Set(); // 방문한 노드를 체크할 Set

  stack.push(startNode); // 시작 노드를 스택에 추가

  while (stack.length !== 0) {
    let currNode = stack.pop(); // 스택에서 가장 위에 있는 노드를 가져옴
    if (!visited.has(currNode)) {
      // 방문한 적이 없는 노드만 처리
      visited.add(currNode); // 노드를 방문 처리
      console.log(currNode); // 노드를 출력하거나 다른 작업을 수행

      // 현재 노드의 자식 노드를 역순으로 스택에 추가
      for (let i = currNode.children.length - 1; i >= 0; i--) {
        let childNode = currNode.children[i];
        if (!visited.has(childNode)) {
          // 방문한 적이 없는 노드만 추가
          stack.push(childNode);
        }
      }
    }
  }
}

// 재귀 함수를 사용한 DFS
function dfsWithRecursion(currNode, visited) {
  visited.add(currNode); // 노드를 방문 처리
  console.log(currNode); // 노드를 출력하거나 다른 작업을 수행

  // 현재 노드의 자식 노드를 재귀 호출로 탐색
  for (let i = 0; i < currNode.children.length; i++) {
    let childNode = currNode.children[i];
    if (!visited.has(childNode)) {
      // 방문한 적이 없는 노드만 탐색
      dfsWithRecursion(childNode, visited);
    }
  }
}
