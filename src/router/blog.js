const { getList, getDetailById, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter=(req,res)=>{
	const method=req.method;
	const path=req.path;
	const id =req.query.id||''

	if(method==='GET' && path==='/api/blog/list'){
		const author = req.query.author||''
		const keyword = req.query.keyword||''

		const result = getList(author,keyword)
		return result.then(listData=>{
			if(!listData){
				return new ErrorModel('获取列表失败')
			}
			console.log(listData)
			return new SuccessModel(listData)
		}).catch(err=>{
			console.log(err)
		})

		// const listData = getList(author,keyword)
		// console.log(listData)
		// if(!listData){
		// 	return ErrorModel('获取列表失败')
		// }
		// return new SuccessModel(listData)
	}

	if(method==='GET' && path==='/api/blog/detail'){
		const id = req.query.id||''
		const detailData=getDetailById(id)
		if(!detailData){
			return new ErrorModel('获取详情失败')
		}
		return new SuccessModel(detailData)
	}

	if(method==='POST' && path==='/api/blog/new'){
		const newData=newBlog(req.body)
		if(!newData){
			return new ErrorModel('增加博客失败')
		}
		return new SuccessModel(newData)
	}

	if(method==='POST' && path==='/api/blog/update'){
		const updateData=updateBlog(id,req.body)
		if(!updateData){
			return new ErrorModel('更新失败')
		}
		return new SuccessModel(updateData)
	}

	if(method==='POST' && path==='/api/blog/del'){
		//----author作用在于： 防止恶意删除，因为用户登陆后，用户名是自己，不能操作其他用户数据
		const author='zhangsan'
		const delData=delBlog(id,author)
		if(!delData){
			return new ErrorModel('删除失败')
		}
		return new SuccessModel(delData)
	}

}

module.exports = handleBlogRouter