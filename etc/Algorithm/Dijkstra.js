// 다익스트라 알고리즘
// 정점에서 정점으로 가는 최단 경로를 구한다.
// 출발 노드를 설정 -> 각 노드의 최소 비용을 저장 -> 방문하지 않은 노드 중에서 가장 비용이 적은 노드를 선택 -> 해당 노드를 거쳐서 특정 노드로 가는 경우를 고려하여 최소비용 갱신 -> 반복

function dijkstra(graph, start) {
  // 시작 정점에서 모든 정점까지의 최단 거리를 저장하는 객체
  let distance = {};
  for (let node in graph) {
    distance[node] = Infinity;
  }
  // 시작 정점에서 시작 정점까지의 거리는 0으로 초기화
  distance[start] = 0;

  // 우선순위 큐를 사용해 최단 거리를 갱신하는 과정
  let queue = [[start, 0]];
  while (queue.length > 0) {
    let [currentNode, currentDist] = queue.shift();
    // 현재 노드의 최단 거리가 기존에 계산한 거리보다 크다면 무시
    if (currentDist > distance[currentNode]) {
      continue;
    }
    // 현재 노드에서 이웃한 노드들의 최단 거리를 갱신
    for (let [neighbor, weight] of graph[currentNode]) {
      let distanceToNeighbor = currentDist + weight;
      if (distanceToNeighbor < distance[neighbor]) {
        distance[neighbor] = distanceToNeighbor;
        queue.push([neighbor, distanceToNeighbor]);
      }
    }
    // 우선순위 큐를 사용해 다음 노드를 선택
    queue.sort((a, b) => a[1] - b[1]);
  }

  return distance;
}
