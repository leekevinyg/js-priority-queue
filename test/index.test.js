const { MinPriorityQueue, MaxPriorityQueue } = require('../src/index.js');

test('Minimum Priority Queue: Insert() and Peek() - returns the minimum element in the queue', () => {
    let queue = new MinPriorityQueue();
    queue.insert(10);
    queue.insert(1);
    queue.insert(20);
    expect(queue.peek()).toBe(1);
});

test('Minimum Priority Queue: IsEmpty() - returns true if queue is empty', () => {
    let queue = new MinPriorityQueue();
    expect(queue.isEmpty()).toBe(true);
    queue.insert(10);
    expect(queue.isEmpty()).toBe(false);
});


test('Minimum Priority Queue: Remove() - does not remove anything from an empty queue ', () => {
    let queue = new MinPriorityQueue();
    expect(queue.remove()).toBe(undefined);
});


test('Minimum Priority Queue: Remove() - removes minimum element from the queue', () => {
    let queue = new MinPriorityQueue();
    queue.insert(100);
    queue.insert(1000);
    queue.insert(1);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(100);
    expect(queue.remove()).toBe(1000);
    expect(queue.remove()).toBe(undefined);
    queue.insert(3);
    queue.insert(2);
    queue.insert(1);
    expect(queue.remove()).toBe(1);
});

test('Minimum Priority Queue: Remove() - removes minimum element from a heap of 1 item', () => {
    let queue = new MinPriorityQueue();
    queue.insert(100);
    expect(queue.remove()).toBe(100);
});

test('Minimum Priority Queue: Remove() - removes minimum element from a heap of 2 items', () => {
    let queue = new MinPriorityQueue();
    queue.insert(100);
    queue.insert(1000);
    expect(queue.remove()).toBe(100);
});


test('Minimum Priority Queue: handles duplicates', () => {
    let queue = new MinPriorityQueue();
    queue.insert(100);
    queue.insert(100);
    queue.insert(100);
    queue.insert(1);
    expect(queue.remove()).toBe(1);
    expect(queue.length()).toBe(3);
});

test('Minimum Priority Queue: Remove() - restores the heap up left side of binary tree after removal', () => {
    let queue = new MinPriorityQueue();
    queue.insert(4);
    queue.insert(2);
    queue.insert(7);
    queue.insert(1);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(4);
    expect(queue.remove()).toBe(7);
});

test('Minimum Priority Queue: Remove() - restores the heap up right side of binary tree after removal', () => {
    let queue = new MinPriorityQueue();
    queue.insert(4);
    queue.insert(2);
    queue.insert(7);
    queue.insert(1);
    queue.insert(0);
    queue.insert(0);
    expect(queue.remove()).toBe(0);
    expect(queue.remove()).toBe(0);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.getHeap().length).toBe(3); // inclues the null element at index 0;
});

// Max Priority Queue Tests

test('Maximum Priority Queue: Insert() and Peek() - returns the max element in the queue', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(10);
    queue.insert(1);
    queue.insert(20);
    expect(queue.peek()).toBe(20);
});

test('Maximum Priority Queue: IsEmpty() - returns true if queue is empty', () => {
    let queue = new MaxPriorityQueue();
    expect(queue.isEmpty()).toBe(true);
    queue.insert(10);
    expect(queue.isEmpty()).toBe(false);
});


test('Maximum Priority Queue: Remove() - does not remove anything from an empty queue ', () => {
    let queue = new MaxPriorityQueue();
    expect(queue.remove()).toBe(undefined);
});


test('Maximum Priority Queue: Remove() - removes maximum element from the queue', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(100);
    queue.insert(1000);
    queue.insert(1);
    expect(queue.remove()).toBe(1000);
    expect(queue.remove()).toBe(100);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(undefined);
    queue.insert(3);
    queue.insert(2);
    queue.insert(1);
    expect(queue.remove()).toBe(3);
});

test('Maximum Priority Queue: Remove() - removes maximum element from a heap of 1 item', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(100);
    expect(queue.remove()).toBe(100);
});

test('Maximum Priority Queue: Remove() - removes maximum element from a heap of 2 items', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(100);
    queue.insert(1000);
    expect(queue.remove()).toBe(1000);
});

test('Maximum Priority Queue: handles duplicates', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(100);
    queue.insert(100);
    queue.insert(100);
    queue.insert(1);
    expect(queue.remove()).toBe(100);
    expect(queue.length()).toBe(3);
});

test('Maximum Priority Queue: Remove() - restores the heap up left side of binary tree after removal', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(4);
    queue.insert(2);
    queue.insert(7);
    queue.insert(1);
    expect(queue.remove()).toBe(7);
    expect(queue.remove()).toBe(4);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(1);
});

test('Maximum Priority Queue: Remove() - restores the heap up right side of binary tree after removal', () => {
    let queue = new MaxPriorityQueue();
    queue.insert(4);
    queue.insert(2);
    queue.insert(7);
    queue.insert(1);
    queue.insert(0);
    queue.insert(0);
    expect(queue.remove()).toBe(7);
    expect(queue.remove()).toBe(4);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(1);
    expect(queue.getHeap().length).toBe(3); // inclues the null element at index 0;
});