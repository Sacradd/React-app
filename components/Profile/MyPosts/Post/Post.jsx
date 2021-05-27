import classes from './Post.module.css';

const Post = (props) => {
    
    return (
            <div className={classes.item}>
                { props.message }
                {props.count}
                <span>Like</span>
            </div>
            
    );
}

export default Post;