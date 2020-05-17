class MinPriorityQueue {
    constructor() {
        this.heap = [null];
    }
    // (1) place item at the next available binary tree position
    // (2) bubble it up if necessary to restore heap property
    insert(key, priority) {
        // add the node into the last position in the binary tree
        this.heap.push({
            key,
            priority,
        });
        if (this.heap.length > 1) {
            // bubble up if necessary
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
            // Math.floor(current/2) is the parent of the node at the current index
            while (current > 1 && this.heap[parent].priority > this.heap[current].priority) {
                // swap current with parent (bubble up)
                let savedCurrent = this.heap[current];
                let savedParent = this.heap[parent];
                this.heap[current] = savedParent;
                this.heap[parent] = savedCurrent;
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
    }
    // (1) Remove item at root of tree 
    // (2) Place item in last position at the root of the tree
    // (3) Bubble down item to restore heap property
    remove() {
        // take off root
        let topElement = this.heap[1];
        if (this.heap.length === 2) {
            // only 1 item left in the heap, pop it off and return topElement
            this.heap.pop();
            return topElement;
        } else if (this.heap.length === 1) {
            // heap is empty
            return topElement;
        } else {
            // place last item at root
            this.heap[1] = this.heap.pop();
        }
        // bubble it down to restore heap property
        let current = 1;
        let leftChild = 2;
        let rightChild = 3;
        if (this.heap[leftChild] === undefined) {
            return topElement;
        }
        while (Math.min(this.heap[leftChild].priority, (this.heap[rightChild] ? this.heap[rightChild].priority : Number.POSITIVE_INFINITY)) < this.heap[current].priority) {
            if (this.heap[leftChild].priority < (this.heap[rightChild] ? this.heap[rightChild].priority : Number.POSITIVE_INFINITY)) {
                let savedParent = this.heap[current];
                let savedChild = this.heap[leftChild];
                this.heap[current] = savedChild;
                this.heap[leftChild] = savedParent;
                current = leftChild;
            }
            else {
                let savedParent = this.heap[current];
                let savedChild = this.heap[rightChild];
                this.heap[current] = savedChild;
                this.heap[rightChild] = savedParent;
                current = rightChild;
            }
            leftChild = 2 * current;
            rightChild = 2 * current + 1;
            if (!this.heap[leftChild] && !this.heap[rightChild]) {
                break;
            }
        }
        return topElement;
    }
    peek() {
        return this.heap[1];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    length() {
        return this.heap.length - 1;
    }
    getHeap() {
        return this.heap;
    }
}

class MaxPriorityQueue {
    constructor() {
        this.heap = [null];
    }
    // (1) place item at the next available binary tree position
    // (2) bubble it up if necessary to restore heap property
    insert(key, priority) {
        // add the node into the last position in the binary tree
        this.heap.push({
            key,
            priority,
        });
        if (this.heap.length > 1) {
            // bubble up if necessary
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
            // Math.floor(current/2) is the parent of the node at the current index
            while (current > 1 && this.heap[parent].priority < this.heap[current].priority) {
                // swap current with parent (bubble up)
                let savedCurrent = this.heap[current];
                let savedParent = this.heap[parent];
                this.heap[current] = savedParent;
                this.heap[parent] = savedCurrent;
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
    }
    // (1) Remove item at root of tree 
    // (2) Place item in last position at the root of the tree
    // (3) Bubble down item to restore heap property
    remove() {
        // take off root
        let topElement = this.heap[1];
        if (this.heap.length === 2) {
            // only 1 item left in the heap, pop it off and return topElement
            this.heap.pop();
            return topElement;
        } else if (this.heap.length === 1) {
            // heap is empty
            return topElement;
        } else {
            // place last item at root
            this.heap[1] = this.heap.pop();
        }
        // bubble it down to restore heap property
        let current = 1;
        let leftChild = 2;
        let rightChild = 3;
        if (this.heap[leftChild] === undefined) {
            return topElement;
        }
        while (Math.max(this.heap[leftChild].priority, (this.heap[rightChild] ? this.heap[rightChild].priority : Number.NEGATIVE_INFINITY)) > this.heap[current].priority) {
            if (this.heap[leftChild].priority > (this.heap[rightChild] ? this.heap[rightChild].priority : Number.NEGATIVE_INFINITY)) {
                let savedParent = this.heap[current];
                let savedChild = this.heap[leftChild];
                this.heap[current] = savedChild;
                this.heap[leftChild] = savedParent;
                current = leftChild;
            }
            else {
                let savedParent = this.heap[current];
                let savedChild = this.heap[rightChild];
                this.heap[current] = savedChild;
                this.heap[rightChild] = savedParent;
                current = rightChild;
            }
            leftChild = 2 * current;
            rightChild = 2 * current + 1;
            if (!this.heap[leftChild] && !this.heap[rightChild]) {
                break;
            }
        }
        return topElement;
    }
    peek() {
        return this.heap[1];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    length() {
        return this.heap.length - 1;
    }
    getHeap() {
        return this.heap;
    }
}

module.exports = {
    MinPriorityQueue,
    MaxPriorityQueue,
};
