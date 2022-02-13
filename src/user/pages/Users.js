import React from 'react';

import UserList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1', 
      name: 'Itachi Uchiha',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnY9FyJ94g6OibYVSVAEaRE_c69JHtK5Mgg&usqp=CAU', 
      places: 3
    },
    {
      id: 'u2', 
      name: 'Sasuke Uchiha',
      image: 'https://cdn.myanimelist.net/r/360x360/images/characters/9/131317.jpg?s=b53e816a48dfacc4bc7768066596800c', 
      places: 1
    }
  ];

    return <UserList items={USERS}/>;
  };
  
  export default Users;