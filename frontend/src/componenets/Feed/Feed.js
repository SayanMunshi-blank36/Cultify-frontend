import React from 'react'
import styles from './Feed.module.css';
import PostCard from './PostCard';
function Feed() {
  return (
    <div className={styles.container}>
        <h2 className='styles.sectionHeader'>Latest Feed</h2>
        <div className={styles.feedContainer} data-simplebar>
            <PostCard/>
        </div>
    </div>
  )
}

export default Feed