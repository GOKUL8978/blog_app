import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
       <div className="user">
          <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
         <div className="info">
          <span>GOKUL</span>
          <p>Posted 2 days ago</p>
         </div>
         <div className="edit">
           <Link to={`/write?edit=2`} >
              <EditIcon className='editicon' /></Link>
           
           <DeleteIcon className='deleteicon'/>
         </div>
       </div>
       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, hic!</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel dolorum neque sed voluptatibus, excepturi enim consectetur velit porro ducimus sapiente, ipsum delectus aperiam tempore? Blanditiis inventore voluptatum enim quia.</p>
       <br />
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consectetur odio dolores et debitis earum enim excepturi sunt exercitationem laudantium quibusdam maiores eius sequi aut, at aliquid nihil reiciendis reprehenderit ipsum laborum! Ex, eveniet quos, quasi necessitatibus facilis id quam sed aliquid animi quis nam placeat, ipsa nobis beatae minima?</p>
       <br />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias possimus fugiat porro laboriosam beatae vero suscipit ratione obcaecati, aliquam fuga animi pariatur qui deleniti nihil illum molestiae mollitia assumenda? Esse aliquid impedit optio totam veniam at possimus aut commodi!</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single