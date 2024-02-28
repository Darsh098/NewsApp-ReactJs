import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt } = this.props;
        return (
            <div className="card my-3">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">
                        {author ? "Author: " + author : ""}
                    </small></p>
                    <p className="card-text"><small className="text-muted">
                        {publishedAt ? "Date: " + new Date(publishedAt).toGMTString() : ""}
                        {/* {author ? "By " + author + " on " + new Date(publishedAt).toGMTString() : "on " + new Date(publishedAt).toGMTString()} */}
                    </small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem