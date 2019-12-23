import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom';
import { tryLogin, setToLocalStorage, getFromLocalStorage, clearAllLocalstorageValues } from './api'
class Login extends Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.state = {
            formClassName: 'needs-validation',
            email: '',
            password: '',
            SuccessedToLogin: false
        }
        this.emailRef = React.createRef();
        this.passRef = React.createRef();

    }
    submit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            formClassName: "needs-validation was-validated",
        })
        tryLogin(this.state.email, this.state.password).then((res) => {
            if (res.status === 200) {
                this.setState({
                    SuccessedToLogin: true,
                });
                setToLocalStorage('x-token', res.data.token)
                //login simulation
                setTimeout(() => {
                    this.props.history.push(`/home`);
                }, 2000);
            }
        }).catch((e) => {
            this.setState({
                formClassName: 'needs-validation',
                email: '',
                password: ''
            })
            this.emailRef.value = ''
            this.passRef.value = ''
            clearAllLocalstorageValues();
        })
    }
    emailChange = (e) => { 
        this.setState({
            email: e.target.value
        })
    }
    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    checkrememberMe() {
        // {
        //     "email": "eve.holt@reqres.in",
        //     "password": "cityslicka"
        // }
        setToLocalStorage('email', this.state.email)
        setToLocalStorage('password', this.state.password)
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card  mx-auto mt-5 p-5 rounded">
                        <div className="row">
                            <h3 className="mr-5">Sign In</h3>
                            <NavLink  className="btn btn-outline-primary ml-5" to="/register">Sign Up</NavLink>
                        </div>
                        <hr></hr>
                        <form ref={this.formRef} onSubmit={this.submit.bind(this)} className={this.state.formClassName} noValidate>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input ref={el => this.emailRef = el} defaultValue={getFromLocalStorage('email')} onChange={this.emailChange.bind(this)} type="email" className="form-control" id="email" placeholder="Enter email" required />
                                <div className="valid-feedback">good!</div>
                                <div className="invalid-feedback">invalid-email</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input ref={el => this.passRef = el} defaultValue={getFromLocalStorage('password')} onChange={this.passwordChange.bind(this)} type="password" className="form-control" id="password" placeholder="Password" required />
                            </div>
                            <div className="form-check">
                                <input onChange={this.checkrememberMe.bind(this)} className="form-check-input" id="rememberMe" type="checkbox" />
                                <label className="form-check-label" htmlFor="rememberMe" >Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" > Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
