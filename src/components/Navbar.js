import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import { Form, FormControl, Button} from 'react-bootstrap'

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;	//	<-- UPDATE HERE
    return (
      <nav className="navbar">
            <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {
          isLoggedin ?
          (<>
            <p className="navbar-user">username: {user.username}</p>	
            {/* <button className="navbar-button" onClick={logout}>Logout</button> */}
            <Button variant="warning" onClick={logout}>Logout</Button>
          </>) 
         : 
          (<>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(Navbar);

