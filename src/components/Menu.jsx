import React from 'react'

const Menu = () => {
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
    <div className='menu'>
      <h1>Recent Posts! You might Like!!</h1>
      {posts.map(post=>(
        <div className='postsingle' key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
       
          <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu