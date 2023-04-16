import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from '../../redux/blog/blogActon'
import { invalidate } from '../../redux/blog/blogSlice'

const AddBlog = () => {
const {added}=  useSelector(state=>state.blog)
const dispatch =    useDispatch()
    const [preview, setPreview] = useState()
    const [blogData, setBlogData] = useState({
        title : "",
        desc : ""
    })
    const handleChange = (e)=>{
      setPreview(URL.createObjectURL(e.target.files[0]))   
      setBlogData({...blogData , image :e.target.files[0] })
    }
    const handleAddBlog = ()=>{
        const fd = new FormData()
        fd.append("title" , blogData.title)
        fd.append("desc" , blogData.desc)
        fd.append("image" , blogData.image)
        dispatch(addBlog(fd))
    }
    useEffect(()=>{
       if(added){
          setTimeout(()=>{
             dispatch(invalidate())
          },2000)
       }
    },[added])
  return <>
   <div className="container mt-5">
    { added && <div class="alert alert-success">
     Blog Added Successfully 
    </div>
     }
       <div className="row">
         <div className="col-sm-5 offset-sm-1">
             <div class="card">
               <div class="card-header">Ceate Blog </div>
               <div class="card-body">
                <div>
                  <label for="name" class="form-label">Title</label>
                  <input
                  value={blogData.title}
                  onChange={e=>setBlogData({...blogData , title : e.target.value})}
                  type="text" class="form-control" id="name" placeholder="Enter Your Title"/>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div>
                  <label for="name" class="form-label">Descriepetion</label>
                  <input
                  value={blogData.desc}
                  onChange={e=>setBlogData({...blogData , desc : e.target.value})}
                  type="text" class="form-control" id="name" placeholder="Enter Your Descriptin"/>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <input  type="file" onChange={handleChange}  className="form-control mt-2"/>
                  <div className='d-flex justify-content-end'>
                     <button className='btn btn-success mt-2' onClick={handleAddBlog}>Add Blog</button>
                  </div>
               </div>
             </div>
         </div>
         <div className="col-sm-5 offset-sm-1">
             <img src={preview} height={100} className="img-fluid" alt="" />
         </div>
       </div>
   </div>
   <br />

  </>
}

export default AddBlog






























// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addBlog } from '../../redux/blog/blogActon'
// // import { addBlog } from '../blog/blogActon'

// const AddBlog = () => {
// const dispatch =  useDispatch()
//     const [image, setImage] = useState()
//     const [blogData, setBlogData] = useState({
//          title : "title 1",
//          desc : "desc 1"
//     })
//     const [preview, setPreview] = useState()
//     const handleImage = (e)=>{
//         setImage(e.target.files[0])
//         const x = URL.createObjectURL(e.target.files[0])
//         setPreview(x)
//     }
//     const handleBlog = ()=>{
//          const fd = new FormData()
//          fd.append("title" , blogData.title)
//          fd.append("desc" , blogData.desc)
//          fd.append("image" , image)
//          dispatch(addBlog(fd))
//     }
//     // for (const x of fd.entries()) {
//     //     console.log(x);
//     // }
//   return <>
//   <pre>
//      {JSON.stringify(image, null , 2)}
//   </pre>
//       <input type="text"   placeholder='title'/><br />
//       <input type="text"   placeholder='desc'/><br />
//       <input  onChange={handleImage} type="file"   /><br />
//       <button onClick={handleBlog} >Add Blog</button>
//       <img src={preview} width={"200px"} alt="" />
//   </>
// }

// export default AddBlog

