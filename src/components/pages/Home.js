import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    //console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  }

  return (
    <div className="container">
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">USERNAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
               {users.map((user,index) => (
                   <tr>
                       <th scope="row">{ index + 1 }</th>
                       <td>{ user.name }</td>
                       <td>{ user.username } </td>
                       <td>{ user.email }</td>
                       <td>
                    
                           <Link className="btn btn-secondary mr-2" to={`/EditUser/${user.id}`}>Edit</Link>
                           <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                       </td>
                   </tr>
                   ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
