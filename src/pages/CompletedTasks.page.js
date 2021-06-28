/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import '../styles/TaskList.css';

import {TaskList} from '../components/TaskList/TaskList.styled';
import {Task} from '../components/TaskList/Task.styled';
import {Checkbox} from '../components/TaskList/Checkbox.styled';
import {TaskText} from '../components/TaskList/TaskText.styled';
import PropTypes from 'prop-types';

export class CompletedTasks extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
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
        <div>
          <TaskList>
            {
              this.props.taskList.filter((task) => !task.isActive)
                  .map((activeTask, index) => (
                    <Task key={index}>
                      <Checkbox checked={true} name={index} type='checkbox' onChange={this.handleCheck}/>
                      <TaskText lineThrough={activeTask.isActive}>{activeTask.task}</TaskText>
                      <img onClick={() => console.log('hey')} className='TrashCan' src='./delete_black_24dp.svg'/>
                    </Task>
                  ))
            }
          </TaskList>
        </div>
      </div>
    );
  }
}
CompletedTasks.propTypes = {
  taskList: PropTypes.array,
  addTask: PropTypes.func,
  completeTask: PropTypes.func,
};
