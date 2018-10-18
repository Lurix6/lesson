import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component{

	    state = {
        openArticleId: null

    }


	render(){
		return(<OriginalComponent {...this.props} {...this.state}  toggleOpenArticle = {this.toggleOpenArticle}/>)
	}


        toggleOpenArticle = openArticleId => ev => {

	       	openArticleId === this.state.openArticleId ? this.setState({openArticleId : null}) : this.setState({ openArticleId })
	       	

    }

}