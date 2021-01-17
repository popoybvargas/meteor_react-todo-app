import React from 'react';

export const Task = ({ task, onCheckboxClick, onButtonClick }) =>
{
  return (
    <li className="task">
      <input type="checkbox" checked={ !!task.isChecked }
        onClick={ () => onCheckboxClick(task) } readOnly />
      <span>{ task.text }</span>
      <button onClick={ () => onButtonClick(task) }>&times;</button>
    </li>
  );
};