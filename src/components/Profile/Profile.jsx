import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
      <div>
        <div>
          <img className={s.content_img} src="https://fikiwiki.com/uploads/posts/2022-02/1645039801_59-fikiwiki-com-p-kartinki-logotipov-59.jpg" alt="" />
        </div>
        <div>ava + description</div>
        <MyPosts />
      </div>
    );
}

export default Profile;