import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    let postData = [
        {id: 1, message: "hi, how are you?", likesCount: 12},
        {id: 2, message: "i am fine", likesCount: 1},
        {id: 3, message: "ho ho ho", likesCount: 45},
    ];

    let postsElement = postData.map(item => <Post message={item.message} likesCount={item.likesCount}/>);

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <button>Add post</button>
        </div>
        <div>New post</div>
        <div className={s.posts}>
            {postsElement}
        </div>
      </div>
    );
}

export default MyPosts;