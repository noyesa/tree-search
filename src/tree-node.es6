import Symbol from 'symbol';

/**
 * Symbol used as a sentinel value for breaking out of search.
 * @const {Symbol}
 */
const SEARCH_BREAK = Symbol();

/**
 * A node in a tree.
 */
export default class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  
  /**
   * Perform breadth-first search on the tree starting at the current node.
   * @param {function} processNode Callback that processes each node
   */
  bfs(processNode) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      if (node) {
        let { value, children } = node,
            isDone = TreeNode.isDone(processNode(value));
        // Check to see if the node processor is done.
        if (isDone) {
          return;
        } else if (Array.isArray(children)) {
          queue = queue.concat(children);
        }
      }
    }
  }
  
  /**
   * Shorthand for determining whether the current search is done.
   * @param {Symbol|undefined| retVal Return value from the search callback
   * @returns {boolean} Is the search complete?
   */
  static isDone(retVal) {
    return retVal === SEARCH_BREAK;
  }
  
  /**
   * Simplified factory API for creating a tree node.
   * @param {*} value Value of this node
   * @param {TreeNode[]} children Children of the current node
   */
  static create(value, ...children) {
    return new TreeNode(value, children);
  }
}

// Expose the sentinel value so it can be used by callbacks.
TreeNode.SEARCH_BREAK = SEARCH_BREAK;