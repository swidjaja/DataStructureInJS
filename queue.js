define(function(require) {

    'use strict';

    function Queue() {
        this.items = [];
    }

    Queue.prototype.size = function() {
        return this.items.length;
    };

    Queue.prototype.enqueue = function(item) {
        this.items.push(item);
        return this;
    };

    Queue.prototype.dequeue = function() {
        if (!this.size()) {
            throw new Error('Queue is Empty!');
        }
        return this.items.shift();
    };

    Queue.prototype.emptify = function() {
        this.items = [];
        return this;
    };

    Queue.prototype.isEmpty = function() {
        return this.items.length === 0;
    };

    Queue.prototype.toString = function() {
        return this.items.join(' ');
    };

    return Queue;
});