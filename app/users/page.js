'use client'

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/userSlice";

const Users = () => {
    const { posts } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return <div className="container">
        <div className="container-row">View All User From API</div>
        <div className="users-container">
            {
                posts.map((item, index) => {
                    return <div key={index}>
                        {item.title}
                    </div>
                })
            }
        </div>
    </div>
};

export default memo(Users);