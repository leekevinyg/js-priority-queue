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

let key = 3; // this is used to identify the inserted object inside the queue
let priority = 3; // must be provided as an integer value
minPriorityQueue.insert(key, priority);

minPriorityQueue.insert(10, 10);
minPriorityQueue.peek() // returns { key: 3, priority: 3 }
minPriorityQueue.remove() // returns { key: 3, priority: 3 }
minPriorityQueue.remove() // returns { key: 10, priority: 10 }
minPriorityQueue.isEmpty() // returns true


let maxPriorityQueue = new MaxPriorityQueue();
maxPriorityQueue.insert(3, 3);
maxPriorityQueue.insert(10, 10);
maxPriorityQueue.peek() // returns { key: 10, priority: 10 }
maxPriorityQueue.remove() // returns { key: 10, priority: 10 }
maxPriorityQueue.remove() // returns { key: 3, priority: 3 }
maxPriorityQueue.isEmpty() // returns true

```

<a name="API"></a>
# API

Both the ```MaxPriorityQueue``` and ```MinPriorityQueue``` expose the following functions:

* **peek()**

Returns the highest priority item in the queue in constant time. For a ```MaxPriorityQueue``` this is the max element. For a ```MinPriorityQueue``` this is the min element 

* **insert(key, priority)**

The insert operation takes ```key``` and ```priority``` arguments and inserts the following object into the queue:

``` 
{
    key: key, 
    priority: priority
} 
```

The ```key``` argument wil be used to identify the object with the given priority.
The ```priority``` argument must be provided as an integer.

The operation completes in ```O(lg n)``` time.

* **remove()**

Removes the highest priority item in the queue in ```O(lg n)``` time. For a ```MaxPriorityQueue``` this is the max element. For a ```MinPriorityQueue``` this is the min element. 

The returned item is of the form:

```
{
    key: keyProvidedInTheInsertOperation,
    priority: priorityProvidedInTheInsertOperation
}

```

* **isEmpty()**

Returns a boolean value indicating whether the queue is empty or not.

* **length()**

Returns the length of the queue.

* **getHeap()**

Returns an array representation of the binary heap backing the priority queue. Note this contains a dummy ```null``` element at index ```0```.
