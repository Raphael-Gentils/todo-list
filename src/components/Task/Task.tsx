import { ITask } from '../../@types';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  let cssClass = 'item-label';
  if (task.done === true) {
    cssClass += ' item-label--done';
  }

  return (
    <li className="item">
      <label className={cssClass}>
        <input className="item-checkbox" type="checkbox" checked />
        <span>{task.label}</span>
      </label>
      <button type="button" className="item-delete">
        X
      </button>
    </li>
  );
}
