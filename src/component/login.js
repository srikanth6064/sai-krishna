import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  onhandle = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSumbit = (e) => {
    e.preventDefault();
    if (!this.state.email.length || !this.state.password.length) {
      alert("fill all the details")
      return true
  } else if(this.state.password.length>10){
     alert('password length will be long')
  }else{
    console.log('success')
  }
  const userdata={
    email:this.state.email,
    password:this.state.password
  }
  axios.post("https://react-redux1-2cfe9.firebaseio.com/userdata.json",userdata)
  .then(res=>res.data)
  .catch(err=>console.log(err))
  this.props.history.push("/table")
  } 
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="card col-sm-4 shadow mx-auto my-5 px-5" >
            <div style={{ textAlign: 'center', fontSize: 60 }}>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>

            <p style={{ textAlign: 'center', fontSize: 50 }}>Login</p>
            <form>
              <div className="input-group mt-3 ">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="email"
                  onChange={this.onhandle}
                  required
                />
              </div>
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" ><i className="fa fa-lock" aria-hidden="true"></i></span>
                </div>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={this.onhandle}
                  required
                />
              </div>
              <div className="form-check mt-3 ml-2">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <span style={{ fontSize: 13 }}>Remember me</span>
                <span style={{ position: 'relative', left: 145, fontSize: 13 }}>Forgot Password</span>
              </div>
              <div>
                <button type="sumbit" className="btn btn-info btn-block my-4" onClick={this.handleSumbit} >Login</button>
                <button type="sumbit" className="btn btn-info btn-block my-4" onClick={this.handleSumbit} >signUp</button>
              </div>

            </form>
          </div>
        </div>

      </div>
    );
  }
}
export default Login
