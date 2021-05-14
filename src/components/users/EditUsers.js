import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    
    const { name, username, email } = user;
    const onInputChange = e =>{
        // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        loadUser()
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async() => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }

  return (
    <form onSubmit={e => onSubmit(e)}>
        <div className="container mt-2">
      <div class="form-group">
        <label for="formGroupExampleInput">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange = {e => onInputChange(e)}
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example Name"
        />
      </div>
      <div class="form-group mt-1">
        <label for="formGroupExampleInput2">UserName</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange = {e => onInputChange(e)}
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="UserName"
        />
      </div>
      <div class="form-group mt-1">
        <label for="formGroupExampleInput2">Email</label>
        <input
          type="text"
          name="emai"
          value={email}
          onChange = {e => onInputChange(e)}
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Email"
        />
      </div>
      <button className="btn btn-primary btn-block mt-1">Edit User</button>
      </div>
    </form>
 
  );
};

export default EditUser;
