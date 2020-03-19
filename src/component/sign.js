import React, { Component } from 'react';


class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            email: "",
            phonenumber: "",
            error: ""
        }
    }
    handleForm = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // switch (e.target.name) {
        //     case "userName":
        //         if (e.target.value.trim() === "") {
        //             this.setState({ error: "name not be empty" })
        //         }
        //         else if (e.target.value.length > 6) {
        //             this.setState({ [e.target.name]: e.target.value, error: "" })
        //         }
        //         else {
        //             this.setState({ error: "plese enter 10 words atleast" })
        //         }
        // }
        // switch (e.target.name) {
        //     case "password":
        //         if (e.target.value.length > 9) {
        //             this.setState({ [e.target.name]: e.target.value, error: "" })
        //         }
        //         else {
        //             this.setState({ error: "please enter password length 10 charcters only" })
        //         }
        // }
        // switch (e.target.name) {
        //     case "phonenumber":
        //         if (e.target.value.length > 9) {
        //             this.setState({ [e.target.name]: e.target.value, error: "" })
        //         }
        //         else {
        //             this.setState({ error: "please enter phone number length 10 charcters only" })
        //         }
        // }
      


    }
    onSumbit = (e) => {
        e.preventDefault();
        if (!this.state.email.length || !this.state.password.length) {
            alert("fill all the details")
            return true
        } else {
            console.log("success")
        }
    }

    render() {
        return (
            <div className="container" style={{ background: 'pink' }}>
                <h1 style={{ textAlign: "center", marginTop: 35, color: 'white' }} >Sign In </h1>
                <div className="row">
                    <div className="card col-md-4 shadow mx-auto mb-3">
                        <form>
                            <p>{this.state.error}</p>
                            <div className="form-group">
                                <label>UserName</label>
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder="username"
                                    className="form-control"
                                    onChange={this.handleForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="form-control"
                                    onChange={this.handleForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    onChange={this.handleForm}

                                />
                            </div>
                            <div className="form-group">
                                <label>Phonenumber</label>
                                <input
                                    name="phonenumber"
                                    type="number"
                                    placeholder="Phonenumber"
                                    className="form-control"
                                    onChange={this.handleForm}
                                />
                            </div>
                            <button type="submit" value="submit" className="btn btn-primary btn-block" onClick={this.onSumbit} >SignUp</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default Sign
