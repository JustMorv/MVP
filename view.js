class View{
	constructor(presenter){
		this.presenter = presenter
	}
	render(){
		this.presenter.presenterData()
	}
}

module.exports = View