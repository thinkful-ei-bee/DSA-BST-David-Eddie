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
}

main();

