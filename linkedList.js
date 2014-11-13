define(function(require) {
    'use strict';

    var Node = require('./Node');

    function LinkedList() {
        this.header = new Node(null, null);
    }

    LinkedList.prototype.isEmpty = function() {
        return this.header.getNextNode() === null;
    };

    LinkedList.prototype.insert = function(node) {
        var temp = this.header;

        if (!this.isEmpty()) {
            while (temp.getNextNode()) {
                temp = temp.getNextNode();
            }
        }
        temp.setNextNode(node);
    };

    LinkedList.prototype.reverse = function() {
        if (!this.isEmpty()) {
            var prev = this.header;
            var next = this.header.getNextNode();
            var nextNext;

            while(next) {
                nextNext = next.getNextNode();
                next.setNextNode(prev.getItem() === null ? null : prev);
                prev = next;
                next = nextNext;
            }
            this.header.setNextNode(prev);
        }
    }

    LinkedList.prototype.traverse = function() {
        var temp = this.header.getNextNode();
        while (temp) {
            console.log(temp.getItem());
            temp = temp.getNextNode();
        }
    };

    return LinkedList;
});