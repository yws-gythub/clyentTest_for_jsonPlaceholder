import React from "react";
import { useForm } from "react-hook-form";

export default function SignIn({ history }) {
  let storedId = localStorage.getItem("storedId");

  const { register, handleSubmit, watch, errors, setValue, getValues } = useForm({
    defaultValues: {
      checkStore: storedId.length > 0,
    },
  });

  const onSubmit = (data) => {
    history.push("/project");
  };

  const onCheck_saveId = (e) => {
    let id = e.target.checked ? getValues("id") : "";
    localStorage.setItem("storedId", id);
  };

  return (
    <div>
      <h1>Sign in.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        ID
        <input name="id" type="text" defaultValue={storedId} ref={register({ required: true })} />
        <br />
        <br />
        <br />
        Password
        <input name="password" type="password" ref={register({ required: true })} />
        <br />
        <br />
        <input name="checkStore" type="checkbox" onChange={onCheck_saveId} ref={register} /> id 저장.
        <br />
        <input type="submit" />
        <br />
        <br />
        {errors.id && "ID is required"}
        {errors.password && "Passowrd is required"}
      </form>
    </div>
  );
}
