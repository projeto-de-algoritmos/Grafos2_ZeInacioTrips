class Graph {
    constructor() {
      this.vertices = new Set();
      this.edges = new Map();
    }
  
    addVertex(v) {
      this.vertices.add(v);
      this.edges.set(v, new Map());
    }
  
    addEdge(v1, v2, weight) {
      this.edges.get(v1).set(v2, weight);
      this.edges.get(v2).set(v1, weight);
    }
  
    dijkstra(start) {
      const dist = new Map();
      const prev = new Map();
      const unvisited = new Set();
  
      for (const v of this.vertices) {
        dist.set(v, Infinity);
        prev.set(v, null);
        unvisited.add(v);
      }
  
      dist.set(start, 0);
  
      while (unvisited.size > 0) {
        let current = null;
        for (const v of unvisited) {
          if (current === null || dist.get(v) < dist.get(current)) {
            current = v;
          }
        }
  
        unvisited.delete(current);
  
        for (const [neighbor, weight] of this.edges.get(current).entries()) {
          const alt = dist.get(current) + weight;
          if (alt < dist.get(neighbor)) {
            dist.set(neighbor, alt);
            prev.set(neighbor, current);
          }
        }
      }
  
      return { dist, prev };
    }
  
    shortestPath(start, end) {
      const { dist, prev } = this.dijkstra(start);
  
      const path = [];
      let current = end;
  
      while (current !== null) {
        path.unshift(current);
        current = prev.get(current);
      }
  
      return { path, distance: dist.get(end) };
    }
}
  
  
