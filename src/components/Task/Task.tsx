import { useCallback, useEffect, useState } from 'react';
import { ITask } from '../../@types';

interface TaskProps {
  task: ITask;
  destroy: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function Task({ task, destroy }: TaskProps) {
  const [newTask, setNewTask] = useState(task);

  let cssClass = '';
  if (newTask.done === true) {
    cssClass = 'item-label item-label--done';
  } else {
    cssClass = 'item-label';
  }

  const handleDelete = () => {
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      destroy(newTask.id);
    }
  };

  const handleCheck = () => {
    newTask.done ? setIsChecked(false) : setIsChecked(true);
    setTaskToUpdate(newTask.id);
  };

  // --- mise à jour d'une tâche (tâche effectuée) ---

  const [isChecked, setIsChecked] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState<number>(0);

  const updateTask = useCallback(
    async (id: number) => {
      try {
        const data = {
          done: isChecked,
        };

        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });

        const updatedTask = await response.json();
        setNewTask(updatedTask);
      } catch (error) {
        console.log(error);
      }
    },
    [isChecked],
  );

  useEffect(() => {
    if (taskToUpdate > 0) {
      updateTask(taskToUpdate);
      console.log('UPDATE');
    }
  }, [updateTask, taskToUpdate]);

  return (
    <li className="item">
      <label className={cssClass}>
        <input
          className="item-checkbox"
          type="checkbox"
          onChange={handleCheck}
          checked={newTask.done && true}
        />
        <span>{newTask.label}</span>
      </label>
      <button type="button" className="item-delete" onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
