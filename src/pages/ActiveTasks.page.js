/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TaskList.css';

import {InputField} from '../components/Form/InputField.styled';
import {SubmitButton} from '../components/Form/SubmitButton.styled';
import {TaskList} from '../components/TaskList/TaskList.styled';
import {Task} from '../components/TaskList/Task.styled';
import {TaskText} from '../components/TaskList/TaskText.styled';
import {Checkbox} from '../components/TaskList/Checkbox.styled';


export class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleCheck(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
    this.props.completeTask(name, value);
  }

  render() {
    return (
      <div className='TaskList'>
        <InputField placeholder='add details' onChange={this.handleChange} maxLength={30}/>
        <SubmitButton onClick={() => this.props.addTask(this.state.value)}>Add</SubmitButton>
        <div>
          <TaskList>
            {this.props.taskList.map((task, index) => (
              <Task display={task.isActive} key={index}>
                <Checkbox checked={!task.isActive} name={index} type='checkbox' onChange={this.handleCheck}/>
                <TaskText lineThrough={task.isActive}>{task.task}</TaskText>
              </Task>
            ))}
          </TaskList>
        </div>
      </div>
    );
  }
}

ActiveTasks.propTypes = {
  taskList: PropTypes.array,
  addTask: PropTypes.func,
  completeTask: PropTypes.func,
};
