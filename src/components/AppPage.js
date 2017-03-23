/* eslint-disable import/default */

import React from 'react';
import NewsSiteList from './NewsSiteList';

class AppPage extends React.Component {
    constructor(props) {
        super(props);

        console.log('props', this.props);
    }
    componentWillMount() {
        this.props.loadNews();
    }

    render(){
        return (
            <div>
            <h1>App</h1>

            <h2>News</h2>
            <ol>
                <NewsSiteList news={this.props.news.newsData} onClickEdit={this.props.onClickEdit} onClickSave={this.props.onClickSave}/>
            </ol>
            </div>
        );
    }
}

export default AppPage;