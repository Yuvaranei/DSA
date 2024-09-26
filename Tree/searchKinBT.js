class Node {
	constructor(x){
  	this.data = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);


function search(node, key){
	if(node == null) return false;
  if(node.data == key) return true;
  return search(node.left,key) || search(node.right,key);
}

let ans = search(root, 0);
console.log("Is key available in tree",ans);
