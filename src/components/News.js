import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsDonkey- Top Headlines</h2>
        <NewsItem title="my titls" description="my desc" />
        <NewsItem title="my titls" description="my desc" />
        <NewsItem title="my titls" description="my desc" />
        <NewsItem title="my titls" description="my desc" />
        <NewsItem title="my titls" description="my desc" />
        <NewsItem title="my titls" description="my desc" />
      </div>
    );
  }
}

export default News;
