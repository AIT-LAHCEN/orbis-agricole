import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';


function RenderArticle({article}) {
    var str1 = "../";
    var str2 = article.image;
    var res = str1.concat(str2);
    return(
        <div className="col-12 col-md-5 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src= {res} alt={article.name} />
                    <CardBody>
                        <CardTitle>{article.name}</CardTitle>
                        <CardText>{article.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

const Articledetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/news'>Actualités</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.article.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.article.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <RenderArticle article={props.article} />
            </div>
        </div>
    );
}

export default Articledetail;