import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI= 'http://localhost:8000/blogs/'

const CompCreateBlog=()=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const navigate=useNavigate()

    //procedimiento para guardar
    const store=async(e)=>{
        e.preventDefault()
        await axios.post(URI,{title:title,content:content})
        navigate('/')
    }
    return(
        <div>
            <h3>Create Blog</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input className='form-control' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>    
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea cols="30" rows="5" className='form-control' type="text" value={content} onChange={(e)=>setContent(e.target.value)} />           
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateBlog