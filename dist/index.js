class MinPriorityQueue{constructor(){this.heap=[null]}insert(a){var b=Math.floor;if(this.heap.push(a),1<this.heap.length){let a=this.heap.length-1,c=b(a/2);for(;1<a&&this.heap[c]>this.heap[a];){let d=this.heap[a],e=this.heap[c];this.heap[a]=e,this.heap[c]=d,a=c,c=b(a/2)}}}remove(){var a=Math.min,b=Number.POSITIVE_INFINITY,c=Number.isInteger;let d=this.heap[1];if(2===this.heap.length)return this.heap.pop(),d;if(1===this.heap.length)return d;this.heap[1]=this.heap.pop();let e=1,f=2,g=3;if(this.heap[f]===void 0)return d;for(;a(this.heap[f],c(this.heap[g])?this.heap[g]:b)<this.heap[e];){if(this.heap[f]<(c(this.heap[g])?this.heap[g]:b)){let a=this.heap[e],b=this.heap[f];this.heap[e]=b,this.heap[f]=a,e=f}else{let a=this.heap[e],b=this.heap[g];this.heap[e]=b,this.heap[g]=a,e=g}if(f=2*e,g=2*e+1,!this.heap[f]&&!this.heap[g])break}return d}peek(){return this.heap[1]}isEmpty(){return 1===this.heap.length}length(){return this.heap.length-1}getHeap(){return this.heap}}class MaxPriorityQueue{constructor(){this.heap=[null]}insert(a){var b=Math.floor;if(this.heap.push(a),1<this.heap.length){let a=this.heap.length-1,c=b(a/2);for(;1<a&&this.heap[c]<this.heap[a];){let d=this.heap[a],e=this.heap[c];this.heap[a]=e,this.heap[c]=d,a=c,c=b(a/2)}}}remove(){var a=Math.max,b=Number.NEGATIVE_INFINITY,c=Number.isInteger;let d=this.heap[1];if(2===this.heap.length)return this.heap.pop(),d;if(1===this.heap.length)return d;this.heap[1]=this.heap.pop();let e=1,f=2,g=3;if(this.heap[f]===void 0)return d;for(;a(this.heap[f],c(this.heap[g])?this.heap[g]:b)>this.heap[e];){if(this.heap[f]>(c(this.heap[g])?this.heap[g]:b)){let a=this.heap[e],b=this.heap[f];this.heap[e]=b,this.heap[f]=a,e=f}else{let a=this.heap[e],b=this.heap[g];this.heap[e]=b,this.heap[g]=a,e=g}if(f=2*e,g=2*e+1,!this.heap[f]&&!this.heap[g])break}return d}peek(){return this.heap[1]}isEmpty(){return 1===this.heap.length}length(){return this.heap.length-1}getHeap(){return this.heap}}module.exports={MinPriorityQueue,MaxPriorityQueue};