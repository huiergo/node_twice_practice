const getList=(author,keyword)=>{
	return [
		{
			id:1,
			title:'aa',
			content:'aa'
		},
		{
			id:2,
			title:'bb',
			content:'bb'
		}
	]
}

const getDetailById=(id)=>{
	return {
		id:1,
		title:'标题A',
		content:'内容A',
		createTime:1556344808766,
		author:'zhangsan'
	}
}

const newBlog=(blogData={})=>{
	// blogData是一个博客对象
	return {
		id:3
	}
}

const updateBlog=(id, updateData={})=>{
	return true
}

const delBlog=(id,author)=>{
	return true
}

module.exports={
	getList, 
	getDetailById,
	newBlog, 
	updateBlog, 
	delBlog
}