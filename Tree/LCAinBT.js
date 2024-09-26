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
let A, B;
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

let key1 = 60;
let key2 = 70;
pathToK(root, key1);
A = ans.reverse();

ans = [];
pathToK(root, key2);
B = ans.reverse();

let i=0, j=0;
let LCA;

while(i<A.length && j<B.length && A[i] == B[j]){
	LCA = A[i];
  i++;
  j++;
}

console.log(`LCA of ${key1} and ${key2} is ${LCA}`);
