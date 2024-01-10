const { formatDate } = require('./date');

class Component {
  constructor(children) {
    this.children = children || [];
  };

  render() {
    throw new Error('Child class must implement render() method.')
  }
  renderInnerHTML() {
    let htmlStr = '';
    for (let child of this.children) {
      if (typeof child !== 'string') {
        htmlStr += child.render();
      }
    }
    return htmlStr;
  }
};

class Header extends Component {
  constructor(date) {
    super();
    this.date = formatDate(date);
  }
  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${this.date}</p></header>`;
  }
};

class TaskListItem extends Component {
  constructor({text, priority}) {
    super(text);
    this.priority = priority;
  }
  render() {
    return `<li class="tasks-item${this.priority ? ' tasks-item-priority' : ''}">${this.children}</li>`;
  }
};

class TaskList extends Component {
  constructor(tasksList) {
    super(tasksList);
  }
  render() {
    return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
  }
};

module.exports = { Component, Header, TaskList, TaskListItem };