import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    this.url = "";
  }
  // this is used to update page content
  updateNews = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(this.url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    //for rendering the first view
    this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=9`;
    this.updateNews();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=9`;
      this.updateNews();
    }
  }

  handlePrev = async () => {
    this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=12`;
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=12`;
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    this.url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(this.url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h3 className="header">Top {this.props.category} Headlines</h3>
        {/* {this.state.loading &&<Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container1">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                  key={element.title}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
