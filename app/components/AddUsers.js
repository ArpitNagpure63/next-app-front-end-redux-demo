'use client'

import { useState } from "react";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const AddUsers = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleClick = () => {
        if (name) dispatch(addUser(name));
    };

    return <div className="adduser-container">
        <div className="container-row">Add User</div>
        <br />
        <div className="container-column">
            <input type="text" placeholder="Add User" className="input-field" onChange={handleChange} />
            <button className="input-field" onClick={handleClick}>Save</button>
        </div>
    </div>
};

export default AddUsers;