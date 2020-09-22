import React, {Component} from 'react';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MyToast from './MyToast';
import authHeader from '../services/auth-header';
import {Link} from 'react-router-dom';

export default class usersList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : []
        };
    }

    componentDidMount(){
        delete axios.defaults.headers.common["https://ait-lahcen.github.io/"];
        const API_URL = "https://orbisagroindustry.live/";
        axios.get(API_URL+"api/admin/Users",{
            headers: authHeader()
        })
        .then(response => response.data)
        .then((data) => {
            this.setState({users:data});
        });
    }

    deleteUser = (userId) => {
        delete axios.defaults.headers.common["https://ait-lahcen.github.io/"];
        const API_URL = "https://orbisagroindustry.live/";
        axios.delete(API_URL+"api/admin/Users/" + userId,{
            headers: authHeader()
        }).then(response => {
            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    users: this.state.users.filter(user => user.id !== userId)
                });
            }
            else {
                this.setState({"show":false});
            }
        });
    };

    render(){
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast show = {this.state.show} message = {"User Deleted Successfully."} type = {"danger"}/>
                </div>
                <Card className="border border-dark bg-dark text-white">
                    <Card.Header><FontAwesomeIcon icon={faList}/> La listes des utilisateurs</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Username</th>
                                    <th>Nom complet</th>
                                    <th>e-mail</th>
                                    <th>Téléphone</th>
                                    <th>mot de passe</th>
                                    <th>Roles</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="7"> utilisateur disponible.</td>
                                    </tr> :
                                    this.state.users.map((user) =>(
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.fullname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.telephone}</td>
                                            <td>{user.password}</td>
                                            {user.roles.map((role) =>(<td>{role.name}</td>))}
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={"edit/"+user.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                    <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this, user.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}