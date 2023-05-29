import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



const UserList = () => {

  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>User List</h2>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
      <Dropdown.Menu >
        {listOfUsers.map((user) => (
          <Dropdown.Item key={user.id} className='list'>{user.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default (UserList);
