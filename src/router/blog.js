const handleBlogRouter=(req,res)=>{
	const method=req.method;
	const path=req.path;

	if(method==='GET' && path==='/api/blog/list'){
		return {
			msg:'list 接口'
		}
	}
	if(method==='GET' && path==='/api/blog/detail'){
		return {
			msg:'detail 接口'
		}
	}
	if(method==='POST' && path==='/api/blog/new'){
		return {
			msg:'new 接口'
		}
	}
	if(method==='POST' && path==='/api/blog/update'){
		return {
			msg:'update 接口'
		}
	}
	if(method==='POST' && path==='/api/blog/del'){
		return {
			msg:'del 接口'
		}
	}

}

module.exports = handleBlogRouter