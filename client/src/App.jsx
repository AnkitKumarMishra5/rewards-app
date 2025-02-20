import './App.css'
import { useState } from 'react';
import Clicker from './components/Clicker';
import NewUser from './components/NewUser';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");

  return userId ? (
    <div>
      <h1>Welcome, {username}!</h1>
      <Clicker userId={userId} />
    </div>
  ) : (
    <NewUser setUserId={setUserId} setUsername={setUsername} />
  );
};

export default App
