import { useCallback, useEffect, useState } from 'react';
import { ITask } from '../../@types';
import Counter from '../Counter/Counter';
import Form from '../Form/Form';
import List from '../List/List';

export default function App() {
  const [isLoader, setIsLoader] = useState(true);

  const [tasks, setTasks] = useState<ITask[]>([]);

  const loadTasks = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();

      setTasks(data);
      setIsLoader(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadTasks();
    console.log('READ');
  }, [loadTasks]);

  const [label, setLabel] = useState<{
    [k: string]: FormDataEntryValue;
  }>();

  const createTask = useCallback(
    async (data: { [k: string]: FormDataEntryValue }) => {
      try {
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        });

        const tasks = await response.json();

        setTasks(tasks);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  useEffect(() => {
    if (label) {
      createTask(label);
      console.log('CREATE');
    }
  }, [label]);

  const [taskToDelete, setTaskToDelete] = useState<number>();

  const destroyTask = useCallback(async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      });

      const tasks = await response.json();

      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (taskToDelete) {
      destroyTask(taskToDelete);
      console.log('DELETE');
    }
  }, [taskToDelete]);

  return (
    <div className="app">
      <Form setLabel={setLabel} />
      <Counter />
      <List tasks={tasks} isLoader={isLoader} destroy={setTaskToDelete} />
    </div>
  );
}
