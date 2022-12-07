class Graph {
  constructor(v) {
    this.V = v;
    // this.adj = new Array(v).fill([]);
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }
  DFSUtil(v, visited) {
    visited[v] = true;
    console.log(v + " ");
    for (const n of this.adj[v]) {
      if (!visited[n]) this, this.DFSUtil(n, visited);
    }
  }
  DFS() {
    var visited = new Array(this.V).fill(false);
    for (var i = 0; i < this.V; i++) {
      if (visited[i] == false) this.DFSUtil(i, visited);
    }
  }
}

g = new Graph(10);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(8,9);

console.log(g.adj);

g.DFS();
