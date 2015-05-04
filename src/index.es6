import TreeNode from './tree-node';

let tree = TreeNode.create(
  '1A',
  TreeNode.create(
    '2A',
    TreeNode.create('3A')),
  TreeNode.create('2B'));

tree.bfs(v => console.log(v));