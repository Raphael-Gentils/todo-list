import { ITask } from '../../@types';
import Task from '../Task/Task';

interface ListProps {
  tasks: ITask[];
  isLoader: boolean;
  destroy: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function List({ tasks, isLoader, destroy }: ListProps) {
  return (
    <>
      <span className={isLoader ? 'loader' : ''} />
      <ul className="list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} destroy={destroy} />
        ))}
      </ul>
    </>
  );
}
