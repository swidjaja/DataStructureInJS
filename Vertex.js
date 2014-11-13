define(function(require) {
    'use strict';

    var idx = 0;

    var getNextId = function() {
        return 'vertex' + idx++;
    };

    function Vertex(item) {
        this.id = getNextId();
        this.item = item;
    }

    return Vertex;
});