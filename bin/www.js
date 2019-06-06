const http=require('http')

const PORT=3000

const serverHandler=require('../index')

const server=http.createServer((req,res)=>{
	serverHandler(req,res)
})

server.listen(PORT)
