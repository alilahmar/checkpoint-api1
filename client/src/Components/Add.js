import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
// import { userReducer } from "../Redux/Reducers/Users";
import { editUser, postUser } from "../Redux/Actions/Users";

const Add = () => {
  const [user, setUser] = useState({ name: "", age: "", favoriteFoods: "" });
  const userEdit = useSelector((state) => state.userReducer.user);
  console.log(userEdit);
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);

  const handleUser = () => {
    if (!edit) {
      dispatch(postUser(user));
    } else {
      dispatch(editUser(userEdit._id, user));
    }
  };

  useEffect(() => {
    edit
      ? setUser(userEdit)
      : setUser({ name: "", age: "", favoriteFoods: "" });
  }, [userEdit, edit]);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            value={user.name}
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Age</label>
          <input
            value={user.age}
            placeholder="age"
            name="age"
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Favourite food</label>
          <input
            value={user.favoriteFoods}
            placeholder="Food"
            name="favoriteFoods"
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/">
          <Button type="submit" onClick={handleUser}>
            {edit ? "edit" : "save"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
