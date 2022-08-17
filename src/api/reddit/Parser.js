import typeis from 'check-types';

export class Parser {
  constructor(data) {
    const parsed = Parser._parse(data);
    this.parsed = parsed;

    if (typeis.array(parsed)) {
      this.post = parsed[0];
      this.comments = parsed[1];
    } else {
      this.post = parsed;
    }

    return this;
  }

  static _parse(root) {
    if (typeis.array(root)) {
      return root.map(it => (Parser._parse(it)));
    } else if (typeis.object(root)) {
      return {
        data: root.data,
        children: root.data?.children || []
      };
    } else {
      return root;
    }
  }

  count() {
    return this.post.children.length;
  }

  get(index = 0) {
    const children = this.post?.children;
    if (typeis.array(children)) {
      const len = children.length;
      if (index < 0) {
        const index1 = len - (-index % (len + 1));
        return children[index1]?.data;
      } else if (index < len) {
        return children[index]?.data;
      }
    }
  }

  get_all() {
    const children = this.post?.children;
    if (typeis.array(children)) {
      return children.map(it => (it.data));
    }
  }

  comments_count() {
    return this.comments?.length;
  }

  get_comment(index = 0) {
    const children = this.comments?.children;
    let result = {};

    if (typeis.array(children)) {
      const len = children.length;
      if (index < 0) {
        const index1 = len - (-index % (len + 1));
        result = children[index1]?.data;
      } else if (index < len) {
        result = children[index]?.data;
      }
    }
    return result;
  }

  get_comments_all() {
    const children = this.comments?.children;
    if (typeis.array(children)) {
      return children
        .filter(it => (it.kind === 't1'))
        .map(it => (it.data));
    }
  }
}
