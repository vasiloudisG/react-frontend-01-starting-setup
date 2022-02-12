import React from 'react';

import UserList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1', 
      name: 'Itachi Uchiha',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/defzgw3-0afd0115-6bdf-41a0-9cbb-039e8542fbd4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGVmemd3My0wYWZkMDExNS02YmRmLTQxYTAtOWNiYi0wMzllODU0MmZiZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L2_a3xy7AQiAnrlKbxU5XRv75vwX5ipuFs159pKvODc', 
      places: 3
    }
  ];

    return <UserList items={USERS}/>;
  };
  
  export default Users;