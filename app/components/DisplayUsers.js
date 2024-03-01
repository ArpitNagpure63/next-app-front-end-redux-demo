'use client'
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";


const DisplayUsers = () => {
    const { userList } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleDeleteClick = (user) => {
        dispatch(removeUser(user.id));
    }

    return <div className="display-container">
        <div className="container-row">View All User</div>
        <div className="users-container">
            {
                userList.map((item, index) => {
                    return <div key={index} className="user-item">
                        {item.name}
                        <button onClick={() => handleDeleteClick(item)}>Delete</button>
                    </div>
                })
            }
        </div>
    </div>
};

export default DisplayUsers;