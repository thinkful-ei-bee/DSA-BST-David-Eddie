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
  console.log(isBalanced(BST));
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



function isBalanced(bst) {
  if (hasNoChildren(bst)) {
    return true;
  }
  if (bst.left && bst.right) {
    if ((hasNoChildren(bst.left) && hasGrandChildren(bst.right)) || (hasNoChildren(bst.right) && hasGrandChildren(bst.left))) {
      return false;
    }
  }

  if (bst.left) {
    return isBalanced(bst.left);
  }

  return isBalanced(bst.right);
} 

function hasNoChildren(bst) {
  return !bst.left && !bst.right;
}

function hasGrandChildren(bst) {
  return !hasNoChildren(bst) && (!hasNoChildren(bst.left) || !hasNoChildren(bst.right));
}

function testBalance() {
  const balanced = new BinarySearchTree();
  balanced.insert(10, 10);
  balanced.insert(15,15);
  balanced.insert(17,17);
  console.log(isBalanced(balanced));
}

testBalance();

let counter = 0;

function testSameBst(arr1, arr2) {
  counter++;
  console.log(counter);
  if (arr1[0] !== arr2[0] || arr1.length !== arr2.length) {
    return false;
  }

  if (arr1.length < 2 || (arr1.length === 2 && arr1[1] === arr2[1])) {
    return true;
  }

  const right1 = arr1.filter(ele => ele > arr1[0]);
  const right2 = arr2.filter(ele => ele > arr2[0]);
  const left1 = arr1.filter(ele => ele < arr1[0]);
  const left2 = arr2.filter(ele => ele < arr2[0]);

  return testSameBst(right1, right2) && testSameBst(left1, left2);
} 

const testArr1 = [3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const testArr2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
console.log(testSameBst(testArr1, testArr2));

// this seems to be O(n^2) in worst case and O(n log n) in best case; Counting operations is O(n) or O(log n) since filter is not included

