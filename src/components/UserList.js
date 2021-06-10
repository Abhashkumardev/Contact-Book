import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <ListGroupItem className="d-flex" key={user.id}>
              <div className="d-flex flex-column">
              <p><strong>Name -&nbsp;</strong>{user.name}</p>
              <p><strong>Email -&nbsp;</strong>{user.email}</p>
              <p><strong>Street -&nbsp;</strong>{user.street}</p>
              <p><strong>Zipcode -&nbsp;</strong>{user.zipcode}</p>
              <p><strong>City -&nbsp;</strong>{user.city}</p>
              </div>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">Nothing to show...</h4>
        )}
    </ListGroup>
  )
}
