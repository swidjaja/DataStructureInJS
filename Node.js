define(function(require) {

    'use strict';
    
    function Node(item) {
        this.item = (typeof item !== 'undefined') ? item : null;
        this.nextNode = null;
    }

    Node.prototype.init = function(item) {
        this.item = item;
    };

    Node.prototype.getItem = function() {
        return this.item;
    };

    Node.prototype.setItem = function(item) {
        this.item = item;
    };

    Node.prototype.getNextNode = function() {
        return this.nextNode;
    };

    Node.prototype.setNextNode = function(node) {
        this.nextNode = node;
    };

    return Node;
});