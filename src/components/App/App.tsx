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
  }, [loadTasks]);

  return (
    <div className="app">
      <Form />
      <Counter />
      <List tasks={tasks} isLoader={isLoader} />
    </div>
  );
}
