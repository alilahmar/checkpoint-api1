import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Actions/Users";
import User from "./Person";

const PeopleList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const loadUsers = useSelector((state) => state.userReducer.loadUsers);
  console.log(users, loadUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadUsers ? (
        <h3>Loading</h3>
      ) : (
        users.map((el) => <User key={el._id} user={el} />)
      )}
    </div>
  );
};

export default PeopleList;
