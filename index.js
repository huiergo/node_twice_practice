const querystring=require('querystring')

const handleBlogRouter=require('./src/router/blog.js')
const handleUserRouter=require('./src/router/user.js')

const getPostData=(req)=>{
	const promise=new Promise((resolve,reject)=>{
		if(req.method!=='POST'){
			resolve({})
			return
		}
		if(req.headers['content-type']!=='application/json'){
			resolve({})
			return
		}
		let postData=''
		req.on('data',chunk=>{
			postData+=chunk.toString()
		})
		req.on('end',()=>{
			if(!postData){
				resolve({})
				return				
			}
			resolve(
				JSON.parse(postData)
			)
		})
	})
	return promise
}

const serverHandler=(req,res)=>{
	// 设置返回格式是json
	res.setHeader('Content-type','application/json')

	const url=req.url
	req.path=url.split('?')[0]
	req.query=querystring.parse(url.split('?')[1])

	getPostData(req).then((postData)=>{
		req.body=postData

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
	})

}

module.exports=serverHandler 
