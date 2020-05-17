class MinPriorityQueue{constructor(){this.heap=[null]}insert(a,b){var c=Math.floor;if(this.heap.push({key:a,priority:b}),1<this.heap.length){let a=this.heap.length-1,b=c(a/2);for(;1<a&&this.heap[b].priority>this.heap[a].priority;){let d=this.heap[a],e=this.heap[b];this.heap[a]=e,this.heap[b]=d,a=b,b=c(a/2)}}}remove(){var a=Math.min,b=Number.POSITIVE_INFINITY;let c=this.heap[1];if(2===this.heap.length)return this.heap.pop(),c;if(1===this.heap.length)return c;this.heap[1]=this.heap.pop();let d=1,e=2,f=3;if(this.heap[e]===void 0)return c;for(;a(this.heap[e].priority,this.heap[f]?this.heap[f].priority:b)<this.heap[d].priority;){if(this.heap[e].priority<(this.heap[f]?this.heap[f].priority:b)){let a=this.heap[d],b=this.heap[e];this.heap[d]=b,this.heap[e]=a,d=e}else{let a=this.heap[d],b=this.heap[f];this.heap[d]=b,this.heap[f]=a,d=f}if(e=2*d,f=2*d+1,!this.heap[e]&&!this.heap[f])break}return c}peek(){return this.heap[1]}isEmpty(){return 1===this.heap.length}length(){return this.heap.length-1}getHeap(){return this.heap}}class MaxPriorityQueue{constructor(){this.heap=[null]}insert(a,b){var c=Math.floor;if(this.heap.push({key:a,priority:b}),1<this.heap.length){let a=this.heap.length-1,b=c(a/2);for(;1<a&&this.heap[b].priority<this.heap[a].priority;){let d=this.heap[a],e=this.heap[b];this.heap[a]=e,this.heap[b]=d,a=b,b=c(a/2)}}}remove(){var a=Math.max,b=Number.NEGATIVE_INFINITY;let c=this.heap[1];if(2===this.heap.length)return this.heap.pop(),c;if(1===this.heap.length)return c;this.heap[1]=this.heap.pop();let d=1,e=2,f=3;if(this.heap[e]===void 0)return c;for(;a(this.heap[e].priority,this.heap[f]?this.heap[f].priority:b)>this.heap[d].priority;){if(this.heap[e].priority>(this.heap[f]?this.heap[f].priority:b)){let a=this.heap[d],b=this.heap[e];this.heap[d]=b,this.heap[e]=a,d=e}else{let a=this.heap[d],b=this.heap[f];this.heap[d]=b,this.heap[f]=a,d=f}if(e=2*d,f=2*d+1,!this.heap[e]&&!this.heap[f])break}return c}peek(){return this.heap[1]}isEmpty(){return 1===this.heap.length}length(){return this.heap.length-1}getHeap(){return this.heap}}module.exports={MinPriorityQueue,MaxPriorityQueue};