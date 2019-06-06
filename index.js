const handleBlogRouter=require('./src/router/blog.js')
const handleUserRouter=require('./src/router/user.js')

const serverHandler=(req,res)=>{

	const url=req.url
	req.path=url.split('?')[0]

	// 设置返回格式是json
	res.setHeader('Content-type','application/json')

	const blogData=handleBlogRouter(req,res)
	if(blogData){
		res.end(
			JSON.stringify(blogData)
		)
		return
	}

	const userData=handleUserRouter(req,res)
	if(userData){
		res.end(
			JSON.stringify(userData)
		)
		return
	}
}

module.exports=serverHandler 
