import React from "react";
// import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Sorry, your full name is required"),
    Email: yup.string().email().required("Sorry, your email is required"),
    Age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .max(20)
      .required("Sorry, your age is required"),
    Password: yup
      .string()
      .min(4)
      .max(12)
      .required("Sorry, your password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match")
      .required("Sorry, kindly confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log("example");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="example"
        // defaultValue="test"
        type="text"
        placeholder="Full Name..."
        {...register("fullName")}
      />
      {errors.fullName?.message}
      <input
        name="example"
        // defaultValue="test"
        type="text"
        placeholder="Email..."
        {...register("Email")}
      />
      {errors.Email?.message}
      <input
        name="example"
        // defaultValue="test"
        type="number"
        placeholder="Age..."
        {...register("Age")}
      />
      {errors.Age?.message}
      <input
        name="example"
        // defaultValue="test"
        type="password"
        placeholder="Password..."
        {...register("Password")}
      />
      {errors.Password?.message}
      <input
        name="exampleRequired"
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message}
      <input type="submit" />
    </form>
  );
};
export default Form;
