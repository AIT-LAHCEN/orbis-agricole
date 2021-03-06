import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import { Card } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';

const Articles = () => {

  const [articles, setArticles ] = useState([]);

  const fetchArticles = () => {
    delete axios.defaults.headers.common["https://ait-lahcen.github.io/"];
        const API_URL = "https://orbisagroindustry.live/";
    axios.get(API_URL+"api/v1/article").then(res => {
      // console.log(Object.values(res.data));
      setArticles(res.data.filter((article) => article.theme === 'gestion'));
    });
  }

      
  useEffect(() => {
    fetchArticles();
  }, []);

  return articles.map((article, index) => {
    return (
      <div key={article.id} className="col-12 col-md-5 m-1">
      <FadeTransform in
          transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
          <Card>
              <Link to={`/news/${article.id}`} style={{textDecoration: 'none'}}>
                  <CardActionArea className="myCard">
                      {article.id ? <CardMedia className="image" component="img" height="140" image={`/api/v1/article/${article.id}/image/download`} alt={article.title}/> : null }
                      <CardContent>
                          <Typography gutterBottom className="card-title body" noWrap> {article.title} </Typography>
                          <Typography variant="subtitle1" size="small" color="secondary" noWrap>{article.theme}</Typography>
                          <Typography variant="body1" color="textPrimary" component="p" noWrap>
                                  {article.description}
                          </Typography>
                          <br></br>
                          <Typography variant="body1" color="textSecondary" component="p">
                                  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse("2020-10-16T17:57:28.556094Z")))}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      {/* <Link href="#">Card Link </Link> */}
                      <Button size="small" color="default" className="cardButton">En savoir plus</Button>
                  </CardActions>
              </Link>
          </Card>
      </FadeTransform>
  </div>
    )
  })
};

export default class DownloadArticles extends Component {
    render(){
        return(
          <div className="container news">
                <div className="row d-flex justify-content-center">
                <Articles/>
                </div>
          </div>  
        );
    }
}