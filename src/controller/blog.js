const {exec} =require('../db/mysql.js')

const getList=(author,keyword)=>{
	let sql=`select * from blogs where 1=1 `
	if(author){
		sql+=`and author='${author}' `
	}
	if(keyword){
		sql+=`and title='${keyword}' `
	}
	console.log(exec(sql))
	return exec(sql)
	// return [
	// 	{
	// 		id:1,
	// 		title:'aa',
	// 		content:'aa'
	// 	},
	// 	{
	// 		id:2,
	// 		title:'bb',
	// 		content:'bb'
	// 	}
	// ]
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