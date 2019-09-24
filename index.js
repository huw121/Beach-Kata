/*
Imagine we have a list of jobs, each represented by a character. Because certain jobs must be done before others, a job may have a
dependency on another job. For example, a may depend on b, meaning the final sequence of jobs should place b before a. If a has no
dependency, the position of a in the final sequence does not matter.
*/

const sequenceJobs = (tasks) => {
  if (!tasks) return []
  const taskArray = tasks.split(',');
  const taskSequence = [];
  while (taskSequence.length !== taskArray.length) {
    let changes = 0;
    taskArray.map(task => {
      if (task.length == 1 && !taskSequence.includes(task)) {
        taskSequence.push(task);
        changes++;
      } else {
        const dependent = task.split('-')[1];
        if (taskSequence.includes(dependent) && !taskSequence.includes(task[0])) {
          taskSequence.push(task[0]);
          changes++;
        }
      }
    })
    console.log(taskSequence)
    if (changes == 0) return "unable to sequence tasks";
  }
  return taskSequence;
}

  module.exports = sequenceJobs;