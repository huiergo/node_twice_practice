const http=require('http')
const querystring=require('querystring')

const server=http.createServer((req,res)=>{
	//url, method, path, querystring
	const method=req.method;
	const url=req.url
	const path=url.split('?')[0]
	const query=querystring.parse(url.split('?')[1])

	// 设置返回格式是json
	res.setHeader('Content-type','application/json')

	const resData={
		method,
		url,
		path,
		query
	}

	if(method==='GET'){
		res.end(
			// JSON.stringify(resData)
			"hahah起来了"
		)
	}

	if(method==='POST'){
		let postData=''
		req.on('data',chunk=>{
			postData+=chunk
		})
		req.on('end',()=>{
			resData.postData=postData
			res.end(
				JSON.stringify(resData)
			)
			console.log(resData)
		})
	}
})

server.listen(3000)
