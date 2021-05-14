import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    //console.log(result);
    setUser(result.data);
  };

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
                   </tr>
                   ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
