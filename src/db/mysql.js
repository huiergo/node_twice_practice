const mysql = require('mysql')

const { MYSQL_CONF } = require('../conf/db.js')

// 创建连接
const con = mysql.createConnection({
 		host:'localhost',
 		user:'root',
 		password:'dn510917',
 		port:'3306',
 		database:'myblog'
})

// 开始连接
con.connect()

// 统一执行sql函数
function exec(sql){
	const promise=new Promise((resolve,reject)=>{
		con.query(sql,(err,result)=>{
			if(err){
				reject(err)
				return
			}else{
				resolve(result)
			}
		})
	}).catch(()=>{
		console.log('err')
	})
	return promise
}

module.exports={
	exec
}