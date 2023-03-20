import { useState, useEffect } from 'react'
import styles from './Feed.module.css';
import PostCard from './PostCard';
import axios from 'axios';
function Feed() {

  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    axios.get('https://cultify-backend-production.up.railway.app/api/post')
      .then((response) => {
        // console.log(response);
        setAllPost(response.data.data);
      })
  }, []);

  console.log(allPost);
  return (
    <div className={styles.container}>
      <h2 className='styles.sectionHeader'>Latest Feed</h2>
      <div className={styles.feedContainer}>
        {
          allPost.map(post =>
            // <PostCard description={post.description} key={post._id} handleLike={likePost} handleUnlike={unlikePost} imgsource={post.image} />
            <PostCard description={post.description} key={post._id} imgsource={post.image} newid={post.cult} />
          )
        }
        <PostCard />
      </div>
    </div>
  )
}

export default Feed