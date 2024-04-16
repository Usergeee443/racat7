import React, { useEffect, useState } from 'react';
import UserList from './components/userList';

const User = () => {
  const [userName, setUserName] = useState('Akbarss');
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchGitHub () {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
  
  const data = await res.json();
  if (data) {
    setUserData(data)
    setLoading(false);
    setUserName("");
  }
}

function handleSub() {
  fetchGitHub();
}

useEffect (() => {
  fetchGitHub();
}, []);

 return (
  <div>
    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
    <button onClick={handleSub}>Search</button>
    {userData !== null ? <UserList user={userData} /> : null}
  </div>
 );
};

export default User;