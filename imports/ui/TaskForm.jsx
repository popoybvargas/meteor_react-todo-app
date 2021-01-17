import React, { useState } from 'react';
import { TasksCollection } from '../db/TasksCollection';

export const TaskForm = () =>
{
  const [text, setText] = useState('');

  const onFormSubmit = e =>
  {
    e.preventDefault();

    if (!text) return;

    // TasksCollection.insert({ text: text.trim(), createdAt: new Date(), userId: user._id });
    Meteor.call('tasks.insert', text);
    setText('');
  };

  return (
    <form onSubmit={ onFormSubmit } className="task-form">
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={ text }
        onChange={ e => setText(e.target.value) } />
      <button type="submit">Add Task</button>
    </form>
  )
};