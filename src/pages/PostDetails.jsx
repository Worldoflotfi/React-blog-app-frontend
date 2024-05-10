import React from 'react'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary' >Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger' >Delete</Link>
          </div>
        </div>
        <h1>This is post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem neque voluptatibus nihil eius officia totam facere obcaecati rem dolor quis fugit, inventore veniam. Voluptatem, iure quis quod omnis provident quos?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusamus neque quibusdam omnis molestias. Repellat, officia aliquam est modi, ad corrupti aut eaque quisquam asperiores hic sapiente soluta non nostrum assumenda? Porro nisi saepe quasi, ducimus voluptatibus blanditiis tenetur. Sequi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sapiente autem aperiam dicta quo numquam quibusdam adipisci omnis, dolore pariatur nisi dolorum corrupti expedita tempora nostrum quas in consectetur, soluta nulla non saepe, ex maiores laudantium commodi. Tempora tenetur ipsum vero architecto assumenda eos debitis sequi laboriosam. Dignissimos, totam quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet mollitia! Quis magnam mollitia optio quia architecto quos repudiandae quasi? Eos saepe corporis dolore culpa nesciunt eum beatae, quo accusamus maiores cumque eaque magnam reiciendis? Quaerat nulla labore quia magnam optio officiis officia dolorum? Quo soluta adipisci unde, consequuntur earum veniam mollitia error reprehenderit maxime, doloribus nesciunt cumque debitis in est ad ratione nisi beatae neque? Asperiores labore nemo temporibus?
        </p>
      </div>
    </section>
  )
}

export default PostDetails