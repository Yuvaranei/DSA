class Node {
	constructor(x){
  	this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(6);

function invert(node){
	if(node == null) return null;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  invert(node.left);
  invert(node.right);
}

console.log("Before Inversion");
console.log(root.data);
console.log(root.left.data+" "+root.right.data);
console.log(root.left.left.data+" "+root.left.right.data);
console.log(root.right.left.data+" "+root.right.right.data);

invert(root);

console.log("After Inversion");
console.log(root.data);
console.log(root.left.data+" "+root.right.data);
console.log(root.left.left.data+" "+root.left.right.data);
console.log(root.right.left.data+" "+root.right.right.data);
