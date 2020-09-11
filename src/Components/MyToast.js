import React, {Component} from 'react';
import { Toast } from 'react-bootstrap'

export default class MyToast extends Component{
    render(){

        const toastCss={
            position : 'fixed',
            width : '300px',
            top : '150px',
            right : '40px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        };

        return (

            <div>
                <div style={this.props.children.show ? toastCss : null}>
                    <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
                        <Toast.Header className={"bg-success text-white"} closeButton={false}>
                            <strong className="mr-auto">Success</strong>
                        </Toast.Header>
                        <Toast.Body>
                            {this.props.children.message}
                        </Toast.Body>
                    </Toast>
                </div>

                <div style={this.props.children.errorFlag ? toastCss : null}>
                    <Toast className={"border border-danger bg-danger text-white"} show={this.props.children.errorFlag}>
                        <Toast.Header className={"bg-danger text-white"} closeButton={false}>
                            <strong className="mr-auto">Failed</strong>
                        </Toast.Header>
                        <Toast.Body>
                            {this.props.children.errorMessage}
                        </Toast.Body>
                    </Toast>
                </div>
            </div>
        );
    }
}   
