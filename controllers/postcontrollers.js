const { count } = require("console");
const Post = require("../models/post");


exports.getallposts = async (req,res,next)=>{
    try {
        const [Posts,_] = await Post.findall();
        res.status(200).json({count:Posts.length,Posts});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.createnewpost = async (req,res,next)=>{
    try {
        let {title,body} = req.body;
        let Post = new Post(title,body);
        Post = await Post.save();
        res.status(201).json({message:"post created"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.getpostbyid = async (req,res,next)=>{
    try {
        let postid = req.params.id;
        let post = await Post.findbyid(postid);
        res.status(201).json({post:post[0]});
    } catch (error) {
        console.log(error);
    }
}