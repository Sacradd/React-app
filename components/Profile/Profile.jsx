
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div>
        <div>
        </div>
        <div>
            <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'></img>
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;