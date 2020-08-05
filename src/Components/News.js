import React, { Component } from 'react';
import { Card, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class News extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        const news = this.props.articles.map((article) => {
            return (
              <div key={article.id} className="col-12 col-md-5 m-1">
                <Card>
                    <Link to={`/news/${article.id}`} style={{textDecoration: 'none'}}>


                        <CardActionArea className="myCard">
                            <CardMedia className="image" component="img" height="140" image={article.image}/>
                            <CardContent>
                                <Typography gutterBottom className="card-title body" > {article.name} </Typography>
                                <Typography variant="body" color="textPrimary" component="p">
                                        {article.description}
                                </Typography>
                                <br></br>
                                <Typography variant="body" color="textSecondary" component="p">
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(article.date)))}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Link href="#">Card Link </Link> */}
                            <Button size="small" color="green" className="cardButton">En savoir plus</Button>
                        </CardActions>


                        {/* <CardImg object className="image" src={article.image} alt={article.name} />
                        <CardTitle>{article.name}</CardTitle>
                        <CardBody className="CardBody">
                            <CardText>{article.description}</CardText>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(article.date)))}</p>
                        </CardBody> */}
                    </Link>
                </Card>
              </div>
            );
        });

        return(
            <div className="container news">
                <div className="column">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Accueil</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Actualités</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Actualités</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {news}
                </div>
            </div>
        );
    }
}

export default News;