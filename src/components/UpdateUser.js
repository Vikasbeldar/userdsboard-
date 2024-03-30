import React, { useEffect, useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { getUserAction, updateUserAction } from '../redux/actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


const UpdateUser = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();
   
     
    const [state, setState] = useState({
    
        username: '',
        email: '',
        role: '',
       

    }
    );

    
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
       dispatch(getUserAction(id));
       console.log(getUserAction(id));

    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);

    const {username, email, role,  } = state;

    const handleTextChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
        
       
    }
    

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("Data Update Successfully"));
        dispatch(updateUserAction(state, id));
        
       history.push("/");

    }
     
    return (
        <div className="container" id="update" >
            <Card className={"border border-dark bg-dark text-white"} >
                <Card.Header><h3>Edit User</h3></Card.Header>
                <div className="form-container">
                    <Form onSubmit={handleOnSubmit}>
                        <Card.Body >
                        
                            <div className="form-group" >
                                <label>Name</label>
                                <input input pattern="[a-zA-Z]*"
                                    type="text" name="username"
                                    onChange={handleTextChange}
                                    value={username || ""}
                                    placeholder=" Please Enter UserName"
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                    onChange={handleTextChange}
                                    placeholder="Please Eenter Email"
                                    value={email || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                            <div className="form-group" >
                                <label>Role:</label>
                                <input input pattern="[a-zA-Z]*"
                                    type="text"
                                    name="role"
                                    onChange={handleTextChange}
                                    placeholder=" Please Enter Role"
                                    value={role || ""}
                                    className="form-control w-50 p-2"
                                    required
                                />
                            </div>
                           

                            <br></br>


                            <div className="form-group">
                                <button onChange={handleTextChange} className="btn btn-primary" type="submit">Edit User</button>
                                <Button id="btn" href='/' className="w-30 p-3 float-right" variant="primary" >
                                    Back
                                </Button>



                            </div>

                        </Card.Body>
                    </Form>
                </div>
            </Card >
            {/* )} */}
        </div >
    );
}


export default UpdateUser;