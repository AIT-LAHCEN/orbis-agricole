import React, {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import authHeader from '../services/auth-header';
import axios from 'axios';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.userChange = this.userChange.bind(this);
        this.submituser = this.submituser.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
    }
    initialState = {
        id:'', username:'', fullname:'', email:'', telephone:'', password:'', roles:[]
    };

    componentDidMount() {
        const userId = +this.props.match.params.id;
        if(userId) {
            this.finduserById(userId);
        }
    }

    finduserById = (userId) => {
        axios.get("/api/admin/Users/" + userId, {
            headers: authHeader() 
            }
        )
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        id: response.data.id,
                        username: response.data.username,
                        fullname: response.data.fullname,
                        email: response.data.email,
                        telephone: response.data.telephone,
                        password: response.data.password,
                        roles: response.data.roles
                    });
                }
            }).catch((error) => {
                console.error("Error - "+error);
            });
    };

    resetuser = () => {
        this.setState(() => this.initialState);
    };

    submituser = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            fullname: this.state.fullname,
            email: this.state.email,
            telephone: this.state.telephone,
            password: this.state.password,
            roles: this.state.roles
        };

        axios.post("/api/admin/Users", user)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"post"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                } else {
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);
    };

    updateuser = event => {
        event.preventDefault();

        const user = {
            id: this.state.id,
            username: this.state.username,
            fullname: this.state.fullname,
            email: this.state.email,
            telephone: this.state.telephone,
            password: this.state.password,
            roles: this.state.roles
        };

        axios.put(`/api/admin/Users/${this.state.id}`, user,{
            headers : authHeader()
        }).then(response => {
                if(response.data != null) {
                    this.setState({"show":true, "method":"put"});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);
    };

    userChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    onChangeRole(e) {
            const role= e.target.value;
            let updatedObj = Object.assign({}, this.state.roles[0],{name: role});
                
        this.setState(prevState => ({
            roles: [...prevState.roles, updatedObj]
        }))
                  
    }
    userList = () => {
        return this.props.history.push("/admin/users");
    };

    render() {
        const {username, fullname, email, telephone, password, roles} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show = {this.state.show} message = {this.state.method === "put" ? "user Updated Successfully." : "user Saved Successfully."} type = {"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                    <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update user" : "Add New user"}
                    </Card.Header>
                    <Form onReset={this.resetuser} onSubmit={this.state.id ? this.updateuser : this.submituser} id="userFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridusername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="username"
                                        value={username} onChange={this.userChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user username" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridfullname">
                                    <Form.Label>Nom complet</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="fullname"
                                        value={fullname} onChange={this.userChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user fullname" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridemail">
                                    <Form.Label>e-mail</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="email"
                                        value={email} onChange={this.userChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridtelephone">
                                    <Form.Label>Téléphone</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="telephone"
                                        value={telephone} onChange={this.userChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user phone number" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridpassword">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="password"
                                        value={password} onChange={this.userChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user password" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridroles">
                                    <Form.Label>Roles</Form.Label>
                                    {/* <Form.Control required autoComplete="off"
                                        type="test" name="roles"
                                        onChange={this.onChangeRole}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter user roles" /> */}
                                        <Form.Control as="select" required autoComplete="off"
                                            className="bg-dark text-white"
                                            name="roles"
                                            // value={JSON.stringify(roles).slice(17, JSON.stringify(roles).length-3)}
                                            // value={roles && roles.map((role, index) => <li key={index}>{role}</li>)}
                                            onChange={this.onChangeRole}>
                                                {roles.map((r , i) =>
                                                    <option
                                                    
                                                    value={r.name}>
                                                    {r.name}
                                                    </option>
                                                )}   
                                                <option value="ROLE_USER">ROLE_USER</option>
                                                <option value="ROLE_MODERATOR">ROLE_MODERATOR</option>   
                                                <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                                        </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                            </Button>{' '}
                            {/* <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '} */}
                            <Button size="sm" variant="info" type="button" onClick={this.userList.bind()}>
                                <FontAwesomeIcon icon={faList} /> user List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }
} 