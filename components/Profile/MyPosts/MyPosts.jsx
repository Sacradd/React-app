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
               <Post message='Hi? how are you?' />
               <Post message='Its my first post'/>
               <Post />
            </div>
        </div>
    );
}

export default MyPosts;