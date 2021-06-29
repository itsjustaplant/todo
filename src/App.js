/* eslint-disable require-jsdoc, max-len*/
import './App.css';
import React from 'react';
import {Header} from './components/Header';

import {AllTasks} from './pages/AllTasks.page';
import {ActiveTasks} from './pages/ActiveTasks.page';
import {CompletedTasks} from './pages/CompletedTasks.page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      tasks: [],
    };
    this.handlePage = this.handlePage.bind(this);
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handlePage(id) {
    this.setState({page: id});
  }
  addTask(value) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: value,
          isActive: true,
        },
      ],
    });
  }
  completeTask(name, value) {
    const index = parseInt(name);
    const tasks = this.state.tasks;
    tasks[index].isActive = !value;
    this.setState({tasks: tasks});
  }
  deleteTask(index) {
    let length = this.state.tasks.length;
    const array = this.state.tasks;
    if (index === -1) {
      for (let i = 0; i < length; i++) {
        if (!array[i].isActive) {
          array.splice(i, 1);
          length = array.length;
        }
      }
    } else {
      array.splice(index, 1);
    }
    this.setState({
      tasks: array,
    });
  }
  render() {
    let page = null;

    switch (this.state.page) {
      case 0:
        page =
            <AllTasks
              taskList={this.state.tasks}
              addTask={this.addTask}
              completeTask={this.completeTask}
            />;
        break;
      case 1:
        page =
            <ActiveTasks
              taskList={this.state.tasks}
              addTask={this.addTask}
              completeTask={this.completeTask}
            />;
        break;
      case 2:
        page =
            <CompletedTasks
              taskList={this.state.tasks}
              addTask={this.addTask}
              completeTask={this.completeTask}
              deleteTask={this.deleteTask}
            />;
    }

    return (
      <div className="App">
        <Header handlePage={this.handlePage}/>
        {page}
      </div>
    );
  }
}
