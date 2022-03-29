import { database } from './firebase';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    database.ref('/').on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div className='App'>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default App;
