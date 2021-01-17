import { check } from 'meteor/check';

import { TasksCollection } from '/imports/db/TasksCollection';

const checkAuthorization = userId =>
{
  if (!userId) throw new Meteor.Error('💣 Not authorized!');
};

const checkTaskAccess = (taskId, userId) =>
{
  const task = TasksCollection.findOne({ _id: taskId, userId: userId });

  if (!task) throw new Meteor.Error('💣 Access denied!');
};

Meteor.methods(
{
  'tasks.insert'(text)
  {
    check(text, String);
    checkAuthorization(this.userId);
    TasksCollection.insert({ text, createdAt: new Date, userId: this.userId });
  },
  'tasks.remove'(taskId)
  {
    check(taskId, String);
    checkAuthorization(this.userId);
    checkTaskAccess(taskId, this.userId);

    // const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    // if (!task) throw new Meteor.Error('💣 Access denied!');
    
    TasksCollection.remove(taskId);
  },
  'tasks.setIsChecked'(taskId, isChecked)
  {
    check(taskId, String);
    check(isChecked, Boolean);
    checkAuthorization(this.userId);
    checkTaskAccess(taskId, this.userId);
    TasksCollection.update(taskId, { $set: { isChecked } });
  }
});