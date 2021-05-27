import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Post remove</button>
            </div>
            <div className={classes.posts}>
               <Post message='Hi? how are you?'  count='20'/>
               <Post message='Its my first post' count='30'/>
               <Post />
            </div>
        </div>
    );
}

export default MyPosts;