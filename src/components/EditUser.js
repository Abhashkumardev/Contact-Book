import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
  })
  
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
 

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
        <Label>Email</Label>
        <Input type="text" value={selectedUser.email} onChange={onChange} name="email" placeholder="Enter user" required></Input>
        <Label>Street</Label>
        <Input type="text" value={selectedUser.street} onChange={onChange} name="street" placeholder="Enter user" required></Input>
        <Label>Zipcode</Label>
        <Input type="text" value={selectedUser.zipcode} onChange={onChange} name="zipcode" placeholder="Enter user" required></Input>
        {/* <Label>City</Label>
        <Input type="text" value={selectedUser.city} onChange={onChange} name="city" placeholder="Enter user" required></Input> */}

        <Label className ="mr-2">City</Label>
        <select className="form-select mt-3 " value={selectedUser.city} onChange={onChange} name="city" required>City &nbsp;
        <option value="option">select City</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
        <option value="kolkata">Kolkata</option>
        <option value="banglore">banglore</option>
        </select>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
