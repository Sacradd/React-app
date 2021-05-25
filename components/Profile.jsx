import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className='content'>
        <div>
            <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
        </div>
        <div>
            <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'></img>
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>post1</div>
                <div className={classes.item}>post2</div>
            </div>
        </div>
      </div>
    );
}

export default Profile;