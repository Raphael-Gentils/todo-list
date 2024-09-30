import { ITask } from '../../@types';
import Task from '../Task/Task';

interface ListProps {
  tasks: ITask[];
  isLoader: boolean;
  destroy: React.Dispatch<React.SetStateAction<number | undefined>>;
  update: React.Dispatch<React.SetStateAction<number>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function List({
  tasks,
  isLoader,
  destroy,
  update,
  setIsChecked,
}: ListProps) {
  return (
    <>
      <span className={isLoader ? 'loader' : ''} />
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            destroy={destroy}
            update={update}
            setIsChecked={setIsChecked}
          />
        ))}
      </ul>
    </>
  );
}
