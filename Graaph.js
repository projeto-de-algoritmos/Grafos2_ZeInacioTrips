class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = new Map();
    this.populate_vertices();
    this.populate_graph(this);
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


  populate_vertices() {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    for (const estado of estados) {
      this.addVertex(estado);
    }

  }

  populate_graph() {
    this.addEdge('AC', 'RO', 709);
    this.addEdge('AC', 'AM', 864);
    this.addEdge('AL', 'PE', 248);
    this.addEdge('AL', 'SE', 164);
    this.addEdge('AP', 'PA', 602);
    this.addEdge('AM', 'RO', 712);
    this.addEdge('AM', 'RR', 236);
    this.addEdge('AM', 'MT', 1464);
    this.addEdge('AM', 'PA', 3063);
    this.addEdge('BA', 'SE', 283);
    this.addEdge('BA', 'PE', 750);
    this.addEdge('BA', 'PI', 799);
    this.addEdge('BA', 'TO', 1145);
    this.addEdge('CE', 'PI', 319);
    this.addEdge('CE', 'RN', 349);
    this.addEdge('CE', 'PB', 717);
    this.addEdge('CE', 'PE', 629);
    this.addEdge('DF', 'GO', 209);
    this.addEdge('DF', 'MG', 739);
    this.addEdge('ES', 'MG', 534);
    this.addEdge('ES', 'RJ', 411);
    this.addEdge('ES', 'BA', 1032);
    this.addEdge('GO', 'MS', 691);
    this.addEdge('GO', 'MT', 903);
    this.addEdge('MA', 'PI', 349);
    this.addEdge('MA', 'TO', 994);
    this.addEdge('MA', 'PA', 780);
    this.addEdge('MT', 'MS', 559);
    this.addEdge('MT', 'RO', 1267);
    this.addEdge('MT', 'PA', 1739);
    this.addEdge('MS', 'PR', 998);
    this.addEdge('MS', 'SP', 1016);
    this.addEdge('MG', 'RJ', 434);
    this.addEdge('MG', 'SP', 586);
    this.addEdge('MG', 'BA', 1350);
    this.addEdge('PA', 'RO', 977);
    this.addEdge('PA', 'TO', 1117);
    this.addEdge('PA', 'MA', 848);
    this.addEdge('PA', 'RR', 1306);
    this.addEdge('PB', 'RN', 164);
    this.addEdge('PB', 'PE', 119);
    this.addEdge('PR', 'SC', 203);
    this.addEdge('PR', 'SP', 408);
    this.addEdge('PE', 'PI', 809);
    this.addEdge('PE', 'BA', 750);
    this.addEdge('PI', 'MA', 377);
    this.addEdge('PI', 'CE', 320);
    this.addEdge('PI', 'BA', 799);
    this.addEdge('RJ', 'SP', 442);
    this.addEdge('RN', 'CE', 335);
    this.addEdge('RN', 'PB', 188);
    this.addEdge('RS', 'SC', 469);
    this.addEdge('RS', 'PR', 702);
    this.addEdge('RO', 'AM', 741);
    this.addEdge('RO', 'MT', 1306);
    this.addEdge('RR', 'AM', 394);
    this.addEdge('RR', 'PA', 1420);
    this.addEdge('SC', 'PR', 227);
    this.addEdge('SC', 'RS', 466);
    this.addEdge('SP', 'MG', 586);
    this.addEdge('SP', 'RJ', 442);
    this.addEdge('SP', 'PR', 408);
    this.addEdge('SE', 'AL', 164);
    this.addEdge('SE', 'BA', 283);
    this.addEdge('TO', 'BA', 1145);
    this.addEdge('TO', 'MA', 994);
    this.addEdge('TO', 'PA', 1117);
    this.addEdge('BA', 'DF', 1444);
    this.addEdge('GO', 'MG', 888);
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



const graph = new Graph();

console.log(graph.shortestPath('AC', 'SP'));



