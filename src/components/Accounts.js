import React, {useState, useEffect} from 'react';


import UserRow from './UserRow';

const KEYROCK = 'http://localhost:3005';

export default function Accounts({ token }) {
  const [store, setStore] = useState({});

  

  useEffect(() => {
    fetch(KEYROCK + '/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-token': token
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid email or password');
      } else {
        return response.json();
      }
    })
    .then(result => {
      console.log('succeed');
      console.log(result);
      setStore(result);
    })
    .catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <div>
      <div className="input-group my-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Search</span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {store.users? store.users.map(user => <UserRow key={user.id} user={user} />) : <tr><td>No user found</td></tr>}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}