# 자료구조 시각화 (Data Structure Visualizers)

선형·비선형 자료구조와 알고리즘을 단계별로 시각적으로 학습할 수 있는 웹 사이트입니다.

## 폴더 구조

```
cote/
├── index.html              # 메인 페이지 (진입점)
├── README.md
├── pages/                  # 비주얼라이저 페이지 (카테고리별)
│   ├── array-list/         # 섹션 1. 배열과 리스트
│   │   ├── array.html      # 정적/동적 배열
│   │   ├── 2d-array.html
│   │   ├── linked-list.html
│   │   ├── doubly-linked-list.html
│   │   └── circular-linked-list.html
│   ├── stack-queue/        # 섹션 2. 스택과 큐
│   │   ├── stack.html
│   │   ├── queue.html
│   │   └── queue-array.html
│   ├── tree/               # 섹션 3. 트리
│   │   ├── binary-tree.html
│   │   ├── bst.html
│   │   ├── avl-tree.html
│   │   ├── red-black-tree.html
│   │   └── heap.html
│   ├── sorting/            # 섹션 4. 정렬 알고리즘
│   │   ├── bubble-sort.html
│   │   ├── selection-sort.html
│   │   ├── insertion-sort.html
│   │   ├── merge-sort.html
│   │   ├── quick-sort.html
│   │   ├── heap-sort.html
│   │   └── binary-search.html
│   ├── hash/               # 섹션 5. 해시 맵
│   │   ├── chaining.html
│   │   └── open-addressing.html
│   ├── graph/              # 섹션 6. 그래프
│   │   ├── basics.html
│   │   ├── dfs-bfs.html
│   │   ├── dijkstra.html
│   │   ├── floyd-warshall.html
│   │   ├── bellman-ford.html
│   │   └── mst.html
│   └── coming-soon.html    # 준비 중 플레이스홀더
└── archive/                # 원본 HTML 백업 (참고용)
    └── …
```

- **진입점**: `index.html`만 브라우저로 열면 됩니다.
- **실제 콘텐츠**: `pages/` 아래를 카테고리별 폴더로 사용합니다. 새 비주얼라이저는 해당 폴더에 추가한 뒤 메인에서 링크만 걸면 됩니다.
- **archive/**: 원본 단일 HTML 보관용.

## 사용 방법

1. **메인**: 브라우저에서 `index.html`을 엽니다.
2. **이동**: 섹션별 카드를 클릭해 해당 비주얼라이저로 이동합니다.
3. **메인으로**: 각 페이지 상단의 « 메인으로 » 링크를 클릭합니다.
4. **준비 중**: 해시 맵·그래프 등 « 준비 중 » 카드는 플레이스홀더 페이지로 연결됩니다.

## 페이지별 내용 (목차 기준)

### 섹션 1. 배열과 리스트

| 항목 | 영문 | 비고 |
|------|------|------|
| 정적 배열과 동적 배열 | Static / Dynamic Arrays | array-list/array.html |
| 2차원 배열 | 2D Arrays | array-list/2d-array.html |
| 단일 연결 리스트 | Linked Lists | array-list/linked-list.html |
| 이중 연결 리스트 | Doubly Linked Lists | array-list/doubly-linked-list.html |
| 원형 연결 리스트 | Circular Linked Lists | array-list/circular-linked-list.html |

### 섹션 2. 스택과 큐

| 항목 | 영문 | 비고 |
|------|------|------|
| 스택 | Push, Pop, Peek (Stack) | stack-queue/stack.html |
| 큐 | Enqueue, Dequeue (Queue) | stack-queue/queue.html |
| 큐 (배열 기반) | 선형 큐 vs 원형 큐 (Linear / Circular) | stack-queue/queue-array.html |

### 섹션 3. 트리

| 항목 | 영문 | 비고 |
|------|------|------|
| 이진 트리 (4가지 순회 방식) | Binary Trees | tree/binary-tree.html |
| 이진 탐색 트리 | Binary Search Tree | tree/bst.html |
| AVL 트리 | AVL Tree | tree/avl-tree.html |
| Red-Black 트리 | Red-Black Tree | tree/red-black-tree.html |
| 힙 (우선순위 큐) | Heap | tree/heap.html |

### 섹션 4. 정렬 알고리즘

| 페이지 | 항목 | 영문 |
|--------|------|------|
| sorting/bubble-sort.html | 버블 정렬 | Bubble Sort |
| sorting/selection-sort.html | 선택 정렬 | Selection Sort |
| sorting/insertion-sort.html | 삽입 정렬 | Insertion Sort |
| sorting/merge-sort.html | 합병 정렬 | Merge Sort |
| sorting/quick-sort.html | 퀵 정렬 | Quick Sort |
| sorting/heap-sort.html | 힙 정렬 | Heap Sort |
| sorting/binary-search.html | 이진 탐색 | Binary Search |

### 섹션 5. 해시 맵

| 항목 | 영문 | 비고 |
|------|------|------|
| 해시 맵 (체이닝 방식) | Hash Map (Chaining) | hash/chaining.html |
| 해시 맵 (오픈 어드레싱 방식) | Hash Map (Open Addressing) | hash/open-addressing.html |

### 섹션 6. 그래프

| 항목 | 영문 | 비고 |
|------|------|------|
| 그래프 기초 | Graph (방향성, 가중치, 인접 리스트/행렬) | graph/basics.html |
| DFS vs. BFS | 깊이 우선 탐색 vs. 너비 우선 탐색 | graph/dfs-bfs.html |
| 다익스트라 | Dijkstra | graph/dijkstra.html |
| 플로이드 워셜 | Floyd-Warshall | graph/floyd-warshall.html |
| 벨만 포드 | Bellman-Ford | graph/bellman-ford.html |
| 최소 신장 트리 | Minimum Spanning Trees (Kruskal) | graph/mst.html |

## 기술

- HTML5, CSS3, Vanilla JavaScript
- 반응형 레이아웃 (모바일 대응)
