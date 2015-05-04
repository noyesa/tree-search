import TreeNode from './tree-node';

// Build out a tree:
//     1A
//   /  |  \
// 2A  2B   2C
// |
// 3A

let tree = TreeNode.create(
  '1A',
  TreeNode.create(
    '2A',
    TreeNode.create('3A')),
  TreeNode.create('2B'),
  TreeNode.create('2C'));

console.log('basic bfs');
tree.bfs(v => console.log(v));

console.log('\nbfs with break');
tree.bfs(v => {
  console.log(v);
  if (v === '2B') {
    return TreeNode.SEARCH_BREAK;
  }
});

console.log('\nbasic dfs');
tree.dfs(v => console.log(v));

console.log('\ndfs with break');
tree.dfs(v => {
  console.log(v);
  if (v === '3A') {
    return TreeNode.SEARCH_BREAK;
  }
});