import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserPost } from "../api/userApi"
import { Button } from '@material-ui/core';


function UserPosts(props) {
    const [uPost, setuPost] = useState([]);
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        getUserPost(id).then((data) => {
            console.log(data, "posts");
            setuPost(data);
        })
            .catch(err => { })
    }


    const history = useHistory();

    const newPostRoute = () => {
        history.push(`/newPost/${id}`);
    }

    return <div className="div">
        <h1>User {id} posts</h1>
        <table>
            <tr>
                <th>idPost</th>
                <th>title</th>
            </tr>
        {uPost && uPost.map((post => <tr>
            <td>
                {post.id}
            </td>
            <td>
                {post.title}
            </td>
        </tr>))}
        </table>
        <br></br>
        <Button variant="outlined" color="secondary" onClick={() => newPostRoute()}>create new post</Button><br></br>
    </div>;
}

export default UserPosts;
