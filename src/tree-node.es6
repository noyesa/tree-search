export default class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  
  bfs(processNode) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      if (node) {
        let { value, children } = node;
        processNode(value);
        if (Array.isArray(children)) {
          queue = queue.concat(children);
        }
      }
    }
  }
  
  static create(value, ...children) {
    return new TreeNode(value, children);
  }
}