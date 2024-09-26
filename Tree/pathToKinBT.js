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

let ans = [];
function pathToK(node, key){
	if(node == null) return false;
  if(node.data == key) {
  	ans.push(node.data);
  	return true;
  }
  if(pathToK(node.left,key) == true ||  pathToK(node.right,key) == true){
  	ans.push(node.data);
    return true;
  } else return false;
}

pathToK(root, 70);
console.log("Path to K is ",ans.reverse());
