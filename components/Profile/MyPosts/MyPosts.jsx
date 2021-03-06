import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postItem = props.posts.map( p => <Post message={p.message}  count={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost } >Add post</button>
                    <button>Post remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postItem}
            </div>
        </div>
    );
}

export default MyPosts;