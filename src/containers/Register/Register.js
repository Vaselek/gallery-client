import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import FormElement from "../../components/UI/FormElement/FormElement";
import {registerUser} from "../../store/actions/usersActions";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";

class Register extends Component {
    state = {
        username: '',
        password: '',
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.registerUser(formData)
    }

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    }

    render() {
        return (
            <Fragment>
                <h2>Register new user</h2>
                {this.props.error && (this.props.error.global || this.props.error.message) && (
                    <Alert color="danger" >
                        {this.props.error.global || this.props.error.message }
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement propertyName='username'
                                 title='Username'
                                 type='text'
                                 value={this.state.username}
                                 onChange={this.inputChangeHandler}
                                 error={this.getFieldError('username')}
                                 placeholder='Enter username'
                                 autoComplete='new-username'

                    />

                    <FormElement propertyName='password'
                                 title='Password'
                                 type='password'
                                 value={this.state.password}
                                 onChange={this.inputChangeHandler}
                                 error={this.getFieldError('password')}
                                 placeholder='Enter password'
                                 autoComplete='new password'

                    />

                    <FormGroup row>
                        <Col sm={{ offset: 2, size: 10 }}>
                            <Button type="submit" color="primary">Register</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <FacebookLogin/>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);