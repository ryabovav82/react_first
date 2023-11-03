import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={s.content_img} src="https://fikiwiki.com/uploads/posts/2022-02/1645039801_59-fikiwiki-com-p-kartinki-logotipov-59.jpg" alt="" />
        </div>
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    );
}

export default ProfileInfo;