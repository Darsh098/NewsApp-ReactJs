import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsBlink - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="MyTitle 1" description="My Description 1" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle 2" description="My Description 2" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle 3" description="My Description 3" />
                    </div>
                </div>
            </div >
        )
    }
}

export default News