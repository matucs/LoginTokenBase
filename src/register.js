import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card mx-auto mt-5 p-5 rounded">
                        <div className="mb-3">
                            <h3>register</h3>
                            <hr></hr>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="userName" >Enter your name</label>
                                <input id="userName" type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" >Email</label>
                                <input id="email" type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" >Password</label>
                                <input id="password" type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Confirmpassword" >Confirm password</label>
                                <input id="Confirmpassword" type="password" className="form-control" placeholder="Confirm your password" />
                            </div>
                            <button className="btn btn-primary mr-3" type="submit">Submit</button>
                            <Link to="/login" className="btn btn-secondary" type="button">Cancel</Link>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Register
