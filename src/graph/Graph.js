import React from "react";

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
    this.addEdge('AC', 'RO', 526);
    this.addEdge('AC', 'AM', 1413);
    this.addEdge('AL', 'PE', 256);
    this.addEdge('AL', 'SE', 272);
    this.addEdge('AP', 'PA', 5963);
    this.addEdge('AP', 'AM', 2982);
    this.addEdge('AM', 'RO', 888);
    this.addEdge('AM', 'RR', 738);
    this.addEdge('AM', 'MT', 2287);
    this.addEdge('AM', 'PA', 3063);
    this.addEdge('BA', 'SE', 316);
    this.addEdge('BA', 'PE', 800);
    this.addEdge('BA', 'PI', 1138);
    this.addEdge('BA', 'TO', 1375);
    this.addEdge('CE', 'PI', 574);
    this.addEdge('CE', 'RN', 507);
    this.addEdge('CE', 'PB', 636);
    this.addEdge('CE', 'PE', 744);
    this.addEdge('DF', 'GO', 208);
    this.addEdge('DF', 'MG', 731);
    this.addEdge('ES', 'MG', 511);
    this.addEdge('ES', 'RJ', 546);
    this.addEdge('ES', 'BA', 1047);
    this.addEdge('GO', 'MS', 840);
    this.addEdge('GO', 'MT', 888);
    this.addEdge('MA', 'PI', 435);
    this.addEdge('MA', 'TO', 1248);
    this.addEdge('MA', 'PA', 576);
    this.addEdge('MT', 'MS', 707);
    this.addEdge('MT', 'RO', 1459);
    this.addEdge('MT', 'PA', 2695);
    this.addEdge('MS', 'PR', 979);
    this.addEdge('MS', 'SP', 987);
    this.addEdge('MG', 'RJ', 442);
    this.addEdge('MG', 'SP', 583);
    this.addEdge('MG', 'BA', 1403);
    this.addEdge('PA', 'RO', 2569);
    this.addEdge('PA', 'TO', 1224);
    this.addEdge('PA', 'MA', 576);
    this.addEdge('PA', 'RR', 3807);
    this.addEdge('PB', 'RN', 181);
    this.addEdge('PB', 'PE', 116);
    this.addEdge('PR', 'SC', 307);
    this.addEdge('PR', 'SP', 407);
    this.addEdge('PE', 'PI', 1125);
    this.addEdge('PE', 'BA', 806);
    this.addEdge('PI', 'MA', 436);
    this.addEdge('PI', 'CE', 604);
    this.addEdge('PI', 'BA', 1165);
    this.addEdge('RJ', 'SP', 442);
    this.addEdge('RN', 'CE', 522);
    this.addEdge('RN', 'PB', 181);
    this.addEdge('RS', 'SC', 463);
    this.addEdge('RO', 'AM', 889);
    this.addEdge('RO', 'MT', 1459);
    this.addEdge('RR', 'AM', 747);
    this.addEdge('RR', 'PA', 3809);
    this.addEdge('SC', 'PR', 305);
    this.addEdge('SC', 'RS', 462);
    this.addEdge('SP', 'MG', 589);
    this.addEdge('SP', 'RJ', 435);
    this.addEdge('SP', 'PR', 465);
    this.addEdge('SE', 'AL', 272);
    this.addEdge('SE', 'BA', 325);
    this.addEdge('TO', 'BA', 1448);
    this.addEdge('TO', 'MA', 1251);
    this.addEdge('TO', 'PA', 1225);
    this.addEdge('BA', 'DF', 1444);
    this.addEdge('GO', 'MG', 888);
  }

   shortestPath(start, end) {
    const { dist, prev } = this.dijkstra(start);
    let answer;
    const path = [];
    let current = end;

    while (current !== null) {
      path.unshift(current);
      current = prev.get(current);
    }

    answer = { path, distance: dist.get(end) };

    return answer;
  }

 
}

export default Graph;


