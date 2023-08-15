import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>ReactiveNews - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" imageUrl="https://akns-images.eonline.com/eol_images/Entire_Site/2023212/rs_1200x1200-230312162858-1200-zooey-deschanel-jonathan-scott-GettyImages-1473069313.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Cricket" description="Minister bites a dog" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
