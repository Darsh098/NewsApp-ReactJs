import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
        document.title = this.props.category === "home" ? "NewsBlink - Stay Informed, In a Blink!" : "NewsBlink - " + this.capitalizeFirstLetter(this.props.category);
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async updateNews(pageManipulaion) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category === "home" ? "general" : this.props.category}&apiKey=8261cbfa5baf424b9c15ab5b99958959&page=${this.state.page + pageManipulaion}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + pageManipulaion
        })
    }

    async componentDidMount() {
        this.updateNews(0);
    }

    handleNextBtn = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.updateNews(1);
        }
    }
    handlePrevBtn = async () => {
        this.updateNews(-1);
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">NewsBlink - {this.props.category === "home" ? "All Headlines" : this.capitalizeFirstLetter(this.props.category)}</h2>
                {this.state.loading && < Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""}
                                description={element.description ? element.description.length >= 60 ? element.description.slice(0, 60) + "..." : element.description : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740"}
                                newsUrl={element.url}
                                author={element.author}
                                publishedAt={element.publishedAt}
                                source={element.source} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1}
                        className="btn btn-dark" onClick={this.handlePrevBtn}>{"< Previous"}</button>

                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        className="btn btn-dark" onClick={this.handleNextBtn}>{"Next >"}</button>
                </div>
            </div >
        )
    }
}

export default News