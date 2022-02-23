import React from "react";
import { useForm } from "react-hook-form";

const EditYo = (props) => {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    data.id = props.currentUser.id;
    console.log(data);
    props.updateUser(props.currentUser.id, data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        {...register("name", {
          required: true,
        })}
      />
      {errors.name?.type === "required" && (
        <span className="text-danger text-small d-block mb-2">
          Campo obligatorio
        </span>
      )}
      <label>Username</label>
      <input
        {...register("username", {
          required: true,
        })}
      />
      {errors.username?.type === "required" && (
        <span className="text-danger text-small d-block mb-2">
          Campo obligatorio
        </span>
      )}
      <button className="btn btn-primary" type="submit">
        Edit user
      </button>
    </form>
  );
};

export default EditYo;
