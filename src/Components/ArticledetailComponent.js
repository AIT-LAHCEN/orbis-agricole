import React from "react";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';


function RenderArticle({article}) {
    var str1 = "../";
    var str2 = article.image;
    var res = str1.concat(str2);
    return(
        <div key={article.id} className="col-12 mt-5">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Media tag="li">
                  <Media left middle>
                      <Media object style={{width : '30em' }} src={res} alt={article.titre} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{article.titre}</Media>
                    <p>{article.contenu}</p>
                  </Media>
                </Media>
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
                    <BreadcrumbItem active>{props.article.titre}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.article.titre}</h3>
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