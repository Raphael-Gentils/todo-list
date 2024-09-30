import { ITask } from '../../@types';

interface TaskProps {
  task: ITask;
  destroy: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function Task({ task, destroy }: TaskProps) {
  let cssClass = 'item-label';
  if (task.done === true) {
    cssClass += ' item-label--done';
  }

  const handleDelete = () => {
    destroy(task.id);
  };

  return (
    <li className="item">
      <label className={cssClass}>
        <input className="item-checkbox" type="checkbox" checked />
        <span>{task.label}</span>
      </label>
      <button type="button" className="item-delete" onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
