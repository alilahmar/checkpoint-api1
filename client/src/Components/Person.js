import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { toggleTrue } from "../Redux/Actions/Edit";
import { deleteUser, getUser } from "../Redux/Actions/Users";

const Person = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Card className="card">
      .
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <strong>{user.age}</strong> years old
        </Card.Meta>
        <Card.Description>
          The favourite food is <strong>{user.favoriteFoods}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/edit/${user._id}`}>
            <Button
              inverted
              color="green"
              onClick={() => {
                dispatch(getUser(user._id));
                dispatch(toggleTrue());
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            inverted
            color="red"
            onClick={() => dispatch(deleteUser(user._id))}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default Person;
