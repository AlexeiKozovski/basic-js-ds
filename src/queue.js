const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.queue = new ListNode(value)
    } else {
      let current = this.queue;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value)
    }
    this.length++;
  }

  dequeue() {
    let queue = this.queue.value;
    this.queue = this.queue.next;
    this.length--;
    return queue;
  }
}

module.exports = {
  Queue
};
