import { ITask } from '../../@types';

interface CounterProps {
  tasks: ITask[];
}

export default function Counter({ tasks }: CounterProps) {
  const tasksLeft = tasks.filter((task) => task.done === false);

  return <p className="counter">{tasksLeft.length} tâches en cours</p>;
}
