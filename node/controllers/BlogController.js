//importar modelo
import BlogModel from "../models/BlogModel.js";


//métodos CRUD

export const getAllBlogs=async(req,res)=>{
    try {
       const blogs =await BlogModel.findAll()
       res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getBlog =async(req,res)=>{
try {
    const blog= await BlogModel.findAll({
        where:{id: req.params.id}
    })
    res.json(blog[0])
} catch (error) {
    res.json({message: error.message})
}
}

export const createBlog=async(req,res)=>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message":"Registro correcto"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateBlog=async(req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Actualización correcta"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteBlog= async(req,res)=>{
    try {
       await BlogModel.destroy({
            where:{id:req.params.id}            
        })
        res.json({
            "message":"Eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


