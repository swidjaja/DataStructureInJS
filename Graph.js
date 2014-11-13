define(function(require) {
    'use strict';

    function Graph(directed) {
        this.directed = !!directed;
        this.vertices = {};
        this.edges = {};
    }

    Graph.prototype.addVertex = function(vertex) {
        if (!this.vertices[vertex.id]) {
            this.vertices[vertex.id] = vertex;
        }
    };

    // Adjacency map representation
    Graph.prototype.addEdge = function(vertex1, vertex2, weight) {
        if (!this.edges[vertex1.id]) {
            this.edges[vertex1.id] = {};
        }
        this.edges[vertex1.id][vertex2.id] = weight;
        if (!this.directed) {
            if (!this.edges[vertex2.id]) {
                this.edges[vertex2.id] = {};
            }   
            this.edges[vertex2.id][vertex1.id] = weight;
        }
    };

    Graph.prototype.showGraph = function() {
        var output = '';
        var vertex1Keys = Object.keys(this.edges);
        for (var idx = 0, maxX = vertex1Keys.length; idx < maxX; ++idx) {
            var vertex1Key = vertex1Keys[idx];
            var vertex1 = this.vertices[vertex1Key];
            output = '"' + vertex1.item + '"' + ' -> ';
            var vertex2Keys = Object.keys(this.edges[vertex1.id]);
            for (var idy = 0, maxY = vertex2Keys.length; idy < maxY; ++idy) {
                var vertex2Key = vertex2Keys[idy];
                var vertex2 = this.vertices[vertex2Key];
                output += '"' + vertex2.item + '"' +  ' ';
            }
            console.log(output);
            output = '';
        }
    };

    return Graph;
});