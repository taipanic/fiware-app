import React from 'react';

export default function UserRow( {user} ) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>
      <td>{user.enabled? 'Enabled': 'Disabled'}</td>
    </tr>
  );
}