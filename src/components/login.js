import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
class Login extends Component {
  render(){
    return(
      <div class="container text-center">
        <form class="my-form" method="POST" action="">
          <div class="form.group">
          <label for="username">Username</label>
          <input type="text" name="username" class="form-control" id="username" placeholder="Username">
          </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" id="password" placeholder="Password"> 
            <p><input type="submit" class="btn btn-primary" value="Login" ></p>
          </div>
        </form>
    </div>)
  }
}
export default Login