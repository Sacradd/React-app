import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi? how are you?', likesCount: 20},
        {id: 3, message: 'Its my first post', likesCount:30}
    ]
    let postItem = posts.map( p => <Post message={p.message}  count={p.likesCount}/>);
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