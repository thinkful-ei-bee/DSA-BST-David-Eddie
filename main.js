'use strict';

const BinarySearchTree = require('./BST');

function main() {
  const BST = new BinarySearchTree();
  // BST.insert(3, 3);
  // BST.insert(1, 1);
  // BST.insert(4, 4);
  // BST.insert(6, 6);
  // BST.insert(9, 9);
  // BST.insert(2, 2);
  // BST.insert(5, 5);
  // BST.insert(7, 7);

  BST.insert('E');
  BST.insert('A');
  BST.insert('S');
  BST.insert('Y');
  BST.insert('Q');
  BST.insert('U');
  BST.insert('E');
  BST.insert('S');
  BST.insert('T');
  BST.insert('I');
  BST.insert('O');
  BST.insert('N');

  console.log(BST.find('E'));
  BST.remove('Q');

  console.log(BST);
  console.log(thirdLargest(BST));
}

main();

// What does this program do?
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// Sum the entire tree. Looks at .value of each node and adds them together
// runtime of O(n)

// Height of a BST
// time complexity: O(n)
function findHeight(tree){
  if (!tree){
    return 0;
  }
  return 1 + Math.max(findHeight(tree.left),findHeight(tree.right));
}


// Is it a BST?
// time complexity: O(n)
function isBST(tree){
  if(!tree){
    return true;
  }
  if (!tree.left && !tree.right){
    return true;
  }
  if (tree.left && tree.left.key > tree.key){
    return false;
  }
  if (tree.right && tree.right.key < tree.key){
    return false;
  }
  return isBST(tree.left) && isBST(tree.right);
}

// 3rd Largest Node

function thirdLargest(bst){
  // go all the way to the right
  // then go left if you can 
  // then again all the way to the right
  // repeat
  // if you can't go back to the parent
  const max = findMax(bst);
  return findNextLargest(findNextLargest(max));
}

function findMax(bst){
  if(!bst.right){
    return bst;
  }
  return findMax(bst.right);
}

function findNextLargest(bst){
  if (bst.left){
    return findMax(bst.left);
  }
  else{
    return bst.parent;
  }
}
