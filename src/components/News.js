import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async (pageManipulaion) => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category === "home" ? "general" : props.category}&apiKey=${props.apiKey}&page=${page + pageManipulaion}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + pageManipulaion);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews(0);
        document.title = props.category === "home" ? "NewsBlink - Stay Informed, In a Blink!" : "NewsBlink - " + capitalizeFirstLetter(props.category);
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category === "home" ? "general" : props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + 1);
    }

    return (
        <>
            <h2 className="text-center" style={{ marginTop: '85px' }}>NewsBlink - {props.category === "home" ? "All Headlines" : capitalizeFirstLetter(props.category)}</h2>
            {/* {loading && < Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row">
                        {articles.map((element) => {
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

News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News