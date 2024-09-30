import { ITask } from '../../@types';

interface TaskProps {
  task: ITask;
  destroy: React.Dispatch<React.SetStateAction<number | undefined>>;
  update: React.Dispatch<React.SetStateAction<number>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Task({
  task,
  destroy,
  update,
  setIsChecked,
}: TaskProps) {
  let cssClass = 'item-label';
  if (task.done === true) {
    cssClass += ' item-label--done';
  }

  const handleDelete = () => {
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      destroy(task.id);
    }
  };

  const handleCheck = () => {
    task.done ? setIsChecked(false) : setIsChecked(true);
    update(task.id);
  };

  return (
    <li className="item">
      <label className={cssClass}>
        <input
          className="item-checkbox"
          type="checkbox"
          onChange={handleCheck}
        />
        <span>{task.label}</span>
      </label>
      <button type="button" className="item-delete" onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
