import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      email,
      street,
      zipcode,
      city,
    }
    addUser(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onEmail = (e) => {
    setEmail(e.target.value);
  }
  const onStreet = (e) => {
    setStreet(e.target.value);
  }
  const onZipcode = (e) => {
    setZipcode(e.target.value);
  }
  const onCity = (e) => {
    setCity(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
        <Label>Email</Label>
        <Input type="text" value={email} onChange={onEmail} name="email" placeholder="abc@example.com" required></Input>
        <Label>Street</Label>
        <Input type="text" value={street} onChange={onStreet} name="street" placeholder="" required></Input>
        <Label>Zipcode</Label>
        <Input type="text" value={zipcode} onChange={onZipcode} name="zipcode" placeholder="" required></Input>
        {/* <Label>City</Label>
        <Input type="text" value={city} onChange={onCity} name="street" placeholder="" required></Input> */}
        
        <Label className ="mr-2">City</Label>
        <select className="form-select mt-3" value={city} onChange={onCity} name="city" required>City &nbsp;
        <option value="option">select City</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chennai</option>
        <option value="kolkata">Kolkata</option>
        <option value="banglore">banglore</option>
        </select>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
