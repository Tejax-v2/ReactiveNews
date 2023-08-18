import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    this.state = {
  articles: [],
  loading: false,
  page: 1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30d54d523dee4c06a764ec4cce165a1c";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  handlePrevClick = ()=>{
    console.log("Previous");
  }

  handleNextClick = ()=>{
    console.log("Next");
  }


  render() {
    return (
      <div className="container my-3">
        <h2>ReactiveNews - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div key={element.url} className="col-md-4">
          <NewsItem  title={element.title?element.title.slice(0,45):element.title} description={element.description?element.description.slice(0,88):element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
      
        </div>
        <div className="container d-flex justify-content-between">
        <button className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    );
  }
}

export default News;
