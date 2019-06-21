class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(item) {
    const newNode = new _Node(item)
    if(!this.first) {
      this.first = newNode
    }
    else if(this.last) {
      this.last.next = newNode
    }
    this.last = newNode
    this.length++
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }
    this.length--
    return node.data;
  }
}

function peek(queue) {
  if(!queue.first) return null
  console.log(queue.first)
  return queue.first
}

function isEmpty(queue) {
  if(!queue.first && !queue.last) {
    return true
  }
  return false
}

function display(queue) {
  let results = ''
  let currNode = queue.first
  if(!currNode) return 'Your queue is empty'
  else if(!currNode.next) {
    results += `${currNode.data}->null`
    console.log(results)
    return results
  }
  // if(!currNode.next) {
  //   console.log(`${currNode.data}->null`)
  //   return
  // }
  else {
    while(currNode) {
      results += `${currNode.data}->`
      currNode = currNode.next
    }
    results += 'null'
    console.log(results)
    return results
  }
}

module.exports = Queue