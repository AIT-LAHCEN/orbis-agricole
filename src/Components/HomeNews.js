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
import Loader from 'react-loader-spinner';

const Articles = () => {

  

  const [articles, setArticles ] = useState([]);

  const fetchArticles = () => {
    axios.get("http://localhost:8080/api/v1/article").then(res => {
      // console.log(Object.values(res.data));
      setArticles(res.data.filter((article) => article.published));
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
                      {article.id ? <CardMedia className="image" component="img" height="140" image={`http://localhost:8080/api/v1/article/${article.id}/image/download`} alt={article.title}/> : null }
                      <CardContent>
                          <Typography gutterBottom className="card-title body" noWrap> {article.title} </Typography>
                          <Typography variant="subtitle1" size="small" color="secondary" noWrap>{article.theme}</Typography>
                          <Typography variant="body1" color="textPrimary" component="p" noWrap>
                                  {article.description}
                          </Typography>
                          <br></br>
                          <Typography variant="body1" color="textSecondary" component="p">
                                  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(article.date)))}
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

export default class News extends Component {
    render(){
        return(
          <div className="container news">
                <div className="row d-flex justify-content-center">
                <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={50}
                            width={50}
                            timeout={1500} //3 secs
                    
                        />
                <Articles />
                </div>
          </div>  
        );
    }
}