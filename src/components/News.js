import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
            loading: false,
            totalResults: 0
        }
        document.title = this.props.category === "home" ? "NewsBlink - Stay Informed, In a Blink!" : "NewsBlink - " + this.capitalizeFirstLetter(this.props.category);
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async updateNews(pageManipulaion) {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category === "home" ? "general" : this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + pageManipulaion}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + pageManipulaion
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews(0);
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category === "home" ? "general" : this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <>
                <h2 className="text-center">NewsBlink - {this.props.category === "home" ? "All Headlines" : this.capitalizeFirstLetter(this.props.category)}</h2>
                {/* {this.state.loading && < Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-3">
                        <div className="row">
                            {this.state.articles.map((element) => {
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
                    </div>
                </InfiniteScroll>
            </ >
        )
    }
}

export default News