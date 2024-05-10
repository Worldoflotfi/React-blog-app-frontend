import React, { useState } from 'react'
import PostItem from './PostItem'

import { DUMMY_POSTS } from '../data'




const Posts = () => {
    const [posts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
      {posts.length > 0 ? <div className="container posts__container">
       {
            posts.map(({id, thumbnail, category, title, desc, authorId}) => 
            <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorId={authorId} />)
        }
       </div> : <h2 className='center' >No Posts Found</h2> }
       {/* <div class name  */}
    </section>
  )
}

export default Posts
//i was about to create a data.js file and remove dummy-posts from here
