import React , { Component } from 'react';
// import Header from './Header';
// import Accueil from './Accueil';
import News from './News';
import Articledetail from './ArticledetailComponent';
import Footer from './Footer';
import Meteo from './Meteo';
import Gestion from './Gestion';
import Materiels from './Materiels';
import Cours_Marches from './Marche_Stats';
import Cultures from './Cultures';
import Elevage from './Elevage';
import Register from './Inscription';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Login from './login';
import Home from "./home.component";
import Profile from "./profile.component";
import BoardUser from "./board-user.component";
import BoardModerator from "./board-moderator.component";
import BoardAdmin from "./board-admin.component";
import AuthService from "../services/auth.service";
import { Nav, Navbar, Form, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faTractor, faPaw, faSeedling, faFileAlt, faNewspaper, faChartLine, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}


class Main extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {

    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    // const ArticleWithId = ({match}) => {
    //   return(
    //     <Articledetail article={this.props.articles.filter((article) => article.id === parseInt(match.params.articleId,10))[0]} />
    //   );
    // }

    return(
      <div className="navigation">
        <Navbar variant="dark" expand="lg" className="border-bottom border-light mynavbar1">
          <Link to ={'/'} className="thisA"><img className="titleImg" src='/orbis-agricole/images/orbislogo.jpg' alt="Logo"/></Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item marg">
              <Link to={"/home"} className="nav-link">
                Accueil
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item marg">
                <Link to={"/mod"} className="nav-link">
                  Espace Moderateur
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item marg">
                <Link to={"/admin"} className="nav-link">
                  Espace Admin
                </Link>
              </li>
            )}

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto padd2">
              <Form inline >
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    <a href="nothing">
                                    <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                            </InputGroup>
                        </Form>
              <li className="nav-item marg">
                <Link to={"/profile"} className="nav-link">
                  Bienvenue, {currentUser.username}
                </Link>
              </li>
              <li className="nav-item marg">
                <Link to={"/login"} className="nav-link" onClick={this.logOut}>
                  Se_déconnecter
                </Link>
              </li>
              {/* <li className="nav-item marg">
                <a href="/orbis-agricole/#/login" className="nav-link" onClick={this.logOut}>
                  Se déconnecter
                </a>
              </li> */}
            </div>
          ) : (
            <div className="navbar-nav ml-auto padd2">
              <Form inline >
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    <a href="nothing">
                                    <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                            </InputGroup>
                        </Form>
              <li className="nav-item marg">
                <Link to={"/login"} className="nav-link">
                  Se Connecter
                </Link>
              </li>

              <li className="nav-item marg">
                <Link to={"/signup"} className="nav-link">
                  S'inscrire
                </Link>
              </li>
            </div>
          )}
        </Navbar>
        <Navbar variant="dark" expand="lg" className="border-bottom border-light items mynavbar2" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link border-right border-left non-active-pill" activeClassName="pill" to='/news'><FontAwesomeIcon icon={faNewspaper} /> ACTUALITÉS</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/meteo'><FontAwesomeIcon icon={faThermometerThreeQuarters} /> MÉTÉO</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/cours_marches'><FontAwesomeIcon icon={faChartLine} /> COURS ET MARCHÉS</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/cultures"><FontAwesomeIcon icon={faSeedling} /> CULTURES</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/elevage"><FontAwesomeIcon icon={faPaw} /> ÉLVEAGE</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/materiels"><FontAwesomeIcon icon={faTractor} /> TRACTEURS ET MATÉRIELS</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/gestion'><FontAwesomeIcon icon={faFileAlt} /> GESTION ET DROIT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                  <Route path='/meteo' component={Meteo} />
                  <Route path='/gestion' component={Gestion} />
                  <Route path='/materiels' component={Materiels} />
                  <Route path='/cultures' component={Cultures} />
                  <Route path='/cours_marches' component={Cours_Marches} />
                  <Route path='/elevage' component={Elevage} />
                  <Route path='/signup' component={Register} />
                  <Route path='/login' component={Login} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/user" component={BoardUser} />
                  <Route path="/mod" component={BoardModerator} />
                  <Route path="/admin" component={BoardAdmin} />
                  <Route exact path='/news' component={() => <News articles={this.props.articles}/>} />
                  <Route path='/news/:id' component={Articledetail} />
                  <Route exact path='/home' component={Home} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer/>
        </div>
      
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));