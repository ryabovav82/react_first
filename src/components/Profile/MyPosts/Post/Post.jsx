
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkbE7_bm5SoMDN2g_w0KMdn6aKTM5SRkZCeTgDn6uOyic" alt="" />
            <p>{props.message}</p>
            </div>
    );
}

export default Post;