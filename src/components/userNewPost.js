import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { newPost } from "../api/userApi"

const UserNewPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [canPost, setCanPost] = useState(true);
    let { id } = useParams();

    const createPost = () => {
        newPost(id, title, body).then((data) => {
            alert("the post create succefully :)")
        })
            .catch(err => { })
    }   

    return (
        <form>
            <h1>enter post details</h1>
            <TextField id="outlined-basic" label="title" variant="outlined" onChange={(e) => { setTitle(e.target.value); setCanPost(false) }} /><br></br><br></br>
            <TextField id="outlined-basic" label="body" variant="outlined" onChange={(e) => { setBody(e.target.value); setCanPost(false) }} /><br></br><br></br>
            <Button variant="outlined" color="secondary" disabled={canPost} onClick={createPost} >create post</Button><br></br>
        </form>
    )
}

export default UserNewPost;
