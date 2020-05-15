# JS Priority Queue

A javascript implementation of a priority queue. The queue is backed by a binary heap and provides constant time ```peek()``` of the highest priority item and O(log n) ```insert``` and ```remove``` operations.

[![Build Status](https://travis-ci.com/leekevinyg/react-tag-input.svg?branch=master)](https://travis-ci.com/leekevinyg/react-tag-input)
[![Coverage Status](https://coveralls.io/repos/github/leekevinyg/react-tag-input/badge.svg?branch=master)](https://coveralls.io/github/leekevinyg/react-tag-input?branch=master)
[![npm version](https://badge.fury.io/js/reactjs-tag-input.svg)](https://badge.fury.io/js/reactjs-tag-input)

- <a href="#Installation">Installation</a>
- <a href="#Usage">Usage</a>
- <a href="#API">API</a>

<a name="Installation"></a>
# Installation

```npm i js-priority-queue --save```

<a name="Usage"></a>
# Usage

```

import { MinPriorityQueue, MaxPriorityQueue } from 'js-priority-queue';

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