'use strict';

var requirejs = require('requirejs');
var should = require('chai').should();
var expect = require('chai').expect;
var should = require('chai').should();

requirejs.config({
    baseUrl: '../js/libs/inhouse',
    nodeRequire: require,
    paths: {
        stack: 'Stack',
        queue: 'Queue',
        node: 'Node',
        linkedList: 'LinkedList',
        vertex: 'Vertex',
        graph: 'Graph'
    }
});

describe('Stack ADT Unit Test', function() {
    var Stack = requirejs('stack');
    var myStack = new Stack();

    describe('Empty Stack', function(){
      describe('Size() method', function(){
        it('should return 0 for empty stack', function(){
            myStack.size().should.equal(0);
        });
      });
      describe('isEmpty() method', function(){
        it('should return true for empty stack', function(){
            myStack.isEmpty().should.be.true;
        });
      });
      describe('peek() method', function() {
        it('should throw exception for empty stack', function() {
            expect(function() { myStack.peek(); }).to.throw(Error);
        });
      });
      describe('pop() method', function() {
        it('should throw exception for empty stack', function() {
            expect(function() { myStack.pop(); }).to.throw(Error);
        });
      });
    });

    describe('Non-Empty Stack', function(){
      before(function() {
        myStack.push('a');
        myStack.push('b');
      });
      describe('Size() method', function(){
        it('should return correct size', function(){
            myStack.size().should.equal(2);
        });
      });
      describe('isEmpty() method', function(){
        it('should return false for non-empty stack', function(){
            myStack.isEmpty().should.be.false;
        });
      });
      describe('peek() method', function() {
        it('should not throw exception for non-empty stack', function() {
            expect(function() { myStack.peek(); }).to.not.throw(Error);
        });
      });
      describe('pop() method', function() {
        it('should not throw exception for non-empty stack', function() {
            expect(function() { myStack.pop(); }).to.not.throw(Error);
            myStack.size().should.equal(1);
        });
      });
      describe('emptify() method', function() {
        it('should empty the stack', function() {
            expect(function() { myStack.pop(); }).to.not.throw(Error);
            myStack.emptify();
            myStack.isEmpty().should.be.true;
        });
      });
    });
});