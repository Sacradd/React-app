import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    debugger;
    let postItem = props.posts.map( p => <Post message={p.message}  count={p.likesCount}/>);

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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