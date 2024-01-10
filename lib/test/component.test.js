const { Component, Header, TaskList, TaskListItem } = require('../component');
const { formatDate } = require('../date');

describe('Component', () => {
  describe('render', () => {
    test('throws an error when called directly', () => {
      const component = new Component();
      const test = () => component.render();

      expect(test).toThrow('Child class must implement render() method.')
    });
  });
});

describe('Header', () => {
  describe('render', () => {
    test('throws an error when called directly', () => {
      const date = new Date();
      const header = new Header(date);
      const result = `<header class="header"><h1>Todo Today</h1><p>${formatDate(date)}</p></header>`;

      expect(header.render()).toEqual(result);
    });
  });
});


describe('TaskListItem', () => {
  describe('render', () => {
    test('returns HTML string for li tag', () => {
      const taskListItem = new TaskListItem({ text: 'test', priority: false });
      const result = `<li class="tasks-item">test</li>`;

      expect(taskListItem.render()).toEqual(result);
    });

    test('returns HTML string for li tag with priority class', () => {
      const taskListItem = new TaskListItem({ text: 'test', priority: true });
      const result = `<li class="tasks-item tasks-item-priority">test</li>`;

      expect(taskListItem.render()).toEqual(result);
    });
  });
});


describe('TaskList', () => {
  describe('render', () => {
    test('returns HTML string for ul tag', () => {
      const tasks = [
        new TaskListItem({ text: 'test', priority: true }),
        new TaskListItem({ text: 'test2', priority: false })
      ];
      const taskList = new TaskList(tasks);
      const result = `<ul class="tasks"><li class="tasks-item tasks-item-priority">test</li><li class="tasks-item">test2</li></ul>`

      expect(taskList.render()).toEqual(result);
    });
  });
});