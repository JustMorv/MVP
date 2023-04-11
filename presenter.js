class Presenter {
	constructor(model){
		this.model = model
	}
	presenterData(){
		const data = this.model.getData()
		console.log(data)
	}
}
module.exports = Presenter