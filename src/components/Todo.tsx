import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slice/userSlice";

export default function Todo({ user }: { user: any }) {
  let dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <p>{user.name} </p>
      <button onClick={handelDelete}> delete</button>
    </div>
  );
}
