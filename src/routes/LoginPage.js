import React from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  const handleRegister = () => {
    console.log("chang to register");
  };

  return (
    <div className="text-center">
      <p className="font-bold">login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="Bill"
          {...register("firstName", {
            required: "this is a required",
            maxLength: {
              value: 2,
              message: "Max length is 2"
            }
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          placeholder="Luo"
          {...register("lastName", {
            required: "this is required",
            minLength: {
              value: 2,
              message: "Min length is 2"
            }
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          placeholder="bluebill1049@hotmail.com"
          type="text"
          {...register("email", {
            required: "this is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address"
            }
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input type="submit" />
      </form>
      <button
        onClick={handleRegister}
        className="bg-gray-200 rounded-md p-2 m-2"
      >
        Register Account
      </button>
    </div>
  );
}
