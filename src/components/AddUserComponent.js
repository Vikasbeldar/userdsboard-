import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { addUserAction } from '../redux/actions/creators';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

class AddUser extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }
    state = {
        username: '',
        email: '',
        role: '',
        
       
       
            
      
    }
    

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ ...this.state, [name]: value });
       
        console.log(this.state);
        
    }

    
        handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addUserAction(this.state);
        
        
         this.props.history.push("/");
        const { username, email, role } = this.state;
        let errors = {};
    
        if (username.trim() === '') {
            errors = 'Username is required';
          } else if (username.length < 3) {
            errors = 'Username must be at least 3 characters long';
          } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            errors = 'Username can only contain letters and numbers';
          }
        if (email.trim() === '') {
          errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
          errors.email = 'Email is invalid';
        }
        if (role.trim() === '') {
            errors.username = 'role is required';
          }
       
        if (Object.keys(errors).length === 0) {
          // Form submission logic goes here
          console.log('Form submitted:', this.state);
          
          // Reset form fields
          this.setState({
            username: '',
            email: '',
            role:'',
            
          });
        } else {
          // Update error state if there are errors
          this.setState({ errors });
        }
        
        alert('Data submitted successfully!');
        
    }


    render() {
        const {  errors } = this.state;
        return (
            <div className="container" id="update" >
                <Card className={"border border-dark bg-dark text-white"} >
                    <Card.Header><h3>Add User</h3></Card.Header>
                    <div className="form-container">
                        <Form onSubmit={this.handleOnSubmit}>
                            <Card.Body >
                                <div className="form-group" >
                                    <label>username</label>
                                    <input input pattern="[a-zA-Z]*"
                                        type="text" name="username"
                                        onChange={this.handleTextChange}
                                        placeholder=" Please Enter UserName"
                                        value={this.state.username}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                    
                                </div>
                                <div className="form-group" >
                                    <label>Email address</label>
                                    <input
                                    
                                        type="text" name="email"
                                        onChange={this.handleTextChange}
                                        placeholder=" Please Enter Email"
                                        value={this.state.email}
                                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                        className="form-control w-50 p-2"
                                        
                                    />
                                    
                                </div>
                                <div className="form-group" >
                                    <label>Role</label>
                                    <input input pattern="[a-zA-Z]*"
                                        type="text" name="role"
                                        onChange={this.handleTextChange}
                                        placeholder=" Please Enter Role"
                                        value={this.state.role}
                                        className="form-control w-50 p-2"
                                        required
                                    />
                                </div>
                               

                                <br></br>


                                <div className="form-group">
                                    <button  href='/' className="btn btn-primary" type="submit">Add User</button>
                                    <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                        Back
                                    </Button>



                                </div>

                            </Card.Body>
                        </Form>
                    </div>
                </Card>

            </div >
        );
    }

}
export default connect(null, { addUserAction })(AddUser);