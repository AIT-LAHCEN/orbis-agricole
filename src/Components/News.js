import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
                        <CardImg object className="image" src={article.image} alt={article.name} />
                        <CardTitle>{article.name}</CardTitle>
                        <CardBody className="CardBody">
                            <CardText>{article.description}</CardText>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(article.date)))}</p>
                        </CardBody>
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