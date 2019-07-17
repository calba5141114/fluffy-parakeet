class BinaryNode {
  value: number;
  parent: BinaryNode;
  left: BinaryNode;
  right: BinaryNode;
  constructor(value: number, parent: BinaryNode = null) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BinaryNode;
  constructor() {
    this.root = null;
  }
  add(value: number): void {
    if (this.root === null) {
      this.root = new BinaryNode(value);
    } else if (this.root !== null) {
      const addNode = (value, node) => {
        if (node.value === value) {
          return;
        } else if (node.value > value) {
          if (node.left === null) {
            node.left = new BinaryNode(value);
          } else if (node.left !== null) {
            addNode(value, node.left);
          }
        } else if (node.value < value) {
          if (node.right === null) {
            node.right = new BinaryNode(value);
          } else if (node.right !== null) {
            addNode(value, node.right);
          }
        }
      };
      addNode(value, this.root);
    }
  }
}

// testing code.
const binarySearchTree = new BinarySearchTree();
for (let i: number = 0; i <= 20; i++) {
  binarySearchTree.add(i);
}
console.log(binarySearchTree.root);
