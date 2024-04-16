import React from 'react';

const UserList = ({ user }) => {
    
  if (!user) {
    return <div>Loading...</div>;
  }

  const { avatar_url, name, login, following, location } = user;

  return (
    <div>
      <img src={avatar_url} alt='' />
      <a href={`https://github.com/${login}`}>{name || login}</a>
      <p>Following: {following}</p>
      <p>Location: {location || 'Not specified'}</p>    
    </div>
  );
};

export default UserList;
