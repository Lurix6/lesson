import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import efectAcordion from '../decorators/efectAcordion'

class ArticleList extends Component {

	static propTypes = {
		articles : PropTypes.array.isRequired 
	}


    render() {
    	const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle(article.id)} 
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }




}

export default efectAcordion(ArticleList)