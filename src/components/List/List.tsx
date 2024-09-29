import { ITask } from '../../@types';
import Task from '../Task/Task';

interface ListProps {
  tasks: ITask[];
  isLoader: boolean;
}

export default function List({ tasks, isLoader }: ListProps) {
  return (
    <>
      <span className={isLoader ? 'loader' : ''} />
      <ul className="list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
