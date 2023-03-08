function solution(progresses, speeds) {
  const completedTasks = [];
  let numberOfCompletedTasks = 0;

  progresses.forEach((task, index) => {
    const remainingProgress = 100 - task;
    const remainingDays = Math.ceil(remainingProgress / speeds[index]);
    if (completedTasks.length === 0 || numberOfCompletedTasks < remainingDays) {
      completedTasks.push(1);
      numberOfCompletedTasks = remainingDays;
    } else {
      completedTasks[completedTasks.length - 1]++;
    }
  });
  return completedTasks;
}
