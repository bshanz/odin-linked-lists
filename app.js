// create node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// create LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }
  // get size of list
  size() {
    let size = 0;
    let currentNodeNode = this.head;
    while (currentNodeNode !== null) {
      size += 1;
      currentNodeNode = currentNodeNode.next;
    }
    return size;
  }
  // method to add a data to front of list
  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }
  // method to add a data to end of list
  append(data) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
  }
  // get first node
  firstNode() {
    return this.head;
  }
  // get last node
  lastNode() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // get node at given index
  at(index) {
    // add condition incase list is empty. Need to fix the below
    if (list.size() === 0) {
      return alert("Error! Empty list");
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // remove last node
  removeLastNode() {
    //if the list is empty, return error
    if (list.size() === 0) {
      return alert("Error! Empty list");
    }

    //get the size of the list
    const sizeResult = list.size();
    // get the node index we want to change (second to last one)
    const sizeResultMinusOne = sizeResult - 2;

    // initialize counter
    let counter = 0;

    // set current node to head
    let currentNode = this.head;

    // while the index of the node we want to change
    while (counter !== sizeResultMinusOne) {
      counter++;
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    //if the list is empty, return error
    if (list.size() === 0) {
      return alert("Error! Empty list");
    }
    let currentNode = this.head;
    // loop through list to check data (besides last node)
    while (currentNode.next !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    // check last node's data
    if (currentNode.data === value) {
      return true;
    }
    return null;
  }
  // returns the index of the node containing value, or null if not found
  find(value) {
    //if the list is empty, return error
    if (list.size() === 0) {
      return alert("Error! Empty list");
    }
    let currentNode = this.head;
    let counter = 0;
    // loop through list to check data (besides last node)
    while (currentNode.next !== null) {
      if (currentNode.data === value) {
        return counter;
      }
      counter++;
      currentNode = currentNode.next;
    }
    // check last node's data
    if (currentNode.data === value) {
      counter++;
      return counter;
    }
    return null;
  }
  // converts Linked List to string
  toString() {
    let arr = [];
    let currentNode = this.head;
    const string = "";
    if (list.size() === 0) {
      return alert("Error! Empty list");
    }
    while (currentNode.next !== null) {
      const string = `(${currentNode.data})->`;
      arr.push(string);
      currentNode = currentNode.next;
    }
    arr.push(`(${currentNode.data})->`);

    const finalString = arr.toString();
    const finalStringNoCommas = finalString.replaceAll(",", "");
    return `${finalStringNoCommas}null`;
  }
}

// examples
const list = new LinkedList();

list.prepend(30);
list.append(50);
list.append(60);
list.prepend(1000);
list.append(100);
console.log(list);
console.log(list.contains(61000));
console.log(list.find(3023423));
console.log(list.toString());
