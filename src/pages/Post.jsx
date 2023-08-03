import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const Post = () => {
    const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editor">
           <ReactQuill  className= "edit"theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
       <h1>Publish</h1>
        <span><b>Status: </b>Drafts </span>
        <span><b>Visibility:  </b>Public </span>
        <input style={{display: "none"}} type="file" id='file'/>
        <label htmlFor="file" className="file"style={{cursor: "pointer"}}>Upload Image</label>
        <div className="buttons">
          <button>Save as Drafts</button>
          <button>Upload</button>
        </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='art' value="art" id='art' />
          <label htmlFor="art">Art</label>
          </div>
          
          <div className="cat">
            <input type="radio" name='Science' value="Science" id='Science' />
          <label htmlFor="Science">Science</label>
          </div>
          
          <div className="cat">
             <input type="radio" name='Food' value="Food" id='Food' />
          <label htmlFor="Food">Food</label>
          </div>
         
          <div className="cat">
            <input type="radio" name='Lifestyle' value="Lifestyle" id='Lifestyle' />
          <label htmlFor="Lifestyle">Lifestyle</label>
          </div>
          
          <div className="cat">
             <input type="radio" name='Education' value="Education" id='Education' />
          <label htmlFor="Education">Education</label>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Post