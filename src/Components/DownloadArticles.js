import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

const Articles = () => {

  const [articles, setArticles ] = useState([]);

  const fetchArticles = () => {
    axios.get("http://localhost:8080/api/v1/article").then(res => {
      console.log(res);
      setArticles(res.data);
    });
    axios.get("http://localhost:8080/api/v1/article/24/image/download").then(res => {
      console.log("tesswira: ",res);
    });
  }

      
  useEffect(() => {
    fetchArticles();
  }, []);

  return articles.map((article, index) => {
    return (
      <div key={index} className="padd">
        {article.id ? <img src={`http://localhost:8080/api/v1/article/${article.id}/image/download`} alt={article.title}/> : null }
        <br/>
        <br/>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <br/>
      </div>
    )
  })
};

export default class DownloadArticles extends Component {
    render(){
        return(
            <Articles/>
        );
    }
}