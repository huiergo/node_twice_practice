class BaseModel={
	constructor(data,message){
		if(typeof(data)==='string'){
			this.message=data
			message=null
			data=null
		}
		if(data){
			return data
		}
		if(message){
			return message
		}
	}
}

class SuccessModel extends BaseModel{
	constructor(data,message){
		super(data,message)
		this.erron=0
	}
}
class ErrorModel extends BaseModel{
	constructor(data,message){
		super(data,message)
		this.erron=-1
	}
}

module.exports={
	SuccessModel,
	ErrorModel
}