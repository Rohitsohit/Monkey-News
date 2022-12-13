import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  
  static defaultProps = {
    country: 'in',
    categorys:'general'
  }

  static propTypes = {
    country: PropTypes.string,
    categorys:PropTypes.string,
    

  }
  
  constructor() {

    


    super();
    console.log("this is constructor component");

    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let iurl =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorys}&apiKey=1926b1ac2a134411adf15c4559868a0c&page=1&pageSize=${this.props.pagesize}`;

      
      this.setState({loading:true});
   
      let data = await fetch(iurl);


    let parseData = await data.json();

    console.log(parseData);

    this.setState({
      article: parseData.articles,
      totalnews: parseData.totalResults,
      loading:false
    });
  }

  handleBack = async () => {
    console.log("back");

    let iurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorys}&apiKey=1926b1ac2a134411adf15c4559868a0c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;

    this.setState({loading:true});

    let data = await fetch(iurl);

    let parseData = await data.json();

    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      article: parseData.articles,
      loading:false,
    });
  };

  handleNext = async () => {
    console.log("next");

    if (this.state.page + 1 > Math.ceil(this.state.totalnews / this.props.pagesize)) {
      console.log("end of news");
    } else {
      let iurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorys}&apiKey=1926b1ac2a134411adf15c4559868a0c&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;

      this.setState({loading:true});

      let data = await fetch(iurl);

      let parseData = await data.json();

      console.log(parseData);

      this.setState({
        page: this.state.page + 1,
        article: parseData.articles,
        loading:false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">News Monkey-Top Headlines</h2>

          {this.state.loading && <Spinner/>}

          <div className="row my-4">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={
                      element.title == null ? "" : element.title.slice(0, 45)
                    }
                    description={
                      element.description == null
                        ? " "
                        : element.description.slice(0, 88)
                    }
                    imageurl={
                      element.urlToImage == null
                        ? "http://www.clker.com/cliparts/2/3/7/3/k/J/monkey-news-md.png"
                        : element.urlToImage
                    }
                    readurl={element.url}
                  ></Newsitems>
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between my-3">
            <button
              type="button"
              disabled={this.state.page <= 1}
              class="btn btn-dark"
              onClick={this.handleBack}
            >
              &larr; Back
            </button>

            <button
              type="button"
              class="btn btn-dark"
              disabled={this.state.page + 1 > Math.ceil(this.state.totalnews / this.props.pagesize)}
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
