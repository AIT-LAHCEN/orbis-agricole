import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


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
                    <CardImg object className="image" src={article.image} alt={article.name} />
                    <CardImgOverlay>
                        <CardTitle>{article.name}</CardTitle>
                        <CardBody className="CardBody">
                            <CardText>{article.description}</CardText>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(article.date)))}</p>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return(
            <div className="container news">
                <div className="row">
                    {news}
                </div>
            </div>
        );
    }
}

export default News;