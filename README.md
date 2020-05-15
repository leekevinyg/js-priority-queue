# Vanilla Priority Queue

A javascript implementation of a priority queue backed by a binary heap.

[![Build Status](https://travis-ci.com/leekevinyg/js-priority-queue.svg?branch=master)](https://travis-ci.com/leekevinyg/js-priority-queue)
[![Coverage Status](https://coveralls.io/repos/github/leekevinyg/js-priority-queue/badge.svg)](https://coveralls.io/github/leekevinyg/js-priority-queue)
[![npm version](https://badge.fury.io/js/vanilla-priority-queue.svg)](https://badge.fury.io/js/vanilla-priority-queue)

- <a href="#Installation">Installation</a>
- <a href="#Usage">Usage</a>
- <a href="#API">API</a>

<a name="Installation"></a>
# Installation

```npm i vanilla-priority-queue --save```

<a name="Usage"></a>
# Usage

```

const {  MinPriorityQueue, MaxPriorityQueue } = require('vanilla-priority-queue');

let minPriorityQueue = new MinPriorityQueue();
minPriorityQueue.insert(3);
minPriorityQueue.insert(10);
minPriorityQueue.peek() // returns 3
minPriorityQueue.remove() // returns 3
minPriorityQueue.remove() // returns 10
minPriorityQueue.isEmpty() // returns true


let maxPriorityQueue = new MaxPriorityQueue();
maxPriorityQueue.insert(3);
maxPriorityQueue.insert(10);
maxPriorityQueue.peek() // returns 10
maxPriorityQueue.remove() // returns 10
maxPriorityQueue.remove() // returns 3
maxPriorityQueue.isEmpty() // returns true

```

<a name="API"></a>
# API

Both the ```MaxPriorityQueue``` and ```MinPriorityQueue``` expose the following functions:

* **peek()**

Returns the value of the highest priority item in the queue in constant time. For a ```MaxPriorityQueue``` this is the max element. For a ```MinPriorityQueue``` this is the min element. 

* **insert(anInteger)**

Inserts ```anInteger``` into the priority queue in ```O(lg n)``` time.

* **remove()**

Removes the highest priority item in the queue in ```O(lg n)``` time. For a ```MaxPriorityQueue``` this is the max element. For a ```MinPriorityQueue``` this is the min element. 

* **isEmpty()**

Returns a boolean value indicating whether the queue is empty or not.

* **length()**

Returns the length of the queue.

* **getHeap()**

Returns an array representation of the binary heap backing the priority queue. Note this contains a dummy ```null``` element at index ```0```.
