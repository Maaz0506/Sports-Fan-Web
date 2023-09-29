import Newsitems from "./NewsItem";
import Spinner from "../spinner/index";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Header from "../Header";

const News=(props)=>{
  const [articles,setArticles]=useState([])
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)
  
const toUpper = (str) => {
    let a = str[0].toUpperCase();
    let b = str.substring(1);
    return a + b;
  };
const updatenews=async() =>{    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setloading(true)
    let Fetched = await fetch(url);
    let parseData = await Fetched.json();
    setArticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)

  }
  useEffect(()=>{
    updatenews();
  // eslint-disable-next-line 
    },[])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    // this.setState({ loading: true });
    let Fetched = await fetch(url);
    let parseData = await Fetched.json();
    setArticles(articles.concat(parseData.articles))
    settotalResults(parseData.totalResults)
  };


    return (
      <>
      <Header/>
        <h2 className="text-center my-8">
          {props.category === "general"
            ? "Sports Fan Web"
            : "Sports Fan Web -Top" + " " + toUpper(props.category)}
           &nbsp;Headlines
      
        </h2>
        {loading && <Spinner/>}
        

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-2">
          <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <Newsitems
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageurl={element.urlToImage}
                      uniqueurl={element.url}
                      author={element.author ? element.author : "Anonymous"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
                  }      ;
export default News;

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  article:PropTypes.number,
  apiKey:PropTypes.string
};
