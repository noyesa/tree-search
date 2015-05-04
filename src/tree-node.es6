export default class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  
  static create(value, ...children) {
    return new TreeNode(value, children);
  }
}