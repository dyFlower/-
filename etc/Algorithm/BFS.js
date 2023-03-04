// 너비 우선 탐색
// 시작점과 가까운 것 위주로 탐색을 하겠다. 맹목적인 탐색. 최단경로를 찾아준다. 미로 찾기
// 큐를 사용한다. 방문 처리

function bfs(startNode) {
  let queue = []; // 탐색할 노드를 담을 큐
  let visited = new Set(); // 방문한 노드를 체크할 Set

  queue.push(startNode); // 시작 노드를 큐에 추가
  visited.add(startNode); // 시작 노드를 방문 처리

  while (queue.length !== 0) {
    // 큐에 노드가 있는 동안 반복
    let currNode = queue.shift(); // 큐에서 가장 앞에 있는 노드를 가져옴
    console.log(currNode); // 노드를 출력하거나 다른 작업을 수행

    // 현재 노드의 자식 노드를 모두 큐에 추가
    for (let i = 0; i < currNode.children.length; i++) {
      let childNode = currNode.children[i];
      if (!visited.has(childNode)) {
        // 방문한 적이 없는 노드만 추가
        queue.push(childNode);
        visited.add(childNode);
      }
    }
  }
}

// 예시
// 그래프 정의
class GraphNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

let nodeA = new GraphNode('A');
let nodeB = new GraphNode('B');
let nodeC = new GraphNode('C');
let nodeD = new GraphNode('D');
let nodeE = new GraphNode('E');
let nodeF = new GraphNode('F');

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeE, nodeF];

// BFS 탐색 실행
bfs(nodeA);
