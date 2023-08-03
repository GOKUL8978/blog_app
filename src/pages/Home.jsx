import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts =[
    {
      id: 1,
      title: "Lorem ipsum” dummy text is used by many web-developers to",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
      img: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      title: "Lorem ipsum” dummy text is used by many web-developers to",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      title: "Lorem ipsum” dummy text is used by many web-developers to",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
      img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id:4,
      title: "Lorem ipsum” dummy text is used by many web-developers to",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
      img: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
           <div className="content">
               <Link className= "link"to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
             
              </Link>

              <p>{post.desc}</p>
              <button>Read More</button>
           </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home