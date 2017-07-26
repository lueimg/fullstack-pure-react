import React, { Component } from 'react';
import Article from './Article';

export class ArticleList extends Component {
    render() {
        return (
            <div>
                {Object.values(this.props.articles).map((article) => 
                    <Article 
                        key={article.id}
                        article={article}
                        author={this.props.authors[article.authorId]}
                    />)}
            </div>
        );
    }
}

export default ArticleList; 